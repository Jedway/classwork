import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Awesome Portfolio',
    description: 'A responsive portfolio site built with React, TypeScript and Vite.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    link: '#',
    repo: 'https://github.com/yourname/portfolio'
  },
  {
    id: '2',
    title: 'Task Manager App',
    description: 'A small CRUD app to manage daily tasks with local persistence.',
    tech: ['React', 'TypeScript', 'LocalStorage'],
    link: '#'
  },
  {
    id: '3',
    title: 'Open Source Contribution',
    description: 'Contributed a feature to an open source library improving performance.',
    tech: ['TypeScript', 'Testing'],
    repo: 'https://github.com/yourname/opensource'
  }
]
