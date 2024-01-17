type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'Alquivago',
      description: `Web app that compares long-term rental prices from multiple sources in Montevideo - Uruguay`,
      imgSrc: '/static/images/projects/alquivago/map.gif',
      href: 'https://alquivago-landing.vercel.app/',
    },
    {
      title: 'Personal Blog',
      description: `Personal blog site to share articles and notes along my path learning about software development.`,
      imgSrc: '/static/images/projects/blog/PersonalBlog.gif',
      href: 'https://cristian-encalada.vercel.app/',
    },
    {
      title: 'Command Line Interpreter',
      description: `Tool taking as reference the UNIX shell, it allows the user to type in and then executes commands 
      within the operating system.`,
      imgSrc: '/static/images/projects/cli_interpreter/CCli.gif',
      href: 'https://replit.com/@cristian-encala/holbertonschool-simpleshell',
    },
  ],

  es: [
    {
      title: 'Alquivago',
      description: `Aplicación web que compara los precios de alquiler a largo plazo de varias fuentes en Montevideo - Uruguay`,
      imgSrc: '/static/images/projects/alquivago/map.gif',
      href: 'https://alquivago-landing.vercel.app/',
    },
    {
      title: 'Blog Personal',
      description: `Mi blog personal para compartir artículos y notas a lo largo de mi camino aprendiendo sobre desarrollo de software.`,
      imgSrc: '/static/images/projects/blog/PersonalBlog.gif',
      href: 'https://cristian-encalada.vercel.app/',
    },
    {
      title: 'Intérprete de Línea de Comando',
      description: `Herramienta que, tomando como referencia el shell de UNIX, permite al usuario escribir y luego ejecutar comandos dentro del sistema operativo.`,
      imgSrc: '/static/images/projects/cli_interpreter/CCli.gif',
      href: 'https://replit.com/@cristian-encala/holbertonschool-simpleshell',
    },
  ],
}

export default projectsData
