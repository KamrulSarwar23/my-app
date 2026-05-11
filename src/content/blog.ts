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
  {
    slug: "queue-jobs-in-laravel-patterns-i-keep-using",
    title: "Queue Jobs in Laravel: The Patterns I Keep Coming Back To",
    excerpt:
      "Queues are the boring critical infrastructure that decide whether your app is fast or feels broken. Here are the patterns I reach for in every Laravel project — idempotency, retries, transactions, and the pitfalls that keep biting people.",
    date: "2026-05-08",
    readingTime: "7 min read",
    tags: ["Laravel", "Queues", "Backend"],
    body: [
      {
        type: "p",
        text: "Queues are the kind of infrastructure nobody admires until something goes wrong. They sit between your request and the work that doesn't need to happen right now — emails, image processing, third-party API calls, anything that would otherwise turn a snappy 80ms response into a 4-second one. Get them right and your app feels fast. Get them wrong and you ship the same job five times to a customer.",
      },
      {
        type: "h2",
        text: "Why queue at all",
      },
      {
        type: "p",
        text: "If a piece of work can be delayed even by a few seconds, it should probably be queued. The user gets their response immediately, the queue worker picks the job up, and if something fails the framework can retry without anyone refreshing the browser. This single decision unlocks a much more reliable application.",
      },
      {
        type: "h2",
        text: "The patterns I use on every project",
      },
      {
        type: "h3",
        text: "1. Make jobs idempotent",
      },
      {
        type: "p",
        text: "A job will eventually run twice. A worker crashes mid-job, the broker redelivers it, the supervisor restarts. Assume duplication and design for it. The cleanest way is to make the work safe to repeat — upserts instead of inserts, lookups before sends, status checks before state changes.",
      },
      {
        type: "code",
        lang: "php",
        code: "public function handle(): void\n{\n    $order = Order::find($this->orderId);\n    if (!$order || $order->confirmation_sent_at) {\n        return; // already done, safe to ignore\n    }\n\n    Mail::to($order->email)->send(new OrderConfirmation($order));\n    $order->update(['confirmation_sent_at' => now()]);\n}",
      },
      {
        type: "h3",
        text: "2. Be explicit about retries and backoff",
      },
      {
        type: "p",
        text: "Default retries are usually too aggressive for external APIs. I set per-job `tries` and `backoff` arrays so a failing payment processor gets a graceful three-attempt curve instead of hammering itself at 100ms intervals.",
      },
      {
        type: "code",
        lang: "php",
        code: "public int $tries = 4;\npublic array $backoff = [5, 30, 120, 600]; // seconds",
      },
      {
        type: "h3",
        text: "3. Beware of database transactions wrapping job dispatch",
      },
      {
        type: "p",
        text: "Dispatching a job inside a transaction is a classic foot-gun: the worker picks it up before the transaction commits, fails to find the new row, and crashes. Use `afterCommit()` or set `'after_commit' => true` in `config/queue.php` so jobs only enqueue once the surrounding transaction has actually persisted.",
      },
      {
        type: "h3",
        text: "4. Don't serialize the world",
      },
      {
        type: "p",
        text: "Passing a full Eloquent model to a job serializes the model and refreshes it on the worker. That's fine — until you also pass the relations. By the time the worker runs, the related models may have changed. I pass IDs, not models, and refetch in the handler.",
      },
      {
        type: "h2",
        text: "Pitfalls that keep biting people",
      },
      {
        type: "ul",
        items: [
          "Long-running jobs starve the queue — split them into smaller chunks or move to a dedicated worker pool.",
          "Memory leaks compound over time — `supervisor` restarts workers, but jobs that swell memory still slow the system before the restart.",
          "Failed jobs that nobody monitors become a silent graveyard. Pipe `failed_jobs` to Slack or Sentry and act on them.",
          "Queue priorities exist for a reason. Don't put OTPs and weekly report generation on the same queue and expect both to feel snappy.",
        ],
      },
      {
        type: "h2",
        text: "My default setup",
      },
      {
        type: "p",
        text: "Redis driver, Horizon for monitoring, supervisor managing four to six workers, a separate high-priority queue for time-sensitive work (auth emails, payment receipts), and a low-priority queue for cron-driven background tasks. Sentry catches anything that bubbles past the configured retries, and the failed-jobs table is reviewed weekly.",
      },
      {
        type: "quote",
        text: "Queues feel like over-engineering until the day they save your weekend. Then they feel like the most obvious decision you ever made.",
      },
      {
        type: "p",
        text: "The patterns above aren't novel. They're the boring, repeated lessons that turn a fragile worker setup into one you stop thinking about. Which, when it comes to infrastructure, is exactly the goal.",
      },
    ],
  },
  {
    slug: "real-time-apps-with-laravel-reverb",
    title: "Real-Time Apps with Laravel Reverb: WebSockets Without the Headache",
    excerpt:
      "WebSocket-powered features used to mean Pusher bills or hand-rolled Node servers. Laravel Reverb closes that gap — and once you wire it up, broadcasting state to the browser feels like calling a method.",
    date: "2026-04-30",
    readingTime: "8 min read",
    tags: ["Laravel", "Broadcasting", "WebSockets", "Real-time"],
    body: [
      {
        type: "p",
        text: "For years \"real-time in Laravel\" meant one of two paths: pay Pusher per concurrent connection, or run your own Soketi/Node WebSocket server and babysit it. Reverb — Laravel's first-party WebSocket server — quietly removed both pain points. You get a battle-tested server, the same broadcasting API you already know, and a deploy story that fits any host that runs PHP.",
      },
      {
        type: "h2",
        text: "When you actually need WebSockets",
      },
      {
        type: "p",
        text: "Not every \"live\" feature needs a socket. Polling every 5 seconds is fine for a notification badge and free from operational overhead. Reach for WebSockets when latency really matters (chat, live cursors, collaborative editing, auction bids, multiplayer state) or when message frequency makes polling wasteful.",
      },
      {
        type: "h2",
        text: "Reverb in ten minutes",
      },
      {
        type: "p",
        text: "Install the package, publish the config, and Reverb is a Laravel command away from running locally.",
      },
      {
        type: "code",
        lang: "bash",
        code: "composer require laravel/reverb\nphp artisan reverb:install\nphp artisan reverb:start",
      },
      {
        type: "p",
        text: "Set `BROADCAST_CONNECTION=reverb` in your `.env` and the existing `broadcast()` API now routes through Reverb. No code changes to your events.",
      },
      {
        type: "h2",
        text: "A real event end to end",
      },
      {
        type: "code",
        lang: "php",
        code: "class OrderShipped implements ShouldBroadcast\n{\n    public function __construct(public Order $order) {}\n\n    public function broadcastOn(): array\n    {\n        return [new PrivateChannel('orders.' . $this->order->user_id)];\n    }\n}",
      },
      {
        type: "p",
        text: "Fire it from anywhere and the connected browser receives the payload within a few hundred milliseconds.",
      },
      {
        type: "code",
        lang: "php",
        code: "broadcast(new OrderShipped($order));",
      },
      {
        type: "h2",
        text: "Frontend wiring with Echo",
      },
      {
        type: "p",
        text: "Laravel Echo is still the cleanest client. Configure it to point at Reverb and subscribing feels like a normal observer.",
      },
      {
        type: "code",
        lang: "ts",
        code: "import Echo from 'laravel-echo';\nimport Pusher from 'pusher-js';\n\nwindow.Pusher = Pusher;\nwindow.Echo = new Echo({\n    broadcaster: 'reverb',\n    key: import.meta.env.VITE_REVERB_APP_KEY,\n    wsHost: import.meta.env.VITE_REVERB_HOST,\n    wsPort: 8080,\n    forceTLS: false,\n});\n\nwindow.Echo.private(`orders.${userId}`)\n    .listen('OrderShipped', (e) => updateOrder(e.order));",
      },
      {
        type: "h2",
        text: "Private channels and auth",
      },
      {
        type: "p",
        text: "Private and presence channels need server-side auth. The default `routes/channels.php` pattern is enough for most apps — return `true` if the authenticated user should be allowed.",
      },
      {
        type: "code",
        lang: "php",
        code: "Broadcast::channel('orders.{userId}', function ($user, $userId) {\n    return (int) $user->id === (int) $userId;\n});",
      },
      {
        type: "h2",
        text: "Scaling beyond one server",
      },
      {
        type: "p",
        text: "Reverb is single-process by default. To scale across multiple servers, enable the Redis pub/sub backplane — every Reverb node subscribes to a shared Redis channel and re-broadcasts to its connected clients. Stick it behind a sticky-session load balancer and you have a setup that comfortably serves tens of thousands of concurrent connections.",
      },
      {
        type: "h2",
        text: "What I tell teams before they wire up real-time",
      },
      {
        type: "ul",
        items: [
          "Test with throttling on — every real network has bad seconds.",
          "Have a graceful reconnect strategy with backoff.",
          "Send small payloads. WebSockets are not a CDN; resend the ID, refetch the model if needed.",
          "Treat WebSocket pushes as hints, not source of truth — the server is still authoritative.",
          "Add a heartbeat ping so you can detect zombie connections early.",
        ],
      },
      {
        type: "quote",
        text: "WebSockets shouldn't feel exotic. With Reverb, broadcasting an event is just another line in your job — and the magic moves out of your infrastructure and back into your product.",
      },
    ],
  },
  {
    slug: "prompt-evals-are-the-unit-tests-of-llm-code",
    title: "Prompt Evals Are the Unit Tests of LLM Code",
    excerpt:
      "Shipping an AI feature without evals is shipping code without tests. Once you start running automated graders against your prompts, every prompt tweak stops being a leap of faith.",
    date: "2026-04-10",
    readingTime: "6 min read",
    tags: ["AI", "LLM", "Testing", "Evals"],
    body: [
      {
        type: "p",
        text: "The first AI features I built had no tests. I would tweak a prompt, click around, decide it felt better, and ship. The day a model update silently regressed our summarization quality was the day I stopped doing that. Evals — automated graders that run prompts against a fixed dataset — are the closest thing LLM code has to unit tests, and they pay for themselves the first time they catch a regression.",
      },
      {
        type: "h2",
        text: "What an eval actually is",
      },
      {
        type: "p",
        text: "It is a folder of input/expected pairs plus a script. The script feeds each input through your real prompt pipeline, then grades the output. The grade can be a simple substring match, a regex, a structured-JSON schema check, or — for fuzzier tasks — another LLM call asking \"does this output meet criteria X, Y, Z?\"",
      },
      {
        type: "h2",
        text: "My eval starter pack",
      },
      {
        type: "ul",
        items: [
          "10–30 examples that cover the happy path, edge cases, and known prior failures.",
          "A grader function per example that returns a pass/fail (and optionally a 0–1 score).",
          "Run on every PR that touches prompts. Block merge if the score drops more than 5%.",
          "Record per-example results in a small table so you can spot which case regressed.",
        ],
      },
      {
        type: "h2",
        text: "Pass/fail vs. graded scoring",
      },
      {
        type: "p",
        text: "For structured tasks (extract these fields, return this JSON shape), use strict pass/fail. The output either parses or it doesn't. For generative tasks (summaries, replies, rewrites), graded scoring is more honest — \"the model got 27 out of 30\" tells you more than a binary verdict.",
      },
      {
        type: "h2",
        text: "When LLM-as-judge actually works",
      },
      {
        type: "p",
        text: "For subjective tasks, using a stronger model to grade a weaker one is surprisingly effective. The judge prompt should ask narrowly framed questions (\"Is the tone professional?\", \"Does it mention the customer's name?\") and return a score. Avoid open-ended \"is this good?\" prompts — they're noisy and inconsistent.",
      },
      {
        type: "h2",
        text: "What evals catch that humans miss",
      },
      {
        type: "p",
        text: "Manual smoke-testing is biased toward the most recent change. Evals are not. They surface the boring regressions — the case from six months ago that broke when you tightened the system prompt today, the edge case that only fires when the user input contains an em-dash.",
      },
      {
        type: "quote",
        text: "If your AI feature matters enough to ship, it matters enough to test. The same way you wouldn't dare push a payment flow without a test suite, don't push a prompt without an eval suite.",
      },
      {
        type: "p",
        text: "Start with five examples. Add one each time a bug is reported. Within a quarter you'll have a dataset that meaningfully gates regressions — and a much less anxious relationship with prompt tweaks.",
      },
    ],
  },
  {
    slug: "cost-controlled-llms-caching-fallbacks-budget-guards",
    title: "Cost-Controlled LLMs: Caching, Fallback Chains, and Budget Guards",
    excerpt:
      "AI bills creep up quietly. By the time anyone notices, you're paying for retries that should never have happened. Here is the layered defense I put in production to keep LLM costs sane.",
    date: "2026-03-28",
    readingTime: "7 min read",
    tags: ["AI", "LLM", "Cost", "Caching"],
    body: [
      {
        type: "p",
        text: "The first AI feature that goes live is rarely the one that blows the budget. It's the third or fourth — once usage is real and someone forgets to set a per-user cap. Cost control isn't a feature you add later; it's a layered defense you bake in from the first request. None of the layers are exotic, but skipping any one of them is how you end up with a five-figure invoice from a feature you thought was modest.",
      },
      {
        type: "h2",
        text: "Layer 1 — cache aggressively",
      },
      {
        type: "p",
        text: "The cheapest LLM call is the one you don't make. Hash the prompt (system + user + relevant context) and store the response in Redis. For deterministic tasks (translation, classification, extraction) a 24-hour cache often hits 30–60% of the time. Even non-deterministic tasks benefit from a small cache for retries of the same request.",
      },
      {
        type: "code",
        lang: "ts",
        code: "const key = sha256(`${system}\\n${user}\\n${model}`);\nconst cached = await redis.get(key);\nif (cached) return JSON.parse(cached);\n\nconst response = await callLLM({ system, user, model });\nawait redis.setex(key, 60 * 60 * 24, JSON.stringify(response));\nreturn response;",
      },
      {
        type: "h2",
        text: "Layer 2 — pick the right model for the right task",
      },
      {
        type: "p",
        text: "Not every call needs your top-tier model. Classification, intent routing, and trivial extraction work fine on a smaller, cheaper model. I keep a tiny `pickModel(task)` helper so the choice is centralised — easy to tune later without hunting through callsites.",
      },
      {
        type: "h2",
        text: "Layer 3 — fallback chains",
      },
      {
        type: "p",
        text: "Providers go down. Quotas trip. When the primary fails, an automatic fallback to a cheaper or different-vendor model keeps the feature alive and the user unaware. Be explicit about which model produced which response in your logs — silent fallbacks are the kind of thing you want to know happened.",
      },
      {
        type: "h2",
        text: "Layer 4 — budget guards per tenant",
      },
      {
        type: "p",
        text: "A naive user (or a malicious one) can drive your monthly bill in an afternoon. Track tokens per user per day in Redis, return a friendly 429 once a threshold is hit, and surface the cap in the UI. The threshold should be generous enough that real users never see it and small enough that abuse can't tank the budget.",
      },
      {
        type: "ul",
        items: [
          "Per-user daily token cap (free tier).",
          "Per-tenant monthly token cap (paid tier).",
          "Hard global daily cap as a circuit breaker — the panic button.",
          "Alert at 50%, 80%, and 100% via Slack or email so you don't wake up to a surprise.",
        ],
      },
      {
        type: "h2",
        text: "Layer 5 — log everything cheap, sample expensive",
      },
      {
        type: "p",
        text: "Log every call's token count, model, latency, and cost (estimated from token usage) into a cheap store. Sample the full request/response — say one in fifty — to a more detailed store you can grep for debugging. The aggregate data is your monthly bill in dashboard form; the sampled data is how you debug edge cases.",
      },
      {
        type: "quote",
        text: "An AI feature without cost controls is a budget item with a hopeful asterisk. Defense in layers turns that into a number you can plan around.",
      },
    ],
  },
  {
    slug: "building-autonomous-agents-with-claude",
    title: "Building Autonomous Agents With Claude — What the Docs Don't Tell You",
    excerpt:
      "Agents are not just LLMs in a loop. The loop is where everything interesting (and dangerous) happens. Here is what I've learned shipping real agents on top of Claude — about tools, halting, and observability.",
    date: "2026-03-02",
    readingTime: "8 min read",
    tags: ["AI", "Claude", "Agents"],
    body: [
      {
        type: "p",
        text: "The naive recipe for an agent is short — give an LLM a list of tools, run it in a while-loop, and trust it to pick the next action. Anyone who has actually shipped one knows the gap between that recipe and a production system. The hard parts are not in the prompt; they're in the loop, the tools, and the failure modes you didn't think about.",
      },
      {
        type: "h2",
        text: "The loop is where it goes wrong",
      },
      {
        type: "p",
        text: "An unbounded loop is an unbounded bill. The first guardrails I add are not safety-related — they're about preventing infinite tool calls and runaway token costs. A hard step limit, a wall-clock timeout, and a per-task token budget catch 90% of accidents.",
      },
      {
        type: "code",
        lang: "ts",
        code: "const MAX_STEPS = 25;\nconst MAX_TOKENS = 200_000;\nconst MAX_WALL_MS = 5 * 60_000;\n\nfor (let step = 0; step < MAX_STEPS; step++) {\n  if (Date.now() - started > MAX_WALL_MS) break;\n  if (tokensUsed > MAX_TOKENS) break;\n  // ... step the agent\n}",
      },
      {
        type: "h2",
        text: "Tool design matters more than the system prompt",
      },
      {
        type: "p",
        text: "Most agent failures I've debugged came down to a sloppy tool — vague name, unclear parameters, ambiguous error messages. The LLM is only as good as the tools it can call. Give each tool a precise description (what it does, what it returns, what it does not do), validate inputs, and return structured errors so the model can recover instead of looping.",
      },
      {
        type: "h2",
        text: "Halting is its own design problem",
      },
      {
        type: "p",
        text: "Knowing when to stop is harder than starting. Patterns that work for me:",
      },
      {
        type: "ul",
        items: [
          "A dedicated `submit_result` tool that ends the loop — the LLM has to explicitly call it to finish.",
          "A confidence check before submit — the model rates its certainty, and below a threshold it asks the human.",
          "Termination on repeated identical tool calls (the model is stuck).",
          "Required final summary describing what it did — useful for the user and for evals.",
        ],
      },
      {
        type: "h2",
        text: "Observability — traces, not logs",
      },
      {
        type: "p",
        text: "Plain logs are useless for agents. You need a trace — a tree of LLM calls, tool calls, inputs, outputs, and timings. Even a minimal in-house trace viewer (JSON dumped to a table with a small React explorer) is night-and-day for debugging an agent that did something weird at step 14.",
      },
      {
        type: "h2",
        text: "Human-in-the-loop is not a fallback",
      },
      {
        type: "p",
        text: "For any agent that touches the outside world — sends email, creates a transaction, edits a customer record — a human approval step is not a downgrade. It's the design. The agent prepares the action, the human approves it, the system executes. The agent feels less magical but produces vastly more trustworthy outcomes.",
      },
      {
        type: "quote",
        text: "An agent that always asks before doing is more useful than an agent that always does. The first one earns trust; the second one earns rollback scripts.",
      },
      {
        type: "p",
        text: "Agents are getting more capable every month. The capabilities are the easy part to keep up with. The thing that doesn't change is the work around them — clear tools, hard limits, observable traces, and humans where the stakes are real.",
      },
    ],
  },
  {
    slug: "rag-done-right-chunking-embeddings-and-the-boring-parts",
    title: "RAG Done Right: Chunking, Embeddings, and the Boring Parts That Matter",
    excerpt:
      "A RAG demo is a weekend. A RAG system that answers your customer's actual question is a quarter. Most of the gap is in the parts nobody writes a blog post about — chunking, hybrid search, and reranking.",
    date: "2026-02-21",
    readingTime: "8 min read",
    tags: ["AI", "RAG", "Embeddings"],
    body: [
      {
        type: "p",
        text: "Retrieval-Augmented Generation is the most overhyped technique in the LLM ecosystem and also one of the most useful. The catch is that the version you build in a weekend — embed every chunk, top-k search, stuff into the prompt — performs much worse on real questions than the demos suggest. The interesting work happens in the unglamorous middle.",
      },
      {
        type: "h2",
        text: "Chunking is half the battle",
      },
      {
        type: "p",
        text: "Naive fixed-size chunking (split every 500 tokens) destroys context. A paragraph gets cut mid-sentence, the embedding loses meaning, retrieval misses the relevant section. Better strategies in order of effort:",
      },
      {
        type: "ul",
        items: [
          "Split on semantic boundaries — paragraphs, headings, list items. Most docs already have structure.",
          "Add overlap (50–100 tokens) between chunks so a query that lands at the boundary still hits relevant content.",
          "Prepend the document title and section heading to every chunk so retrieval has context the body doesn't carry.",
          "For tabular data, embed rows individually with the column headers included.",
        ],
      },
      {
        type: "h2",
        text: "Embeddings: pick once, don't fuss",
      },
      {
        type: "p",
        text: "The big-name embedding models are all within a few points of each other on benchmarks. Picking the best one for your domain is a marginal improvement compared to fixing your chunking. Pick a model, fix the cost, and move on. The exception is non-English content, where multilingual models meaningfully outperform.",
      },
      {
        type: "h2",
        text: "Hybrid search beats pure vector",
      },
      {
        type: "p",
        text: "Vector search finds semantically similar content. Keyword search finds exact matches. Many queries — \"what is the SKU for product X?\" — need exact matching. Hybrid retrieval (vector + BM25) consistently beats either alone, and the implementation is two queries and a merge.",
      },
      {
        type: "h2",
        text: "Rerank the top 50",
      },
      {
        type: "p",
        text: "After retrieval, rerank with a cross-encoder. The first pass gets you a noisy top-50; the reranker reads each candidate alongside the query and reorders by true relevance. The top-5 after reranking is dramatically better than the top-5 from vector search alone. Cohere, Voyage, and others sell hosted rerankers; a small open one runs on CPU.",
      },
      {
        type: "h2",
        text: "Cite or die",
      },
      {
        type: "p",
        text: "Every response should include citations to the chunks it used. This serves two purposes: it lets users verify the answer (trust), and it lets you catch hallucinations during eval. A response with no citations is a guess. A response with citations to chunks that don't actually contain the answer is a hallucination you can detect.",
      },
      {
        type: "quote",
        text: "RAG is not retrieval. RAG is retrieval, then ranking, then generation, then citation. Skip any of those steps and the system feels magical in demos and unreliable in production.",
      },
      {
        type: "p",
        text: "Build the pipeline end-to-end with evals from day one. Add a single chunking improvement, run the evals, keep it if it helps. The work is incremental and unglamorous, and the result is the difference between a chatbot people stop using and one they keep coming back to.",
      },
    ],
  },
  {
    slug: "github-actions-for-full-stack-apps",
    title: "GitHub Actions for Full-Stack Apps That Don't Make You Cry",
    excerpt:
      "CI/CD doesn't need to be elaborate. A pragmatic GitHub Actions setup for a Laravel + Next.js app catches the bugs that matter, deploys on green, and stays out of your way the rest of the time.",
    date: "2026-01-30",
    readingTime: "7 min read",
    tags: ["DevOps", "CI/CD", "GitHub Actions"],
    body: [
      {
        type: "p",
        text: "The point of CI is not to feel professional. The point is to catch the bug at PR time instead of in production. The shortest path to that is a single workflow that lints, tests, and (on the main branch) deploys. Everything beyond that is optional polish.",
      },
      {
        type: "h2",
        text: "A minimal workflow that earns its keep",
      },
      {
        type: "code",
        lang: "yaml",
        code: "name: ci\non:\n  pull_request:\n  push:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 20, cache: npm }\n      - uses: shivammathur/setup-php@v2\n        with: { php-version: 8.3, tools: composer }\n      - run: composer install --no-progress --prefer-dist\n      - run: npm ci\n      - run: composer test\n      - run: npm run lint\n      - run: npm run build",
      },
      {
        type: "p",
        text: "That's the whole baseline. It runs on every PR and on main. If anything fails, you don't merge.",
      },
      {
        type: "h2",
        text: "Cache aggressively",
      },
      {
        type: "p",
        text: "First run is slow; every subsequent run should hit the cache. The `setup-node` `cache: npm` flag is one line and saves 30–60 seconds per run. For Composer, cache `vendor/` keyed on the lock file hash — savings of about the same.",
      },
      {
        type: "h2",
        text: "Run migrations in a real database",
      },
      {
        type: "p",
        text: "Mocked databases let mocked migrations pass. Spin up a real MySQL service container in CI, run the migrations, run the tests against it. The extra 20 seconds catches the migration bugs that mocks never will.",
      },
      {
        type: "h2",
        text: "Deploy only on green main",
      },
      {
        type: "p",
        text: "A separate `deploy` job, depending on the test job, gated to the main branch. If anyone force-pushes a broken main, deployment doesn't happen. SSH-and-pull is fine for small apps; container builds with a registry push are better at scale. Both fit comfortably in 20 lines of YAML.",
      },
      {
        type: "h2",
        text: "Secrets that don't leak",
      },
      {
        type: "ul",
        items: [
          "Use GitHub repository secrets, never commit `.env` files (even encrypted ones look tempting and aren't).",
          "Scope secrets to environments (`staging`, `production`) — Actions will warn on cross-env usage.",
          "Rotate the deploy SSH key annually. Set a calendar reminder when you create it.",
          "Audit `${{ secrets.* }}` usage in workflow files — every reference should be intentional.",
        ],
      },
      {
        type: "h2",
        text: "What I don't bother with",
      },
      {
        type: "p",
        text: "Matrix testing across five Node versions is busywork for a portfolio app. So is enforcing 90% coverage. Pick the smallest CI that catches the bugs that have actually hit your repo before. Add complexity when you have evidence you need it.",
      },
      {
        type: "quote",
        text: "Your CI exists to find the bug at PR time, not to look impressive on a status badge. The shortest workflow that does that wins.",
      },
    ],
  },
  {
    slug: "dockerizing-a-laravel-and-nextjs-stack",
    title: "Dockerizing a Laravel + Next.js Stack the Right Way",
    excerpt:
      "Dev-prod parity isn't a buzzword once you've spent a Saturday fixing a bug that only happens on the server. Here's how I containerize a full-stack Laravel + Next.js app so the laptop and the server agree.",
    date: "2026-01-05",
    readingTime: "8 min read",
    tags: ["Docker", "DevOps", "Laravel", "Next.js"],
    body: [
      {
        type: "p",
        text: "There's a particular flavor of bug that only happens in production. The PHP version is one minor different. The Node version is older. A locale isn't installed. The fix is always frustrating because the local environment was lying to you all along. Docker is the boring infrastructure that makes those lies impossible.",
      },
      {
        type: "h2",
        text: "Compose for local development",
      },
      {
        type: "p",
        text: "Local needs three services and the database: php-fpm for Laravel, node for Next.js, nginx in front, and MySQL. A single `docker-compose.yml` runs the whole stack with one command and behaves identically to production.",
      },
      {
        type: "code",
        lang: "yaml",
        code: "services:\n  app:\n    build: ./docker/php\n    volumes: [.:/var/www]\n    depends_on: [mysql]\n  web:\n    build: ./docker/nginx\n    ports: ['80:80']\n    depends_on: [app, next]\n  next:\n    build: ./docker/node\n    volumes: [./frontend:/app]\n    ports: ['3000:3000']\n  mysql:\n    image: mysql:8\n    environment:\n      MYSQL_ROOT_PASSWORD: root\n    volumes: [mysql-data:/var/lib/mysql]\nvolumes:\n  mysql-data:",
      },
      {
        type: "h2",
        text: "PHP image that doesn't ship the kitchen sink",
      },
      {
        type: "p",
        text: "Start from `php:8.3-fpm-alpine`, install only the extensions you actually use (`bcmath`, `pdo_mysql`, `gd`, `zip`), copy Composer from the official Composer image rather than installing it. Two-stage build keeps the runtime image small and the build cache effective.",
      },
      {
        type: "h2",
        text: "Multi-stage build for Next.js",
      },
      {
        type: "p",
        text: "Next.js production images benefit from a three-stage build: deps install (cached layer), build (runs `next build`), runner (only the `.next/standalone` output and node_modules needed for runtime). The final image is around 150 MB instead of 1 GB.",
      },
      {
        type: "code",
        lang: "dockerfile",
        code: "FROM node:20-alpine AS deps\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\n\nFROM node:20-alpine AS build\nWORKDIR /app\nCOPY --from=deps /app/node_modules ./node_modules\nCOPY . .\nRUN npm run build\n\nFROM node:20-alpine AS runner\nWORKDIR /app\nCOPY --from=build /app/.next/standalone ./\nCOPY --from=build /app/.next/static ./.next/static\nCOPY --from=build /app/public ./public\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]",
      },
      {
        type: "h2",
        text: "Nginx is the traffic cop",
      },
      {
        type: "p",
        text: "One nginx config routes `/api/*` to php-fpm and everything else to Next.js. Same shape in development and production. SSL termination happens here in prod; in dev, plain HTTP is fine.",
      },
      {
        type: "h2",
        text: "Watch out for these",
      },
      {
        type: "ul",
        items: [
          "File-watching across the Docker boundary on macOS/Windows is slow — use bind mounts only for code, not node_modules or vendor.",
          "Permissions: the user inside the container needs to match your host UID, or Composer/npm will scatter root-owned files everywhere.",
          "`docker-compose down -v` wipes named volumes including the database. Read the flags before you type.",
          "Multi-arch builds matter once you have an Apple Silicon dev machine and an x86 production server.",
        ],
      },
      {
        type: "quote",
        text: "The point of containers isn't sophistication. The point is that the bug your tester hit yesterday and the bug your customer hits today are reproducible on your laptop in five minutes.",
      },
    ],
  },
  {
    slug: "deploying-to-aws-ec2-no-magic-walkthrough",
    title: "Deploying to AWS EC2: A No-Magic Walkthrough",
    excerpt:
      "Managed platforms are great until the bill or the constraints become a problem. EC2 is still the cheapest way to run a real app — and once you've done it once, it stops feeling intimidating.",
    date: "2025-12-12",
    readingTime: "9 min read",
    tags: ["AWS", "DevOps", "Deployment"],
    body: [
      {
        type: "p",
        text: "EC2 has a reputation for being the hard option. It isn't — it's just the unsupervised one. You get a server, an SSH key, and complete freedom to misconfigure things. Once you've walked through the setup once, the freedom becomes the appeal. The cost is a fraction of managed platforms, and you understand exactly what your app is running on.",
      },
      {
        type: "h2",
        text: "Picking the right instance",
      },
      {
        type: "p",
        text: "Don't overprovision. A `t3.small` (2 vCPU, 2 GB RAM) handles a Laravel app with moderate traffic comfortably. `t3.medium` if you're running the Node.js side on the same box. Move to a `c6i` family only when CPU profiling tells you to. AWS Compute Optimizer will tell you within a week if you over- or under-sized.",
      },
      {
        type: "h2",
        text: "Security groups before anything else",
      },
      {
        type: "ul",
        items: [
          "Inbound: 22 (SSH) from your IP only, 80, 443 from anywhere.",
          "Outbound: leave the default (allow all) — you want updates and outbound API calls to work.",
          "Never expose port 3306 / 5432 to the world. The database is local-only or behind a private VPC.",
        ],
      },
      {
        type: "h2",
        text: "Basic hardening",
      },
      {
        type: "p",
        text: "First five minutes on a fresh EC2 box:",
      },
      {
        type: "code",
        lang: "bash",
        code: "sudo apt update && sudo apt upgrade -y\nsudo apt install ufw fail2ban -y\nsudo ufw allow OpenSSH && sudo ufw allow 'Nginx Full'\nsudo ufw enable\nsudo systemctl enable --now fail2ban",
      },
      {
        type: "p",
        text: "Disable password SSH (`PasswordAuthentication no` in `sshd_config`), enable `PermitRootLogin no`, restart sshd. That single change blocks the vast majority of automated SSH attacks the internet throws at you.",
      },
      {
        type: "h2",
        text: "Nginx + PHP-FPM setup",
      },
      {
        type: "p",
        text: "Install PHP and Nginx via the Ondrej PPA so you get a recent PHP. Set up an Nginx site block pointing to `/var/www/your-app/public`, run `sudo systemctl reload nginx`, and the bones are in place. Permissions: `www-data` should own `storage/` and `bootstrap/cache/` — Laravel will scream otherwise.",
      },
      {
        type: "h2",
        text: "SSL with Let's Encrypt",
      },
      {
        type: "code",
        lang: "bash",
        code: "sudo apt install certbot python3-certbot-nginx -y\nsudo certbot --nginx -d yourdomain.com -d www.yourdomain.com",
      },
      {
        type: "p",
        text: "Renewals happen via a cron job that certbot installs for you. Test the renewal once with `sudo certbot renew --dry-run` so you find out about config bugs now instead of in three months.",
      },
      {
        type: "h2",
        text: "Process management",
      },
      {
        type: "p",
        text: "PHP-FPM handles the web traffic. For queue workers, supervisor is the simple, reliable answer. Five-line config, `systemctl restart supervisor`, and you have auto-restarting workers that survive deploys.",
      },
      {
        type: "h2",
        text: "Backups and monitoring",
      },
      {
        type: "ul",
        items: [
          "Daily MySQL dumps to S3, lifecycled to Glacier after 30 days. ~$1/month for years of backups.",
          "CloudWatch agent on the host for CPU, memory, and disk metrics.",
          "CloudWatch alarms at 80% disk and 90% CPU — both quietly disastrous if you don't notice.",
          "Sentry or Bugsnag for application errors. Server-level logs alone won't tell you about bad SQL.",
        ],
      },
      {
        type: "quote",
        text: "EC2 isn't difficult. It's just self-service. The afternoon you spend learning the setup pays back every month in saved hosting fees and unblocked decisions.",
      },
    ],
  },
  {
    slug: "database-migrations-in-production",
    title: "Database Migrations in Production: Lessons From Breaking Prod",
    excerpt:
      "A migration that locks a hot table is a migration that takes the site down. Every migration that has bitten me did so because I didn't think about what happens at the row count we'll have in a year.",
    date: "2025-11-20",
    readingTime: "7 min read",
    tags: ["Database", "MySQL", "Migrations"],
    body: [
      {
        type: "p",
        text: "Migrations are the only deploys that feel safe until they aren't. On a dev database with 1,000 rows, every `ALTER TABLE` finishes in milliseconds. On a production table with 50 million rows, the same statement holds a metadata lock and queues every write for the duration. By the time you've cancelled the migration, customers are seeing 500s. I've shipped that bug. Here's how I stopped.",
      },
      {
        type: "h2",
        text: "The patterns that cause outages",
      },
      {
        type: "ul",
        items: [
          "Adding a NOT NULL column with a default to a large table — full table rewrite, full table lock.",
          "Renaming a column while old code is still deployed — half the app reads `name`, half reads `full_name`, neither is happy.",
          "Adding an index on a 100M-row table during business hours.",
          "Backfilling a new column with a single UPDATE statement.",
        ],
      },
      {
        type: "h2",
        text: "Expand-contract is the safe pattern",
      },
      {
        type: "p",
        text: "Any column change in production should be expand-contract, not in-place. The pattern in three deploys:",
      },
      {
        type: "ol",
        items: [
          "Expand: add the new column as nullable. Deploy. Both old and new code work.",
          "Migrate: write to both columns in code, backfill the old rows in a background job that chunks the work.",
          "Contract: switch reads to the new column. Deploy. Drop the old column in a later, separate deploy.",
        ],
      },
      {
        type: "p",
        text: "Three deploys instead of one, and zero downtime instead of a panicky rollback.",
      },
      {
        type: "h2",
        text: "Chunked backfills",
      },
      {
        type: "p",
        text: "Backfilling with a single `UPDATE x SET y = z` on a large table is a transaction that locks the table for the duration. Chunked backfills (process N rows at a time, commit, sleep briefly, repeat) keep the table responsive. Laravel makes this trivial:",
      },
      {
        type: "code",
        lang: "php",
        code: "Order::query()->whereNull('display_id')->chunkById(1000, function ($chunk) {\n    foreach ($chunk as $order) {\n        $order->update(['display_id' => generateDisplayId($order)]);\n    }\n    usleep(50_000); // light breathing room\n});",
      },
      {
        type: "h2",
        text: "Backups before every migration",
      },
      {
        type: "p",
        text: "Automated daily backups exist, but the migration that breaks at 2pm wants a backup from 1:55pm. A pre-migration snapshot is one extra step in your deploy script and the difference between \"rolled back in two minutes\" and \"explained to the team for two hours.\"",
      },
      {
        type: "h2",
        text: "Make migrations idempotent",
      },
      {
        type: "p",
        text: "Migrations that fail mid-way leave the schema in an in-between state. Make them safe to re-run: `addColumnIfNotExists`, `IF EXISTS` clauses, separate steps for index creation and data backfill. The migration that can be safely retried is the migration you'll be glad about at midnight.",
      },
      {
        type: "h2",
        text: "Tools worth knowing",
      },
      {
        type: "ul",
        items: [
          "pt-online-schema-change (Percona) — adds columns and indexes on hot tables without locking.",
          "gh-ost (GitHub) — same idea, different implementation, popular for very large tables.",
          "Laravel's `--pretend` flag — dumps the SQL without running it, useful for review and for explaining the change.",
        ],
      },
      {
        type: "quote",
        text: "Every migration looks fast in dev. The only honest test is against a copy of production data. If you can't afford that, at least stop and ask: is this statement going to scan or rewrite a hot table?",
      },
    ],
  },
  {
    slug: "typescript-patterns-i-wish-id-learned-earlier",
    title: "TypeScript Patterns I Wish I'd Learned Earlier",
    excerpt:
      "TypeScript is mostly easy. The 10% that isn't easy is where the language quietly rewards you for stopping to learn the right pattern. Here are the ones I keep reaching for.",
    date: "2025-10-28",
    readingTime: "6 min read",
    tags: ["TypeScript", "Programming"],
    body: [
      {
        type: "p",
        text: "TypeScript has a learning curve shaped like a hockey stick. The first month is pleasant — you add types, the editor gets smarter, life is good. Then you hit a generic that won't infer, a union that won't narrow, a library type that fights you. Most of the time the fix is a pattern that's idiomatic in the TS world but invisible in tutorials. Here are the ones I learned the hard way.",
      },
      {
        type: "h2",
        text: "Discriminated unions over flag fields",
      },
      {
        type: "p",
        text: "If a type can be in two shapes, don't sprinkle optional fields and rely on the reader to figure it out. Use a discriminator and TypeScript will narrow it for you.",
      },
      {
        type: "code",
        lang: "ts",
        code: "type Result<T> =\n  | { ok: true; value: T }\n  | { ok: false; error: string };\n\nfunction handle(r: Result<number>) {\n  if (r.ok) {\n    return r.value * 2; // value is typed\n  }\n  return r.error;      // error is typed\n}",
      },
      {
        type: "h2",
        text: "`as const` to lock literals",
      },
      {
        type: "p",
        text: "A plain array is typed as `string[]`. `as const` narrows it to a tuple of literals, which is what you usually wanted for status enums and config lists.",
      },
      {
        type: "code",
        lang: "ts",
        code: "const STATUSES = ['draft', 'live', 'archived'] as const;\ntype Status = typeof STATUSES[number]; // 'draft' | 'live' | 'archived'",
      },
      {
        type: "h2",
        text: "`satisfies` instead of `as`",
      },
      {
        type: "p",
        text: "`as` silences the type checker. `satisfies` asks it to verify that your value matches a type without widening the value's inferred type. You keep the literal precision and still get the contract.",
      },
      {
        type: "code",
        lang: "ts",
        code: "const config = {\n  retries: 3,\n  level: 'info',\n} satisfies { retries: number; level: 'info' | 'warn' | 'error' };\n\nconfig.level; // 'info' — still narrow",
      },
      {
        type: "h2",
        text: "Branded types for safety",
      },
      {
        type: "p",
        text: "User IDs and order IDs are both `string`. The compiler doesn't care if you swap them; the runtime does. A brand attaches a phantom property so the type system distinguishes them.",
      },
      {
        type: "code",
        lang: "ts",
        code: "type UserId = string & { __brand: 'UserId' };\ntype OrderId = string & { __brand: 'OrderId' };\n\nfunction loadOrder(id: OrderId) { /* ... */ }\nconst userId = 'u_42' as UserId;\n// loadOrder(userId); // ✗ Type error — exactly what you want",
      },
      {
        type: "h2",
        text: "Don't fear `unknown` — fear `any`",
      },
      {
        type: "p",
        text: "`any` opts out of type-checking and infects every variable it touches. `unknown` is the safer version — it requires you to narrow before you use it. Use it for API responses, JSON inputs, anywhere the value really is opaque until proven otherwise.",
      },
      {
        type: "quote",
        text: "The point of TypeScript isn't to type every line — it's to push errors that would happen at midnight into errors that happen at lunch. The patterns above shift the needle further every time you use them.",
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
