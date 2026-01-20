import { link } from "fs";

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
          title: "Front-end",
          icon: "/icons/skills/ux-design.png",
          description: "Développement d’interfaces performantes et dynamiques.",
          skills: [
            {
              name: "Next.js",
              icon: "/icons/next-js.png",
              color: "17,24,39",
              primary: true,
              documentation: "https://nextjs.org/docs",
            },
            {
              name: "React",
              icon: "/icons/react-js.png",
              color: "59,130,246",
              primary: false,
              documentation: "https://react.dev/",
            },
            {
              name: "TypeScript",
              icon: "/icons/typescript.png",
              color: "37,99,235",
              primary: false,
              documentation: "https://www.typescriptlang.org/docs/",
            },
            {
              name: "Tailwind CSS",
              icon: "/icons/tailwind.png",
              color: "14,165,233",
              primary: true,
              documentation: "https://tailwindcss.com/docs",
            },
            {
              name: "Bootstrap",
              icon: "/icons/bootstrap.png",
              color: "124,58,237",
              primary: false,
              documentation:
                "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
            },
          ],
        },
        {
          title: "Back-end",
          icon: "/icons/skills/coding.png",
          description:
            "Architecture et développement d’APIs backend fiables, scalables et maintenables.",
          skills: [
            {
              name: "Java",
              icon: "/icons/java.png",
              color: "234,67,53",
              primary: true,
              documentation: "https://docs.oracle.com/en/java/",
            },
            {
              name: "PostgreSQL",
              icon: "/icons/postgresql.png",
              color: "51,103,145",
              primary: true,
              documentation: "https://www.postgresql.org/docs/",
            },
            {
              name: "Node.js",
              icon: "/icons/node-js.png",
              color: "34,197,94",
              primary: false,
              documentation: "https://nodejs.org/en/docs/",
            },
            {
              name: "Express.js",
              icon: "/icons/express.png",
              color: "107,114,128",
              primary: false,
              documentation: "https://expressjs.com/en/starter/installing.html",
            },
          ],
        },
        {
          title: "Outils & Autres",
          icon: "/icons/skills/browser.png",
          description:
            "Utilisation d’outils modernes pour le développement, l’analyse et la collaboration.",
          skills: [
            {
              name: "GIT",
              icon: "/icons/git.png",
              color: "239,68,68",
              primary: true,
              documentation: "https://git-scm.com/doc",
            },
            {
              name: "Figma",
              icon: "/icons/figma.png",
              color: "168,85,247",
              primary: false,
              documentation:
                "https://help.figma.com/hc/en-us/articles/360040514373-Getting-started-with-Figma",
            },
            {
              name: "Docker",
              icon: "/icons/docker.png",
              color: "14,165,233",
              primary: false,
              documentation: "https://docs.docker.com/get-started/",
            },
            {
              name: "Power BI",
              icon: "/icons/powerbi.png",
              color: "234,179,8",
              primary: false,
              documentation:
                "https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview",
            },
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
          images: ["api_restaurant.png"],
          tags: ["Spring Boot", "PostgreSQL", "JDBC", "Java 21"],
          category: "API Backend",
          githubUrl:
            "https://github.com/RYJramefison/restaurant-management-25-backend.git",
          previewUrl: null,
        },
        {
          title: "Prévision météo",
          description:
            "Analyse de données climatiques pour recommander les meilleures périodes de voyage, avec pipeline ETL et visualisation via Power BI.",
          images: [
            "climat et tourisme.png",
            "climat et tourisme.png",
            "climat et tourisme.png",
          ],
          tags: ["Python", "Apache Airflow", "Jupyter", "PowerBI"],
          category: "Plateforme",
          githubUrl: "https://github.com/RYJramefison/climat_tourism",
          previewUrl:
            "https://drive.google.com/file/d/1yUBF26PoLAsq16Zywnt8iLfbYP-e2U90/view?usp=drive_link",
        },
        {
          title: "Gestion de patrimoine",
          description:
            "Système CRUD de gestion de patrimoine personnel avec calcul des amortissements et visualisation graphique de l’évolution dans le temps.",
          images: [
            "Patrimoine economique.png",
            "Patrimoine economique.png",
            "Patrimoine economique.png",
          ],
          tags: ["React.js", "Express.js", "Bootstrap"],
          category: "API Backend",
          githubUrl:
            "https://github.com/RYJramefison/gestion_patrimoine_render",
          previewUrl: "https://my-patrimoine-economique-frontend.onrender.com/",
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
          link: "https://www.hei.ch/",
        },
        {
          title: "Baccalauréat",
          description:
            "Obtention du baccalauréat scientifique (Série D) en 2023 au lycée MIRVA Alarobia Amboniloha.",
          image: "mirva.jpg",
          link: "https://lyceemirva.edu.mg/",
        },
        {
          title: "Centres d’intérêt",
          description:
            "Je m’intéresse au football, à la natation, à la musique, au beatbox et aux échecs.",
          image: "Hobbies.jpeg",
          link: null,
        },
      ],
    },

    citation: {
      badge: "Inspiration",
      title: "Ma vision de la réussite",
      subtitle: "Une philosophie qui guide chaque projet et décision",
      quote: {
        lines: [
          "Que la lune soit ton repère.",
          "L’échec n’est pas une vraie chute,",
          "mais une ascension silencieuse vers la cour des étoiles.",
        ],
      },
      author: {
        name: "Juninho RAMEFISON",
        role: "Inspiré par Antoine de Saint‑Exupéry, Le Petit Prince",
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
        loading: "Envoi en cours...",
        send: "Envoyer le message",
        info: "Connexion requise pour envoyer le formulaire",
        logIn: "Se connecter avec Google",
        logOut: "Se déconnecter",
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
          title: "Front-end",
          icon: "/icons/skills/ux-design.png",
          description:
            "Developing high-performance and dynamic user interfaces.",
          skills: [
            {
              name: "Next.js",
              icon: "/icons/next-js.png",
              color: "17,24,39",
              primary: true,
              documentation: "https://nextjs.org/docs",
            },
            {
              name: "React",
              icon: "/icons/react-js.png",
              color: "59,130,246",
              primary: false,
              documentation: "https://react.dev/",
            },
            {
              name: "TypeScript",
              icon: "/icons/typescript.png",
              color: "37,99,235",
              primary: false,
              documentation: "https://www.typescriptlang.org/docs/",
            },
            {
              name: "Tailwind CSS",
              icon: "/icons/tailwind.png",
              color: "14,165,233",
              primary: true,
              documentation: "https://tailwindcss.com/docs",
            },
            {
              name: "Bootstrap",
              icon: "/icons/bootstrap.png",
              color: "124,58,237",
              primary: false,
              documentation:
                "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
            },
          ],
        },
        {
          title: "Back-end",
          icon: "/icons/skills/coding.png",
          description:
            "Designing and developing reliable, scalable, and maintainable backend APIs.",
          skills: [
            {
              name: "Java",
              icon: "/icons/java.png",
              color: "234,67,53",
              primary: true,
              documentation: "https://docs.oracle.com/en/java/",
            },
            {
              name: "PostgreSQL",
              icon: "/icons/postgresql.png",
              color: "51,103,145",
              primary: true,
              documentation: "https://www.postgresql.org/docs/",
            },
            {
              name: "Node.js",
              icon: "/icons/node-js.png",
              color: "34,197,94",
              primary: false,
              documentation: "https://nodejs.org/en/docs/",
            },
            {
              name: "Express.js",
              icon: "/icons/express.png",
              color: "107,114,128",
              primary: false,
              documentation: "https://expressjs.com/en/starter/installing.html",
            },
          ],
        },
        {
          title: "Tools & Others",
          icon: "/icons/skills/browser.png",
          description:
            "Using modern tools for development, data analysis, and collaboration.",
          skills: [
            {
              name: "GIT",
              icon: "/icons/git.png",
              color: "239,68,68",
              primary: true,
              documentation: "https://git-scm.com/doc",
            },
            {
              name: "Figma",
              icon: "/icons/figma.png",
              color: "168,85,247",
              primary: false,
              documentation:
                "https://help.figma.com/hc/en-us/articles/360040514373-Getting-started-with-Figma",
            },
            {
              name: "Docker",
              icon: "/icons/docker.png",
              color: "14,165,233",
              primary: false,
              documentation: "https://docs.docker.com/get-started/",
            },
            {
              name: "Power BI",
              icon: "/icons/powerbi.png",
              color: "234,179,8",
              primary: false,
              documentation:
                "https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview",
            },
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
          images: ["api_restaurant.png"],
          tags: ["Spring Boot", "PostgreSQL", "JDBC", "Java 21"],
          category: "Backend API",
          githubUrl:
            "https://github.com/RYJramefison/restaurant-management-25-backend.git",
          previewUrl: null,
        },
        {
          title: "Weather Forecast",
          description:
            "Climate data analysis to recommend the best travel periods, with an automated ETL pipeline and data visualization using Power BI.",
          images: [
            "climat et tourisme.png",
            "climat et tourisme.png",
            "climat et tourisme.png",
          ],
          tags: ["Python", "Apache Airflow", "Jupyter", "Power BI"],
          category: "Platform",
          githubUrl: "https://github.com/RYJramefison/climat_tourism",
          previewUrl:
            "https://drive.google.com/file/d/1yUBF26PoLAsq16Zywnt8iLfbYP-e2U90/view?usp=drive_link",
        },
        {
          title: "Asset Management",
          description:
            "CRUD system for personal asset management, including depreciation calculations and graphical visualization of asset evolution over time.",
          images: [
            "Patrimoine economique.png",
            "Patrimoine economique.png",
            "Patrimoine economique.png",
          ],
          tags: ["React.js", "Express.js", "Bootstrap"],
          category: "Backend API",
          githubUrl:
            "https://github.com/RYJramefison/gestion_patrimoine_render",
          previewUrl: "https://my-patrimoine-economique-frontend.onrender.com/",
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
          link: "https://www.hei.ch/",
        },
        {
          title: "High School Diploma",
          description:
            "Scientific high school diploma (Series D) obtained in 2023 at MIRVA Alarobia Amboniloha High School.",
          image: "mirva.jpg",
          link: "https://lyceemirva.edu.mg/",
        },
        {
          title: "Interests",
          description:
            "I am interested in football, swimming, music, beatboxing, and chess.",
          image: "Hobbies.jpeg",
          link: null,
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
        role: "Inspired by Antoine de Saint-Exupéry, The Little Prince",
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
        loading: "Sending...",
        info: "Login required to send form",
        logIn: "Log in with Google",
        logOut: "Log out",
      },
    },
  },
} as const;
