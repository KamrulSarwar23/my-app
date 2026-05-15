"use client";

import { useEffect, useRef, useState } from "react";

type Role = "user" | "assistant";
type Message = { role: Role; content: string };

const SUGGESTIONS = [
  "Who is Kamrul?",
  "What services do you offer?",
  "Show me your projects",
  "What's your tech stack?",
  "Tell me about your AI work",
  "What's your experience?",
  "How can I hire you?",
  "Where are you based?",
];

type Intent = {
  match: (q: string) => boolean;
  answer: string;
};

const FALLBACK =
  "I don't have a specific answer for that — this is a static demo, so my knowledge covers Kamrul's services, projects, skills, experience, education, location, pricing, and how to reach him. Try one of the suggested questions, or email him directly at kamrulsarwar99@gmail.com.";

const INTENTS: Intent[] = [
  {
    match: (q) => /\b(auction|real estate|bidding|inertia)\b/.test(q),
    answer:
      "Real Estate Auction — a Laravel + Inertia + Vue.js platform with real-time bidding, property listings, bidder management, and admin dashboards. Built for a real estate firm that needed to host live auctions online.\n\nStack: Laravel · Inertia · Vue · MySQL\n\nIt's one of the projects Kamrul is most proud of because it touches everything: real-time updates, payments, complex permissions, and a polished UI for non-technical bidders.",
  },
  {
    match: (q) => /\b(construction|builder|contractor)\b/.test(q),
    answer:
      "Construction Project — a marketing + management website for a construction company. Decoupled architecture: Laravel API + React front-end.\n\nFeatures:\n• Project portfolio with image galleries and case studies\n• Service catalog with inquiry forms\n• Lead capture with email notifications\n• Admin dashboard for content + inquiry tracking\n• Responsive React UI tuned for marketing\n\nStack: Laravel · React · MySQL · Tailwind CSS\nSource: github.com/KamrulSarwar23/laravel_react_construction_backend (frontend repo also public)",
  },
  {
    match: (q) => /\b(multi.?vendor|marketplace|vendor)\b/.test(q),
    answer:
      "Multi-Vendor E-commerce — a full marketplace built on Laravel where independent sellers run their own stores under one roof.\n\nThree-role system:\n• Admins moderate the platform, manage commissions, and view reports\n• Vendors onboard, list products, and fulfill orders\n• Customers browse, add to cart, and check out across vendors\n\nIncludes split-payment routing, order workflows, and a customer-facing storefront.\n\nStack: Laravel · Blade · MySQL · Bootstrap\nSource: github.com/KamrulSarwar23/Multi-Vendor-Ecommerce",
  },
  {
    match: (q) =>
      /\b(jobs?.portal|job.board|hiring portal|recruitment|candidate|employer)\b/.test(
        q
      ),
    answer:
      "Jobs Portal (Job Pulse) — a two-sided platform connecting employers and candidates.\n\nFeatures:\n• Company and candidate profiles with separate dashboards\n• Job posting with categories, locations, and tags\n• Search & filters by location, category, experience\n• Application tracking on both sides\n• Email notifications for new applications and status changes\n\nStack: Laravel · Bootstrap · MySQL\nSource: github.com/KamrulSarwar23/Job-Pulse",
  },
  {
    match: (q) => /\b(library|book|borrow|isbn|librarian)\b/.test(q),
    answer:
      "Library Management — a system for small libraries and educational institutions to digitize their borrow/return workflow.\n\nFeatures:\n• Book catalog with categories, copies, and availability tracking\n• Member registration and renewals\n• Borrow/return workflow with due dates and automatic fine calculation\n• Admin reports: most-borrowed books, active members, overdue items\n• Search by title, author, ISBN, or category\n\nStack: Laravel · MySQL · Bootstrap\nSource: github.com/KamrulSarwar23/librarymanage",
  },
  {
    match: (q) =>
      /\b(inventory|stock|sku|supplier|warehouse|reorder)\b/.test(q),
    answer:
      "Inventory Management — a web-based stock tracking system for small businesses.\n\nFeatures:\n• Product catalog with SKUs, categories, and stock levels\n• Purchase orders, sales records, supplier management\n• Stock movement history and adjustments\n• Low-stock alerts and reorder thresholds\n• Reports: sales, purchases, top products, stock valuation\n\nStack: Laravel · MySQL · Bootstrap\nSource: github.com/KamrulSarwar23/inventory-management",
  },
  {
    match: (q) =>
      /\b(ecommerce|e-commerce|shop|cart|checkout|store|online store)\b/.test(
        q
      ),
    answer:
      "Kamrul has built several e-commerce platforms — the flagship one is a decoupled Laravel + React build.\n\nLaravel & React E-commerce:\n• Laravel API + React SPA architecture\n• Sanctum auth for customers and admins\n• Product catalog with categories, attributes, search, filters\n• Cart, checkout, and order management with payment integration\n• Admin dashboard with role-based permissions and reporting\n• Image uploads, inventory tracking, order status workflows\n\nStack: Laravel · React · MySQL · REST API · Tailwind\nRepos: laravel_react_ecommerce_backend + laravel_react_ecommerce_frontend on GitHub.\n\nFor full marketplaces, see the Multi-Vendor E-commerce project (ask me about it).",
  },
  {
    match: (q) =>
      /\b(ai|llm|claude|openai|gpt|chatbot|chat bot|rag|gemini|anthropic|agent|n8n|automation|machine learning|ml)\b/.test(
        q
      ),
    answer:
      "AI Features & Integrations — Kamrul ships real AI features, not just demos that fall apart in production.\n\nWhat he does:\n• Chat assistants with system prompts tuned to your domain\n• RAG pipelines — embeddings, vector search, citations\n• Agent workflows that read your data and take action\n• n8n / Zapier / Make automations between SaaS tools\n• Prompt evaluation and regression testing\n• Cost monitoring and model fallback strategies\n\nTools: OpenAI · Anthropic Claude · Google Gemini · n8n · Pinecone · pgvector · LangChain\n\nThis chat widget itself is an example of his AI-flavored UI — the real client builds are wired to live model APIs with logging, evals, and cost tracking.",
  },
  {
    match: (q) =>
      /\b(api|integration|rest|webhook|stripe|twilio|sendgrid|third.party|gateway)\b/.test(
        q
      ),
    answer:
      "API & Integration — designing reliable APIs and connecting your app to third-party systems.\n\nWhat's included:\n• REST API design with OpenAPI/Swagger documentation\n• Authentication (Sanctum, JWT, OAuth, API keys)\n• Third-party integrations — Stripe, Twilio, SendGrid, Mailgun, Slack\n• Webhook endpoints with signature verification and retries\n• Rate limiting, caching, pagination\n• Background workers for long-running or async operations\n\nDeliverables: versioned API with OpenAPI spec + Postman collection, integration code with secrets via env, webhook handlers with logging and replay, tests covering happy-path and common failures.",
  },
  {
    match: (q) =>
      /\b(ui|ux|design|figma|tailwind|shadcn|responsive|mobile.first|accessib|animation|framer)\b/.test(
        q
      ),
    answer:
      "Responsive UI Design — turning Figma designs (or rough sketches) into accessible, pixel-perfect UIs.\n\nFeatures:\n• Mobile-first layouts that work down to 320px\n• Accessible components (ARIA, keyboard nav, focus states)\n• Dark mode and theming via CSS variables\n• Micro-interactions with Framer Motion / CSS\n• Reusable component library\n• Pixel-accurate translation from Figma\n\nDeliverables: production-ready React or Vue components, Storybook preview, design tokens in code, Lighthouse-audited performance and accessibility.\n\nTools: Tailwind CSS · ShadCN UI · React · Vue · Framer Motion · Figma · Storybook",
  },
  {
    match: (q) =>
      /\b(cloud|aws|devops|docker|deploy|deployment|ci.?cd|pipeline|github actions|nginx|vercel|cpanel|hosting|server)\b/.test(
        q
      ),
    answer:
      "Cloud & DevOps — taking applications from local dev to a stable production deployment.\n\nWhat's covered:\n• AWS setup (EC2, S3, RDS, CloudFront, Route 53)\n• CI/CD pipelines with GitHub Actions or GitLab CI\n• Dockerized environments for dev/prod parity\n• Zero-downtime deployments + automated rollback\n• Database backups, snapshots, disaster recovery\n• SSL, custom domains, CDN configuration\n\nDeliverables: deployed app with monitoring + alerts, CI pipeline running tests/builds/deploys on push, documented runbook, infrastructure-as-code where useful.\n\nComfortable across AWS, DigitalOcean, Vercel, and traditional cPanel hosts.",
  },
  {
    match: (q) =>
      /\b(maintenance|support|bug|fix|patch|refactor|legacy|on.?call|retainer)\b/.test(
        q
      ),
    answer:
      "Maintenance & Support — Kamrul jumps into existing Laravel, Next.js, Vue, or WordPress codebases and ships fixes, patches, and iterative improvements.\n\nWhat's included:\n• Bug triage, reproduction, and fix with tests\n• Performance audits — slow queries, N+1s, frontend bottlenecks\n• Security patches and dependency upgrades\n• Feature iteration without rewriting from scratch\n• Refactoring legacy code while preserving behavior\n• On-call retainer for critical apps\n\nDeliverables: monthly or per-task reports, PRs with clear descriptions + tests, updated dependency manifest, recommendations for next priorities.",
  },
  {
    match: (q) => /\b(wordpress|wp|woocommerce|acf|cms|headless wp)\b/.test(q),
    answer:
      "WordPress Development — WordPress when it makes sense: marketing sites, blogs, lightweight stores, and headless setups where editors need a familiar CMS.\n\nFeatures:\n• Custom themes built from scratch (no Elementor bloat)\n• ACF-driven content blocks for editor-friendly pages\n• WooCommerce stores with custom checkout and payments\n• Headless WordPress with Next.js or Nuxt frontends\n• Performance tuning — caching, image optimization, lazy loading\n• Security hardening and regular update strategy\n\nDeliverables: custom theme + plugins in your repo, editor documentation, page-speed audit (before/after), security checklist and backup strategy.",
  },
  {
    match: (q) => /\b(full.?stack|end.to.end|backend|server.side)\b/.test(q),
    answer:
      "Full Stack Development — Kamrul builds complete web applications from database schema to UI polish.\n\nFeatures:\n• Authentication and authorization (sessions, OAuth, role-based access)\n• Relational database design with migrations and seeders\n• Admin dashboards with CRUD, search, filters, reporting\n• REST API design with versioning, validation, rate limiting\n• Background jobs, queues, and scheduled tasks\n• Responsive frontends with Tailwind CSS, ShadCN\n\nDeliverables: production-ready codebase in your Git repo, deployment to your hosting, API documentation + README, migrations + seed data for staging.\n\nWorking as the sole engineer or part of a small team — comfortable owning a feature from rough spec to production.",
  },
  {
    match: (q) =>
      /\b(service|offer|provide|do you do|what can you do|capabilit|specialt)\b/.test(
        q
      ),
    answer:
      "Kamrul offers 8 core services:\n\n1. Full Stack Development — Laravel / Next.js / Vue end-to-end apps\n2. E-Commerce Solutions — single-store or multi-vendor marketplaces\n3. API & Integration — REST APIs, webhooks, Stripe, Twilio, third-party\n4. Responsive UI Design — Tailwind + ShadCN, mobile-first, accessible\n5. Cloud & DevOps — AWS, Docker, CI/CD, zero-downtime deploys\n6. AI Features & Integrations — Claude/OpenAI chat, RAG, agents, n8n\n7. WordPress Development — custom themes, WooCommerce, headless\n8. Maintenance & Support — fixes, patches, performance, on-call\n\nAsk about any of them for the full breakdown — features, deliverables, and tools.",
  },
  {
    match: (q) =>
      /\b(build|make|create|develop|do for me|can you build|help me)\b/.test(
        q
      ),
    answer:
      "Kamrul builds production-grade web applications end-to-end. The most common things people hire him for:\n\n• Full-stack web apps with Laravel + React or Next.js — dashboards, auth, REST APIs, payments\n• E-commerce — multi-vendor marketplaces, single-store shops, carts, inventory\n• AI features — chat assistants, RAG, agent workflows, n8n automations\n• WordPress / WooCommerce sites, real estate auctions, jobs portals, library systems\n• API & integration work on existing products\n\nHe's shipped 15+ client projects so far. Email kamrulsarwar99@gmail.com with a short brief and he'll come back with a timeline and price.",
  },
  {
    match: (q) =>
      /\b(projects?|portfolio|work|case study|examples?|previous|past|built|show me)\b/.test(
        q
      ),
    answer:
      "Highlights from Kamrul's portfolio:\n\n1. Laravel & React E-commerce — decoupled API + SPA with payments and admin\n2. Construction Project — marketing + management site for a construction firm\n3. Multi-Vendor E-commerce — full marketplace with vendor onboarding + split payments\n4. Jobs Portal (Job Pulse) — two-sided employer/candidate platform\n5. Library Management — borrow/return system with fines and reports\n6. Inventory Management — stock, suppliers, purchases, sales\n7. Real Estate Auction — Laravel + Inertia + Vue with real-time bidding\n\nAll source code (where public) lives at github.com/KamrulSarwar23. Ask me about any specific project for the full breakdown.",
  },
  {
    match: (q) => /\b(frontend|front.end|client.?side)\b/.test(q),
    answer:
      "Frontend stack — markup, styles, and frameworks Kamrul reaches for:\n\n• HTML, CSS, SCSS\n• Bootstrap, Tailwind CSS, ShadCN UI\n• JavaScript, TypeScript\n• Vue.js, React, Next.js (App Router)\n• Inertia.js for Laravel-Vue/React monoliths\n\nFor 3D and motion he uses Three.js (the orb in the hero is custom-shader work) and Framer Motion / CSS animations for micro-interactions.",
  },
  {
    match: (q) => /\b(backend|back.end|server|api framework)\b/.test(q),
    answer:
      "Backend stack:\n\n• PHP + Laravel (primary — Eloquent, queues, Sanctum/Passport, broadcasting, file storage)\n• Node.js + Express for lighter services\n• REST APIs with OpenAPI/Swagger documentation\n• Inertia.js for monolithic apps that need SPA feel without a separate frontend\n• WordPress for CMS-driven sites\n\nComfortable with auth (sessions, OAuth, JWT, API keys), background workers, and integrating any third-party API.",
  },
  {
    match: (q) => /\b(database|db|mysql|postgres|mongo|sql|nosql)\b/.test(q),
    answer:
      "Databases Kamrul works with:\n\n• MySQL (primary — most Laravel projects)\n• PostgreSQL (preferred for newer projects, especially with pgvector for RAG)\n• MongoDB for document-store use cases\n• Redis for caching, queues, and session storage\n\nComfortable with schema design, migrations, seeders, query optimization (N+1s, slow query analysis), and replication basics.",
  },
  {
    match: (q) =>
      /\b(stack|tech|technology|tools|framework|skill|expertise)\b/.test(q),
    answer:
      "Kamrul's full stack:\n\n• Frontend — HTML, CSS, SCSS, JavaScript, TypeScript, React, Next.js, Vue.js, Inertia, Tailwind, Bootstrap, ShadCN UI\n• Backend — PHP, Laravel, Node.js, REST APIs, WordPress\n• Database — MySQL, PostgreSQL, MongoDB, Redis\n• Cloud & DevOps — AWS (EC2, S3, RDS), Docker, GitHub Actions, Nginx, Vercel, cPanel\n• AI & Automation — OpenAI, Claude, Gemini, n8n, LangChain, pgvector, Pinecone\n• Tools — Git, GitHub, VS Code, Postman, Axios, 3rd-party APIs\n\nFull-stack means you don't usually need to hire a separate frontend dev for the same project.",
  },
  {
    match: (q) =>
      /\b(iconic|company|employer|current job|work at|works at)\b/.test(q),
    answer:
      "Kamrul is currently a Full Stack Web Developer at Iconic Solutions PVT. Ltd (2023 — Present).\n\nThere he's built production web applications for clients across e-commerce, jobs portals, library management, blogs, real estate auctions, and construction. He customizes front-end and back-end features to fit each client's needs and has shipped 12–15+ projects.",
  },
  {
    match: (q) =>
      /\b(experience|years|how long|career|background|work history|seniority)\b/.test(
        q
      ),
    answer:
      "3+ years of professional experience.\n\nCurrent role: Full Stack Web Developer at Iconic Solutions PVT. Ltd (2023 — Present), shipping 12–15+ client projects across e-commerce, real estate auctions, construction management, jobs portals, library systems, and blogs.\n\nHe handles both frontend and backend — plus client communication — so he can own a feature end-to-end without handoffs.",
  },
  {
    match: (q) =>
      /\b(education|degree|study|studied|university|mba|bba|school|college|course|certification|learn)\b/.test(
        q
      ),
    answer:
      "Education and training:\n\n• MBA — Govt. Commerce College, Chattogram (2022 — 2023)\n• BBA — National University (2016 — 2020)\n• Laravel & Vue.js Web Development — Ostad Ltd (Batch 2)\n• React.js & Next.js Course — Learn With Sumit (Batch 3)\n\nThe business-leaning education (MBA + BBA) pairs nicely with his engineering work — he tends to think about projects in terms of outcomes and trade-offs, not just code.",
  },
  {
    match: (q) =>
      /\b(available|freelance|hire|hiring|work with|opportunit|open to|free|busy|contract|engagement)\b/.test(
        q
      ),
    answer:
      "Yes — Kamrul is open to freelance and contract work alongside his role at Iconic Solutions.\n\nGood fits:\n• Full-stack web apps (Laravel / Next.js)\n• AI features added to existing products\n• E-commerce builds and migrations\n• Short-term help on stuck projects\n• Maintenance retainers for critical apps\n\nReach out at kamrulsarwar99@gmail.com or +880 1646-669099 with a short brief and rough timeline — he usually replies within a day.",
  },
  {
    match: (q) =>
      /\b(contact|email|reach|phone|call|message|get in touch|linkedin|social|github)\b/.test(
        q
      ),
    answer:
      "Ways to reach Kamrul:\n\n• Email — kamrulsarwar99@gmail.com (fastest)\n• Phone — +880 1646-669099\n• GitHub — github.com/KamrulSarwar23\n• Contact form at the bottom of this page\n\nEmail usually gets the quickest response — within a day.",
  },
  {
    match: (q) =>
      /\b(price|pricing|cost|rate|budget|how much|charge|fee|quote|estimate)\b/.test(
        q
      ),
    answer:
      "Pricing depends entirely on scope — a small landing page is very different from a multi-vendor marketplace.\n\nKamrul prefers to quote after a quick 15-minute call where he understands what you actually need. Email kamrulsarwar99@gmail.com with a one-paragraph brief and he'll come back with a realistic timeline and price range.\n\nMaintenance retainers are also available for ongoing support on existing codebases.",
  },
  {
    match: (q) =>
      /\b(who|about|yourself|kamrul|introduce|bio|tell me about|name)\b/.test(
        q
      ),
    answer:
      "Kamrul Hasan is a Full Stack Web Developer based in Bangladesh with 3+ years of hands-on experience designing, developing, and maintaining dynamic and responsive websites and web applications.\n\nCurrently at Iconic Solutions PVT. Ltd, where he's shipped 12–15+ client projects across e-commerce, real estate auctions, construction management, jobs portals, library systems, and blogs.\n\nHe holds an MBA and a BBA, speaks English, Bengali, and Hindi, and focuses on building user-friendly, secure, and scalable web products — from idea to deployment.",
  },
  {
    match: (q) =>
      /\b(location|where|based|country|timezone|time zone|remote|live|from)\b/.test(
        q
      ),
    answer:
      "Kamrul is based in Bangladesh (GMT+6) and works remotely with clients globally.\n\nThe timezone overlaps well with:\n• Europe (morning–afternoon)\n• Middle East (most of the day)\n• India / South Asia (full overlap)\n• Most of Asia-Pacific\n\nFor US clients he's flexible for calls during their morning hours.",
  },
  {
    match: (q) =>
      /\b(language|english|bengali|bangla|hindi|speak|communicate|fluent)\b/.test(
        q
      ),
    answer:
      "Kamrul communicates fluently in English, Bengali, and Hindi — so he's comfortable on client calls across South Asia and with international clients in English.",
  },
  {
    match: (q) => /\b(laravel|php|eloquent|sanctum)\b/.test(q),
    answer:
      "Laravel is Kamrul's primary backend framework. He's built e-commerce platforms, multi-vendor marketplaces, auction systems, project-management tools, jobs portals, and admin dashboards on it.\n\nComfortable with:\n• Eloquent ORM, migrations, seeders\n• Queues and background jobs\n• Sanctum / Passport authentication\n• Broadcasting and websockets\n• File storage (local, S3)\n• Inertia.js for SPA feel without a separate frontend\n• Integration with any REST API or webhook",
  },
  {
    match: (q) => /\b(react|next|nextjs|next\.js|jsx|tsx)\b/.test(q),
    answer:
      "Kamrul builds frontends in React and Next.js (App Router) with TypeScript and Tailwind CSS.\n\nThis very portfolio site is Next.js — including the streaming 3D hero orb (Three.js) and this chat widget. He's comfortable with:\n• Server components and route handlers\n• SSR / ISR / static generation\n• SEO best practices (metadata API, sitemaps, OG images)\n• Suspense, streaming, and modern data fetching patterns",
  },
  {
    match: (q) => /\b(vue|nuxt|vuejs|vue\.js)\b/.test(q),
    answer:
      "Vue.js is one of Kamrul's core frontend frameworks alongside React. He's shipped Vue frontends paired with Laravel backends for several client projects — including the Real Estate Auction platform (Laravel + Inertia + Vue).",
  },
  {
    match: (q) => /\b(typescript|ts|type.safe)\b/.test(q),
    answer:
      "TypeScript is Kamrul's default for any new React or Next.js project. He uses strict mode, generics where they help, and prefers inferred types over heavy annotations. The portfolio site you're on is fully TypeScript.",
  },
  {
    match: (q) => /\b(3d|three|threejs|three\.js|webgl|shader|glsl)\b/.test(q),
    answer:
      "The animated orb in this page's hero is Three.js — Kamrul's own work.\n\nIt uses a custom GLSL shader with simplex noise for the surface distortion, reacts to your mouse position, and re-themes itself live when you change the color palette or toggle dark mode. The shader is in src/components/HeroOrb.tsx if you want a look.",
  },
  {
    match: (q) => /\b(stripe|paypal|payment|sslcommerz|gateway)\b/.test(q),
    answer:
      "Kamrul integrates payment gateways into e-commerce and SaaS projects — Stripe, PayPal, SSLCommerz, and local processors. That includes one-time payments, subscriptions, split payments for marketplaces, webhook handling with signature verification, and idempotency for safe retries.",
  },
  {
    match: (q) => /\b(aws|amazon web|ec2|s3|rds|cloudfront)\b/.test(q),
    answer:
      "AWS services Kamrul regularly uses: EC2 for compute, S3 for media storage, RDS for managed databases, CloudFront for CDN, and Route 53 for DNS. He pairs this with GitHub Actions for CI/CD and Docker for environment parity.",
  },
  {
    match: (q) => /\b(docker|container|kubernetes|k8s)\b/.test(q),
    answer:
      "Kamrul uses Docker for development/production parity and reproducible environments. Comfortable writing Dockerfiles, Docker Compose stacks for multi-service local setups, and deploying containerized apps to AWS or DigitalOcean. Light hands-on with Kubernetes for larger setups.",
  },
  {
    match: (q) => /\b(github|git|version control|repo)\b/.test(q),
    answer:
      "All of Kamrul's work lives in Git — his public projects are on GitHub at github.com/KamrulSarwar23. CI/CD is typically GitHub Actions for tests, builds, and deploys on push. PR-based workflow with clean commit history.",
  },
  {
    match: (q) => /\b(blog|article|writing|post|read)\b/.test(q),
    answer:
      "Kamrul writes about web development, AI integrations, and lessons from client work. Scroll down to the Blog section on this page, or click the Blog link in the nav to see all posts.",
  },
  {
    match: (q) =>
      /\b(thank|thanks|cool|nice|awesome|great|wow|amazing|impressive|love it)\b/.test(
        q
      ),
    answer:
      "Glad you liked it — feel free to keep exploring the rest of the page, or send Kamrul a message at kamrulsarwar99@gmail.com if you want to talk about a project.",
  },
  {
    match: (q) =>
      /\b(hi|hello|hey|yo|greetings|sup|hola|namaste|salaam)\b/.test(q),
    answer:
      "Hi there — welcome to Kamrul's portfolio. Ask me about his services, projects, stack, experience, AI work, or availability. Some good starters:\n\n• \"What services do you offer?\"\n• \"Show me your projects\"\n• \"Tell me about your AI work\"\n• \"How can I hire you?\"",
  },
];

function resolveAnswer(input: string): string {
  const q = input.toLowerCase();
  for (const intent of INTENTS) {
    if (intent.match(q)) return intent.answer;
  }
  return FALLBACK;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const cancelRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    return () => {
      cancelRef.current = true;
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => taRef.current?.focus(), 150);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  const send = async (prompt?: string) => {
    const text = (prompt ?? input).trim();
    if (!text || streaming) return;

    const answer = resolveAnswer(text);

    setMessages((cur) => [
      ...cur,
      { role: "user", content: text },
      { role: "assistant", content: "" },
    ]);
    setInput("");
    setStreaming(true);
    cancelRef.current = false;

    await new Promise((r) => setTimeout(r, 380));

    const words = answer.split(/(\s+)/);
    let acc = "";
    for (const word of words) {
      if (cancelRef.current) break;
      acc += word;
      setMessages((cur) => {
        const copy = [...cur];
        copy[copy.length - 1] = { role: "assistant", content: acc };
        return copy;
      });
      const delay = /\n/.test(word) ? 90 : 22 + Math.random() * 28;
      await new Promise((r) => setTimeout(r, delay));
    }

    setStreaming(false);
  };

  const stop = () => {
    cancelRef.current = true;
    setStreaming(false);
  };

  const reset = () => {
    cancelRef.current = true;
    setMessages([]);
    setInput("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Chat with portfolio assistant"
        aria-hidden={!open}
        className={`fixed z-50 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        } bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[400px] max-w-[400px]`}
      >
        <div
          className="absolute -inset-px rounded-3xl brand-gradient-tr opacity-25 blur-xl"
          aria-hidden="true"
        />
        <div className="relative rounded-3xl border border-border bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden flex flex-col h-[min(560px,calc(100vh-8rem))]">
          <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold">Ask Kamrul</span>
            </div>

            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={reset}
                  className="text-xs text-muted hover:text-foreground transition px-2 py-1 rounded-full hover:bg-foreground/5"
                >
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-foreground/5 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="relative flex-1 overflow-y-auto px-4 py-5 scroll-smooth"
          >
            {messages.length === 0 ? (
              <EmptyState onPick={(p) => send(p)} disabled={streaming} />
            ) : (
              <div className="flex flex-col gap-3.5">
                {messages.map((m, i) => (
                  <Bubble
                    key={i}
                    role={m.role}
                    content={m.content}
                    streaming={
                      streaming &&
                      i === messages.length - 1 &&
                      m.role === "assistant"
                    }
                  />
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-border bg-background/40 px-3 py-3">
            <div className="flex items-stretch gap-2">
              <div className="relative flex-1">
                <textarea
                  ref={taRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  rows={1}
                  placeholder="Ask about projects, stack, AI work…"
                  disabled={streaming}
                  className="block w-full resize-none rounded-2xl border border-border bg-card px-3.5 py-2 text-sm leading-6 placeholder:text-muted/70 focus:outline-none focus:border-foreground/30 focus:ring-2 focus:ring-foreground/10 transition disabled:opacity-60"
                  style={{ minHeight: 40, maxHeight: 110 }}
                />
              </div>

              {streaming ? (
                <button
                  type="button"
                  onClick={stop}
                  aria-label="Stop"
                  className="inline-flex shrink-0 items-center justify-center rounded-2xl border border-border bg-card px-3 text-sm font-semibold hover:bg-foreground/5 transition"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="currentColor"
                  >
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => send()}
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="group inline-flex shrink-0 items-center justify-center rounded-2xl brand-gradient-tr px-3.5 text-sm font-semibold text-white shadow-md shadow-black/10 hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-md"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full brand-gradient-tr text-white shadow-xl shadow-black/20 hover:brightness-105 hover:shadow-2xl active:scale-95 transition-all duration-200"
      >
        <span className="relative inline-flex h-6 w-6 items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute transition-all duration-200 ${
              open ? "opacity-0 rotate-45 scale-75" : "opacity-100 rotate-0 scale-100"
            }`}
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute transition-all duration-200 ${
              open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-45 scale-75"
            }`}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </button>
    </>
  );
}

function EmptyState({
  onPick,
  disabled,
}: {
  onPick: (p: string) => void;
  disabled: boolean;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <div className="relative mb-4">
        <div
          className="absolute inset-0 rounded-2xl brand-gradient-tr opacity-30 blur-xl"
          aria-hidden="true"
        />
        <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl brand-gradient-tr text-white shadow-lg">
          <svg
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        </div>
      </div>

      <h3 className="text-sm font-semibold">Hi, I&apos;m Kamrul&apos;s assistant</h3>
      <p className="mt-1 max-w-xs text-xs text-muted leading-relaxed">
        Pick a starter below or type your own question. Answers stream in live.
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-1.5">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onPick(s)}
            disabled={disabled}
            className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-muted hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5 transition disabled:opacity-40"
          >
            <span
              className="h-1.5 w-1.5 rounded-full brand-gradient-tr opacity-70 group-hover:opacity-100 transition"
              aria-hidden="true"
            />
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}

function Bubble({
  role,
  content,
  streaming,
}: {
  role: Role;
  content: string;
  streaming: boolean;
}) {
  const isUser = role === "user";
  return (
    <div
      className={`flex items-start gap-2.5 ${
        isUser ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full text-[9px] font-bold ${
          isUser
            ? "bg-foreground text-background"
            : "brand-gradient-tr text-white shadow-md"
        }`}
        aria-hidden="true"
      >
        {isUser ? "YOU" : "AI"}
      </div>

      <div
        className={`relative max-w-[82%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed whitespace-pre-wrap break-words ${
          isUser
            ? "bg-foreground text-background rounded-tr-sm"
            : "bg-foreground/[0.04] border border-border rounded-tl-sm"
        }`}
      >
        {content}
        {streaming && content && (
          <span className="ml-0.5 inline-block h-3 w-1.5 -mb-[2px] align-middle bg-current opacity-70 animate-pulse" />
        )}
        {!content && streaming && (
          <span className="inline-flex items-center gap-1 text-muted">
            <Dot delay={0} />
            <Dot delay={150} />
            <Dot delay={300} />
          </span>
        )}
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      className="h-1.5 w-1.5 rounded-full bg-current opacity-50 animate-bounce"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}
