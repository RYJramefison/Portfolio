export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: [
      "Accueil",
      "Projets",
      "Parcours",
      "Compétences",
      "Citation",
      "Contact",
    ],

    common: {
      cv: "Télécharger mon CV",
      miniCV: "mon CV",
      demo: "Démo",
      code: "Code",
    },

    home: {
      greeting: "Bonjour, je suis",
      job: "Développeur Web Full Stack",
      description:
        "Développeur web en formation (L3), je crée des applications web modernes, sécurisées et performantes. Je participe aux différentes étapes du projet, notamment la conception et le développement. Orienté qualité et simplicité, mon objectif est de proposer des solutions fiables et intuitives.",
      projectsBtn: "Voir mes projets",
      downloadCv: "Télécharger CV",
    },

    skills: {
      title: "Compétences",
      subtitle: "Ce que je fais",
      categories: [
        {
          title: "Design",
          icon: "🎨",
          description: "Création d’interfaces modernes et intuitives.",
          skills: [
            { name: "Figma", primary: true },
            { name: "Material UI", primary: false },
            { name: "Styled Components", primary: false },
          ],
        },
        {
          title: "Front-end",
          icon: "💻",
          description: "Développement d’interfaces performantes et dynamiques.",
          skills: [
            { name: "Next.js", primary: true },
            { name: "React", primary: false },
            { name: "TypeScript", primary: false },
            { name: "Tailwind CSS", primary: false },
            { name: "Bootstrap", primary: false },
          ],
        },
        {
          title: "Back-end",
          icon: "🛠️",
          description:
            "Architecture et développement d’APIs backend fiables, scalables et maintenables.",
          skills: [
            { name: "Java", primary: true },
            { name: "PostgreSQL", primary: true },
            { name: "Node.js", primary: false },
            { name: "Express.js", primary: false },
          ],
        },
        {
          title: "Outils & Autres",
          icon: "⚙️",
          description:
            "Utilisation d’outils modernes pour le développement, l’analyse et la collaboration.",
          skills: [
            { name: "Docker", primary: false },
            { name: "Power BI", primary: false },
            { name: "GIT", primary: false },
          ],
        },
      ],
    },

    projects: {
      label: "Projet personnel",
      title: "Mes projets réalisés",
      description:
        "Explorez une sélection de projets personnels démontrant ma créativité et mes compétences techniques.",
      cta: "Voir tous les projets",
      projects: [
        {
          title: "Restaurant API",
          description:
            "API backend pour la gestion des commandes et des stocks en restauration, avec vérification automatique des ingrédients.",
          image: "climat et tourisme.png",
          tags: ["Spring Boot", "PostgreSQL", "JDBC", "Java 21"],
          category: "API Backend",
        },
        {
          title: "Prévision météo",
          description:
            "Analyse de données climatiques pour recommander les meilleures périodes de voyage, avec pipeline ETL et visualisation via Power BI.",
          image: "climat et tourisme.png",
          tags: ["Python", "Apache Airflow", "Jupyter", "PowerBI"],
          category: "Plateforme",
        },
        {
          title: "Gestion de patrimoine",
          description:
            "Système CRUD de gestion de patrimoine personnel avec calcul des amortissements et visualisation graphique de l’évolution dans le temps.",
          image: "Patrimoine economique.png",
          tags: ["React.js", "Express.js", "Bootstrap"],
          category: "API Backend",
        },
      ],
    },

    background: {
      badge: "Mon Parcours",
      title: "Mes parcours académiques",
      description:
        "Une vision claire et structurée de mon évolution académique et personnelle",
      profile: {
        badge: "Profil",
        title: "Academy Student",
        description:
          "Développeur en formation, focalisé sur des solutions modernes et performantes.",
      },
      steps: [
        {
          title: "Formation universitaire",
          description:
            "Étudiant en informatique (L3) à l’HEI (Haute École d’Informatique), disposant de solides bases en développement et en systèmes informatiques.",
          image: "HEI.png",
        },
        {
          title: "Baccalauréat",
          description:
            "Obtention du baccalauréat scientifique (Série D) en 2023 au lycée MIRVA Alarobia Amboniloha.",
          image: "mirva.jpg",
        },
        {
          title: "Centres d’intérêt",
          description:
            "Je m’intéresse au football, à la natation, à la musique, au beatbox et aux échecs.",
          image: "Hobbies.jpeg",
        },
      ],
    },

    citation: {
      badge: "Inspiration",
      title: "Ma vision de la réussite",
      subtitle: "Une philosophie qui guide chaque projet et décision",
      quote: {
        lines: [
          "Let the moon be your mark.",
          "A failure there is no true descent,",
          "but a silent promotion to the starry court.",
        ],
      },
      author: {
        name: "Juninho RAMEFISON",
        role: "Développeur logiciel",
      },
      tag: "Philosophie personnelle",
      footer:
        "Cette citation guide mon approche de chaque défi, transformant chaque obstacle en opportunité d’ascension vers des objectifs plus élevés.",
    },

    contact: {
      badge: "Contact",
      title: "Entrons en contact",
      description:
        "Un premier échange pour partager des idées, collaborer ou simplement faire connaissance.",

      stayInTouch: {
        title: "Restons en contact",
        description:
          "Pour toute question, proposition ou opportunité future, vous pouvez me joindre à tout moment. Je réponds généralement sous 24 heures.",
      },

      infos: {
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
      },

      social: {
        title: "Suivez-moi",
      },

      form: {
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email",
        subject: "Sujet",
        message: "Message",

        firstNamePlaceholder: "Votre prénom",
        lastNamePlaceholder: "Votre nom",
        emailPlaceholder: "votre@email.com",
        subjectPlaceholder: "Sujet de votre message",
        messagePlaceholder: "Décrivez votre projet...",

        send: "Envoyer le message",
      },
    },
  },

  en: {
    nav: ["Home", "projects", "Background", "Skills", "Citation", "Contact"],

    common: {
      cv: "Download CV",
      demo: "Demo",
      code: "Code",
    },

    home: {
      greeting: "Hello, I am",
      job: "Full Stack Web Developer",
      description:
        "Web developer in training (Bachelor’s degree – Year 3), I build modern, secure, and high-performance web applications. I contribute to different stages of a project, particularly design and development. Focused on quality and simplicity, my goal is to deliver reliable and intuitive solutions.",
      projectsBtn: "View my projects",
      downloadCv: "Download CV",
    },

    skills: {
      title: "Skills",
      subtitle: "What I Do",
      categories: [
        {
          title: "Design",
          icon: "🎨",
          description: "Designing modern and intuitive user interfaces.",
          skills: [
            { name: "Figma", primary: true },
            { name: "Material UI", primary: false },
            { name: "Styled Components", primary: false },
          ],
        },
        {
          title: "Front-end",
          icon: "💻",
          description:
            "Developing high-performance and dynamic user interfaces.",
          skills: [
            { name: "Next.js", primary: true },
            { name: "React", primary: false },
            { name: "TypeScript", primary: false },
            { name: "Tailwind CSS", primary: false },
            { name: "Bootstrap", primary: false },
          ],
        },
        {
          title: "Back-end",
          icon: "🛠️",
          description:
            "Designing and developing reliable, scalable, and maintainable backend APIs.",
          skills: [
            { name: "Java", primary: true },
            { name: "PostgreSQL", primary: true },
            { name: "Node.js", primary: false },
            { name: "Express.js", primary: false },
          ],
        },
        {
          title: "Tools & Others",
          icon: "⚙️",
          description:
            "Using modern tools for development, data analysis, and collaboration.",
          skills: [
            { name: "Docker", primary: false },
            { name: "Power BI", primary: false },
            { name: "Git", primary: false },
          ],
        },
      ],
    },

    projects: {
      label: "Personal Project",
      title: "My Completed Projects",
      description:
        "Explore a selection of personal projects showcasing my creativity and technical skills.",
      cta: "View all projects",
      projects: [
        {
          title: "Restaurant API",
          description:
            "Backend API for managing restaurant orders and inventory, with automatic ingredient availability checks.",
          image: "climat et tourisme.png",
          tags: ["Spring Boot", "PostgreSQL", "JDBC", "Java 21"],
          category: "Backend API",
        },
        {
          title: "Weather Forecast",
          description:
            "Climate data analysis to recommend the best travel periods, with an automated ETL pipeline and data visualization using Power BI.",
          image: "climat et tourisme.png",
          tags: ["Python", "Apache Airflow", "Jupyter", "Power BI"],
          category: "Platform",
        },
        {
          title: "Asset Management",
          description:
            "CRUD system for personal asset management, including depreciation calculations and graphical visualization of asset evolution over time.",
          image: "Patrimoine economique.png",
          tags: ["React.js", "Express.js", "Bootstrap"],
          category: "Backend API",
        },
      ],
    },

    background: {
      badge: "My Journey",
      title: "My Academic Background",
      description:
        "A clear and structured overview of my academic and personal journey.",
      profile: {
        badge: "Profile",
        title: "Academic Student",
        description:
          "Developer in training, focused on building modern and high-performance solutions.",
      },
      steps: [
        {
          title: "University Education",
          description:
            "Computer science student (Bachelor’s degree – Year 3) at HEI (Haute École d’Informatique), with solid foundations in development and computer systems.",
          image: "HEI.png",
        },
        {
          title: "High School Diploma",
          description:
            "Scientific high school diploma (Series D) obtained in 2023 at MIRVA Alarobia Amboniloha High School.",
          image: "mirva.jpg",
        },
        {
          title: "Interests",
          description:
            "I am interested in football, swimming, music, beatboxing, and chess.",
          image: "Hobbies.jpeg",
        },
      ],
    },

    citation: {
      badge: "Inspiration",
      title: "My vision of success",
      subtitle: "A philosophy that guides every project and decision",
      quote: {
        lines: [
          "Let the moon be your mark.",
          "A failure there is no true descent,",
          "but a silent promotion to the starry court.",
        ],
      },
      author: {
        name: "Juninho RAMEFISON",
        role: "Software Developer",
      },
      tag: "Personal philosophy",
      footer:
        "This quote guides my approach to every challenge, turning obstacles into opportunities for higher achievement.",
    },

    contact: {
      badge: "Contact",
      title: "Get in Touch",
      description:
        "A first conversation to share ideas, collaborate, or simply get to know each other.",

      stayInTouch: {
        title: "Stay in Touch",
        description:
          "For any questions, proposals, or future opportunities, feel free to reach out at any time. I usually respond within 24 hours.",
      },

      infos: {
        email: "Email",
        phone: "Phone",
        location: "Location",
      },

      social: {
        title: "Follow me",
      },

      form: {
        firstName: "First name",
        lastName: "Last name",
        email: "Email",
        subject: "Subject",
        message: "Message",

        firstNamePlaceholder: "Your first name",
        lastNamePlaceholder: "Your last name",
        emailPlaceholder: "your@email.com",
        subjectPlaceholder: "Message subject",
        messagePlaceholder: "Describe your project...",

        send: "Send message",
      },
    },
  },
} as const;
