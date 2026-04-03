import type { SoftwareProject } from './projectTypes'

type SoftwareProjectsData = {
  [locale: string]: SoftwareProject[]
}

const softwareProjectsData: SoftwareProjectsData = {
  en: [
    {
      title: 'TagNCount',
      category: 'software',
      description: `Web app that uses computer vision to detect, label, and count objects in images `,
      video: '/static/videos/projects/tagncount/tagncount.webm',
      href: 'https://tag-n-count.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/TagNCount',
      previewUrl: 'https://tag-n-count.vercel.app/',
      demoUrl: 'https://tag-n-count.vercel.app/',
      tags: ['computer-vision', 'react', 'fastapi'],
      date: '2024-03-15',
      techStack: [
        { name: 'React', color: '#61DAFB' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Vercel', color: '#000000' },
        { name: 'FastAPI', color: '#009688' },
      ],
    },
  ],
  es: [
    {
      title: 'TagNCount',
      category: 'software',
      description: `Aplicación web que usa visión por computadora para detectar, etiquetar y contar objetos en imágenes`,
      video: '/static/videos/projects/tagncount/tagncount.webm',
      href: 'https://tag-n-count.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/TagNCount',
      previewUrl: 'https://tag-n-count.vercel.app/',
      demoUrl: 'https://tag-n-count.vercel.app/',
      tags: ['computer-vision', 'react', 'fastapi'],
      date: '2024-03-15',
      techStack: [
        { name: 'React', color: '#61DAFB' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Vercel', color: '#000000' },
        { name: 'FastAPI', color: '#009688' },
      ],
    },
  ],
}

export default softwareProjectsData
