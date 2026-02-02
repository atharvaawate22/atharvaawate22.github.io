// Portfolio Configuration - Single source of truth for all portfolio data
// Update this file to customize your portfolio content

export const siteConfig = {
  name: "Atharva Awate",
  title: "Software Engineer | Full-Stack Developer | Problem Solver",
  description: "A passionate software engineer focused on building scalable web applications and solving complex problems through clean, efficient code.",
  location: "India",
  email: "atharva.awate.dev@gmail.com",
  resumeUrl: "/assets/Atharva_Awate_Resume.pdf",
  social: {
    github: "https://github.com/atharva-awate",
    linkedin: "https://www.linkedin.com/in/atharva-awate",
  },
};

export const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Problem Solver",
  "Backend Architect",
  "API Designer",
];

export const aboutData = {
  headline: "Building Digital Solutions That Scale",
  description: `I'm a software engineer with a passion for crafting elegant solutions to complex problems. 
  My journey in tech has been driven by curiosity and a relentless pursuit of clean, maintainable code.`,
  paragraphs: [
    "With a strong foundation in full-stack development, I specialize in building scalable web applications that deliver exceptional user experiences. I believe in writing code that not only works but is also readable, testable, and maintainable.",
    "My approach combines analytical thinking with creative problem-solving. I'm particularly interested in system design, performance optimization, and creating architectures that can grow with business needs.",
    "When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously learning to stay ahead in this ever-evolving field.",
  ],
  highlights: [
    { label: "Years Coding", value: "4+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Technologies", value: "15+" },
    { label: "Coffee Consumed", value: "∞" },
  ],
};

export const skillsData = {
  categories: [
    {
      name: "Frontend",
      icon: "Monitor",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      name: "Backend",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "WebSockets", level: 78 },
      ],
    },
    {
      name: "Databases",
      icon: "Database",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "MongoDB", level: 78 },
        { name: "Redis", level: 72 },
      ],
    },
    {
      name: "Tools & Platforms",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", level: 92 },
        { name: "Docker", level: 80 },
        { name: "Linux", level: 85 },
        { name: "AWS", level: 70 },
        { name: "CI/CD", level: 75 },
      ],
    },
  ],
};

export const projectsData = [
  {
    id: 1,
    title: "AI-Powered Code Review Platform",
    description:
      "A sophisticated web application that analyzes pull requests using machine learning models to provide intelligent code suggestions, detect potential bugs, and enforce coding standards automatically.",
    longDescription:
      "Built a comprehensive code review platform that integrates with GitHub and GitLab. The system uses NLP models to understand code context, identify anti-patterns, and suggest improvements. Features include automated PR comments, custom rule configuration, and team analytics dashboard.",
    image: "/projects/code-review.jpg",
    tags: ["React", "Node.js", "Python", "OpenAI API", "PostgreSQL", "Docker"],
    category: "Full-Stack",
    github: "https://github.com/atharva-awate/ai-code-review",
    demo: "https://ai-review-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Analytics Dashboard",
    description:
      "A scalable analytics dashboard featuring live data visualization, WebSocket-powered updates, and role-based access control for enterprise teams.",
    longDescription:
      "Engineered a high-performance analytics platform capable of handling millions of events per day. Implemented real-time charts using D3.js, WebSocket connections for live updates, and a sophisticated caching layer with Redis. The dashboard supports custom widgets, exportable reports, and team collaboration features.",
    image: "/projects/analytics.jpg",
    tags: ["Next.js", "TypeScript", "WebSockets", "D3.js", "Redis", "AWS"],
    category: "Frontend",
    github: "https://github.com/atharva-awate/analytics-dashboard",
    demo: "https://analytics-demo.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Cloud-Based Task Automation System",
    description:
      "An enterprise workflow automation platform that orchestrates complex multi-step processes using APIs, scheduled jobs, and event-driven triggers.",
    longDescription:
      "Developed a serverless automation platform that allows users to create complex workflows without coding. Features include visual workflow builder, 50+ pre-built integrations, conditional logic, error handling with retries, and comprehensive audit logging. Built on AWS Lambda with a React frontend.",
    image: "/projects/automation.jpg",
    tags: ["React", "AWS Lambda", "DynamoDB", "Step Functions", "API Gateway"],
    category: "Backend",
    github: "https://github.com/atharva-awate/task-automation",
    demo: "https://automate-demo.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Developer Portfolio Builder SaaS",
    description:
      "A SaaS platform that generates stunning developer portfolios automatically by importing data from GitHub, parsing README files, and creating customizable templates.",
    longDescription:
      "Created a no-code portfolio generator specifically for developers. The platform connects to GitHub, extracts project information, analyzes contribution patterns, and generates beautiful, SEO-optimized portfolio sites. Features multiple themes, custom domain support, and built-in analytics.",
    image: "/projects/portfolio-builder.jpg",
    tags: ["Next.js", "Prisma", "PostgreSQL", "GitHub API", "Stripe", "Vercel"],
    category: "Full-Stack",
    github: "https://github.com/atharva-awate/portfolio-builder",
    demo: "https://portfolio-builder-demo.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "Distributed Cache System",
    description:
      "A high-performance distributed caching solution with consistent hashing, automatic failover, and real-time cluster monitoring capabilities.",
    longDescription:
      "Built a distributed cache system inspired by Redis and Memcached. Implements consistent hashing for data distribution, supports master-slave replication, and includes a monitoring dashboard. Achieves sub-millisecond read latency and handles millions of operations per second.",
    image: "/projects/cache-system.jpg",
    tags: ["Go", "gRPC", "Protocol Buffers", "Docker", "Kubernetes"],
    category: "Backend",
    github: "https://github.com/atharva-awate/distributed-cache",
    demo: "https://cache-demo.vercel.app",
    featured: false,
  },
];

export const experienceData = [
  {
    id: 1,
    title: "Software Development Intern",
    company: "TechCorp Solutions",
    location: "Remote",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Developed and maintained RESTful APIs using Node.js and Express, serving 10,000+ daily active users",
      "Implemented automated testing pipelines that reduced bug escape rate by 40%",
      "Collaborated with senior engineers on microservices architecture migration",
      "Optimized database queries resulting in 60% improvement in response times",
    ],
    technologies: ["Node.js", "PostgreSQL", "Docker", "Jest", "GitHub Actions"],
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "University Innovation Lab",
    location: "Pune, India",
    period: "Jan 2024 - May 2024",
    description: [
      "Led development of a campus-wide event management platform used by 5,000+ students",
      "Designed and implemented real-time notification system using WebSockets",
      "Mentored junior developers and conducted code reviews",
      "Integrated payment gateway for event ticket purchases",
    ],
    technologies: ["React", "Next.js", "Prisma", "PostgreSQL", "Stripe"],
  },
  {
    id: 3,
    title: "Open Source Contributor",
    company: "Various Projects",
    location: "Remote",
    period: "2023 - Present",
    description: [
      "Active contributor to popular open-source projects with 50+ merged pull requests",
      "Maintained documentation and helped onboard new contributors",
      "Fixed critical bugs and implemented new features in React component libraries",
      "Participated in code reviews and community discussions",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Git"],
  },
  {
    id: 4,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2022 - 2023",
    description: [
      "Delivered 10+ custom web applications for small businesses and startups",
      "Managed full project lifecycle from requirements gathering to deployment",
      "Achieved 100% client satisfaction rate with repeat business",
      "Implemented SEO best practices resulting in improved search rankings",
    ],
    technologies: ["React", "WordPress", "Tailwind CSS", "Firebase"],
  },
];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
