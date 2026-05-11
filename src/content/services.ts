export type ServiceIconKey =
  | "fullstack"
  | "ecommerce"
  | "api"
  | "ui"
  | "cloud"
  | "ai"
  | "wordpress"
  | "maintenance";

export type Service = {
  slug: string;
  iconKey: ServiceIconKey;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  deliverables: string[];
  tools: string[];
  accent: string;
};

export const services: Service[] = [
  {
    slug: "full-stack-development",
    iconKey: "fullstack",
    title: "Full Stack Development",
    shortDescription:
      "End-to-end web apps with Laravel, React, Next.js & Vue — auth, dashboards, REST APIs, and database design.",
    longDescription:
      "I build complete web applications from database schema to UI polish. Working as the sole engineer for founders, or as part of a small team, I take features from rough spec to production — handling authentication, business logic, REST APIs, admin dashboards, and the frontend that ties it all together.",
    features: [
      "Authentication and authorization (sessions, OAuth, role-based access)",
      "Relational database design with migrations and seeders",
      "Admin dashboards with CRUD, search, filters, and reporting",
      "REST API design with versioning, validation, and rate limiting",
      "Background jobs, queues, and scheduled tasks",
      "Responsive frontends with Tailwind CSS, ShadCN, and component libraries",
    ],
    deliverables: [
      "Production-ready codebase in a Git repository you own",
      "Deployment to your hosting (AWS, Vercel, cPanel, VPS)",
      "API documentation and a clean README",
      "Database migrations and seed data for staging",
    ],
    tools: [
      "Laravel",
      "Next.js",
      "React",
      "Vue",
      "TypeScript",
      "MySQL",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    accent: "from-blue-500 to-cyan-500",
  },
  {
    slug: "ecommerce-solutions",
    iconKey: "ecommerce",
    title: "E-Commerce Solutions",
    shortDescription:
      "Multi-vendor marketplaces, single-store shops, payments, carts, inventory and admin dashboards.",
    longDescription:
      "I build e-commerce platforms tailored to how the business actually sells — single-store shops, multi-vendor marketplaces, subscription models, or B2B catalogs. Every store ships with checkout, inventory, orders, and an admin panel the team can actually use day to day.",
    features: [
      "Product catalog with categories, variants, attributes, and inventory",
      "Cart, checkout, and order workflow with email notifications",
      "Payment gateways (Stripe, PayPal, SSLCommerz, local processors)",
      "Multi-vendor support with commission and split payments",
      "Coupons, discounts, taxes, and shipping rules",
      "Admin reports — sales, top products, customers, inventory health",
    ],
    deliverables: [
      "Full storefront and admin panel deployed to your domain",
      "Payment gateway and shipping carrier integrations configured",
      "Order, customer, and product data imported from your existing store",
      "Documented admin workflows for your team",
    ],
    tools: [
      "Laravel",
      "Next.js",
      "Stripe",
      "WooCommerce",
      "MySQL",
      "Redis",
      "Tailwind CSS",
    ],
    accent: "from-purple-500 to-pink-500",
  },
  {
    slug: "api-and-integration",
    iconKey: "api",
    title: "API & Integration",
    shortDescription:
      "REST API development, third-party integrations, payment gateways, AI/automation hooks, and webhooks.",
    longDescription:
      "Whether you need a new API from scratch or to bolt your app into a third-party system, I design and build integrations that are reliable in production. That means proper retries, idempotency, observability, and clean documentation that your team or external partners can actually follow.",
    features: [
      "REST API design with OpenAPI/Swagger documentation",
      "Authentication (Sanctum, JWT, OAuth, API keys)",
      "Third-party integrations — Stripe, Twilio, SendGrid, Mailgun, Slack",
      "Webhook endpoints with signature verification and retries",
      "Rate limiting, caching, and pagination",
      "Background workers for long-running or async operations",
    ],
    deliverables: [
      "Versioned API with OpenAPI spec and Postman collection",
      "Integration code with secrets safely managed via env",
      "Webhook handlers with logging and replay support",
      "Tests covering happy-path and common failure modes",
    ],
    tools: [
      "Laravel",
      "Node.js",
      "Express",
      "OpenAPI",
      "Postman",
      "Stripe",
      "Twilio",
    ],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    slug: "responsive-ui-design",
    iconKey: "ui",
    title: "Responsive UI Design",
    shortDescription:
      "Modern, mobile-first interfaces with Tailwind CSS and ShadCN — accessible, fast, and pixel-perfect.",
    longDescription:
      "I turn Figma designs (or rough sketches) into responsive, accessible UIs that look right on every screen from a 360px phone to a 4K monitor. Built mobile-first with Tailwind CSS and component libraries like ShadCN — fast page loads, keyboard navigation, and a clean spec your team can extend.",
    features: [
      "Mobile-first responsive layouts that work down to 320px",
      "Accessible components (ARIA, keyboard nav, focus states)",
      "Dark mode and theme support via CSS variables",
      "Animations and micro-interactions with Framer Motion / CSS",
      "Component library with reusable primitives",
      "Pixel-accurate translation from Figma or design specs",
    ],
    deliverables: [
      "Production-ready React or Vue components",
      "Storybook or component preview for design review",
      "Design tokens (colors, spacing, typography) in code",
      "Lighthouse-audited performance and accessibility",
    ],
    tools: [
      "Tailwind CSS",
      "ShadCN UI",
      "React",
      "Vue",
      "Framer Motion",
      "Figma",
      "Storybook",
    ],
    accent: "from-amber-500 to-orange-500",
  },
  {
    slug: "cloud-and-devops",
    iconKey: "cloud",
    title: "Cloud & DevOps",
    shortDescription:
      "Deploy to AWS (EC2, S3, RDS), CI/CD pipelines with GitHub Actions, Dockerized environments and cPanel.",
    longDescription:
      "I take applications from local dev to a stable production deployment, with the boring-but-critical pieces in place — backups, monitoring, zero-downtime deploys, and a CI pipeline that runs your tests on every push. Comfortable across AWS, DigitalOcean, Vercel, and traditional cPanel hosts.",
    features: [
      "Cloud setup on AWS (EC2, S3, RDS, CloudFront, Route 53)",
      "CI/CD pipelines with GitHub Actions or GitLab CI",
      "Dockerized environments for parity between dev and prod",
      "Zero-downtime deployments and automated rollback",
      "Database backups, snapshots, and disaster-recovery plans",
      "SSL, custom domains, and CDN configuration",
    ],
    deliverables: [
      "Deployed app with monitoring and alerts wired up",
      "CI pipeline running tests, builds, and deploys on push",
      "Documented runbook for common ops tasks",
      "Infrastructure-as-code (Docker Compose / Terraform) where useful",
    ],
    tools: [
      "AWS",
      "DigitalOcean",
      "Docker",
      "GitHub Actions",
      "Nginx",
      "Vercel",
      "cPanel",
    ],
    accent: "from-sky-500 to-indigo-500",
  },
  {
    slug: "ai-features-and-integrations",
    iconKey: "ai",
    title: "AI Features & Integrations",
    shortDescription:
      "Ship LLM-powered features with OpenAI, Claude, and Gemini — chat assistants, RAG pipelines, agent workflows, and n8n automations wired into your product.",
    longDescription:
      "I help teams ship real AI features — not demos that fall apart in production. Chat assistants grounded in your docs, RAG pipelines over private data, agent workflows that take action, and n8n automations connecting your existing tools. Token costs, latency, and accuracy are treated as first-class concerns.",
    features: [
      "Chat assistants with system prompts tuned to your domain",
      "RAG pipelines — embeddings, vector search, citations",
      "Agent workflows that read your data and take action",
      "n8n / Zapier / Make automations between SaaS tools",
      "Prompt evaluation and regression testing",
      "Cost monitoring and model fallback strategies",
    ],
    deliverables: [
      "Production AI feature with logging, evals, and cost tracking",
      "Documented prompts and model choices",
      "Vector store populated from your content",
      "Handoff doc covering tuning, costs, and failure modes",
    ],
    tools: [
      "OpenAI",
      "Anthropic Claude",
      "Google Gemini",
      "n8n",
      "Pinecone",
      "pgvector",
      "LangChain",
    ],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "wordpress-development",
    iconKey: "wordpress",
    title: "WordPress Development",
    shortDescription:
      "Custom themes, plugins, WooCommerce stores, ACF-driven content, REST/Headless setups — performance-tuned, secure, and SEO-ready.",
    longDescription:
      "WordPress when it makes sense — marketing sites, blogs, lightweight stores, and headless setups where editors need a familiar CMS. I build custom themes from scratch (no bloated page builders), purpose-built plugins, and ACF-driven layouts that non-technical editors can manage confidently.",
    features: [
      "Custom themes built from scratch (no Elementor bloat)",
      "ACF-driven content blocks for editor-friendly pages",
      "WooCommerce stores with custom checkout and payments",
      "Headless WordPress with Next.js or Nuxt frontends",
      "Performance tuning — caching, image optimization, lazy loading",
      "Security hardening and regular update strategy",
    ],
    deliverables: [
      "Custom theme and any required plugins, in your repo",
      "Editor documentation for your team",
      "Page-speed audit results before and after",
      "Security checklist and backup strategy",
    ],
    tools: [
      "WordPress",
      "WooCommerce",
      "ACF",
      "PHP",
      "MySQL",
      "Next.js",
      "WP REST API",
    ],
    accent: "from-blue-600 to-indigo-600",
  },
  {
    slug: "maintenance-and-support",
    iconKey: "maintenance",
    title: "Maintenance & Support",
    shortDescription:
      "Bug fixes, performance tuning, security patches and feature iteration on existing Laravel/Next.js codebases.",
    longDescription:
      "When you inherit a codebase that needs care, I jump in and ship fixes, patches, and iterative improvements. Comfortable working in unfamiliar Laravel, Next.js, Vue, or WordPress codebases — figuring out the patterns the original team used and keeping things consistent rather than rewriting from scratch.",
    features: [
      "Bug triage, reproduction, and fix with tests",
      "Performance audits — slow queries, N+1s, frontend bottlenecks",
      "Security patches and dependency upgrades",
      "Feature iteration on existing codebases",
      "Refactoring legacy code without changing behavior",
      "On-call retainer for critical apps",
    ],
    deliverables: [
      "Monthly or per-task reports with what was fixed and why",
      "Pull requests with clear descriptions and tests",
      "Updated dependency manifest and changelog",
      "Recommendations for what to address next",
    ],
    tools: [
      "Laravel",
      "Next.js",
      "Vue",
      "WordPress",
      "MySQL",
      "Sentry",
      "GitHub",
    ],
    accent: "from-rose-500 to-red-500",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
