import type { WebProject } from './projectTypes'

type WebProjectsData = {
  [locale: string]: WebProject[]
}

const webProjectsData: WebProjectsData = {
  en: [
    {
      title: 'Alquivago',
      category: 'web',
      description: `Web app that compares long-term rental prices from multiple sources in Montevideo - Uruguay`,
      video: '/static/videos/projects/alquivago/alquivago.webm',
      href: 'https://alquivago-landing.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/Alquivago',
      previewUrl: 'https://alquivago-landing.vercel.app/',
      tags: ['nextjs', 'real-estate', 'full-stack'],
      date: '2023-06-01',
      techStack: [
        { name: 'Next.js', color: '#000000' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Tailwind', color: '#06B6D4' },
        { name: 'Vercel', color: '#000000' },
      ],
    },
    {
      title: '3D Web App',
      category: 'web',
      description: `An interactive 3D page, built as a tribute to "The Little Prince", novella by Antoine de Saint-Exupéry.`,
      video: '/static/videos/projects/app_3d/app_3d.webm',
      href: 'https://thelittleprince-tribute.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/3D-react-app',
      previewUrl: 'https://thelittleprince-tribute.vercel.app/',
      tags: ['react', '3d', 'creative'],
      date: '2023-06-15',
      techStack: [
        { name: 'React', color: '#61DAFB' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Vercel', color: '#000000' },
      ],
    },
  ],
  es: [
    {
      title: 'Alquivago',
      category: 'web',
      description: `Aplicación web que compara los precios de alquiler a largo plazo de varias fuentes en Montevideo - Uruguay`,
      video: '/static/videos/projects/alquivago/alquivago.webm',
      href: 'https://alquivago-landing.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/Alquivago',
      previewUrl: 'https://alquivago-landing.vercel.app/',
      tags: ['nextjs', 'real-estate', 'full-stack'],
      date: '2023-06-01',
      techStack: [
        { name: 'Next.js', color: '#000000' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Tailwind', color: '#06B6D4' },
        { name: 'Vercel', color: '#000000' },
      ],
    },
    {
      title: '3D Web App',
      category: 'web',
      description: `Web 3D interactiva, construida como homenaje a "El Principito", novela de Antoine de Saint-Exupéry.`,
      video: '/static/videos/projects/app_3d/app_3d.webm',
      href: 'https://thelittleprince-tribute.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/3D-react-app',
      previewUrl: 'https://thelittleprince-tribute.vercel.app/',
      tags: ['react', '3d', 'creative'],
      date: '2023-06-15',
      techStack: [
        { name: 'React', color: '#61DAFB' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Vercel', color: '#000000' },
      ],
    },
  ],
}

export default webProjectsData
