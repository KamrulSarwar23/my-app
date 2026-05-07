export type Locale = "en" | "bn";

export const locales: Locale[] = ["en", "bn"];

const translationsData = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      blog: "Blog",
      cv: "CV",
      downloadCv: "Download CV",
      hireMe: "Hire Me",
      toggleMenu: "Toggle menu",
    },
    hero: {
      available: "Available for new opportunities",
      greeting: "Hi, I'm",
      name: "Kamrul Hasan",
      role: "Full Stack Web Developer.",
      description:
        "I design and build dynamic, responsive web applications with Laravel, Vue.js, React & Next.js — focused on user-friendly, secure, and scalable solutions.",
      viewProjects: "View Projects",
      downloadCv: "Download CV",
      github: "GitHub",
      stats: {
        years: { value: "3+", label: "Years Exp." },
        projects: { value: "15+", label: "Projects" },
        stack: { value: "Full", label: "Stack" },
      },
    },
    about: {
      eyebrow: "About Me",
      title: "A bit about my journey",
      p1Prefix: "I'm a dedicated and skilled",
      p1Highlight: "Full Stack Web Developer",
      p1Suffix:
        "with 3 years of hands-on experience designing, developing, and maintaining dynamic and responsive websites and web applications.",
      p2Prefix: "I focus on delivering",
      p2HighlightA: "user-friendly",
      p2HighlightB: "secure",
      p2HighlightC: "scalable",
      p2Suffix:
        "solutions — from e-commerce sites and library management systems to jobs portals, blogs, real estate auctions, and construction management platforms.",
      p3Prefix: "I currently work at",
      p3Highlight: "Iconic Solutions PVT. Ltd",
      p3Suffix:
        "where I've shipped 12–15+ client projects and customized front-end and back-end features to fit each client's needs.",
      quickInfo: "Quick Info",
      stats: {
        years: { value: "3+", label: "Years" },
        projects: { value: "15+", label: "Projects" },
        clients: { value: "12+", label: "Happy Clients" },
      },
      info: {
        location: { label: "Location", value: "Bangladesh" },
        experience: { label: "Experience", value: "3+ Years" },
        education: { label: "Education", value: "MBA · BBA" },
        languages: { label: "Languages", value: "EN · BN · HI" },
        email: { label: "Email", value: "kamrulsarwar99@gmail.com" },
        phone: { label: "Phone", value: "+880 1646-669099" },
      },
    },
    services: {
      eyebrow: "What I do",
      title: "Services I offer",
      description:
        "From idea to deployment — I help teams and founders ship modern web products that scale.",
      items: {
        fullstack: {
          title: "Full Stack Development",
          description:
            "End-to-end web apps with Laravel, React, Next.js & Vue — auth, dashboards, REST APIs, and database design.",
        },
        ecommerce: {
          title: "E-Commerce Solutions",
          description:
            "Multi-vendor marketplaces, single-store shops, payments, carts, inventory and admin dashboards.",
        },
        api: {
          title: "API & Integration",
          description:
            "REST API development, third-party integrations, payment gateways, AI/automation hooks, and webhooks.",
        },
        ui: {
          title: "Responsive UI Design",
          description:
            "Modern, mobile-first interfaces with Tailwind CSS and ShadCN — accessible, fast, and pixel-perfect.",
        },
        cloud: {
          title: "Cloud & DevOps",
          description:
            "Deploy to AWS (EC2, S3, RDS), CI/CD pipelines with GitHub Actions, Dockerized environments and cPanel.",
        },
        maintenance: {
          title: "Maintenance & Support",
          description:
            "Bug fixes, performance tuning, security patches and feature iteration on existing Laravel/Next.js codebases.",
        },
        ai: {
          title: "AI Features & Integrations",
          description:
            "Ship LLM-powered features with OpenAI, Claude, and Gemini — chat assistants, RAG pipelines, agent workflows, and n8n automations wired into your product.",
        },
        wordpress: {
          title: "WordPress Development",
          description:
            "Custom themes, plugins, WooCommerce stores, ACF-driven content, REST/Headless setups — performance-tuned, secure, and SEO-ready.",
        },
      },
    },
    skills: {
      eyebrow: "Skills",
      title: "The tools I work with",
      description:
        "A curated stack I use daily to ship reliable, modern web products.",
      groups: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        devops: "DevOps & Cloud",
        tools: "Tools & Other",
        ai: "AI & Automation",
      },
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected work",
      description:
        "A handful of projects I've built recently — production apps, client work and side projects.",
      backend: "Backend",
      frontend: "Frontend",
      sourceCode: "Source Code",
      liveLink: "Live Link",
      items: {
        ecommerce: {
          title: "Laravel & React E-commerce",
          description:
            "A full-featured e-commerce platform with product management, cart, checkout, and admin dashboard. Built with a Laravel API and a React front-end.",
        },
        construction: {
          title: "Construction Project",
          description:
            "A construction company management website for showcasing projects, services, and inquiries. Decoupled architecture with Laravel API + React UI.",
        },
        auction: {
          title: "Real Estate Auction",
          description:
            "A real estate auction platform built with Laravel + Inertia + Vue.js. Real-time bidding, listings, and user management.",
        },
        multivendor: {
          title: "Multi Vendor E-commerce",
          description:
            "A complete multi-vendor marketplace built with Laravel — vendor onboarding, product listing, orders, payments and a powerful admin panel.",
        },
        jobs: {
          title: "Jobs Portal",
          description:
            "A jobs portal where companies post jobs and candidates apply. Includes search, filters, profiles, and applications management.",
        },
        library: {
          title: "Library Management",
          description:
            "A library management system to manage books, members, and borrowing — with admin reports and a clean, easy-to-use interface.",
        },
      },
    },
    experience: {
      eyebrow: "Experience & Education",
      title: "My background",
      workTitle: "Work Experience",
      educationTitle: "Education",
      work: {
        role: "Full Stack Web Developer",
        company: "Iconic Solutions PVT. Ltd",
        period: "2023 — Present",
        description:
          "Building production web applications for clients across e-commerce, jobs portals, library management, blogs, real estate auctions, and construction. Customizing front-end and back-end features to fit each client's needs. Shipped 12–15+ projects.",
      },
      education: [
        {
          degree: "Master of Business Administration (MBA)",
          school: "Govt. Commerce College, Chattogram",
          period: "2022 — 2023",
        },
        {
          degree: "Bachelor of Business Administration (BBA)",
          school: "National University",
          period: "2016 — 2020",
        },
        {
          degree: "Laravel & Vue.js Web Development",
          school: "Ostad Ltd (Batch 2)",
          period: "Course",
        },
        {
          degree: "React.js & Next.js Course",
          school: "Learn With Sumit (Batch 3)",
          period: "Course",
        },
      ],
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Let's build something together",
      description:
        "Have a project in mind, a role to fill, or just want to say hi? My inbox is always open.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline:
        "Full Stack Web Developer crafting modern, responsive and scalable web experiences.",
      quickLinks: "Quick Links",
      servicesHeading: "Services",
      getInTouch: "Get in Touch",
      followMe: "Follow Me",
      backToTop: "Back to top",
      location: "Bangladesh",
    },
    theme: {
      toLight: "Switch to light mode",
      toDark: "Switch to dark mode",
    },
    language: {
      label: "Language",
      en: "English",
      bn: "Bangla",
    },
  },

  bn: {
    nav: {
      home: "হোম",
      about: "পরিচিতি",
      services: "সেবা",
      skills: "দক্ষতা",
      projects: "প্রজেক্ট",
      experience: "অভিজ্ঞতা",
      contact: "যোগাযোগ",
      blog: "ব্লগ",
      cv: "সিভি",
      downloadCv: "সিভি ডাউনলোড",
      hireMe: "হায়ার করুন",
      toggleMenu: "মেনু খুলুন",
    },
    hero: {
      available: "নতুন সুযোগের জন্য উপলব্ধ",
      greeting: "আসসালামু আলাইকুম, আমি",
      name: "কামরুল হাসান",
      role: "ফুল স্ট্যাক ওয়েব ডেভেলপার।",
      description:
        "আমি Laravel, Vue.js, React ও Next.js দিয়ে গতিশীল ও রেসপনসিভ ওয়েব অ্যাপ্লিকেশন ডিজাইন ও তৈরি করি — ব্যবহারকারী-বান্ধব, নিরাপদ এবং স্কেলযোগ্য সমাধানের উপর গুরুত্ব দিয়ে।",
      viewProjects: "প্রজেক্ট দেখুন",
      downloadCv: "সিভি ডাউনলোড",
      github: "গিটহাব",
      stats: {
        years: { value: "৩+", label: "বছরের অভিজ্ঞতা" },
        projects: { value: "১৫+", label: "প্রজেক্ট" },
        stack: { value: "ফুল", label: "স্ট্যাক" },
      },
    },
    about: {
      eyebrow: "আমার সম্পর্কে",
      title: "আমার যাত্রার কিছু কথা",
      p1Prefix: "আমি একজন নিবেদিতপ্রাণ ও দক্ষ",
      p1Highlight: "ফুল স্ট্যাক ওয়েব ডেভেলপার",
      p1Suffix:
        " — গতিশীল ও রেসপনসিভ ওয়েবসাইট এবং অ্যাপ্লিকেশন ডিজাইন, ডেভেলপ ও মেইনটেন করার ৩ বছরের বাস্তব অভিজ্ঞতা রয়েছে।",
      p2Prefix: "আমি",
      p2HighlightA: "ব্যবহারকারী-বান্ধব",
      p2HighlightB: "নিরাপদ",
      p2HighlightC: "স্কেলযোগ্য",
      p2Suffix:
        "সমাধান প্রদানের উপর গুরুত্ব দিই — ই-কমার্স, লাইব্রেরি ম্যানেজমেন্ট, জব পোর্টাল, ব্লগ, রিয়েল এস্টেট অকশন থেকে শুরু করে কনস্ট্রাকশন ম্যানেজমেন্ট পর্যন্ত।",
      p3Prefix: "বর্তমানে আমি",
      p3Highlight: "Iconic Solutions PVT. Ltd",
      p3Suffix:
        "-এ কাজ করছি, যেখানে ১২–১৫+ ক্লায়েন্ট প্রজেক্ট ডেলিভার করেছি এবং প্রতিটি ক্লায়েন্টের প্রয়োজন অনুযায়ী ফ্রন্ট-এন্ড ও ব্যাক-এন্ড ফিচার কাস্টমাইজ করেছি।",
      quickInfo: "দ্রুত তথ্য",
      stats: {
        years: { value: "৩+", label: "বছর" },
        projects: { value: "১৫+", label: "প্রজেক্ট" },
        clients: { value: "১২+", label: "ক্লায়েন্ট" },
      },
      info: {
        location: { label: "অবস্থান", value: "বাংলাদেশ" },
        experience: { label: "অভিজ্ঞতা", value: "৩+ বছর" },
        education: { label: "শিক্ষা", value: "এমবিএ · বিবিএ" },
        languages: { label: "ভাষা", value: "EN · BN · HI" },
        email: { label: "ইমেইল", value: "kamrulsarwar99@gmail.com" },
        phone: { label: "ফোন", value: "+880 1646-669099" },
      },
    },
    services: {
      eyebrow: "আমি যা করি",
      title: "আমার সেবাসমূহ",
      description:
        "আইডিয়া থেকে ডিপ্লয়মেন্ট পর্যন্ত — আমি টিম ও ফাউন্ডারদের আধুনিক, স্কেলযোগ্য ওয়েব প্রোডাক্ট তৈরিতে সহায়তা করি।",
      items: {
        fullstack: {
          title: "ফুল স্ট্যাক ডেভেলপমেন্ট",
          description:
            "Laravel, React, Next.js ও Vue দিয়ে এন্ড-টু-এন্ড ওয়েব অ্যাপ — অথ, ড্যাশবোর্ড, REST API এবং ডাটাবেস ডিজাইন।",
        },
        ecommerce: {
          title: "ই-কমার্স সমাধান",
          description:
            "মাল্টি-ভেন্ডর মার্কেটপ্লেস, সিঙ্গেল-স্টোর শপ, পেমেন্ট, কার্ট, ইনভেন্টরি ও অ্যাডমিন ড্যাশবোর্ড।",
        },
        api: {
          title: "API ও ইন্টিগ্রেশন",
          description:
            "REST API ডেভেলপমেন্ট, থার্ড-পার্টি ইন্টিগ্রেশন, পেমেন্ট গেটওয়ে, AI/অটোমেশন হুক ও ওয়েবহুক।",
        },
        ui: {
          title: "রেসপনসিভ UI ডিজাইন",
          description:
            "Tailwind CSS ও ShadCN দিয়ে আধুনিক, মোবাইল-ফার্স্ট ইন্টারফেস — অ্যাক্সেসিবল, দ্রুত ও পিক্সেল-পারফেক্ট।",
        },
        cloud: {
          title: "ক্লাউড ও DevOps",
          description:
            "AWS (EC2, S3, RDS)-এ ডিপ্লয়মেন্ট, GitHub Actions দিয়ে CI/CD পাইপলাইন, Docker এনভায়রনমেন্ট ও cPanel।",
        },
        maintenance: {
          title: "রক্ষণাবেক্ষণ ও সাপোর্ট",
          description:
            "বিদ্যমান Laravel/Next.js কোডবেসে বাগ ফিক্স, পারফরম্যান্স টিউনিং, সিকিউরিটি প্যাচ ও নতুন ফিচার সংযোজন।",
        },
        ai: {
          title: "AI ফিচার ও ইন্টিগ্রেশন",
          description:
            "OpenAI, Claude ও Gemini দিয়ে LLM-চালিত ফিচার তৈরি — চ্যাট অ্যাসিস্ট্যান্ট, RAG পাইপলাইন, এজেন্ট ওয়ার্কফ্লো এবং n8n অটোমেশন আপনার প্রোডাক্টে যুক্ত করি।",
        },
        wordpress: {
          title: "WordPress ডেভেলপমেন্ট",
          description:
            "কাস্টম থিম, প্লাগইন, WooCommerce স্টোর, ACF-নির্ভর কন্টেন্ট ও REST/Headless সেটআপ — পারফরম্যান্স-অপ্টিমাইজড, নিরাপদ ও SEO-ফ্রেন্ডলি।",
        },
      },
    },
    skills: {
      eyebrow: "দক্ষতা",
      title: "আমি যেসব টুল ব্যবহার করি",
      description:
        "নির্ভরযোগ্য, আধুনিক ওয়েব প্রোডাক্ট তৈরিতে প্রতিদিন যে স্ট্যাক ব্যবহার করি।",
      groups: {
        frontend: "ফ্রন্টএন্ড",
        backend: "ব্যাকএন্ড",
        database: "ডাটাবেস",
        devops: "DevOps ও ক্লাউড",
        tools: "টুল ও অন্যান্য",
        ai: "AI ও অটোমেশন",
      },
    },
    projects: {
      eyebrow: "প্রজেক্ট",
      title: "নির্বাচিত কাজ",
      description:
        "সাম্প্রতিক কিছু প্রজেক্ট — প্রোডাকশন অ্যাপ, ক্লায়েন্ট প্রজেক্ট ও সাইড প্রজেক্ট।",
      backend: "ব্যাকএন্ড",
      frontend: "ফ্রন্টএন্ড",
      sourceCode: "সোর্স কোড",
      liveLink: "লাইভ লিংক",
      items: {
        ecommerce: {
          title: "Laravel ও React ই-কমার্স",
          description:
            "প্রোডাক্ট ম্যানেজমেন্ট, কার্ট, চেকআউট ও অ্যাডমিন ড্যাশবোর্ডসহ একটি পূর্ণাঙ্গ ই-কমার্স প্ল্যাটফর্ম। Laravel API ও React ফ্রন্ট-এন্ড দিয়ে তৈরি।",
        },
        construction: {
          title: "কনস্ট্রাকশন প্রজেক্ট",
          description:
            "প্রজেক্ট, সেবা ও ইনকোয়ারি প্রদর্শনের জন্য একটি কনস্ট্রাকশন কোম্পানির ওয়েবসাইট। Laravel API + React UI ব্যবহার করে ডিকাপলড আর্কিটেকচার।",
        },
        auction: {
          title: "রিয়েল এস্টেট অকশন",
          description:
            "Laravel + Inertia + Vue.js দিয়ে তৈরি একটি রিয়েল এস্টেট অকশন প্ল্যাটফর্ম। রিয়েল-টাইম বিডিং, লিস্টিং ও ইউজার ম্যানেজমেন্ট।",
        },
        multivendor: {
          title: "মাল্টি ভেন্ডর ই-কমার্স",
          description:
            "Laravel দিয়ে তৈরি একটি সম্পূর্ণ মাল্টি-ভেন্ডর মার্কেটপ্লেস — ভেন্ডর অনবোর্ডিং, প্রোডাক্ট লিস্টিং, অর্ডার, পেমেন্ট ও শক্তিশালী অ্যাডমিন প্যানেল।",
        },
        jobs: {
          title: "জব পোর্টাল",
          description:
            "একটি জব পোর্টাল যেখানে কোম্পানি জব পোস্ট করে এবং প্রার্থীরা আবেদন করেন। সার্চ, ফিল্টার, প্রোফাইল ও অ্যাপ্লিকেশন ম্যানেজমেন্টসহ।",
        },
        library: {
          title: "লাইব্রেরি ম্যানেজমেন্ট",
          description:
            "বই, সদস্য ও ধার-নেওয়া পরিচালনার একটি লাইব্রেরি ম্যানেজমেন্ট সিস্টেম — অ্যাডমিন রিপোর্ট ও পরিচ্ছন্ন, ব্যবহার-বান্ধব ইন্টারফেসসহ।",
        },
      },
    },
    experience: {
      eyebrow: "অভিজ্ঞতা ও শিক্ষা",
      title: "আমার ব্যাকগ্রাউন্ড",
      workTitle: "কর্ম অভিজ্ঞতা",
      educationTitle: "শিক্ষা",
      work: {
        role: "ফুল স্ট্যাক ওয়েব ডেভেলপার",
        company: "Iconic Solutions PVT. Ltd",
        period: "২০২৩ — চলমান",
        description:
          "ই-কমার্স, জব পোর্টাল, লাইব্রেরি ম্যানেজমেন্ট, ব্লগ, রিয়েল এস্টেট অকশন ও কনস্ট্রাকশনসহ বিভিন্ন ক্লায়েন্টের জন্য প্রোডাকশন ওয়েব অ্যাপ্লিকেশন তৈরি করছি। প্রতিটি ক্লায়েন্টের প্রয়োজন অনুযায়ী ফ্রন্ট-এন্ড ও ব্যাক-এন্ড ফিচার কাস্টমাইজ করেছি। ১২–১৫+ প্রজেক্ট ডেলিভার করা হয়েছে।",
      },
      education: [
        {
          degree: "মাস্টার অব বিজনেস অ্যাডমিনিস্ট্রেশন (MBA)",
          school: "সরকারি কমার্স কলেজ, চট্টগ্রাম",
          period: "২০২২ — ২০২৩",
        },
        {
          degree: "ব্যাচেলর অব বিজনেস অ্যাডমিনিস্ট্রেশন (BBA)",
          school: "ন্যাশনাল ইউনিভার্সিটি",
          period: "২০১৬ — ২০২০",
        },
        {
          degree: "Laravel ও Vue.js ওয়েব ডেভেলপমেন্ট",
          school: "Ostad Ltd (ব্যাচ ২)",
          period: "কোর্স",
        },
        {
          degree: "React.js ও Next.js কোর্স",
          school: "Learn With Sumit (ব্যাচ ৩)",
          period: "কোর্স",
        },
      ],
    },
    contact: {
      eyebrow: "যোগাযোগ করুন",
      title: "চলুন একসাথে কিছু তৈরি করি",
      description:
        "মাথায় কোনো প্রজেক্ট আছে, কাউকে নিয়োগ দিতে চান, নাকি শুধুই হাই বলতে চান? আমার ইনবক্স সবসময় খোলা।",
    },
    footer: {
      rights: "সর্বস্বত্ব সংরক্ষিত।",
      tagline:
        "আধুনিক, রেসপনসিভ ও স্কেলযোগ্য ওয়েব অভিজ্ঞতা তৈরি করেন এমন একজন ফুল স্ট্যাক ওয়েব ডেভেলপার।",
      quickLinks: "দ্রুত লিংক",
      servicesHeading: "সেবা",
      getInTouch: "যোগাযোগ",
      followMe: "ফলো করুন",
      backToTop: "উপরে যান",
      location: "বাংলাদেশ",
    },
    theme: {
      toLight: "লাইট মোডে যান",
      toDark: "ডার্ক মোডে যান",
    },
    language: {
      label: "ভাষা",
      en: "English",
      bn: "বাংলা",
    },
  },
};

export type Translations = typeof translationsData.en;
export const translations: Record<Locale, Translations> = translationsData;
