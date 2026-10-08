import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tesla,
  shopify,
  medical,
  amazon,
  portfolio,
  shoptop,
  freelance,
  yaadgarpal,
  aisummary,
} from "../assets";

export const personalInfo = {
  name: "Gaurav Kumar",
  title: "Software Engineer • Full-Stack Engineer • AI Builder",
  currentRole: "SDE @ MentisPrep",
  location: "Bihar, India 🇮🇳",
  email: "gauravkumar1raj@gmail.com",
  phone: "+91 9128937435",
  github: "https://github.com/gaurav01kumar",
  linkedin: "https://linkedin.com/in/gauravkumar-5190a320a",
  portfolio: "https://64d480aa681b88303120f25f--dulcet-monstera-e97772.netlify.app",
  yearsExperience: "3+",
  summary:
    "Full-Stack Software Engineer with 3+ years of professional experience building and deploying production-grade applications. Specializing in Node.js, React.js, Microservices, AWS, REST APIs, databases, and scalable SaaS systems. Currently working as an SDE at MentisPrep, taking complete ownership across architecture, development, testing, deployment, and production monitoring.",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "architecture", title: "Architecture" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "principles", title: "Philosophy" },
  { id: "contact", title: "Contact" },
];

export const engineeringPillars = [
  {
    title: "Microservices & Backend",
    subtitle: "Node.js • Express • REST APIs",
    description:
      "Designing distributed Node.js microservices, optimizing database queries, implementing caching strategies, and reducing API response times by up to 30%.",
    icon: backend,
    tag: "Core Backend",
  },
  {
    title: "Modern Frontend Systems",
    subtitle: "React.js • Next.js • React Native",
    description:
      "Crafting performant, component-driven user interfaces with clean state management, modular design systems, and responsive web & mobile experiences.",
    icon: web,
    tag: "Frontend & UI",
  },
  {
    title: "Cloud Infrastructure & DevOps",
    subtitle: "AWS (EC2, ALB) • Docker • CI/CD",
    description:
      "Deploying scalable cloud environments on AWS with EC2, Load Balancing, Docker containerization, VPS configurations, and proactive production monitoring.",
    icon: creator,
    tag: "Cloud & Ops",
  },
  {
    title: "AI & Autonomous Agents",
    subtitle: "Generative AI • Multi-Agent • Tool Use",
    description:
      "Building practical AI systems that move beyond simple chatbots — reasoning, tool execution, multi-agent coordination, and in-workflow browser extensions like WriteMate AI.",
    icon: mobile,
    tag: "AI & Agents",
  },
];

export const architecturePipeline = [
  {
    step: "01",
    phase: "Requirement & Analysis",
    description: "Deconstructing product intent, defining edge cases, and mapping business logic to measurable engineering requirements.",
    focus: "Problem Discovery & Scope",
  },
  {
    step: "02",
    phase: "Technical Design",
    description: "Drafting RFCs, data models, API contracts, caching schemes, and authentication/authorization boundaries.",
    focus: "Contracts & Data Models",
  },
  {
    step: "03",
    phase: "System Architecture",
    description: "Decoupling microservices, choosing storage engines (PostgreSQL/MongoDB), and planning distributed communication patterns.",
    focus: "Distributed Structure",
  },
  {
    step: "04",
    phase: "Full-Stack Implementation",
    description: "Developing robust Node.js microservices and interactive React/Next.js interfaces with strict type-safety and unit testing.",
    focus: "Clean, Maintainable Code",
  },
  {
    step: "05",
    phase: "Testing & Validation",
    description: "Unit testing, integration testing, cross-browser validation, and load simulation before any artifact reaches staging.",
    focus: "Reliability & Integrity",
  },
  {
    step: "06",
    phase: "Cloud Deployment",
    description: "Deploying to AWS using EC2, Application Load Balancers, automated CI/CD pipelines, and health checks.",
    focus: "AWS Scalability & Zero-Downtime",
  },
  {
    step: "07",
    phase: "Monitoring & Optimization",
    description: "Live telemetry, error tracking, query optimization, caching layer tuning, and iterative performance hardening.",
    focus: "Telemetry & 30%+ Performance Gains",
  },
];

export const agenticLifecycle = [
  { step: "Understand", desc: "Ingests user context, system state & business intent" },
  { step: "Reason", desc: "Breaks problem down into logical execution phases" },
  { step: "Plan", desc: "Selects optimal pathways, data sources & tool dependencies" },
  { step: "Use Tools", desc: "Calls APIs, databases, browser DOM & computation layers" },
  { step: "Execute", desc: "Applies changes, verifies integrity & triggers workflows" },
  { step: "Evaluate", desc: "Validates output against expectations & edge cases" },
  { step: "Improve", desc: "Iterates feedback loops for progressive refinement" },
];

export const skillCategories = [
  {
    category: "Backend & Microservices",
    description: "Distributed architectures, scalable APIs, and performance-tuned services",
    skills: [
      { name: "Node.js", level: "Expert", experience: "3+ years", icon: nodejs },
      { name: "Express.js", level: "Expert", experience: "3+ years", icon: nodejs },
      { name: "Microservices", level: "Advanced", experience: "Production", icon: backend },
      { name: "REST APIs", level: "Expert", experience: "3+ years", icon: backend },
      { name: "Java & Spring Boot", level: "Proficient", experience: "Production APIs", icon: backend },
      { name: "Python & Django", level: "Proficient", experience: "AI & Scripts", icon: backend },
      { name: "Laravel & PHP", level: "Proficient", experience: "1+ year", icon: web },
      { name: "WebSockets", level: "Advanced", experience: "Real-time apps", icon: web },
    ],
  },
  {
    category: "Frontend & Mobile",
    description: "Modern component architectures, state management, and responsive interfaces",
    skills: [
      { name: "React.js", level: "Expert", experience: "3+ years", icon: reactjs },
      { name: "Next.js", level: "Advanced", experience: "Full-Stack", icon: reactjs },
      { name: "TypeScript", level: "Advanced", experience: "Type-Safe", icon: typescript },
      { name: "JavaScript (ES6+)", level: "Expert", experience: "3+ years", icon: javascript },
      { name: "React Native", level: "Proficient", experience: "Mobile UI", icon: mobile },
      { name: "Tailwind CSS", level: "Expert", experience: "Design Systems", icon: tailwind },
      { name: "Redux Toolkit", level: "Advanced", experience: "State Sync", icon: redux },
      { name: "HTML5 & CSS3", level: "Expert", experience: "Standards", icon: html },
    ],
  },
  {
    category: "Cloud, DevOps & Databases",
    description: "Reliable cloud environments, data modeling, and automated pipelines",
    skills: [
      { name: "AWS (EC2, ALB)", level: "Advanced", experience: "Production Hosting", icon: creator },
      { name: "PostgreSQL", level: "Advanced", experience: "Relational/ACID", icon: backend },
      { name: "MongoDB", level: "Advanced", experience: "NoSQL/Aggregations", icon: mongodb },
      { name: "MySQL", level: "Advanced", experience: "Relational", icon: backend },
      { name: "Docker", level: "Proficient", experience: "Containerization", icon: docker },
      { name: "Linux & Bash", level: "Advanced", experience: "Server Admin", icon: backend },
      { name: "Git & CI/CD", level: "Expert", experience: "Version Flow", icon: git },
      { name: "Caching (Redis)", level: "Advanced", experience: "Latency Cut", icon: backend },
    ],
  },
  {
    category: "AI & Autonomous Systems",
    description: "Applied generative AI, multi-agent orchestration, and developer tooling",
    skills: [
      { name: "AI Agents", level: "Advanced", experience: "Autonomous Tasks", icon: mobile },
      { name: "Multi-Agent Systems", level: "Advanced", experience: "Cooperative Workflows", icon: mobile },
      { name: "Generative AI & LLMs", level: "Advanced", experience: "OpenAI / Claude APIs", icon: mobile },
      { name: "RAG & Embeddings", level: "Proficient", experience: "Context Retrieval", icon: backend },
      { name: "Browser Extensions", level: "Advanced", experience: "WriteMate AI Engine", icon: web },
      { name: "AI Automation", level: "Advanced", experience: "Workflow Pipelines", icon: creator },
    ],
  },
];

export const engineeringFocus = [
  { area: "Full-Stack Web Engineering", percent: 96, highlight: "Complete feature ownership from React to Node & Cloud" },
  { area: "Backend & Microservices", percent: 92, highlight: "Distributed systems, caching, RESTful contracts & auth" },
  { area: "React & Modern Frontend", percent: 90, highlight: "Interactive SPAs, state management & clean design systems" },
  { area: "System Design & Architecture", percent: 85, highlight: "Scalable SaaS architectures, data integrity & fault-tolerance" },
  { area: "Cloud Infrastructure (AWS)", percent: 82, highlight: "EC2, Load Balancers, Linux servers & deployment automation" },
  { area: "AI Engineering & Multi-Agents", percent: 84, highlight: "Agentic tool-use, browser workflows & LLM orchestration" },
];

export const experiences = [
  {
    title: "Software Engineer (SDE)",
    company_name: "MentisPrep",
    location: "US-based EdTech Startup",
    icon: tesla,
    iconBg: "#0f172a",
    date: "July 2025 – Present",
    current: true,
    points: [
      "Architect and implement scalable Node.js microservices powering production learning systems for a fast-growing US startup.",
      "Build dynamic, interactive learning interfaces using React.js, optimizing frontend performance and cross-device consistency.",
      "Manage AWS cloud infrastructure, provisioning and deploying services on EC2 instances with Application Load Balancing.",
      "Lead database performance optimization and data integrity across distributed services.",
      "Take end-to-end feature ownership through the full engineering lifecycle: Requirement → Technical Design → Architecture → Development → Testing → Deployment → Monitoring.",
      "Monitor production health, debug distributed telemetry issues, and ensure high system availability.",
    ],
    techStack: ["Node.js", "React.js", "Microservices", "AWS (EC2, ALB)", "REST APIs", "PostgreSQL", "System Design"],
  },
  {
    title: "SDE 1 / Software Engineer",
    company_name: "InfoCart Group",
    location: "E-Commerce & Scalable Web Systems",
    icon: freelance,
    iconBg: "#0f172a",
    date: "July 2024 – June 2025",
    current: false,
    points: [
      "Developed high-throughput full-stack web applications utilizing Node.js, Express.js, and React.js.",
      "Engineered backend microservices and API gateways using Node.js and Laravel PHP for high-traffic endpoints.",
      "Implemented comprehensive caching strategies and query tuning, successfully reducing API response times by approximately 30%.",
      "Worked extensively with MySQL and MongoDB databases, designing schemas and indexing strategies for optimized reads.",
      "Wrote modular, reusable components and robust unit test suites, actively mentoring through collaborative code reviews.",
      "Collaborated closely with product managers and designers to translate complex business specs into production-ready software.",
    ],
    techStack: ["Node.js", "Express.js", "React.js", "Laravel PHP", "MongoDB", "MySQL", "Caching", "REST APIs"],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Nonstandard Digital",
    location: "Digital Product Studio",
    icon: shopify,
    iconBg: "#0f172a",
    date: "March 2023 – July 2024",
    current: false,
    points: [
      "Engineered end-to-end full-stack web applications spanning responsive React frontends and Node.js backend services.",
      "Spearheaded legacy code refactoring initiatives, increasing overall system maintainability by approximately 25%.",
      "Built resilient RESTful APIs, handled third-party integrations, and implemented role-based authentication flows.",
      "Diagnosed and resolved critical production bugs while ensuring cross-browser stability and sub-second page loads.",
      "Collaborated with product designers to translate Figma design systems into pixel-perfect, accessible component libraries.",
    ],
    techStack: ["React.js", "Node.js", "JavaScript", "REST APIs", "Code Refactoring", "CSS3 / Tailwind"],
  },
  {
    title: "Web Developer",
    company_name: "SHOPTOP",
    location: "E-Commerce Solutions",
    icon: shoptop,
    iconBg: "#0f172a",
    date: "July 2022 – October 2022",
    current: false,
    points: [
      "Built responsive, interactive frontend catalog and filtering pages utilizing React.js, React Hooks, and CSS3.",
      "Created reusable React UI components and managed component lifecycles for dynamic shopping experiences.",
      "Gained deep foundational experience in component architecture, state lifting, and real-world frontend engineering workflows.",
    ],
    techStack: ["React.js", "React Hooks", "JavaScript", "HTML5", "CSS3", "Component Architecture"],
  },
];

export const projects = [
  {
    name: "WriteMate AI",
    category: "AI & Agents",
    tagline: "In-Context AI Writing Assistant Browser Extension",
    description:
      "A flagship personal AI project that embeds intelligent writing assistance directly inside the user's browser workflow (Gmail, LinkedIn, docs, messaging). Eliminates the friction of toggling back-and-forth between AI chatbots and active writing surfaces.",
    highlights: [
      "Context-aware writing assistance directly injected into contenteditable DOM elements",
      "Features: tone transformation, grammar polish, smart summarization, translation, and auto-reply generation",
      "Low-latency streaming architecture with custom prompt engineering and fallback modes",
    ],
    tags: [
      { name: "Browser Extension", color: "text-cyan-400" },
      { name: "AI Engineering", color: "text-purple-400" },
      { name: "JavaScript", color: "text-emerald-400" },
      { name: "LLM APIs", color: "text-amber-400" },
    ],
    image: aisummary,
    source_code_link: "https://github.com/gaurav01kumar",
    featured: true,
  },
  {
    name: "Yaadgarpal.com",
    category: "Full-Stack SaaS",
    tagline: "End-to-End Event Booking & Hotel Reservation Platform",
    description:
      "Full-stack event management and hotel booking web application with secure payment processing via Razorpay, real-time ticket reservations, vendor hotel onboarding, and comprehensive multi-role dashboards for administrators and sellers.",
    highlights: [
      "Architected backend using Node.js & Express with MongoDB aggregation pipelines for vendor inventory",
      "Integrated Razorpay pre-payment gateway with webhook signature verification",
      "Built administrative analytics portal for booking reconciliations and vendor payouts",
    ],
    tags: [
      { name: "React.js", color: "text-cyan-400" },
      { name: "Node.js", color: "text-emerald-400" },
      { name: "MongoDB", color: "text-green-400" },
      { name: "Razorpay", color: "text-blue-400" },
      { name: "Tailwind CSS", color: "text-teal-400" },
    ],
    image: yaadgarpal,
    source_code_link: "https://yaadgarpal.com",
    featured: true,
  },
  {
    name: "AI Exam Question Creator & Checker",
    category: "AI & Agents",
    tagline: "Autonomous Exam Paper Generator & Computer Vision Evaluator",
    description:
      "Engineered an automated educational assessment engine combining OpenAI LLM APIs and Google Cloud Vision API. Instructors can generate tailored question papers instantly, and handwritten student answer sheets are digitized and graded using multimodal AI.",
    highlights: [
      "Integrated Google Cloud Vision OCR for handwritten response parsing",
      "OpenAI prompt orchestration for rubric-based grading and customized difficulty levels",
      "Full-stack interface with Node.js, Express, MySQL, and React dashboard",
    ],
    tags: [
      { name: "OpenAI API", color: "text-purple-400" },
      { name: "Google Vision API", color: "text-blue-400" },
      { name: "Node.js", color: "text-emerald-400" },
      { name: "React.js", color: "text-cyan-400" },
      { name: "MySQL", color: "text-orange-400" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Gaurav01Kumar/Exam-Question-Creator-and-Checker",
    featured: true,
  },
  {
    name: "QuickAyur.com",
    category: "Full-Stack SaaS",
    tagline: "Ayurvedic Healthcare & Online Consultation Platform",
    description:
      "Production full-stack healthcare web platform enabling online Ayurvedic consultations, practitioner appointment booking, herbal wellness product catalog, and seamless patient care workflows.",
    highlights: [
      "Engineered end-to-end patient booking and doctor consultation scheduling flows",
      "Built resilient backend with Node.js, Express, and MongoDB with secure session management",
      "Implemented responsive patient portal and administrative health record dashboards",
    ],
    tags: [
      { name: "React.js", color: "text-cyan-400" },
      { name: "Node.js", color: "text-emerald-400" },
      { name: "MongoDB", color: "text-green-400" },
      { name: "Express.js", color: "text-purple-400" },
      { name: "Tailwind CSS", color: "text-teal-400" },
    ],
    image: medical,
    source_code_link: "https://github.com/Gaurav01Kumar/Mediplus",
    live_link: "https://quickayur.com",
    featured: true,
  },
  {
    name: "FinTech & Microfinance Banking System",
    category: "FinTech & Systems",
    tagline: "Enterprise Banking Workflows, Loan Lifecycles & KYC Engine",
    description:
      "Comprehensive system design and technical architecture for microfinance and retail banking. Models complex financial workflows: KYC verification, savings/current accounts, loan underwriting, EMI amortizations, automated disbursement schedules, and role-based staff portals.",
    highlights: [
      "ACID-compliant transaction logging and double-entry bookkeeping ledger models",
      "Automated EMI interest calculators with delinquency warnings and PDF digital passbooks",
      "Strict role-based access control (RBAC) across customers, loan officers, and branch managers",
    ],
    tags: [
      { name: "System Design", color: "text-amber-400" },
      { name: "FinTech Architecture", color: "text-cyan-400" },
      { name: "Node.js Microservices", color: "text-emerald-400" },
      { name: "PostgreSQL", color: "text-blue-400" },
    ],
    image: portfolio,
    source_code_link: "https://github.com/gaurav01kumar",
    featured: false,
  },
  {
    name: "AI SaaS Automation Suite",
    category: "AI & Agents",
    tagline: "RapidAPI-Powered Multitool SaaS Platform",
    description:
      "Modular AI SaaS platform integrating high-speed API microservices for automated article summarization, dynamic branding asset generation, and developer productivity utilities with responsive React interfaces.",
    highlights: [
      "Asynchronous request queuing with caching for repeated query acceleration",
      "Clean UI with customizable export formats (Markdown, PDF, JSON)",
    ],
    tags: [
      { name: "React.js", color: "text-cyan-400" },
      { name: "Express.js", color: "text-emerald-400" },
      { name: "RapidAPI", color: "text-purple-400" },
      { name: "Tailwind CSS", color: "text-teal-400" },
    ],
    image: aisummary,
    source_code_link: "https://github.com/Gaurav01Kumar/AI-Webpage",
    featured: false,
  },
  {
    name: "Amazon E-Commerce Architecture",
    category: "Full-Stack SaaS",
    tagline: "High-Performance Modular Marketplace Engine",
    description:
      "Full-featured e-commerce web platform replicating core Amazon consumer flows: product filtering, dynamic cart synchronization, user checkout workflows, and responsive storefront interactions.",
    highlights: [
      "Optimized client-side catalog state management for instantaneous filter updates",
      "Modular component design for checkout, reviews, and product recommendation shelves",
    ],
    tags: [
      { name: "React.js", color: "text-cyan-400" },
      { name: "REST APIs", color: "text-emerald-400" },
      { name: "CSS Grid", color: "text-pink-400" },
    ],
    image: amazon,
    source_code_link: "https://github.com/Gaurav01Kumar/Amazon-Clone-React",
    featured: false,
  },
];

export const engineeringPrinciples = [
  {
    title: "Build > Talk",
    mantra: "Working code beats slides",
    description:
      "The fastest way to understand a framework, protocol, or architecture is to get your hands dirty and ship a prototype that solves an actual problem.",
    tag: "Execution First",
  },
  {
    title: "Product > Code",
    mantra: "Software serves human outcomes",
    description:
      "Code is an instrument, not the ultimate goal. The cleanest abstraction is useless if it fails to deliver value to real users and the business.",
    tag: "Product Mindset",
  },
  {
    title: "Learn > Memorize",
    mantra: "First principles over syntax",
    description:
      "Frameworks evolve constantly. Understanding why distributed systems fail, how protocols function, and how data flows matters infinitely more than memorizing APIs.",
    tag: "Fundamentals",
  },
  {
    title: "Ship > Perfect",
    mantra: "Real feedback beats theory",
    description:
      "A working service running in production with active users provides more actionable feedback in 24 hours than weeks spent chasing theoretical perfection.",
    tag: "Iteration Speed",
  },
  {
    title: "Curiosity > Comfort",
    mantra: "Engineering is perpetual discovery",
    description:
      "From microservices to autonomous multi-agent systems and cloud scaling, staying relentlessly curious and asking 'how can we build this better?' is what keeps engineering exciting.",
    tag: "Growth Mindset",
  },
];

export const educationList = [
  {
    institution: "Uttaranchal University",
    degree: "Master of Computer Applications (MCA) — Computer Science",
    period: "August 2024 – September 2026",
    focus: "Advanced Distributed Systems, Database Internals & Software Architecture",
  },
  {
    institution: "L.N. Mishra College of Business Management",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "July 2020 – July 2023",
    focus: "Object-Oriented Programming, Data Structures, Web Technologies & Database Management",
  },
  {
    institution: "L. P. Shahi College",
    degree: "Intermediate — ISC (Science)",
    period: "June 2018 – March 2020",
    focus: "Mathematics, Physics & Analytical Foundations",
  },
];

export const certifications = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "J.P. Morgan",
    skills: "Interface design, financial data feeds, Git workflow",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "Hewlett Packard Enterprise (HPE)",
    skills: "RESTful Web Services, Java Spring Boot, system debugging",
  },
  {
    title: "Node.js Certification — Master the Fundamentals",
    issuer: "Industry Standard",
    skills: "Event loop, asynchronous I/O, streams, Express.js architecture",
  },
  {
    title: "React.js Certified Developer",
    issuer: "Industry Standard",
    skills: "Component architecture, React Hooks, performance tuning",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Cloud Certification",
    skills: "AWS core services, virtualization, cloud security basics",
  },
];