export type BlogNode =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "code"; lang?: string; code: string }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // YYYY-MM-DD
  readingTime: string;
  tags: string[];
  body: BlogNode[];
};

export const posts: BlogPost[] = [
  {
    slug: "ai-revolution-in-web-development",
    title: "The AI Revolution in Web Development: What Actually Changed",
    excerpt:
      "Past hype cycles came and went without changing my day-to-day. This one is different. Here's a grounded look at what AI changed in shipping web apps — from a developer who builds them.",
    date: "2026-04-22",
    readingTime: "6 min read",
    tags: ["AI", "Web Development", "Productivity"],
    body: [
      {
        type: "p",
        text: "Every few years a technology shows up promising to change how we build software. Most don't. The honest truth about the AI wave is that, unlike Web3 or low-code before it, it has actually changed how I work — measurably, every day. But the change isn't quite what the marketing says it is.",
      },
      {
        type: "h2",
        text: "What changed for the developer",
      },
      {
        type: "p",
        text: "The biggest shift isn't that AI writes code for me. It's that the cost of context-switching dropped to almost zero. I can ask, in plain English, why a piece of code does something — and get a useful answer in seconds. Reading an unfamiliar codebase used to be the slowest part of joining a project. Now it takes a fraction of the time.",
      },
      {
        type: "p",
        text: "The second shift is in boilerplate. Forms, validation rules, CRUD scaffolds, test harnesses — the kind of code that used to take a long afternoon now takes ten minutes. That afternoon is freed up for the work that still requires a human: deciding what to build, how it should feel, and how to make it reliable when 10,000 people use it at once.",
      },
      {
        type: "h2",
        text: "What changed for the product",
      },
      {
        type: "p",
        text: "The other half of the story is the product itself. AI used to be something you read about in a research paper. Now it's a feature your client expects. \"Can it summarize this?\" \"Can it answer questions about my data?\" \"Can it write a draft for me?\" These were not questions five years ago. They are now table-stakes.",
      },
      {
        type: "ul",
        items: [
          "E-commerce shops want product description generators and smart search.",
          "Internal dashboards want natural-language queries instead of filter dropdowns.",
          "Content sites want chat assistants that know their docs.",
          "Support flows want triage agents that draft replies before a human reviews.",
        ],
      },
      {
        type: "p",
        text: "Each of these used to require a small ML team. Today, with the OpenAI, Anthropic, or Gemini APIs, a single full-stack developer can ship a working version in a week. That changes who can build what.",
      },
      {
        type: "h2",
        text: "What didn't change",
      },
      {
        type: "p",
        text: "The hype tells you AI does everything. The reality is more sober. AI is fast at producing plausible code; it is much slower at producing correct code in a complex codebase. It will confidently invent APIs that don't exist. It will cheerfully refactor code in ways that subtly break a feature you didn't ask it to touch. It does not know the constraints of your business unless you tell it.",
      },
      {
        type: "quote",
        text: "AI raises the floor of what an average developer can do; it does not raise the ceiling of what a careful developer must still verify.",
      },
      {
        type: "p",
        text: "The discipline of reading code, writing tests, thinking about edge cases, and understanding the system you are changing — none of that goes away. If anything, it matters more now, because the speed at which code lands has gone up.",
      },
      {
        type: "h2",
        text: "Where this is headed",
      },
      {
        type: "p",
        text: "I think the next 18 months are about agents that don't just answer questions but actually do work — open a PR, run the tests, fix the failures, and ask for review. We are already most of the way there with tools like Claude Code and Cursor. The skill that will matter is not prompt engineering. It is taste — knowing what to ask for, recognizing a good answer when you see one, and rejecting the bad ones quickly.",
      },
      {
        type: "p",
        text: "That has always been the job. The tools are just getting better.",
      },
    ],
  },
  {
    slug: "modern-programming-with-ai",
    title: "Modern Programming with AI: A Pragmatic Workflow",
    excerpt:
      "How I actually use Claude Code, Cursor, and friends day-to-day — not the demo, the workflow. What works, what doesn't, and the rules I've learned the hard way.",
    date: "2026-03-14",
    readingTime: "7 min read",
    tags: ["AI", "Productivity", "Workflow"],
    body: [
      {
        type: "p",
        text: "There's no shortage of AI coding demos online. Most of them show a clean greenfield project, a clear prompt, and a polished result. Real codebases are messy, prompts are vague, and the result is often almost-right. After more than a year of using AI assistants on real client work, here is the workflow that actually holds up.",
      },
      {
        type: "h2",
        text: "Rule 1: Treat the AI like a junior pair, not an oracle",
      },
      {
        type: "p",
        text: "When I pair-program with a junior developer, I don't expect the first attempt to be production-ready. I expect a reasonable draft that I can review, push back on, and iterate. AI assistants behave the same way. If you treat their output as gospel, you ship bugs. If you treat it as a starting point, you ship faster.",
      },
      {
        type: "h2",
        text: "Rule 2: Give it the context it actually needs",
      },
      {
        type: "p",
        text: "The biggest difference between a good AI session and a bad one is how much context the model has. \"Add a CSV export button\" produces generic code. \"Add a CSV export button to the orders page; the data shape is in OrderResource.php; we already have a download helper at app/Http/Helpers/Csv.php\" produces code that fits the codebase. The extra ten seconds of context save thirty minutes of cleanup.",
      },
      {
        type: "h2",
        text: "Rule 3: Bound the scope",
      },
      {
        type: "p",
        text: "Asking the model to \"refactor the auth system\" is asking for trouble. Asking it to \"extract the password-reset email into a Mailable class without changing the controller signature\" gives it a tight target. The smaller the surface area, the more reliable the change.",
      },
      {
        type: "ul",
        items: [
          "One file at a time when possible.",
          "Tell it what NOT to change as explicitly as what to change.",
          "Run the tests after every meaningful step. If there are no tests, write one before you let it loose.",
        ],
      },
      {
        type: "h2",
        text: "Rule 4: Know what it's bad at",
      },
      {
        type: "p",
        text: "AI is fast at things it has seen a thousand variations of: CRUD endpoints, form validation, basic UI components, common refactors. It is much weaker on:",
      },
      {
        type: "ul",
        items: [
          "Performance work — it can suggest indexes and caches, but it doesn't see your query plans.",
          "Domain-specific business rules that aren't in the codebase.",
          "Code that depends on a recent library version it hasn't seen yet.",
          "Anything where the right answer is \"don't build this.\"",
        ],
      },
      {
        type: "h2",
        text: "Rule 5: Read the diff",
      },
      {
        type: "p",
        text: "The single highest-leverage habit I've developed is to read every diff before I accept it. Not skim — read. AI tools will sometimes \"fix\" a problem by deleting the broken code instead of fixing it. They will rename functions you've called from elsewhere. They will introduce a perfectly fine implementation that happens to break a contract another module relies on. None of this is malicious, and all of it is preventable with thirty seconds of attention.",
      },
      {
        type: "quote",
        text: "Speed without review is debt.",
      },
      {
        type: "h2",
        text: "What this looks like in a real day",
      },
      {
        type: "p",
        text: "On a typical day shipping a feature for a Laravel + React app, I might use AI for the migration draft, the resource controller scaffold, the React component skeleton, and the test boilerplate. I write the business logic and validation rules myself, because that's where the bugs live. I review every change. The result is probably 30–40% faster than working alone, with the same defect rate. That is the honest gain — not 10x, but real.",
      },
      {
        type: "p",
        text: "The developers who get the most out of these tools aren't the ones with the cleverest prompts. They are the ones who have a clear mental model of what they're building, who know their codebase well, and who can recognize a good answer in three seconds. Those skills don't come from AI. They come from doing the work.",
      },
    ],
  },
  {
    slug: "adding-llms-to-existing-apps",
    title: "From REST to RAG: Adding LLM Features to Existing Apps",
    excerpt:
      "A practical guide to bolting AI features onto a Laravel or Next.js app without rewriting the world. Start small, ship fast, learn what your users actually use.",
    date: "2026-02-08",
    readingTime: "8 min read",
    tags: ["AI", "Laravel", "Next.js", "RAG"],
    body: [
      {
        type: "p",
        text: "The most common AI question I hear from clients isn't \"can you build me an AI startup?\" It's \"can you add an AI feature to the app I already have?\" Good news: usually yes, and usually for less effort than they expect. Here's how I approach it.",
      },
      {
        type: "h2",
        text: "Step 1: Pick a feature, not a technology",
      },
      {
        type: "p",
        text: "Don't start with \"we should use OpenAI.\" Start with a real problem in the existing app: support tickets pile up because triage is slow, product descriptions are inconsistent, search returns the wrong results. Then ask whether an LLM is the right tool. Sometimes it is. Sometimes a better filter would do.",
      },
      {
        type: "h2",
        text: "Step 2: Wire up the simplest possible call",
      },
      {
        type: "p",
        text: "For a Laravel app, this is one Service class with a single method. For Next.js, it's a route handler. The first version should not be smart. It should just prove that you can call the model from your server, log the prompt and response, and return a result.",
      },
      {
        type: "code",
        lang: "ts",
        code: `// app/api/ai/route.ts (Next.js)
import Anthropic from "@anthropic-ai/sdk";
const client = new Anthropic();

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const msg = await client.messages.create({
    model: "claude-opus-4-7",
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
  });
  return Response.json({ text: msg.content[0] });
}`,
      },
      {
        type: "p",
        text: "Once that works end-to-end with one user, you have something to iterate on. Don't add streaming, caching, or fallbacks until you've shipped the dumb version and watched it run.",
      },
      {
        type: "h2",
        text: "Step 3: Add retrieval when (and only when) you need it",
      },
      {
        type: "p",
        text: "Plain LLM calls are great for stateless tasks: rephrase this, summarize that, draft an email. They fall apart for \"answer questions about my data,\" because the model doesn't know your data. That's where retrieval-augmented generation (RAG) earns its keep.",
      },
      {
        type: "p",
        text: "The minimal RAG setup looks like this:",
      },
      {
        type: "ol",
        items: [
          "Chunk your documents into small pieces (a few hundred words each).",
          "Generate an embedding for each chunk using OpenAI or a local model.",
          "Store chunks + embeddings in a vector database (or Postgres with pgvector).",
          "On a user query, embed the query, find the top-k most similar chunks, and pass them to the LLM as context.",
        ],
      },
      {
        type: "p",
        text: "That is the whole thing. Yes, you can spend months tuning chunk size, hybrid search, and re-rankers. Don't, until you have a working version that real users have tried.",
      },
      {
        type: "h2",
        text: "Step 4: Decide what state lives where",
      },
      {
        type: "p",
        text: "AI features have one thing the rest of your app doesn't: long, expensive, sometimes-flaky API calls. That has design consequences:",
      },
      {
        type: "ul",
        items: [
          "Run them in a queue, not inline. Laravel's queue workers or Next.js background tasks make a generation never block a request.",
          "Cache aggressively. Same input → same output is a free win. Cache responses keyed by input hash.",
          "Log every prompt and response. You will need this when a user complains and you have to figure out what the model actually said.",
          "Always have a non-AI fallback. If the API is down, the page should still work.",
        ],
      },
      {
        type: "h2",
        text: "Step 5: Measure, then iterate",
      },
      {
        type: "p",
        text: "AI features have a shape that traditional features don't: they are non-deterministic and they cost money per call. So instrument them. Log the cost. Log a thumbs-up / thumbs-down. After a week you will know whether anyone uses the feature and whether they like the output. That data tells you what to improve next.",
      },
      {
        type: "quote",
        text: "AI features that nobody uses are the most expensive features you'll ever ship.",
      },
      {
        type: "h2",
        text: "What I actually ship",
      },
      {
        type: "p",
        text: "For most clients my first AI feature is small: \"draft a reply,\" \"summarize this thread,\" \"suggest tags for this article.\" These are easy to scope, easy to evaluate, and easy to roll back. Once the team is comfortable with the operational shape — the cost, the latency, the failure modes — we move to bigger things like search, agents, and workflow automation. The trick is to walk before running.",
      },
    ],
  },
  {
    slug: "claude-code-field-guide",
    title: "A Field Guide to Coding With Claude Code",
    excerpt:
      "Six months in, here's what I've learned about getting real work done with Claude Code — the patterns that pay off, the traps to avoid, and how it fits into a Laravel + Next.js workflow.",
    date: "2026-01-19",
    readingTime: "6 min read",
    tags: ["Claude", "Tooling", "Productivity"],
    body: [
      {
        type: "p",
        text: "Claude Code is what I use most days when I want to ship code without leaving the terminal. Six months in, it has reshaped my workflow in some specific ways. This is the field guide I wish I'd had on day one.",
      },
      {
        type: "h2",
        text: "Where it shines",
      },
      {
        type: "p",
        text: "The thing Claude Code is unusually good at is working across many files at once. When a refactor touches twelve files, asking the IDE to do it is faster than doing it by hand and safer than a blind find-replace, because the model understands the call graph.",
      },
      {
        type: "ul",
        items: [
          "Renames that ripple through templates, controllers, and tests.",
          "Migrating a deprecated API across a codebase.",
          "Walking up an unfamiliar codebase and explaining \"how does this feature work?\".",
          "Generating test scaffolds for an existing module.",
        ],
      },
      {
        type: "h2",
        text: "The CLAUDE.md trick",
      },
      {
        type: "p",
        text: "The single biggest quality bump I got was writing a short CLAUDE.md at the project root. Not a wall of text — five to ten lines that tell the model the things it would otherwise have to guess: the framework version, the conventions, what NOT to do. \"This is Next.js 16, not 14 — params are async.\" \"Use server components by default.\" \"Don't run npm install without asking.\"",
      },
      {
        type: "p",
        text: "It feels almost too simple. But every time I forget to do this, I spend the first hour of a session re-explaining the same things.",
      },
      {
        type: "h2",
        text: "Plan first, code second",
      },
      {
        type: "p",
        text: "For anything that touches more than two files, I ask Claude Code to outline a plan before it touches code. \"Don't write code yet — what's your plan?\" The plan is much cheaper to fix than the code. About a third of the time the plan reveals a misunderstanding I would have shipped if I'd just said \"go.\"",
      },
      {
        type: "h2",
        text: "Tools that help",
      },
      {
        type: "ol",
        items: [
          "Tight loops: small commits, run tests after every change, revert quickly when something breaks.",
          "Slash commands for the things you do every week — code review, security check, dependency upgrade.",
          "Hooks to run linters and type-checks automatically after edits.",
          "MCP servers when you need it to talk to a specific external tool you use a lot.",
        ],
      },
      {
        type: "h2",
        text: "Traps I've fallen into",
      },
      {
        type: "p",
        text: "Three real failures from real projects:",
      },
      {
        type: "p",
        text: "1. Trusting a green test suite without reading the diff. The model had silently weakened an assertion to make a test pass instead of fixing the underlying bug. The tests were green; the feature was broken.",
      },
      {
        type: "p",
        text: "2. Letting it touch package.json without checking. It \"upgraded\" a library to a version that didn't exist. npm install failed; I had to read the diff to figure out what happened.",
      },
      {
        type: "p",
        text: "3. Asking for a \"small refactor\" with no scope. It did a small refactor — and a medium refactor, and a large refactor, and renamed two variables I cared about, and removed a comment that was load-bearing. Now I always say what NOT to change.",
      },
      {
        type: "h2",
        text: "When not to use it",
      },
      {
        type: "p",
        text: "I turn it off when I'm exploring an idea. Code I throw away half an hour later doesn't benefit from a careful pair. I also turn it off for tiny one-line fixes, because the round-trip cost is higher than just typing them. The sweet spot is medium-sized changes — anything from \"add a new endpoint\" up to \"rewrite this module\" — where the model can carry context across files but the work still fits in a session.",
      },
      {
        type: "h2",
        text: "The bigger picture",
      },
      {
        type: "p",
        text: "Used well, Claude Code is the closest thing I've had to a thoughtful pair programmer who never gets tired. Used badly, it is a confident assistant that ships subtle bugs at speed. The difference is entirely in how you use it: clear scope, careful review, small steps. The same things that make a junior engineer effective.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function listPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}
