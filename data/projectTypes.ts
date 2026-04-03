export type ProjectCategory = 'web' | 'electronics' | 'software' | 'gamedev'

export type BaseProject = {
  title: string
  description: string
  video?: string
  /** Primary preview (e.g. screenshot) for category pages */
  image?: string
  /** Smaller asset for compact lists (e.g. logo); falls back to `image` when omitted */
  thumbnail?: string
  href?: string
  techStack?: Array<{ name: string; icon?: string; color?: string }>
  githubUrl?: string
  previewUrl?: string
  tags?: string[]
  date?: string
}

export type ElectronicsProject = BaseProject & {
  category: 'electronics'
  hardware?: string[]
  documentation?: string
}

export type SoftwareProject = BaseProject & {
  category: 'software'
  demoUrl?: string
  paperUrl?: string
}

export type WebProject = BaseProject & {
  category: 'web'
}

export type GameDevProject = BaseProject & {
  category: 'gamedev'
  downloads?: number
  platform?: string
  gameVersion?: string
}

export type Project = ElectronicsProject | SoftwareProject | WebProject | GameDevProject

export type ProjectsData = {
  [locale: string]: Project[]
}
