export type ProjectRepo = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  stack: string[];
  repos: ProjectRepo[];
  accent: string;
  icon: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "laravel-react-ecommerce",
    title: "Laravel & React E-commerce",
    shortDescription:
      "A full-featured e-commerce platform with product management, cart, checkout, and admin dashboard. Built with a Laravel API and a React front-end.",
    longDescription:
      "A production e-commerce platform built as a decoupled Laravel API + React SPA. The backend handles authentication, product catalog, orders, payments, and a complete admin dashboard with role-based access. The React front-end consumes a JSON API and ships a smooth shopping experience — product browsing, search, filters, cart, checkout, and order tracking.",
    features: [
      "Decoupled architecture: Laravel API + React SPA",
      "Sanctum-based authentication for customers and admins",
      "Product catalog with categories, attributes, search and filters",
      "Cart, checkout, and order management with payment integration",
      "Admin dashboard with role-based permissions and reporting",
      "Image uploads, inventory tracking, and order status workflows",
    ],
    stack: ["Laravel", "React", "MySQL", "REST API", "Tailwind CSS"],
    repos: [
      {
        label: "Backend",
        href: "https://github.com/KamrulSarwar23/laravel_react_ecommerce_backend",
      },
      {
        label: "Frontend",
        href: "https://github.com/KamrulSarwar23/laravel_react_ecommerce_frontend",
      },
    ],
    accent: "from-blue-500 to-cyan-500",
    icon: "🛍️",
    image: "/project-01.jpg",
  },
  {
    slug: "construction-project",
    title: "Construction Project",
    shortDescription:
      "A construction company management website for showcasing projects, services, and inquiries. Decoupled architecture with Laravel API + React UI.",
    longDescription:
      "A modern web platform for a construction company to showcase projects, services, and capabilities — built as a Laravel API and React front-end. Includes a CMS-style admin panel for managing project portfolios, services, team members, and client inquiries with media uploads and SEO-friendly pages.",
    features: [
      "Project portfolio with image galleries and case studies",
      "Service catalog with details and inquiry forms",
      "Lead capture forms with email notifications",
      "Admin dashboard for content management and inquiry tracking",
      "Responsive React UI tuned for marketing pages",
    ],
    stack: ["Laravel", "React", "MySQL", "Tailwind CSS"],
    repos: [
      {
        label: "Backend",
        href: "https://github.com/KamrulSarwar23/laravel_react_construction_backend",
      },
      {
        label: "Frontend",
        href: "https://github.com/KamrulSarwar23/laravel_react_construction_frontend",
      },
    ],
    accent: "from-amber-500 to-orange-500",
    icon: "🏗️",
    image: "/project-02.jpg",
  },
  {
    slug: "multi-vendor-ecommerce",
    title: "Multi Vendor E-commerce",
    shortDescription:
      "A complete multi-vendor marketplace built with Laravel — vendor onboarding, product listing, orders, payments and a powerful admin panel.",
    longDescription:
      "A multi-vendor marketplace where independent sellers register, manage their stores, list products, and fulfill orders. Three roles work together — admins moderate the platform, vendors run their shops, and customers browse and buy. Built as a monolithic Laravel application with Blade templates.",
    features: [
      "Three-role system: admin, vendor, customer",
      "Vendor onboarding, store profiles, and product catalog",
      "Order routing and split-payment to vendors",
      "Admin moderation, commission management, and reporting",
      "Customer-facing storefront with cart and checkout",
    ],
    stack: ["Laravel", "Blade", "MySQL", "Bootstrap"],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/KamrulSarwar23/Multi-Vendor-Ecommerce",
      },
    ],
    accent: "from-purple-500 to-pink-500",
    icon: "🛒",
    image: "/project-03.jpg",
  },
  {
    slug: "jobs-portal",
    title: "Jobs Portal",
    shortDescription:
      "A jobs portal where companies post jobs and candidates apply. Includes search, filters, profiles, and applications management.",
    longDescription:
      "A two-sided jobs portal connecting employers and candidates. Companies create profiles and post openings; candidates browse, filter, and apply with their CV. The admin side moderates listings and tracks platform metrics.",
    features: [
      "Company and candidate profiles with separate dashboards",
      "Job posting with categories, locations, and tags",
      "Search and filters by location, category, and experience",
      "Application tracking on both sides",
      "Email notifications for new applications and status changes",
    ],
    stack: ["Laravel", "Bootstrap", "MySQL"],
    repos: [
      { label: "Source code", href: "https://github.com/KamrulSarwar23/Job-Pulse" },
    ],
    accent: "from-rose-500 to-red-500",
    icon: "💼",
    image: "/project-04.jpg",
  },
  {
    slug: "library-management",
    title: "Library Management",
    shortDescription:
      "A library management system to manage books, members, and borrowing — with admin reports and a clean, easy-to-use interface.",
    longDescription:
      "A library management system that handles the full borrow-and-return lifecycle: book inventory, member registration, loan tracking, fines, and reports. Designed for small libraries and educational institutions to digitize their workflow.",
    features: [
      "Book catalog with categories, copies, and availability tracking",
      "Member registration and membership renewals",
      "Borrow / return workflow with due-date and fine calculation",
      "Admin reports — most-borrowed books, active members, overdue items",
      "Search by title, author, ISBN, or category",
    ],
    stack: ["Laravel", "MySQL", "Bootstrap"],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/KamrulSarwar23/librarymanage",
      },
    ],
    accent: "from-indigo-500 to-violet-500",
    icon: "📚",
    image: "/project-05.jpg",
  },
  {
    slug: "inventory-management",
    title: "Inventory Management",
    shortDescription:
      "A web-based inventory management system to track stock, suppliers, purchases, and sales — with reports and low-stock alerts.",
    longDescription:
      "An inventory management system for small businesses to track stock movements end-to-end: purchases, sales, supplier management, and stock adjustments. Real-time stock levels, low-stock alerts, and reports help owners make better restocking decisions.",
    features: [
      "Product catalog with SKUs, categories, and stock levels",
      "Purchase orders, sales records, and supplier management",
      "Stock movement history and adjustments",
      "Low-stock alerts and reorder thresholds",
      "Reports — sales, purchases, top products, and stock valuation",
    ],
    stack: ["Laravel", "MySQL", "Bootstrap"],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/KamrulSarwar23/inventory-management",
      },
    ],
    accent: "from-emerald-500 to-teal-500",
    icon: "📦",
    image: "/project-06.jpg",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
