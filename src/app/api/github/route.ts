import { NextResponse } from "next/server";

const GH_USER = "KamrulSarwar23";
const REVALIDATE_SECONDS = 3600;

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(process.env.GITHUB_TOKEN
    ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
    : {}),
};

type Repo = {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  size: number;
  fork: boolean;
};

export const revalidate = 3600;

export async function GET() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GH_USER}`, {
        headers,
        next: { revalidate: REVALIDATE_SECONDS },
      }),
      fetch(
        `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`,
        { headers, next: { revalidate: REVALIDATE_SECONDS } }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json(
        { error: `GitHub API ${userRes.status}/${reposRes.status}` },
        { status: 502 }
      );
    }

    const user = await userRes.json();
    const repos: Repo[] = await reposRes.json();
    const own = repos.filter((r) => !r.fork);

    const totalStars = own.reduce((s, r) => s + r.stargazers_count, 0);
    const totalForks = own.reduce((s, r) => s + r.forks_count, 0);

    const langMap: Record<string, number> = {};
    for (const r of own) {
      if (!r.language) continue;
      langMap[r.language] = (langMap[r.language] || 0) + (r.size || 1);
    }
    const sorted = Object.entries(langMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 6);
    const langTotal = sorted.reduce((s, [, v]) => s + v, 0) || 1;
    const languages = sorted.map(([name, v]) => ({
      name,
      pct: +((v / langTotal) * 100).toFixed(1),
    }));

    return NextResponse.json({
      user: {
        login: user.login,
        name: user.name,
        avatar_url: user.avatar_url,
        bio: user.bio,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
      },
      stats: { totalStars, totalForks, ownRepos: own.length },
      languages,
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "fetch failed" },
      { status: 500 }
    );
  }
}
