import type { GameDevProject } from './projectTypes'

type GameDevProjectsData = {
  [locale: string]: GameDevProject[]
}

const gamedevProjectsData: GameDevProjectsData = {
  en: [
    {
      title: 'LucidNav',
      category: 'gamedev',
      description: `Real-time maze mapper and turn-by-turn navigator for the Endless Halls, helping you efficiently obtain the Lucid Nightmare secret mount in World of Warcraft.`,
      thumbnail: '/static/images/projects/lucidnav/lucidnav-logo.jpg',
      image: '/static/images/projects/lucidnav/lucidnav_demo.png',
      href: 'https://www.curseforge.com/wow/addons/lucidnav',
      githubUrl: 'https://github.com/cristian-encalada/lucidnav',
      previewUrl: 'https://www.curseforge.com/wow/addons/lucidnav',
      downloads: 280,
      platform: 'World of Warcraft',
      gameVersion: '12.0.1',
      tags: ['wow', 'addon', 'lua', 'navigation'],
      date: '2026-03-14',
      techStack: [
        { name: 'Lua', color: '#000080' },
        { name: 'WoW Add-On', color: '#00AFF0' },
      ],
    },
  ],
  es: [
    {
      title: 'LucidNav',
      category: 'gamedev',
      description: `Mapeador de laberintos en tiempo real y navegador paso a paso para los Pasillos Interminables, ayudándote a obtener eficientemente la montura secreta Pesadilla Lúcida en World of Warcraft.`,
      thumbnail: '/static/images/projects/lucidnav/lucidnav-logo.jpg',
      image: '/static/images/projects/lucidnav/lucidnav_demo.png',
      href: 'https://www.curseforge.com/wow/addons/lucidnav',
      githubUrl: 'https://github.com/cristian-encalada/lucidnav',
      previewUrl: 'https://www.curseforge.com/wow/addons/lucidnav',
      downloads: 280,
      platform: 'World of Warcraft',
      gameVersion: '12.0.1',
      tags: ['wow', 'addon', 'lua', 'navegación'],
      date: '2026-03-14',
      techStack: [
        { name: 'Lua', color: '#000080' },
        { name: 'WoW Add-On', color: '#00AFF0' },
      ],
    },
  ],
}

export default gamedevProjectsData
