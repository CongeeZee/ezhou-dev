export interface LabItem {
  title: string
  description: string
  tags: string[]
  link?: string
  date: string
}

export const labItems: LabItem[] = [
  {
    title: 'Cli-Utils',
    description:
      'A collection of small command-line utilities for everyday tasks. Includes tools for batch file processing, quick prototyping, and system diagnostics.',
    tags: ['rust', 'cli', 'tooling'],
    link: 'https://github.com/CongeeZee/cli-utils',
    date: '2024-02-15',
  },
  {
    title: 'Shader Playground',
    description:
      'WebGL shader experiments exploring visual effects, raymarching, and procedural generation. A playground for learning graphics programming.',
    tags: ['glsl', 'webgl', 'graphics'],
    link: 'https://shader-playground.ezhou.dev',
    date: '2024-01-20',
  },
  {
    title: 'Discord Reminder Bot',
    description:
      'A Discord bot for setting reminders and organizing tasks within Discord servers. Uses slash commands and reactions for intuitive interaction.',
    tags: ['python', 'discord.py', 'bots'],
    link: 'https://github.com/CongeeZee/discord-reminder-bot',
    date: '2023-11-10',
  },
  {
    title: 'Browser Extension: Quick Links',
    description:
      'A lightweight browser extension for managing and accessing frequently used links. Supports custom categories and search.',
    tags: ['javascript', 'browser-extension', 'productivity'],
    date: '2023-10-05',
  },
  {
    title: 'Data Structure Visualizer',
    description:
      'Interactive visualizations of common data structures (linked lists, trees, graphs, heaps) with step-by-step operation visualization.',
    tags: ['typescript', 'visualization', 'education'],
    link: 'https://dsa-visualizer.ezhou.dev',
    date: '2023-09-12',
  },
  {
    title: 'Dotfiles Configuration',
    description:
      'A meticulously organized dotfiles repository with shell configurations, neovim setup, and development environment tooling.',
    tags: ['shell', 'tooling', 'productivity'],
    link: 'https://github.com/CongeeZee/dotfiles',
    date: '2024-03-01',
  },
]
