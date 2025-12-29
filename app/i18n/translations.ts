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
      demo: 'Démo',
      code: 'Code',
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

    portfolio: {
      label: 'Projet personnel',
      title: 'Mes projets réalisés',
      description:
        "Explorez une sélection de projets personnels démontrant ma créativité et mes compétences techniques.",
      cta: 'Voir tous les projets',
      projects: [
        {
          title: 'J-CRAM',
          description: 'Site de réservation de voyages.',
          image: 'J CRAM.png',
          tags: ['HTML', 'CSS', 'JavaScript'],
          category: 'Site E-commerce',
        },
        {
          title: 'TAPAKILA',
          description:
            'Plateforme de découverte et réservation de billets pour des événements.',
          image: 'Patrimoine economique.png',
          tags: ['React', 'Next.js', 'Tailwind', 'PostgreSQL'],
          category: 'Plateforme',
        },
        {
          title: 'Restaurant API',
          description:
            'API de gestion des commandes, stocks et prix des plats.',
          image: 'climat et tourisme.png',
          tags: ['Java', 'PostgreSQL', 'JDBC'],
          category: 'API Backend',
        },
      ],
    },

    contact: {
      title: 'Contact',
      subtitle: 'Démarrons votre projet ensemble',
      send: 'Envoyer le message',
    },
    academy: {
      badge: 'Mon Parcours',
      title: 'Mes parcours académiques',
      description:
        'Une vision claire et structurée de mon évolution académique et personnelle',
      profile: {
        badge: 'Profil',
        title: 'Academy Student',
        description:
          'Développeur en formation, orienté solutions modernes, performantes et sécurisées.',
      },
      steps: [
        {
          title: 'Baccalauréat',
          description:
            'Obtention du Baccalauréat Scientifique – Série D au Lycée MIRVA Amboniloha en 2023.',
        },
        {
          title: 'Formation universitaire',
          description:
            'Étudiant en informatique à HEI, avec une base solide en développement et systèmes informatiques.',
        },
        {
          title: 'Centres d’intérêt',
          description:
            'Cybersécurité, échecs, voyages, musique et sport automobile.',
        },
      ],
    },
  },

  en: {
    nav: ['Home', 'About', 'Skills', 'Services', 'Portfolio', 'Contact'],

    common: {
      cv: 'Download CV',
      hire: 'Hire me',
      demo: 'Demo',
      code: 'Code',
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

    portfolio: {
      label: 'Personal Project',
      title: 'My completed projects',
      description:
        'Explore a selection of personal projects showcasing my creativity and technical skills.',
      cta: 'View all projects',
      projects: [
        {
          title: 'J-CRAM',
          description: 'Travel booking website.',
          image: 'J CRAM.png',
          tags: ['HTML', 'CSS', 'JavaScript'],
          category: 'E-commerce Website',
        },
        {
          title: 'TAPAKILA',
          description:
            'Event discovery and ticket booking platform.',
          image: 'Patrimoine economique.png',
          tags: ['React', 'Next.js', 'Tailwind', 'PostgreSQL'],
          category: 'Platform',
        },
        {
          title: 'Restaurant API',
          description:
            'API managing orders, stock and pricing.',
          image: 'climat et tourisme.png',
          tags: ['Java', 'PostgreSQL', 'JDBC'],
          category: 'Backend API',
        },
      ],
    },

    contact: {
      title: 'Contact',
      subtitle: 'Let’s build your project together',
      send: 'Send message',
    },
    academy: {
      badge: 'My Journey',
      title: 'My academic background',
      description:
        'A clear and structured overview of my academic and personal growth',
      profile: {
        badge: 'Profile',
        title: 'Academy Student',
        description:
          'Developer in training, focused on modern, performant and secure solutions.',
      },
      steps: [
        {
          title: 'High School Diploma',
          description:
            'Obtained a Scientific High School Diploma – Series D at Lycée MIRVA Amboniloha in 2023.',
        },
        {
          title: 'University Education',
          description:
            'Computer science student at HEI with a strong foundation in development and systems.',
        },
        {
          title: 'Interests',
          description:
            'Cybersecurity, chess, travel, music and motorsport.',
        },
      ],
    },
    
  },
  
} as const
