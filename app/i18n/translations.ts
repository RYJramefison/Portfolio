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
          image: 'mirva.jpg', 
        },
        {
          title: 'Formation universitaire',
          description:
            'Étudiant en informatique à HEI, avec une base solide en développement et systèmes informatiques.',
          image: 'HEI.png', 
        },
        {
          title: 'Centres d’intérêt',
          description:
            'Cybersécurité, échecs, voyages, musique et sport automobile.',
          image: 'Hobbies.jpeg', 
        },
      ],
    },
    citation: {
      badge: 'Inspiration',
      title: 'Ma vision de la réussite',
      subtitle: 'Une philosophie qui guide chaque projet et décision',
      quote: {
        lines: [
          'Let the moon be your mark.',
          'A failure there is no true descent,',
          'but a silent promotion to the starry court.',
        ],
      },
      author: {
        name: 'Juninho RAMEFISON',
        role: 'Développeur logiciel',
      },
      tag: 'Philosophie personnelle',
      footer:
        "Cette citation guide mon approche de chaque défi, transformant chaque obstacle en opportunité d’ascension vers des objectifs plus élevés.",
    },
    contact: {
      badge: 'Contact',
      title: 'Démarrons votre projet ensemble',
      description:
        'Prêt à concrétiser vos idées ? Contactez-moi pour discuter de votre projet et découvrir comment je peux vous aider.',
    
      stayInTouch: {
        title: 'Restons en contact',
        description:
          'N’hésitez pas à me contacter pour toute question ou demande de devis. Je réponds généralement sous 24 heures.',
      },
    
      infos: {
        email: 'Email',
        phone: 'Téléphone',
        location: 'Localisation',
      },
    
      social: {
        title: 'Suivez-moi',
      },
    
      form: {
        firstName: 'Prénom',
        lastName: 'Nom',
        email: 'Email',
        subject: 'Sujet',
        message: 'Message',
    
        firstNamePlaceholder: 'Votre prénom',
        lastNamePlaceholder: 'Votre nom',
        emailPlaceholder: 'votre@email.com',
        subjectPlaceholder: 'Sujet de votre message',
        messagePlaceholder: 'Décrivez votre projet...',
    
        send: 'Envoyer le message',
      },
    }
    
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
          image: 'mirva.jpg', 
        },
        {
          title: 'University Education',
          description:
            'Computer science student at HEI with a strong foundation in development and systems.',
          image: 'HEI.png', 
        },
        {
          title: 'Interests',
          description:
            'Cybersecurity, chess, travel, music and motorsport.',
          image: 'Hobbies.jpeg', 
        },
      ],
    },

    citation: {
      badge: 'Inspiration',
      title: 'My vision of success',
      subtitle: 'A philosophy that guides every project and decision',
      quote: {
        lines: [
          'Let the moon be your mark.',
          'Failure there is no true descent,',
          'but a silent promotion to the starry court.',
        ],
      },
      author: {
        name: 'Juninho RAMEFISON',
        role: 'Software Developer',
      },
      tag: 'Personal philosophy',
      footer:
        'This quote guides my approach to every challenge, turning obstacles into opportunities for higher achievement.',
    },
    contact: {
      badge: 'Contact',
      title: 'Let’s build your project together',
      description:
        'Ready to bring your ideas to life? Contact me to discuss your project and see how I can help.',
    
      stayInTouch: {
        title: 'Let’s stay in touch',
        description:
          'Feel free to reach out for any questions or project inquiries. I usually reply within 24 hours.',
      },
    
      infos: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
      },
    
      social: {
        title: 'Follow me',
      },
    
      form: {
        firstName: 'First name',
        lastName: 'Last name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
    
        firstNamePlaceholder: 'Your first name',
        lastNamePlaceholder: 'Your last name',
        emailPlaceholder: 'your@email.com',
        subjectPlaceholder: 'Message subject',
        messagePlaceholder: 'Describe your project...',
    
        send: 'Send message',
      },
    }
    
    
  },
  
} as const
