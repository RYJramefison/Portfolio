export type Lang = 'fr' | 'en'

export const translations = {
  fr: {
    nav: [
      'Accueil',
      'Projets',
      'Parcours',
      'Compétences',
      'Citation',
      'Contact',
    ],

    common: {
      cv: 'Télécharger mon CV',
      miniCV: 'mon CV',
      demo: 'Démo',
      code: 'Code',
    },

    home: {
      greeting: 'Bonjour, je suis',
      job: 'Développeur Web Full Stack',
      description:
        'Développeur web en formation (L3), je crée des applications web modernes, sécurisées et performantes. Je participe aux différentes étapes du projet, notamment la conception et le développement. Orienté qualité et simplicité, mon objectif est de proposer des solutions fiables et intuitives.',
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

    projects: {
      label: 'Projet personnel',
      title: 'Mes projets réalisés',
      description:
        "Explorez une sélection de projets personnels démontrant ma créativité et mes compétences techniques.",
      cta: 'Voir tous les projets',
      projects: [
        {
          title: 'Restaurant API',
          description: 'API backend pour la gestion des commandes et des stocks en restauration, avec vérification automatique des ingrédients.',
          image: 'climat et tourisme.png',
          tags: ['Spring Boot', 'PostgreSQL', 'JDBC', 'Java 21'],
          category: 'API Backend',
        },
        {
          title: 'Prévision météo',
          description:
            'Analyse de données climatiques pour recommander les meilleures périodes de voyage, avec pipeline ETL et visualisation via Power BI.',
          image: 'climat et tourisme.png',
          tags: ['Python', 'Apache Airflow', 'Jupyter', 'PowerBI'],
          category: 'Plateforme',
        },
        {
          title: 'Gestion de patrimoine',
          description:
            'Système CRUD de gestion de patrimoine personnel avec calcul des amortissements et visualisation graphique de l’évolution dans le temps.',
          image: 'Patrimoine economique.png',
          tags: ['React.js', 'Express.js', 'Bootstrap'],
          category: 'API Backend',
        },
      ],
    },
    background: {
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
          title: 'Formation universitaire',
          description:
            'Étudiant en informatique à HEI, avec une base solide en développement et systèmes informatiques.',
          image: 'HEI.png', 
        },
        {
          title: 'Baccalauréat',
          description:
            'Obtention du Baccalauréat Scientifique – Série D au Lycée MIRVA Amboniloha en 2023.',
          image: 'mirva.jpg', 
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
    nav: ['Home','projects', 'Background', 'Skills', 'Citation', 'Contact'],

    common: {
      cv: 'Download CV',
      demo: 'Demo',
      code: 'Code',
    },

    home: {
      greeting: 'Hello, I am',
      job: 'Full Stack Web Developer',
      description:
        'Web developer in training (Bachelor’s degree – Year 3), I build modern, secure, and high-performance web applications. I contribute to different stages of a project, particularly design and development. Focused on quality and simplicity, my goal is to deliver reliable and intuitive solutions.',
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

    projects: {
      label: 'Personal Project',
      title: 'My Completed Projects',
      description:
        'Explore a selection of personal projects showcasing my creativity and technical skills.',
      cta: 'View all projects',
      projects: [
        {
          title: 'Restaurant API',
          description:
            'Backend API for managing restaurant orders and inventory, with automatic ingredient availability checks.',
          image: 'climat et tourisme.png',
          tags: ['Spring Boot', 'PostgreSQL', 'JDBC', 'Java 21'],
          category: 'Backend API',
        },
        {
          title: 'Weather Forecast',
          description:
            'Climate data analysis to recommend the best travel periods, with an automated ETL pipeline and data visualization using Power BI.',
          image: 'climat et tourisme.png',
          tags: ['Python', 'Apache Airflow', 'Jupyter', 'Power BI'],
          category: 'Platform',
        },
        {
          title: 'Asset Management',
          description:
            'CRUD system for personal asset management, including depreciation calculations and graphical visualization of asset evolution over time.',
          image: 'Patrimoine economique.png',
          tags: ['React.js', 'Express.js', 'Bootstrap'],
          category: 'Backend API',
        },
      ],
    },

    background: {
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
          title: 'University Education',
          description:
            'Computer science student at HEI with a strong foundation in development and systems.',
          image: 'HEI.png', 
        },
        {
          title: 'High School Diploma',
          description:
            'Obtained a Scientific High School Diploma – Series D at Lycée MIRVA Amboniloha in 2023.',
          image: 'mirva.jpg', 
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
