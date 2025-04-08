type Project = {
  title: string
  description: string
  video: string
  href: string
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
      href: 'https://tagncount-front-a2fyfceabqbph4f9.eastus-01.azurewebsites.net/',
    },
    {
      title: 'Alquivago',
      description: `Web app that compares long-term rental prices from multiple sources in Montevideo - Uruguay`,
      video: '/static/videos/projects/alquivago/alquivago.webm',
      href: 'https://alquivago-landing.vercel.app/',
    },
    {
      title: '3D Web App',
      description: `An interactive 3D page, built as a tribute to "The Little Prince", novella by Antoine de Saint-Exupéry.`,
      video: '/static/videos/projects/app_3d/app_3d.webm',
      href: 'https://thelittleprince-tribute.vercel.app/',
    },
  ],

  es: [
    {
      title: 'TagNCount',
      description: `Aplicación web que usa visión por computadora para detectar, etiquetar y contar objetos en imágenes`,
      video: '/static/videos/projects/tagncount/tagncount.webm',
      href: 'https://tagncount-front-a2fyfceabqbph4f9.eastus-01.azurewebsites.net/',
    },
    {
      title: 'Alquivago',
      description: `Aplicación web que compara los precios de alquiler a largo plazo de varias fuentes en Montevideo - Uruguay`,
      video: '/static/videos/projects/alquivago/alquivago.webm',
      href: 'https://alquivago-landing.vercel.app/',
    },
    {
      title: '3D Web App',
      description: `Web 3D interactiva, construida como homenaje a "El Principito", novela de Antoine de Saint-Exupéry.`,
      video: '/static/videos/projects/app_3d/app_3d.webm',
      href: 'https://thelittleprince-tribute.vercel.app/',
    },
  ],
}

export default projectsData
