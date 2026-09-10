import type { LocaleTypes } from 'app/[locale]/i18n/settings'

export type ExperienceItem = {
  company: string
  companyUrl?: string
  title: string
  location: string
  dates: string
  duration: string
  bullets: string[]
}

export type CertificationItem = {
  name: string
  issuer: string
  issued?: string
  expires?: string
  description: string
  url: string
  image?: string
}

export type ProfileData = {
  experience: ExperienceItem[]
  certifications: CertificationItem[]
  skills: Record<string, string[]>
}

const profileData: Record<LocaleTypes, ProfileData> = {
  en: {
    experience: [
      {
        company: 'Promtior',
        companyUrl: 'https://www.promtior.ai/',
        title: 'AI Engineer',
        location: 'Montevideo, Uruguay',
        dates: 'Jul 2024 – Present',
        duration: '2 years 3 months',
        bullets: [
          'Built an AI-powered system to process unstructured logistics data from multiple countries and formats, automating tariff-rate reviews and saving hundreds of hours of manual work.',
          'Developed production multi-agent systems with Claude Code and the Anthropic API to normalize complex unstructured data.',
          'Implemented an AI Telegram chatbot integrated with a custom CRM to improve task efficiency for customer-sales teams in the logistics industry.',
        ],
      },
      {
        company: 'Promtior',
        companyUrl: 'https://www.promtior.ai/',
        title: 'RPA Developer',
        location: 'Montevideo, Uruguay',
        dates: 'Apr 2024 – Jun 2024',
        duration: '3 months',
        bullets: [
          'Identified repetitive business tasks and processes suitable for automation across the real-estate and forestry industries.',
          'Designed, implemented, and deployed workflows using Power Automate Desktop and Cloud, Power Apps, Azure Logic Apps, Excel, and Power BI.',
        ],
      },
      {
        company: 'No Country',
        title: 'Web Developer',
        location: 'Remote · Argentina',
        dates: 'Feb 2024 – Apr 2024',
        duration: '3 months',
        bullets: [
          'Delivered web projects in multidisciplinary, distributed teams across Argentina, Chile, Venezuela, Peru, Bolivia, and other countries.',
          'Strengthened frontend and backend development skills while collaborating through an agile, project-based environment.',
        ],
      },
      {
        company: 'Jalasoft',
        companyUrl: 'https://www.jalasoft.com/',
        title: 'Software Quality Assurance Engineer',
        location: 'Cochabamba, Bolivia',
        dates: 'Dec 2020 – Dec 2022',
        duration: '2 years 1 month',
        bullets: [
          'Applied functional, performance, regression, and end-to-end testing techniques using SQL, Git, Selenium, Slack, and Jira.',
          'Collaborated with frontend, backend, DevOps, and automation teams in an agile Scrum environment.',
          'Built experience with Jenkins-based CI/CD workflows and software development and ETL processes.',
        ],
      },
      {
        company: 'Soft Computers',
        title: 'Information Technology Support Analyst',
        location: 'Cochabamba, Bolivia',
        dates: 'Nov 2019 – Dec 2020',
        duration: '1 year 2 months',
        bullets: [
          'Diagnosed and resolved network, hardware, and software issues for end users and infrastructure environments.',
          'Installed and configured Linux and Windows operating systems and virtualization environments.',
        ],
      },
    ],
    certifications: [
      {
        name: 'Claude Certified Architect – Foundations',
        issuer: 'Anthropic',
        issued: 'Issued Aug 25, 2026',
        expires: 'Expires Aug 25, 2027',
        description:
          'Foundational certification in designing and building production-grade applications with Claude, Claude Code, the Claude Agent SDK, the Claude API, and MCP.',
        url: 'https://www.credly.com/badges/242e02c6-ffa2-48fb-b050-e1933a79ae9e/linked_in?t=tkc8hc',
      },
      {
        name: 'Advanced English Certification (C1)',
        issuer: 'Universidad Mayor de San Simón',
        issued: 'Issued Oct 2022',
        description: 'Advanced English certification issued by the university\'s Language Laboratory in Bolivia.',
        url: 'https://www.linkedin.com/in/cristian-encalada/overlay/1428220150/',
        image: '/static/images/certifications/advanced-english-c1.jpg',
      },
    ],
    skills: {
      Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      Backend: ['Node.js', 'Python', 'Flask', 'SQL', 'PostgreSQL', 'MongoDB', 'MySQL'],
      AI: [
        'LLMs',
        'RAG',
        'NLP',
        'Computer vision',
        'LangChain',
        'Anthropic API',
        'Claude Code',
        'MCP',
        'Multi-agent systems',
        'Cursor',
        'Codex',
        'Amazon Bedrock',
      ],
      'CI/CD': ['Azure', 'Docker', 'GitHub Actions', 'Jenkins', 'Azure Logic Apps', 'Power Automate'],
      Tools: ['Git', 'GitHub', 'Jira', 'Selenium', 'Slack', 'Power BI', 'Power Apps', 'Excel', 'Linux'],
    },
  },
  es: {
    experience: [
      {
        company: 'Promtior',
        companyUrl: 'https://www.promtior.ai/',
        title: 'Ingeniero de IA',
        location: 'Montevideo, Uruguay',
        dates: 'Jul 2024 – Presente',
        duration: '2 años 3 meses',
        bullets: [
          'Construí un sistema impulsado por IA para procesar datos logísticos no estructurados de varios países y formatos, automatizando la revisión de tarifas y ahorrando cientos de horas de trabajo manual.',
          'Desarrollé sistemas multiagente en producción con Claude Code y la API de Anthropic para normalizar datos complejos no estructurados.',
          'Implementé un chatbot de Telegram con IA integrado a un CRM personalizado para mejorar la eficiencia de los equipos de ventas y atención al cliente en la industria logística.',
        ],
      },
      {
        company: 'Promtior',
        companyUrl: 'https://www.promtior.ai/',
        title: 'Desarrollador RPA',
        location: 'Montevideo, Uruguay',
        dates: 'Abr 2024 – Jun 2024',
        duration: '3 meses',
        bullets: [
          'Identifiqué tareas y procesos empresariales repetitivos que podían automatizarse en las industrias inmobiliaria y forestal.',
          'Diseñé, implementé y desplegué flujos de trabajo con Power Automate Desktop y Cloud, Power Apps, Azure Logic Apps, Excel y Power BI.',
        ],
      },
      {
        company: 'No Country',
        title: 'Desarrollador Web',
        location: 'Remoto · Argentina',
        dates: 'Feb 2024 – Abr 2024',
        duration: '3 meses',
        bullets: [
          'Desarrollé proyectos web en equipos multidisciplinarios y distribuidos de Argentina, Chile, Venezuela, Perú, Bolivia y otros países.',
          'Fortalecí mis habilidades de desarrollo frontend y backend en un entorno ágil basado en proyectos.',
        ],
      },
      {
        company: 'Jalasoft',
        companyUrl: 'https://www.jalasoft.com/',
        title: 'Ingeniero de Aseguramiento de Calidad de Software',
        location: 'Cochabamba, Bolivia',
        dates: 'Dic 2020 – Dic 2022',
        duration: '2 años 1 mes',
        bullets: [
          'Apliqué técnicas de pruebas funcionales, de rendimiento, regresión y extremo a extremo usando SQL, Git, Selenium, Slack y Jira.',
          'Colaboré con equipos frontend, backend, DevOps y automatización en un entorno ágil Scrum.',
          'Adquirí experiencia con flujos CI/CD basados en Jenkins y procesos de desarrollo de software y ETL.',
        ],
      },
      {
        company: 'Soft Computers',
        title: 'Analista de Soporte de Tecnología de la Información',
        location: 'Cochabamba, Bolivia',
        dates: 'Nov 2019 – Dic 2020',
        duration: '1 año 2 meses',
        bullets: [
          'Diagnostiqué y resolví problemas de red, hardware y software para usuarios finales y entornos de infraestructura.',
          'Instalé y configuré sistemas operativos Linux y Windows y entornos de virtualización.',
        ],
      },
    ],
    certifications: [
      {
        name: 'Claude Certified Architect – Foundations',
        issuer: 'Anthropic',
        issued: 'Emitida el 25 de agosto de 2026',
        expires: 'Vence el 25 de agosto de 2027',
        description:
          'Certificación fundamental en el diseño y construcción de aplicaciones de producción con Claude, Claude Code, Claude Agent SDK, Claude API y MCP.',
        url: 'https://www.credly.com/badges/242e02c6-ffa2-48fb-b050-e1933a79ae9e/linked_in?t=tkc8hc',
      },
      {
        name: 'Advanced English Certification (C1)',
        issuer: 'Universidad Mayor de San Simón',
        issued: 'Emitida en octubre de 2022',
        description: 'Certificación avanzada de inglés emitida por el Laboratorio de Lenguas de la universidad en Bolivia.',
        url: 'https://www.linkedin.com/in/cristian-encalada/overlay/1428220150/',
        image: '/static/images/certifications/advanced-english-c1.jpg',
      },
    ],
    skills: {
      Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      Backend: ['Node.js', 'Python', 'Flask', 'SQL', 'PostgreSQL', 'MongoDB', 'MySQL'],
      IA: [
        'LLMs',
        'RAG',
        'NLP',
        'Visión por computadora',
        'LangChain',
        'Anthropic API',
        'Claude Code',
        'MCP',
        'Sistemas multiagente',
        'Cursor',
        'Codex',
        'Amazon Bedrock',
      ],
      'CI/CD': ['Azure', 'Docker', 'GitHub Actions', 'Jenkins', 'Azure Logic Apps', 'Power Automate'],
      Herramientas: ['Git', 'GitHub', 'Jira', 'Selenium', 'Slack', 'Power BI', 'Power Apps', 'Excel', 'Linux'],
    },
  },
}

export default profileData
