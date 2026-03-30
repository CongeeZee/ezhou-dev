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
}

export const projects: Project[] = [
  {
    slug: 'robocup-strategy',
    title: 'RoboCup Strategy AI',
    tagline: 'Intelligent decision-making system for robot soccer',
    description:
      'Developed a real-time strategy AI system for a RoboCup SSL robot team, handling multi-agent coordination, vision processing, and dynamic decision-making under time constraints.',
    tech: ['Python', 'ROS2', 'OpenCV', 'C++'],
    github: 'https://github.com/ericzhou/robocup-strategy',
    demo: 'https://robocup-strategy-demo.ezhou.dev',
    overview:
      'The RoboCup Strategy AI system was built to handle the complex problem of multi-robot coordination in a fast-paced, dynamic environment. The system processes real-time vision data from multiple cameras, maintains a world model of all robots and the ball, and makes strategic decisions about robot movements and actions. The AI uses a hierarchical approach with high-level strategy planning and low-level motion control, allowing the team to respond to changing game conditions within milliseconds.',
    architecture:
      'The system is built with a modular architecture consisting of several key components: a vision processing pipeline that ingests camera feeds and outputs object positions, a world state maintainer that fuses multi-camera data and tracks object velocities, a strategy planner that evaluates game situations and decides on tactics, and a motion controller that translates high-level strategies into individual robot commands. The entire system runs on ROS2 for inter-process communication and uses OpenCV for vision tasks. Communication with robots happens via UDP at 60Hz update rate.',
    challenges: [
      'Handling latency between vision processing and motion command execution',
      'Coordinating 5 robots with independent decision-making while maintaining team strategy',
      'Processing high-resolution camera feeds in real-time with CPU constraints',
      'Dealing with noisy sensor data and occasional vision dropouts',
    ],
    learned: [
      'Deep understanding of real-time system constraints and how to design for predictability',
      'Practical experience with ROS2 framework and distributed robotics architectures',
      'How to debug complex multi-threaded systems in competitive environments',
      'The importance of rapid iteration cycles when developing for physical systems',
    ],
    future: [
      'Implement machine learning for opponent behavior prediction',
      'Add reinforcement learning for strategy optimization',
      'Improve vision robustness with adversarial lighting conditions',
      'Develop simulation environment for strategy testing without hardware',
    ],
    featured: true,
  },
  {
    slug: 'distributed-kv',
    title: 'Distributed Key-Value Store',
    tagline: 'A from-scratch implementation of a distributed consensus system',
    description:
      'Built a distributed key-value store from scratch in Rust, implementing Raft consensus algorithm for consistency, with support for multi-node deployments and network partitions.',
    tech: ['Rust', 'Tokio', 'Protobuf', 'TCP'],
    github: 'https://github.com/ericzhou/distributed-kv',
    overview:
      'This project implements a distributed key-value store that can tolerate node failures and network partitions. The store uses the Raft consensus algorithm to ensure that data is consistently replicated across multiple nodes. The implementation includes leader election, log replication, and snapshot mechanisms. The system can handle network splits gracefully and continues to serve requests as long as a majority of nodes remain connected.',
    architecture:
      'The system uses a client-server architecture with multiple replicated servers. Each server maintains a state machine (the KV store), a replicated log of commands, and Raft-specific state (current term, voted-for, etc.). Servers communicate via TCP using Protobuf for message serialization. The Tokio async runtime handles concurrent connections and enables efficient network I/O. Persistence is achieved through log files stored on disk, with periodic snapshots to avoid unbounded log growth.',
    challenges: [
      'Ensuring atomicity of state transitions under concurrent requests',
      'Handling split-brain scenarios and network partitions correctly',
      'Optimizing Raft to provide reasonable latency for client operations',
      'Managing memory efficiently with streaming log replay on startup',
    ],
    learned: [
      'Deep knowledge of the Raft consensus algorithm and its practical implementation details',
      'Understanding of distributed systems trade-offs between consistency, availability, and partition tolerance',
      'Rust ownership system and how it provides safety guarantees for concurrent code',
      'Performance analysis and optimization techniques for distributed systems',
    ],
    future: [
      'Add range query support (prefix scan)',
      'Implement more sophisticated log compaction strategies',
      'Add automatic cluster membership changes',
      'Create benchmarking suite against other KV stores',
    ],
    featured: true,
  },
  {
    slug: 'ezhou-dev-website',
    title: 'Personal Website',
    tagline: 'Portfolio and blog showcasing projects and writing',
    description:
      'A minimalist personal website built with Next.js 14, featuring a blog powered by MDX, dark mode typography-focused design, and smooth Framer Motion animations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'MDX'],
    github: 'https://github.com/ericzhou/ezhou-dev',
    demo: 'https://ezhou.dev',
    overview:
      'The personal website serves as both a portfolio to showcase completed projects and a platform for technical writing. The site uses Next.js 14 with the App Router for modern React patterns and optimal performance. MDX enables writing blog posts with embedded interactive components. The design prioritizes typography and whitespace, with a dark color scheme that is easy on the eyes.',
    architecture:
      'The site is built as a static generation first approach using Next.js. Blog posts are stored as MDX files and parsed at build time using gray-matter for frontmatter extraction. The pages use Framer Motion for entrance animations triggered by scroll position. Tailwind CSS provides styling with a custom dark theme. All pages are pre-rendered at build time for optimal performance and SEO.',
    challenges: [
      'Creating an elegant, minimal design that focuses on content',
      'Implementing smooth animations that feel natural and not distracting',
      'Setting up MDX pipeline with proper syntax highlighting',
      'Responsive design that works well on all screen sizes',
    ],
    learned: [
      'Next.js 14 App Router patterns and best practices',
      'Building effective personal branding through design',
      'Framer Motion animation capabilities and performance considerations',
      'MDX capabilities and how to extend it with custom components',
    ],
    future: [
      'Add dark/light mode toggle',
      'Implement newsletter signup with email integration',
      'Add interactive project visualizations',
      'Create RSS feed for blog posts',
    ],
    featured: true,
  },
  {
    slug: 'pathfinder-visualizer',
    title: 'Pathfinding Visualizer',
    tagline: 'Interactive visualization of A* and Dijkstra pathfinding algorithms',
    description:
      'A web-based tool for visualizing and comparing different pathfinding algorithms on a grid-based maze with obstacles. Supports A*, Dijkstra, and BFS algorithms with real-time visualization.',
    tech: ['TypeScript', 'Canvas API', 'React', 'Tailwind CSS'],
    github: 'https://github.com/ericzhou/pathfinder-visualizer',
    demo: 'https://pathfinder-visualizer.ezhou.dev',
    overview:
      'The pathfinding visualizer is an educational tool that helps understand how different pathfinding algorithms explore a maze. Users can draw custom mazes, set start and end points, then watch the algorithm explore the space and find the optimal path. The visualization clearly shows which cells have been explored vs. which are part of the final path.',
    architecture:
      'The application uses a React frontend for interactivity and Canvas API for high-performance rendering of the grid and pathfinding visualization. Each algorithm is implemented independently with a common interface. The state management tracks grid cells, obstacles, algorithm progress, and updates in real-time as the pathfinding algorithm executes.',
    challenges: [
      'Rendering large grids smoothly at 60fps',
      'Pausing and resuming algorithm execution',
      'Providing clear visual feedback for algorithm progress',
      'Making the UI intuitive for drawing custom mazes',
    ],
    learned: [
      'Canvas API performance optimization and rendering patterns',
      'Algorithm visualization techniques and presentation',
      'Interactive React components with complex state management',
      'UX design for algorithmic tools',
    ],
    future: [
      'Add more algorithms (Jump Point Search, Theta*)',
      'Implement bi-directional search',
      'Add maze generation algorithms',
      'Create preset maze templates',
    ],
    featured: false,
  },
  {
    slug: 'system-monitor',
    title: 'Sysmoni - System Monitor',
    tagline: 'Terminal-based system monitor with real-time metrics',
    description:
      'A performant terminal UI application for monitoring system resources in real-time, written in Rust. Displays CPU, memory, disk, and network metrics with a beautiful TUI.',
    tech: ['Rust', 'Ratatui', 'Sysinfo'],
    github: 'https://github.com/ericzhou/sysmoni',
    overview:
      'Sysmoni is a lightweight system monitor that runs in the terminal, providing real-time insights into system performance. Unlike heavier monitoring tools, it starts instantly and uses minimal resources while providing comprehensive system metrics. The interface is organized into multiple views for different metric types.',
    architecture:
      'The application uses the ratatui library for terminal UI rendering and sysinfo crate for gathering system metrics. A background thread periodically samples system state, and the main thread renders the TUI in response to that data. The architecture supports multiple views that can be switched between using keyboard shortcuts.',
    challenges: [
      'Efficiently sampling system metrics without blocking the UI',
      'Creating a responsive terminal UI with minimal latency',
      'Handling terminal resizing gracefully',
      'Making the display informative while keeping it clean',
    ],
    learned: [
      'Building performant terminal applications with Rust',
      'TUI framework design and best practices',
      'System call integration and OS-specific considerations',
      'Real-time performance optimization',
    ],
    future: [
      'Add disk I/O metrics',
      'Implement process-level monitoring',
      'Create custom metric templates',
      'Add export functionality for metrics',
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
