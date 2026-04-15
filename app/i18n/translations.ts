import { link } from "fs";

export type Lang = "fr" | "en";

export const translations = {
  fr: {
    nav: [
      "Accueil",
      "Compétences",
      "Projets",
      "Parcours",
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
      technologies: ["React", "Next.js", "Spring Boot", "PostgreSQL"],
      description:
        "Développeur web en formation (L3), je conçois et développe des applications web modernes et performantes. J’interviens sur l’ensemble du cycle de développement avec un fort accent sur la qualité, la simplicité et l’expérience utilisateur.",
      projectsBtn: "Voir mes projets",
      downloadCv: "Télécharger mon CV",
    },

    skills: {
      title: "Compétences",
      subtitle: "Ce que je fais",
      description:
        "Voici les compétences techniques que j’utilise pour développer des solutions modernes et efficaces.",
      categories: [
        {
          title: "Front-End",
          icon: "/icons/skills/front-end.png",
          description:
            "Création et développement d’interfaces utilisateur performantes, responsives et modulaires.",
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
              primary: true,
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
              primary: false,
              documentation: "https://tailwindcss.com/docs",
            },
            {
              name: "JavaScript",
              icon: "/icons/javascript.png",
              color: "247,223,30",
              primary: false,
              documentation:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              name: "HTLM",
              icon: "/icons/htlm.png",
              color: "227,79,38",
              primary: false,
              documentation: "https://html.spec.whatwg.org/multipage/",
            },
            {
              name: "CSS",
              icon: "/icons/css.png",
              color: "38,77,228",
              primary: false,
              documentation: "https://www.w3.org/TR/CSS/#css",
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
          title: "Back-End",
          icon: "/icons/skills/back-end.png",
          description:
            "Développement d’APIs backend fiables et évolutives, incluant la gestion des bases de données.",
          skills: [
            {
              name: "Spring Boot",
              icon: "/icons/spring.png",
              color: "109,179,63",
              primary: true,
              documentation: "https://spring.io/projects/spring-boot",
            },
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
          ],
        },
        {
          title: "Pipelines Data",
          icon: "/icons/skills/data.png",
          description:
            "Analyse, traitement et orchestration des données pour produire des résultats fiables et exploitables.",
          skills: [
            {
              name: "Python",
              icon: "/icons/python.png",
              color: "55,118,171",
              primary: false,
              documentation: "https://docs.python.org/3/",
            },
            {
              name: "Jupyter Notebook",
              icon: "/icons/jupyter.png",
              color: "243,118,38",
              primary: false,
              documentation: "https://jupyter.org/documentation",
            },
            {
              name: "Apache Airflow",
              icon: "/icons/airflow.png",
              color: "1,124,238",
              primary: false,
              documentation:
                "https://airflow.apache.org/docs/apache-airflow/stable/",
            },
            {
              name: "Power BI",
              icon: "/icons/powerbi.png",
              color: "242,200,17",
              primary: false,
              documentation:
                "https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview",
            },
          ],
        },

        {
          title: "Outils & Flux de travail",
          icon: "/icons/skills/setting.png",
          description:
            "Utilisation d’outils modernes pour le développement, le déploiement et la collaboration.",
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
              name: "Postman",
              icon: "/icons/postman.png",
              color: "255,108,55",
              primary: false,
              documentation:
                "https://learning.postman.com/docs/getting-started/introduction/",
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
      actions: {
        view: "code",
        demo: "demo",
      },
      projects: [
        {
          title: "Restaurant API",
          description:
            "Conception et développement d’une API REST assurant la gestion des commandes de leur création à la livraison, avec le suivi des stocks et la vérification de la disponibilité des ingrédients.",
          images: ["api_restaurant.png"],
          tags: [
            {
              label: "Spring Boot",
              color: "bg-green-600/20 text-green-400 border-green-500/30",
            },
            {
              label: "PostgreSQL",
              color: "bg-blue-600/20 text-blue-400 border-blue-500/30",
            },
            {
              label: "JDBC",
              color: "bg-orange-600/20 text-orange-400 border-orange-500/30",
            },
            {
              label: "Java 21",
              color: "bg-red-600/20 text-red-400 border-red-500/30",
            },
          ],
          category: "API Backend",
          githubUrl:
            "https://github.com/RYJramefison/restaurant-management-25-backend.git",
          previewUrl: null,
        },
        {
          title: "Prévision météo",
          description:
            "Analyse de données climatiques afin de recommander les meilleures périodes de voyage, à travers un pipeline ETL et une visualisation des résultats avec Power BI.",
          images: [
            "/projects/climat_tourisme/climat_tourisme_2.png",
            "/projects/climat_tourisme/climat_tourisme_3.png",
            "/projects/climat_tourisme/climat_tourisme_1.png",
          ],
          tags: [
            {
              key: "python",
              color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
            },
            {
              key: "airflow",
              color: "bg-pink-600/20 text-pink-400 border-pink-500/30",
            },
            {
              key: "jupyter",
              color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
            },
            {
              key: "powerbi",
              color: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30",
            },
          ],
          category: "Plateforme",
          githubUrl: "https://github.com/RYJramefison/climat_tourism",
          previewUrl:
            "https://drive.google.com/file/d/1yUBF26PoLAsq16Zywnt8iLfbYP-e2U90/view?usp=drive_link",
        },
        {
          title: "Gestion de patrimoine",
          description:
            "Système CRUD de gestion de patrimoine personnel intégrant le calcul des amortissements et la visualisation graphique de l’évolution dans le temps.",
          images: [
            "/projects/patrimoine/patrimoine_1.png",
            "/projects/patrimoine/patrimoine_2.png",
            "/projects/patrimoine/patrimoine_3.png",
          ],
          tags: [
            {
              key: "react",
              color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
            },
            {
              key: "express",
              color: "bg-gray-500/20 text-gray-300 border-gray-400/30",
            },
            {
              key: "bootstrap",
              color: "bg-purple-600/20 text-purple-400 border-purple-500/30",
            },
          ],
          category: "API Backend",
          githubUrl:
            "https://github.com/RYJramefison/gestion_patrimoine_render",
          previewUrl: "https://my-patrimoine-economique-frontend.onrender.com/",
        },
        {
          title: "Volako",
          description:
            "Application mobile de gestion d’argent permettant de suivre les dettes, transactions et soldes en temps réel avec une interface moderne et fluide.",
          images: [
            "/projects/volako/volako_1.png",
            "/projects/volako/volako_2.png",
            "/projects/volako/volako_3.png",
          ],
          tags: [
            {
              key: "reactnative",
              color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
            },
            {
              key: "tailwind",
              color: "bg-sky-500/20 text-sky-400 border-sky-500/30",
            },
            {
              key: "zustand",
              color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
            },
          ],
          category: "Mobile Application",
          githubUrl: "https://github.com/RYJramefison/volako",
          previewUrl: "",
        },
        {
          title: "Kanto-Feo",
          description:
            "Plateforme web dédiée à l’apprentissage musical en ligne permettant aux enseignants de publier des cours et aux élèves de suivre des leçons interactives.",
          images: [
            "/projects/kanto-feo/kanto-feo_1.png",
            "/projects/kanto-feo/kanto-feo_2.png",
            "/projects/kanto-feo/kanto-feo_3.png",
            "/projects/kanto-feo/kanto-feo_4.png",
          ],
          tags: [
            {
              key: "vite",
              color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
            },
            {
              key: "typescript",
              color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
            },
            {
              key: "tailwind",
              color: "bg-sky-500/20 text-sky-400 border-sky-500/30",
            },
            {
              key: "nest js",
              color: "bg-red-500/20 text-red-400 border-red-500/30",
            },
            {
              key: "prisma",
              color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
            },
            {
              key: "postgresQL",
              color: "bg-green-500/20 text-green-400 border-green-500/30",
            },
          ],
          category: "Web Application",
          githubUrl: "https://github.com/RYJramefison/kanto-feo",
          previewUrl: "",
        },
      ],
    },

    background: {
      badge: "Mon parcours",
      title: "Parcours académique",
      description:
        "Un aperçu clair et structuré de mon parcours académique et de mon évolution personnelle.",
      profile: {
        badge: "Profil",
        title: "Étudiant en informatique",
        description:
          "Développeur en formation, orienté vers la conception de solutions modernes, performantes et fiables.",
      },
      steps: [
        {
          title: "Formation universitaire",
          establishment: "HEI (Haute École d’Informatique)",
          description:
            "Étudiant en informatique (L3), avec de solides bases en développement web, algorithmique et systèmes informatiques.",
          image: "HEI.png",

          link: "https://hei.school/",
        },
        {
          title: "Communauté Kodata",
          establishment: "Madagascar · Data & IA",
          description:
            "Membre de Kodata — espace d'apprentissage et de partage dédié aux passionnés de data analyse et data science à Madagascar.",
          image: "logo_kodata.png",
          link: null,
        },
        {
          title: "Baccalauréat scientifique",
          establishment: "Lycée MIRVA Alarobia Amboniloha",
          description:
            "Obtention du baccalauréat scientifique (Série D) en 2023.",
          image: "mirva.jpg",
          link: "https://lyceemirva35.com/",
        },
        {
          title: "Centres d’intérêt",
          establishment: "Loisirs personnels",
          description:
            "Pratique de la musique et du beatbox pour stimuler la créativité, et des échecs pour renforcer l’esprit stratégique.",
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
        emailPlaceholder: "votre@gmail.com",
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
    nav: ["Home", "Skills", "projects", "Background", "Citation", "Contact"],

    common: {
      cv: "Download CV",
      demo: "Demo",
      code: "Code",
    },

    home: {
      greeting: "Hello, I am",
      job: "Full Stack Web Developer",
      technologies: ["React", "Next.js", "Spring Boot", "PostgreSQL"],
      description:
        "Web development student (3rd year), I design and build modern, high-performance web applications. I work across the full development lifecycle with a strong focus on quality, simplicity, and user experience.",
      projectsBtn: "View my projects",
      downloadCv: "Download CV",
    },

    skills: {
      title: "Skills",
      subtitle: "What I Do",
      description:
        "These are the technical skills I use to develop modern and efficient solutions.",
      categories: [
        {
          title: "Front-End",
          icon: "/icons/skills/front-end.png",
          description:
            "Designing and developing performant, responsive, and modular user interfaces.",
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
              primary: true,
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
              primary: false,
              documentation: "https://tailwindcss.com/docs",
            },
            {
              name: "JavaScript",
              icon: "/icons/javascript.png",
              color: "247,223,30",
              primary: false,
              documentation:
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            },
            {
              name: "HTLM",
              icon: "/icons/htlm.png",
              color: "227,79,38",
              primary: false,
              documentation: "https://html.spec.whatwg.org/multipage/",
            },
            {
              name: "CSS",
              icon: "/icons/css.png",
              color: "38,77,228",
              primary: false,
              documentation: "https://www.w3.org/TR/CSS/#css",
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
          title: "Back-End",
          icon: "/icons/skills/back-end.png",
          description:
            "Development of reliable and scalable backend APIs, including database management.",
          skills: [
            {
              name: "Spring Boot",
              icon: "/icons/spring.png",
              color: "109,179,63",
              primary: true,
              documentation: "https://spring.io/projects/spring-boot",
            },
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
          ],
        },
        {
          title: "Data Pipeline Architect",
          icon: "/icons/skills/data.png",
          description:
            "Analysis, processing, and orchestration of data to produce reliable and actionable results.",
          skills: [
            {
              name: "Python",
              icon: "/icons/python.png",
              color: "55,118,171",
              primary: false,
              documentation: "https://docs.python.org/3/",
            },
            {
              name: "Jupyter Notebook",
              icon: "/icons/jupyter.png",
              color: "243,118,38",
              primary: false,
              documentation: "https://jupyter.org/documentation",
            },
            {
              name: "Apache Airflow",
              icon: "/icons/airflow.png",
              color: "1,124,238",
              primary: false,
              documentation:
                "https://airflow.apache.org/docs/apache-airflow/stable/",
            },
            {
              name: "Power BI",
              icon: "/icons/powerbi.png",
              color: "242,200,17",
              primary: false,
              documentation:
                "https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview",
            },
          ],
        },
        {
          title: "Dev Tools & Workflow",
          icon: "/icons/skills/setting.png",
          description:
            "Using modern tools for development, deployment, and collaboration.",
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
              name: "Postman",
              icon: "/icons/postman.png",
              color: "255,108,55",
              primary: false,
              documentation:
                "https://learning.postman.com/docs/getting-started/introduction/",
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
      actions: {
        view: "code",
        demo: "demo",
      },
      projects: [
        {
          title: "Restaurant API",
          description:
            "Development of a REST API to manage orders from creation to delivery, including inventory tracking and ingredient availability checks.",
          images: ["api_restaurant.png"],
          tags: [
            {
              label: "Spring Boot",
              color: "bg-green-600/20 text-green-400 border-green-500/30",
            },
            {
              label: "PostgreSQL",
              color: "bg-blue-600/20 text-blue-400 border-blue-500/30",
            },
            {
              label: "JDBC",
              color: "bg-orange-600/20 text-orange-400 border-orange-500/30",
            },
            {
              label: "Java 21",
              color: "bg-red-600/20 text-red-400 border-red-500/30",
            },
          ],
          category: "Backend API",
          githubUrl:
            "https://github.com/RYJramefison/restaurant-management-25-backend.git",
          previewUrl: null,
        },
        {
          title: "Weather Forecast",
          description:
            "Climate data analysis to recommend the best travel periods, using an ETL pipeline and data visualization with Power BI.",
          images: [
            "/projects/climat_tourisme/climat_tourisme_2.png",
            "/projects/climat_tourisme/climat_tourisme_3.png",
            "/projects/climat_tourisme/climat_tourisme_1.png",
          ],
          tags: [
            {
              key: "python",
              color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
            },
            {
              key: "airflow",
              color: "bg-pink-600/20 text-pink-400 border-pink-500/30",
            },
            {
              key: "jupyter",
              color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
            },
            {
              key: "powerbi",
              color: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30",
            },
          ],
          category: "Platform",
          githubUrl: "https://github.com/RYJramefison/climat_tourism",
          previewUrl:
            "https://drive.google.com/file/d/1yUBF26PoLAsq16Zywnt8iLfbYP-e2U90/view?usp=drive_link",
        },
        {
          title: "Asset Management",
          description:
            "CRUD-based personal asset management system including depreciation calculations and graphical visualization of asset evolution over time.",
          images: [
            "/projects/patrimoine/patrimoine_1.png",
            "/projects/patrimoine/patrimoine_2.png",
            "/projects/patrimoine/patrimoine_3.png",
          ],
          tags: [
            {
              key: "react",
              color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
            },
            {
              key: "express",
              color: "bg-gray-500/20 text-gray-300 border-gray-400/30",
            },
            {
              key: "bootstrap",
              color: "bg-purple-600/20 text-purple-400 border-purple-500/30",
            },
          ],
          category: "Backend API",
          githubUrl:
            "https://github.com/RYJramefison/gestion_patrimoine_render",
          previewUrl: "https://my-patrimoine-economique-frontend.onrender.com/",
        },
        {
          title: "Volako",
          description:
            "Application mobile de gestion d’argent permettant de suivre les dettes, transactions et soldes en temps réel avec une interface moderne et fluide.",
          images: [
            "/projects/volako/volako_1.png",
            "/projects/volako/volako_2.png",
            "/projects/volako/volako_3.png",
          ],
          tags: [
            {
              key: "reactnative",
              color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
            },
            {
              key: "tailwind",
              color: "bg-sky-500/20 text-sky-400 border-sky-500/30",
            },
            {
              key: "zustand",
              color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
            },
          ],
          category: "Mobile Application",
          githubUrl: "https://github.com/RYJramefison/volako",
          previewUrl: "",
        },
        {
          title: "Kanto-Feo",
          description:
            "Plateforme web dédiée à l’apprentissage musical en ligne permettant aux enseignants de publier des cours et aux élèves de suivre des leçons interactives.",
          images: [
            "/projects/kanto-feo/kanto-feo_1.png",
            "/projects/kanto-feo/kanto-feo_2.png",
            "/projects/kanto-feo/kanto-feo_3.png",
            "/projects/kanto-feo/kanto-feo_4.png",
          ],
          tags: [
            {
              key: "vite",
              color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
            },
            {
              key: "typescript",
              color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
            },
            {
              key: "tailwind",
              color: "bg-sky-500/20 text-sky-400 border-sky-500/30",
            },
            {
              key: "nest js",
              color: "bg-red-500/20 text-red-400 border-red-500/30",
            },
            {
              key: "prisma",
              color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
            },
            {
              key: "postgresQL",
              color: "bg-green-500/20 text-green-400 border-green-500/30",
            },
          ],
          category: "Web Application",
          githubUrl: "https://github.com/RYJramefison/kanto-feo",
          previewUrl: "",
        },
      ],
    },

    background: {
      badge: "My Background",
      title: "Academic Background",
      description:
        "A clear and structured overview of my academic journey and personal development.",
      profile: {
        badge: "Profile",
        title: "Computer Science Student",
        description:
          "Developer in training, focused on designing modern, high-performance, and reliable solutions.",
      },
      steps: [
        {
          title: "University Education",
          establishment: "HEI (Haute École d’Informatique)",
          description:
            "Computer Science student (Bachelor’s level), with strong foundations in web development, algorithms, and computer systems.",
          image: "HEI.png",
          link: "https://hei.school/",
        },
        {
          title: "Kodata Community",
          establishment: "Madagascar · Data & AI",
          description:
            "Member of Kodata — a learning and sharing space dedicated to data analysis and data science enthusiasts in Madagascar.",
          image: "logo_kodata.png",
          link: null,
        },
        {
          title: "Scientific Baccalaureate",
          establishment: "Lycée MIRVA Alarobia Amboniloha",
          description:
            "Obtained a Scientific Baccalaureate (Series D) in 2023.",
          image: "mirva.jpg",
          link: "https://lyceemirva35.com/",
        },
        {
          title: "Interests",
          establishment: "Personal Hobbies",
          description:
            "Practice of music and beatboxing to foster creativity, and chess to develop strategic thinking.",
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
        emailPlaceholder: "your@gmail.com",
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
