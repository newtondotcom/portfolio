import { Icons } from "@/components/icons";
import { HomeIcon, Presentation } from "lucide-react";

export const DATA = {
  name: "Robin Augereau",
  initials: "RA",
  url: "https://dillion.io",
  location: "Toulouse, France",
  locationLink: "https://www.google.com/maps/place/Toulouse",
  description:
    "Cybersecurity and Software Engineer turning Entrepreneur. I love building things and helping people.",
  summary:
    "Starting in 2026, I will be working as a full time Engineer. In the past, [I pursued a double degree in computer science then in cybersecurity](/#education) and [interned at big tech french companies](/#work). During my school years, I had the pleasure to be a member of [AEN7 and N7 CONSULTING](/#non-profits).",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Vue",
    "Next.js",
    "Nuxt",
    "Typescript",
    "Node.js",
    "React Native",
    "Python",
    "Django",
    "Go",
    "Postgres",
    "MySQL",
    "Firebase",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
    "Ada",
    "Linux"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Presentation, label: "Projects" },
  ],
  contact: {
    email: "robin.augereau[at]gmail.com",
    tel: "+33 6 49 44 6938",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/newtondotcom",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/robin-augereau/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Thales Services Numériques",
      href: "https://www.thalesgroup.com/fr",
      badges: [],
      location: "Toulouse, France",
      title: "HPC GPU IA Intern",
      logoUrl: "/atomic.png",
      start: "Mar 2025",
      end: "Sep 2025",
      description:
        "In progress.",
    },
    {
      company: "N7 Consulting",
      badges: [],
      href: "https://n7consulting.fr/",
      location: "Toulouse, France",
      title: "Consultant",
      logoUrl: "/n7c.png",
      start: "Apr 2023",
      end : "",
      description:
      "Conducted technical and commercial studies, delivered technical training, and provided expert advice on technologies, architecture, and project hosting to ensure successful implementation and optimization.",
    },
    {
      company: "ACOSS",
      href: "https://www.urssaf.org/accueil/espace-medias/communiques-et-dossiers-de-press/dossiers-de-presse/l-acoss%2C-caisse-nationale-des-ur.html",
      badges: [],
      location: "Paris, France",
      title: "Big Data Intern",
      logoUrl: "/acoss.png",
      start: "Jun 2024",
      end: "Aug 2024",
      description:
        "Architected and wrote the entire MVP for an integrated data visualization solution, while focusing on sovereign hosting of LLMs for employee use, fraud detection algorithms, and the implementation of a vector database for RAG, utilizing modern technologies and best practices.",
    },
    {
      company: "Malakoff Humanis",
      href: "https://www.malakoffhumanis.com/",
      badges: [],
      location: "Paris, France",
      title: "Full Stack Developer Intern",
      logoUrl: "/mh.png",
      start: "Jul 2023",
      end: "Aug 2023",
      description:
        "Refactored and rewrote the web-based interactive organizational chart code using Java, MySQL, and Angular.",
    },
  ],

  nonprofit : [
    {
      company: "AEn7",
      href: "https://www.urssaf.org/accueil/espace-medias/communiques-et-dossiers-de-press/dossiers-de-presse/l-acoss%2C-caisse-nationale-des-ur.html",
      badges: [],
      location: "Toulouse, FR",
      title: "Member Organizer of the Student Bureau",
      logoUrl: "/aeN7.png",
      start: "Apr 2023",
      end: "Apr 2024",
      description:
        "Organized the 2024 Integration Weekend, which attracted 500 participants, and took responsibility for initiatives focused on the prevention of sexual and gender-based violence, while actively participating in dozens of related events.",
    },
    {
      company: "Pépite Écrin",
      badges: [],
      href: "https://pepite-ecrin.pepitizy.fr/fr",
      location: "Remote",
      title: "National Student-Entrepreneur Status",
      logoUrl: "/n7c.png",
      start: "Feb 2023",
      end: "Feb 2024",
      description:
      "As a recipient of the National Student-Entrepreneur Status managed by PÉPITE, I benefited from comprehensive support and resources tailored to my entrepreneurial journey. This status allowed me to receive personalized guidance, obtain exemptions for class hours, and transform my professional internship period into a dedicated phase for my entrepreneurial project. Throughout this experience, I attended numerous workshops, engaged with accomplished entrepreneurs, and networked with members of investment funds, all of which enriched my understanding and prepared me for the challenges of entrepreneurship.",
    },
    {
      company:  "La fresque de la diversité",
      href: "https://www.malakoffhumanis.com/",
      badges: [],
      location: "Toulouse, FR",
      title: "Facilitator",
      logoUrl: "/diversity.png",
      start: "Jan 2023",
      end: "Jan 2024",
      description:
        "In just 3 hours, the collaborative Diversity Mural will teach you about discrimination and the cognitive mechanisms behind it, empowering you to take action.",
    },
    {
      company:  "Toulouse Hacking Convention 2023 & 2025",
      href: "https://thcon.party/",
      badges: [],
      location: "Toulouse, FR",
      title: "Voluntary Staff",
      logoUrl: "/diversity.png",
      start: "Jan 2023",
      end: "Jan 2024",
      description:
        "The Toulouse Hacking Convention (or THCon) is a cybersecurity conference that brings together hobbyists, professionals, and researchers since 2017 in Toulouse, France. Today, it is an unmissable cybersecurity event in Occitania and beyond. I had the opportunity to help on-site for a few days, assisting the organization team, and also attended conferences out of curiosity.",
    },
  ],

  education: [
    {
      school: "TLS-SEC - ENSEEIHT & INSA Toulouse",
      href: "https://tls-sec.github.io/",
      degree: "Cybersecurity Double Degree",
      logoUrl: "/tlssec.jpeg",
      start: "2024",
      end: "2025",
    },
    {
      school: "ENSEEIHT",
      href: "https://www.enseeiht.fr/",
      degree: "Computer Science (Architecutre, System, Network)",
      logoUrl: "/waterloo.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Lycée Jeanne d'Albret",
      href: "/jeanne_albret.jpeg",
      degree: "Preparatory Class for the Grandes Ecoles PCSI - PSI",
      logoUrl: "/laurier.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "Lycée Jeanne d'Albret",
      href: "/jeanne_albret.jpeg",
      degree: "Scientific Baccalaureate",
      logoUrl: "/ib.png",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "DroneInside",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/newtondotcom/droneinside",
          icon: <Icons.github className="size-3" />,
        },
        
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Yogocap",
      href: "https://yogocap.com",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Nuxt",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Lemon Squeezy",
        "Shadcn UI",
        "Python",
        "OAuth",
      ],
      links: [
        {
          type: "Landing Page",
          href: "https://yogocap.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Web Application",
          href: "https://app.yogocap.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Landing Page Source",
          href: "https://github.com/newtondotcom/yogocap-landing",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Web App Source",
          href: "https://github.com/newtondotcom/yogocap-nuxt",
          icon: <Icons.github className="size-3" />,
        },        {
          type: "Back End Source",
          href: "https://github.com/newtondotcom/yogocap-back",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://github.com/newtondotcom/yogocap-landing/raw/refs/heads/main/public/video.mp4",
    },
    {
      title: "FrameIt",
      href: "https://frame-it-nu.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://frame-it-nu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/newtondotcom/frameit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Coinche",
      href: "https://coinche-game.vercel.app/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Nuxt",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Supabase (realtime)",
        "TailwindCSS",
        "Shadcn UI",
        "OIDC",
      ],
      links: [
        {
          type: "Website",
          href: "https://coinche-game.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/newtondotcom/coinche",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "Emendo",
      href: "https://numsmo.com/",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "React",
        "React Native",
        "Firebase",
        "Typescript",
        "TailwindCSS",
        "Python",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://numsmo.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "string-art",
      href: "https://github.com/newtondotcom/string-art",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Python",
        "Go"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/newtondotcom/string-art",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    {
      title: "CoffreTonDoc",
      href: "https://github.com/newtondotcom/CoffreTonDoc",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Nuxt",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Minio S3",
        "TailwindCSS",
        "Shadcn UI",
        "OIDC",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/newtondotcom/CoffreTonDoc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
   
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
