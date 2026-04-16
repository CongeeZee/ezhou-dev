export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  tech: string[]
  github: string
  demo?: string
  overview: string
  architecture: string
  challenges: string[]
  learned: string[]
  future: string[]
  featured: boolean
  /** One-line impact stat shown on the project card — recruiter-facing */
  metric?: string
  /** Year or date range the project was built */
  year?: string
}

export const projects: Project[] = [
  {
    slug: 'b2b-order-api',
    title: 'B2B Order Management API',
    tagline: 'Production REST API for UBL 2.1 e-procurement document generation',
    description:
      'Scrum Master and engineer on a 5-person team building a production REST API for generating and managing UBL 2.1 standardised order documents used in B2B e-invoicing and procurement workflows.',
    tech: ['TypeScript', 'Node.js', 'Express', 'Supabase', 'Jest', 'OpenAPI 3.0'],
    github: 'https://github.com/CongeeZee/northbound',
    metric: '5-person team · full test coverage · OpenAPI 3.0 docs',
    year: '2024',
    overview:
      'A production-grade REST API (codename Northbound) for generating and managing UBL 2.1 standardised order documents — the XML format used in B2B procurement and e-invoicing across government and enterprise. As Scrum Master, I drove sprint planning, backlog refinement, and Jira issue tracking across the full project lifecycle while also contributing directly to the codebase.',
    architecture:
      'The API is built on Express with TypeScript, using Supabase (PostgreSQL) for data persistence. All endpoints follow RESTful conventions and are documented with OpenAPI 3.0 / Swagger. Recurring order management supports full CRUD operations with schema validation at every layer. The test suite uses Jest with isolated unit and integration tests to ensure correctness of UBL document generation logic.',
    challenges: [
      'Understanding and implementing the UBL 2.1 XML schema correctly for B2B procurement compliance',
      'Coordinating a 5-person team across sprints while maintaining individual engineering contributions',
      'Designing a validation pipeline that catches schema errors before database writes',
      'Writing comprehensive Jest tests for complex document generation logic',
    ],
    learned: [
      'Deep understanding of enterprise document standards (UBL 2.1) and B2B procurement workflows',
      'Practical Agile/Scrum leadership — running standups, sprint retros, and backlog grooming',
      'OpenAPI 3.0 design-first API development',
      'How to balance team coordination with hands-on engineering contributions',
    ],
    future: [
      'Add support for UBL 2.1 Invoice and Credit Note document types',
      'Build a web dashboard for order monitoring and status tracking',
      'Implement webhook delivery for order status events',
      'Add multi-tenant authentication and rate limiting',
    ],
    featured: true,
  },
  {
    slug: 'runswift-behaviours',
    title: 'rUNSWift Autonomous Behaviours',
    tagline: 'Decision-making system for 5× World Champion robot soccer team',
    description:
      'Team Lead (Behaviours) on rUNSWift — UNSW\'s autonomous robotics team competing at RoboCup international. Designed and implemented high-level decision-making and tactical behaviour systems for humanoid robots in competitive robot soccer.',
    tech: ['Python', 'ROS2', 'C++', 'Behaviour Trees'],
    github: 'https://github.com/CongeeZee/runswift-behaviours',
    metric: '5× World Champions · real-time multi-robot coordination · RoboCup international',
    year: '2025',
    overview:
      'rUNSWift is UNSW\'s entry in the RoboCup Standard Platform League — one of the most prestigious international autonomous robotics competitions, with a 5× World Champion history. As Team Lead for Behaviours, I designed the high-level decision-making and tactical behaviour architecture that drives how robots perceive game situations, coordinate with teammates, and select actions in real time.',
    architecture:
      'Behaviour logic is implemented in Python on top of the ROS2 framework, which handles inter-process messaging between perception, localisation, locomotion, and strategy subsystems. The behaviour layer receives world model updates (ball position, teammate locations, game state) and outputs role assignments and action targets to the motion layer. Coordination across robots is achieved through shared game state broadcasted over the field network.',
    challenges: [
      'Designing behaviours that are robust to noisy sensor data and localisation uncertainty',
      'Coordinating multi-robot strategy without explicit real-time communication guarantees',
      'Balancing reactive low-level behaviours with higher-level tactical decision-making',
      'Iterating rapidly during competition under time pressure',
    ],
    learned: [
      'Real-world robotics engineering under tight competition constraints',
      'ROS2 architecture and distributed pub/sub messaging patterns',
      'How to design behaviour trees that degrade gracefully under uncertainty',
      'Leading a technical sub-team and communicating across disciplines (vision, localisation, motion)',
    ],
    future: [
      'Implement machine learning for opponent behaviour prediction',
      'Develop a simulation environment for rapid behaviour iteration',
      'Add dynamic role switching based on game state classification',
      'Integrate learned locomotion policies with tactical decision-making',
    ],
    featured: true,
  },
  {
    slug: 'quiz-platform',
    title: 'Real-Time Multiplayer Quiz Platform',
    tagline: 'Full-stack Kahoot-style platform with live game state synchronisation',
    description:
      'Built a full-stack real-time quiz platform supporting concurrent multiplayer sessions with live scoring, game state synchronisation, and host/player role management.',
    tech: ['TypeScript', 'Node.js', 'REST APIs', 'WebSockets'],
    github: 'https://github.com/CongeeZee/quiz-platform',
    metric: 'Concurrent multiplayer · real-time sync · live scoring',
    year: '2024',
    overview:
      'A full-stack real-time quiz platform replicating Kahoot\'s core features — hosts create and launch quiz sessions, players join via session codes, and answers are scored live with a leaderboard updated in real time. The system handles concurrent sessions with isolated game state per room.',
    architecture:
      'The backend is built with Node.js and TypeScript, exposing REST endpoints for session management and WebSockets for real-time game events. Game state is maintained in memory per session, with events broadcast to all connected players. The frontend consumes the API and renders live updates reactively.',
    challenges: [
      'Managing concurrent game sessions with isolated state',
      'Ensuring real-time synchronisation is consistent across all connected players',
      'Handling player disconnects and reconnects gracefully mid-game',
      'Designing a clean event protocol for host and player roles',
    ],
    learned: [
      'WebSocket event-driven architecture and real-time state management',
      'How to structure a TypeScript Node.js backend for maintainability',
      'Session management patterns for multiplayer applications',
      'Testing real-time systems with simulated concurrent users',
    ],
    future: [
      'Add persistent quiz creation and history',
      'Implement OAuth login for hosts',
      'Add analytics dashboard for quiz performance',
      'Support image and code-snippet question types',
    ],
    featured: true,
  },
  {
    slug: 'property-rental',
    title: 'Property Rental Platform',
    tagline: 'Airbnb-style frontend with dynamic search and booking flows',
    description:
      'Developed a responsive, component-driven frontend for a property hosting and booking platform, featuring dynamic search, listing management, and multi-step booking flows.',
    tech: ['React', 'TypeScript', 'REST APIs', 'Component Architecture'],
    github: 'https://github.com/CongeeZee/property-rental',
    metric: 'Dynamic search · listing management · booking flows',
    year: '2024',
    overview:
      'A full-featured Airbnb-style property rental frontend built with React and TypeScript. The platform supports property listing creation and management, dynamic search with filters (location, dates, price, type), and a multi-step booking flow with confirmation handling.',
    architecture:
      'Built on a component-driven architecture with clear separation of pages, feature components, and shared UI primitives. State management handles search filters, booking state, and user session. The frontend consumes a REST API for all data operations.',
    challenges: [
      'Designing a scalable component hierarchy that avoids prop-drilling',
      'Implementing responsive layouts that work across device sizes',
      'Managing complex form state across multi-step booking flows',
      'Ensuring consistent UI state between search results and individual listings',
    ],
    learned: [
      'Component-driven design principles for large React applications',
      'TypeScript typing patterns for complex frontend state',
      'How to design intuitive booking and search UX',
      'API integration and loading/error state handling',
    ],
    future: [
      'Add map-based search with geolocation',
      'Implement review and rating system',
      'Add host dashboard with booking analytics',
      'Build mobile-responsive checkout flow',
    ],
    featured: false,
  },
  {
    slug: 'ezhou-dev-website',
    title: 'ezhou.dev — Personal Website',
    tagline: 'Portfolio and blog built with Next.js 14 and MDX',
    description:
      'This website — a minimalist portfolio and technical blog built with Next.js 14 App Router, Framer Motion animations, and an MDX-powered writing system.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MDX'],
    github: 'https://github.com/CongeeZee/ezhou-dev',
    demo: 'https://ezhou.dev',
    metric: '16 static pages · MDX blog · Vercel edge deployment',
    year: '2025',
    overview:
      'A personal portfolio site designed to showcase engineering projects, technical writing, and experiments. Built with a minimalist dark aesthetic and deployed on Vercel. The MDX blog system reads content from the filesystem at build time, enabling fully static generation.',
    architecture:
      'Next.js 14 App Router with static site generation. Blog posts are MDX files parsed with gray-matter and next-mdx-remote. Framer Motion handles scroll-triggered animations. Tailwind CSS provides the design system. All 16 pages are pre-rendered at build time for optimal performance.',
    challenges: [
      'Navigating Next.js 14 App Router patterns and RSC/client component boundaries',
      'Resolving dependency version conflicts in the MDX/remark/rehype ecosystem',
      'Designing a minimal aesthetic that feels engineered, not templated',
      'Maintaining fast build times with static MDX generation',
    ],
    learned: [
      'Next.js 14 App Router architecture and SSG patterns',
      'MDX pipeline setup with gray-matter, remark-gfm, and rehype-highlight',
      'Framer Motion animation patterns for scroll-triggered reveals',
      'Deploying and configuring custom domains on Vercel with Cloudflare DNS',
    ],
    future: [
      'Add dark/light mode toggle',
      'Implement RSS feed for blog posts',
      'Add interactive project visualisations',
      'Create a /uses page for tools and setup',
    ],
    featured: false,
  },
  {
    slug: 'fairway',
    title: 'Fairway — Golf Score Tracker',
    tagline: 'Full-stack golf scoring app with WHS handicap calculation',
    description:
      'A full-stack golf scoring and handicap tracking web application with hole-by-hole scoring, round history, stats dashboards, and World Handicap System compliant handicap index calculation.',
    tech: ['React', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Material UI'],
    github: 'https://github.com/CongeeZee/golf-app',
    metric: 'WHS handicap calc · hole-by-hole scoring · stats dashboard',
    year: '2025',
    overview:
      'Fairway is a full-stack golf score tracker built to solve a personal need — tracking rounds, analysing performance, and calculating an accurate handicap index. It supports hole-by-hole scorecard entry with live score-to-par feedback, a full round history, and an aggregate stats dashboard showing averages, best/worst rounds, and hole-type breakdowns (eagles, birdies, pars, bogeys).',
    architecture:
      'The backend is an Express 5 API with Prisma ORM on Supabase PostgreSQL. Authentication uses JWT with bcrypt password hashing and Zod request validation. The frontend is React 18 with Vite, Material UI, React Router v6, and React Query for server state. The database uses a join model (RoundHole) to avoid duplicating par data — par is always sourced from the Hole record.',
    challenges: [
      'Implementing the World Handicap System formula correctly (score differentials, best-8-of-20 averaging, 0.96 adjustment)',
      'Designing the RoundHole join model to avoid par data duplication across historical rounds',
      'Handling Supabase connection pooling constraints (port 6543 transaction pooler vs direct port 5432)',
      'Express route ordering to prevent /rounds/stats being parsed as a round ID parameter',
    ],
    learned: [
      'Prisma ORM with PostgreSQL — schema design, migrations, and query optimisation',
      'React Query for server state management and cache invalidation',
      'Full-stack TypeScript with shared type patterns between frontend and backend',
      'World Handicap System specification and sports scoring domain modelling',
    ],
    future: [
      'Add course rating and slope rating data for more accurate handicap calculations',
      'Implement social features — compare stats with friends',
      'Add GPS-based course detection and shot tracking',
      'Deploy with CI/CD pipeline',
    ],
    featured: false,
  },
]

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
