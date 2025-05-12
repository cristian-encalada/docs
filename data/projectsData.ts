type Project = {
  title: string
  description: string
  video: string
  href: string
  techStack?: Array<{
    name: string
    icon?: string
    color?: string
  }>
  githubUrl?: string
  previewUrl?: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'TagNCount',
      description: `Web app that uses computer vision to detect, label, and count objects in images `,
      video: '/static/videos/projects/tagncount/tagncount.webm',
      href: 'https://tag-n-count.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/TagNCount',
      previewUrl: 'https://tag-n-count.vercel.app/',
      techStack: [
        { name: 'React', color: '#61DAFB' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Vercel', color: '#000000' },
        { name: 'FastAPI', color: '#009688' }
      ]
    },
    {
      title: 'Alquivago',
      description: `Web app that compares long-term rental prices from multiple sources in Montevideo - Uruguay`,
      video: '/static/videos/projects/alquivago/alquivago.webm',
      href: 'https://alquivago-landing.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/Alquivago',
      previewUrl: 'https://alquivago-landing.vercel.app/',
      techStack: [
        { name: 'Next.js', color: '#000000' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Tailwind', color: '#06B6D4' },
        { name: 'Vercel', color: '#000000' }
      ]
    },
    {
      title: '3D Web App',
      description: `An interactive 3D page, built as a tribute to "The Little Prince", novella by Antoine de Saint-Exupéry.`,
      video: '/static/videos/projects/app_3d/app_3d.webm',
      href: 'https://thelittleprince-tribute.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/3D-react-app',
      previewUrl: 'https://thelittleprince-tribute.vercel.app/',
      techStack: [
        { name: 'React', color: '#61DAFB' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Vercel', color: '#000000' }
      ]
    },
  ],

  es: [
    {
      title: 'TagNCount',
      description: `Aplicación web que usa visión por computadora para detectar, etiquetar y contar objetos en imágenes`,
      video: '/static/videos/projects/tagncount/tagncount.webm',
      href: 'https://tag-n-count.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/TagNCount',
      previewUrl: 'https://tag-n-count.vercel.app/',
      techStack: [
        { name: 'React', color: '#61DAFB' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Vercel', color: '#000000' },
        { name: 'FastAPI', color: '#009688' }
      ]
    },
    {
      title: 'Alquivago',
      description: `Aplicación web que compara los precios de alquiler a largo plazo de varias fuentes en Montevideo - Uruguay`,
      video: '/static/videos/projects/alquivago/alquivago.webm',
      href: 'https://alquivago-landing.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/Alquivago',
      previewUrl: 'https://alquivago-landing.vercel.app/',
      techStack: [
        { name: 'Next.js', color: '#000000' },
        { name: 'TypeScript', color: '#3178C6' },
        { name: 'Tailwind', color: '#06B6D4' },
        { name: 'Vercel', color: '#000000' }
      ]
    },
    {
      title: '3D Web App',
      description: `Web 3D interactiva, construida como homenaje a "El Principito", novela de Antoine de Saint-Exupéry.`,
      video: '/static/videos/projects/app_3d/app_3d.webm',
      href: 'https://thelittleprince-tribute.vercel.app/',
      githubUrl: 'https://github.com/cristian-encalada/3D-react-app',
      previewUrl: 'https://thelittleprince-tribute.vercel.app/',
      techStack: [
        { name: 'React', color: '#61DAFB' },
        { name: 'JavaScript', color: '#F7DF1E' },
        { name: 'Next.js', color: '#000000' },
        { name: 'Vercel', color: '#000000' }
      ]
    },
  ],
}

export default projectsData
