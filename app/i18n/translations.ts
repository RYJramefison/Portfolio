export type Lang = 'fr' | 'en'

export const translations = {
  fr: {
    nav: [
      'Accueil',
      'À propos',
      'Compétences',
      'Services',
      'Portfolio',
      'Contact',
    ],

    common: {
      cv: 'Télécharger mon CV',
      hire: 'Embauchez-moi',
    },

    hero: {
      greeting: 'Bonjour, je suis',
      job: 'Développeur Web Full Stack',
      description:
        'Je crée des expériences web modernes, performantes et sécurisées.',
      projectsBtn: 'Voir mes projets',
      downloadCv: 'Télécharger CV',
    },

    skills: {
      title: 'Compétences',
      subtitle: 'Ce que je fais',
      categories: [
        {
          title: 'Design',
          icon: '🎨',
          description: 'Création d’interfaces modernes et intuitives.',
          skills: [
            { name: 'Figma', primary: true },
            { name: 'Material UI' },
            { name: 'Styled Components' },
          ],
        },
        {
          title: 'Front-end',
          icon: '💻',
          description: 'Développement d’interfaces performantes et dynamiques.',
          skills: [
            { name: 'TypeScript', primary: true },
            { name: 'React' },
            { name: 'Next.js' },
            { name: 'Three.js' },
            { name: 'Tailwind CSS' },
          ],
        },
        {
          title: 'Back-end',
          icon: '⚙️',
          description: 'Conception d’APIs robustes et scalables.',
          skills: [
            { name: 'Java', primary: true },
            { name: 'PostgreSQL', primary: true },
            { name: 'Node.js' },
            { name: 'Docker' },
          ],
        },
      ],
    },

    contact: {
      title: 'Contact',
      subtitle: 'Démarrons votre projet ensemble',
      send: 'Envoyer le message',
    },
  },

  en: {
    nav: [
      'Home',
      'About',
      'Skills',
      'Services',
      'Portfolio',
      'Contact',
    ],

    common: {
      cv: 'Download CV',
      hire: 'Hire me',
    },

    hero: {
      greeting: 'Hello, I am',
      job: 'Full Stack Web Developer',
      description:
        'I build modern, performant and secure web experiences.',
      projectsBtn: 'View my projects',
      downloadCv: 'Download CV',
    },

    skills: {
      title: 'Skills',
      subtitle: 'What I do',
      categories: [
        {
          title: 'Design',
          icon: '🎨',
          description: 'Creating modern and intuitive interfaces.',
          skills: [
            { name: 'Figma', primary: true },
            { name: 'Material UI' },
            { name: 'Styled Components' },
          ],
        },
        {
          title: 'Front-end',
          icon: '💻',
          description: 'Developing performant and dynamic interfaces.',
          skills: [
            { name: 'TypeScript', primary: true },
            { name: 'React' },
            { name: 'Next.js' },
            { name: 'Three.js' },
            { name: 'Tailwind CSS' },
          ],
        },
        {
          title: 'Back-end',
          icon: '⚙️',
          description: 'Designing robust and scalable APIs.',
          skills: [
            { name: 'Java', primary: true },
            { name: 'PostgreSQL', primary: true },
            { name: 'Node.js' },
            { name: 'Docker' },
          ],
        },
      ],
    },

    contact: {
      title: 'Contact',
      subtitle: 'Let’s build your project together',
      send: 'Send message',
    },
  },
} as const
