/* ============================================================
   CONTENT.JS — edit everything here. No HTML/CSS knowledge needed.

   - To change any text: edit the strings below.
   - To add photos to an "expand" panel: put the image file(s) in
     the /images folder, then list them in that entry's images: []
     array, e.g. images: ["images/photo1.jpg", "images/photo2.jpg"]
     (leave it as images: [] for no photos).
     - 0 images: gallery is hidden entirely.
     - 1 image: shows just that photo, no thumbnails.
     - 2+ images: shows the first as the main photo, with small
       clickable thumbnails below to switch between them.
   - Each project can have a repoUrl: "" — paste your GitHub repo
     link there and a "View Code" link appears on the card. Leave
     it as "" to hide the link.
   - To add a whole new project/experience/education entry: copy
     an existing {...} block in that array and edit it.
   - "expand" = the extra detail shown when someone clicks
     "Learn more" on a card.

   ⚠️ WATCH YOUR COMMAS: every item in a [...] list needs a comma
   after it EXCEPT the last one. A missing comma will break the
   entire site. If the site goes blank after an edit, press F12 in
   your browser, click Console, and look for a red error — it will
   point at the exact line.
   ============================================================ */

const CONTENT = {
  hero: {
    eyebrow: "Software Engineering (Multimedia) · UKM",
    nameLine1: "Armin Rafiqin Bin",
    nameLine2: "Mohamed Norazman",
    typingPhrases: [
      "full-stack web apps",
      "mobile learning platforms",
      "Unity games",
      "clean UI/UX",
    ],
    location: "Sepang, Selangor, Malaysia",
    phoneDisplay: "011-631 3080",
    phoneHref: "tel:+60116313080",
    email: "arminrafiqin@gmail.com",
    linkedinUrl: "https://linkedin.com/in/armin-rafiqin",
    githubUrl: "https://github.com/armehh",
    cvFile: "Armin_Rafiqin_CV.pdf",
    photo: "images/profile.png",
    stats: [
      { target: 3, decimals: 0, label: "Awards & Certificates" },
      { target: 4, decimals: 0, label: "Shipped Projects" },
      { target: 2, decimals: 0, label: "Leadership Roles" },
      { target: 8, decimals: 0, label: "Languages & Tools*" },
    ],
    // Small glass cards floating around the hero photo
    floatCards: [
      { value: "75.25", label: "SUS score · Dam Haji 3D" },
      { value: "Best Executive", label: "Award · PERTAMA" },
      { value: "Open to work", label: "Front-End · Web · App Dev" },
    ],
  },

  // Text beside the big stat numbers
  statsIntro: {
    title: "Turning Ideas Into Working Projects",
    text: "From traditional games rebuilt in 3D to full-stack ordering systems, here is a quick look at what I have shipped and led so far.",
  },

  // "What I do" cards in the About section
  services: [
    {
      icon: "web",
      title: "Full-Stack Web",
      text: "PHP, MySQL and JavaScript apps with complete CRUD flows and well-structured databases.",
    },
    {
      icon: "game",
      title: "Games & 3D",
      text: "Unity 6 and C# games with AI opponents, plus 3D environments modelled in 3ds Max and Blender.",
    },
    {
      icon: "design",
      title: "UI/UX & Multimedia",
      text: "Posters, banners and interfaces designed in Figma, Illustrator and Photoshop.",
    },
  ],

  // Dark highlight panel next to the summary
  panel: {
    label: "Open to work",
    title: "Seeking a fresh graduate role",
    text: "Front-End Developer, Web Developer or Mobile App Developer. Currently interning as a System Analyst at HeiTech Padu Berhad.",
    cta: "Get In Touch",
  },

  summary:
    "Creative and technically driven Software Engineering (Multimedia System Development) undergraduate at Universiti Kebangsaan Malaysia (UKM), currently interning as a System Analyst at HeiTech Padu Berhad, gaining hands-on experience in analysing requirements and working with real-world systems. Skilled in JavaScript, HTML, CSS, PHP, Java, C#, Python, and MySQL, with project experience in front-end and full-stack web development, mobile and game development, database management, and UI/UX design. As an upcoming fresh graduate, I am seeking a Front-End Developer, Web Developer, or Mobile App Developer role where I can turn clean designs into responsive, user-friendly products and grow within a collaborative engineering team.",

  experience: [
    {
      title: "Head of Executive, Multimedia & Publicity",
      org: "Selangor Students' Association (PERMAS), UKM",
      dates: "Jun 2025 – Jun 2026",
      bullets: [
        "Led the multimedia and publicity team in producing promotional materials for society events and campaigns.",
        "Managed visual communication strategies and increased community engagement among Selangor students at UKM.",
        "Participated in leadership, discipline, and teamwork-based activities, contributing to university programs and community engagement initiatives.",
      ],
      expand: {
        body: [
          "Coming from my time at PERTAMA, I wanted to bring that experience into a different kind of organization — one working across the entire Selangor student community at UKM rather than a single faculty.",
        ],
   images: ["images/permas-1.jpg", "images/permas-2.JPG"],
      },
    },
    {
      title: "Multimedia & Publicity Executive",
      org: "Faculty of Information Science and Technology Students' Association (PERTAMA), UKM",
      dates: "Aug 2024 – Jun 2025",
      bullets: [
        "Designed and produced digital promotional materials (posters, banners, social media graphics) for faculty events using Canva, Adobe Illustrator, Photoshop, and Figma.",
        "Managed visual communication strategies that increased student engagement across faculty programs.",
        "Collaborated cross-functionally with team members to deliver multimedia content on deadline.",
      ],
      expand: {
        body: [
          "This was my first time joining a student organization, so there was a real learning curve — but it paid off when I received the Best Executive award, which meant a lot considering I was starting from zero.",
        ],
        images: ["images/pertama-1.jpg", "images/pertama-2.jpg"],
      },
    },
  ],

  projects: [
    {
      tag: "Unity · Final Year Project",
      title: "Dam Haji 3D",
      subtitle: "3D Digital Adaptation of a Traditional Malay Board Game",
      repoUrl: "",
      bullets: [
        "Reimagined Dam Haji, a checkers-like Malay board game, in 3D — preserving the traditional game while making it accessible through a modern, interactive digital format.",
        "Built an AI opponent with full rule enforcement, including piece capturing and Haji piece promotion, plus a leaderboard system to track player performance.",
        "Conducted usability testing with 20 respondents using the System Usability Scale, achieving an average score of 75.25, evaluated against Nielsen's Usability Heuristics.",
      ],
      expand: {
        body: [
          "My Final Year Project for the Bachelor of Software Engineering (Multimedia System Development) programme at UKM, supervised by Dr. Zurina binti Muda, Faculty of Information Science and Technology.",
          "Built in Unity 6.3 LTS with C# and SQLite for persistent local data storage, targeting Android (with adaptive icons and a splash screen) alongside PC/editor support. Core systems included GameManager.cs for AI capture logic and win detection, Menu.cs for the leaderboard panel, and CameraController.cs for camera switching.",
        ],
        images: ["images/dam-haji.gif"],
      },
    },
    {
      tag: "Mobile · Requirement Engineering",
      title: "UKM SkillShare",
      subtitle: "Peer-to-Peer Learning Platform",
      repoUrl: "",
      bullets: [
        "Led a team of 4 as Project Leader on this Software Requirement Engineering (TE2104) project, coordinating stakeholder research with UKM's Student Affairs Department (HEP) and a 22-respondent student survey.",
        "Modelled the system through Entity Relationship Diagrams, Context and Data Flow Diagrams, Use Case Diagrams and Specifications, Sequence Diagrams, and a Class Diagram.",
        "Designed for integration with UKM's existing Siswa platform, covering skill matching, session booking, payments, ratings, and a points-based reward system.",
      ],
      expand: {
        body: [
          "UKM SkillShare addresses a real gap identified through stakeholder research: students often have skills worth sharing (Excel, Canva, programming, languages) but no centralized platform to connect with peers for skill-sharing, mentoring, and collaborative learning.",
          "As Project Leader, I coordinated requirement elicitation, led system design discussions, and managed scheduling, risk assessment, and task delegation across a 4-person team — myself as Project Leader, plus a Designer, Tester, and Requirements Analyst.",
        ],
        images: ["images/ukm-skillshare.gif"],
      },
    },
    {
      tag: "Unity · C#",
      title: "HP Ancient Trials",
      subtitle: "3D Puzzle-Adventure Game",
      repoUrl: "",
      bullets: [
        "Built a 3D third-person puzzle-adventure game in Unity 6 set in a Harry Potter-inspired ancient ruins environment, featuring physics-based puzzles and environmental traps.",
        "Implemented enemy AI with interactive behavior and a responsive third-person player controller and camera system.",
        "Modeled custom 3D environment assets in Autodesk 3ds Max and integrated Unity Asset Store packs for art, VFX, and props.",
      ],
      expand: {
        body: [
          "An individual assignment for the Multimedia Game course, built to apply and demonstrate new knowledge in Unity 6, C#, the Unity Asset Store, and Autodesk 3ds Max.",
        ],
        images: ["images/hp-ancient-trials.gif"],
      },
    },
    {
      tag: "Full-Stack · Web",
      title: "PHP-Based Web Ordering System",
      subtitle: "Full-Stack Web Application",
      repoUrl: "",
      bullets: [
        "Developed a full-stack web ordering system with complete CRUD functionality for products, customers, and orders using PHP and MySQL.",
        "Implemented dynamic product selection and real-time order management, optimising the database schema for efficient data retrieval.",
      ],
      expand: {
        body: [
          "An individual assignment covering the complete order lifecycle, from product catalog through checkout to order tracking.",
          "Built to apply classroom knowledge of SQL and relational database design in a practical full-stack context, working through how product, customer, and order data connect and stay consistent as orders move through the system.",
        ],
        images: [],
      },
    },
  ],

  skillCategories: [
    {
      title: "Programming Languages",
      items: [
        "Python",
        "JavaScript",
        "Java",
        "C#",
        "PHP",
        "HTML",
        "CSS",
        "MySQL",
        "Kotlin",
      ],
      expand: {
        body: [
          "Java is my strongest language from coursework and academic projects, with JavaScript, C#, PHP, HTML/CSS, and MySQL close behind from web and game development work.",
          "Python — Beginner",
          "JavaScript — Intermediate",
          "Java — Advanced",
          "C# — Intermediate",
          "PHP — Intermediate",
          "HTML — Intermediate",
          "CSS — Intermediate",
          "MySQL — Intermediate",
          "Kotlin — Beginner",
        ],
        images: [],
      },
    },
    {
      title: "Tools & Technologies",
      items: [
        "Git",
        "GitHub",
        "Visual Studio Code",
        "Visual Studio",
        "Android Studio",
        "Unity",
      ],
      expand: {
        body: [
          "Comfortable with Git/GitHub for version control across solo and team projects, and switch between VS Code, Visual Studio, and Android Studio depending on the stack — Unity for game builds, Android Studio for mobile.",
        ],
        images: [],
      },
    },
    {
      title: "Design & Multimedia",
      items: [
        "Figma",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Blender",
        "Autodesk 3ds Max",
      ],
      expand: {
        body: [
          "Design tools I picked up through two years of running publicity and multimedia work for PERTAMA and PERMAS — daily use of Illustrator, Photoshop, and Figma, with Blender and 3ds Max used for 3D environment modeling on game projects.",
          "Figma — Intermediate",
          "Adobe Illustrator — Intermediate",
          "Adobe Photoshop — Intermediate",
          "Blender — Beginner",
          "Autodesk 3ds Max — Intermediate",
        ],
        images: [],
      },
    },
    {
      title: "Project Management & Methodologies",
      items: [
        "ClickUp",
        "Microsoft Office 365",
        "OOP",
        "Agile",
        "ERD / DFD / UML",
      ],
      expand: {
        body: [
          "Applies Object-Oriented Programming and Agile principles on academic projects, using ERD, DFD, UML, and Use Case diagrams to plan system architecture — put into practice as Project Leader on the UKM SkillShare requirement engineering project.",
        ],
        images: [],
      },
    },
  ],

  education: [
    {
      title: "Bachelor of Software Engineering (Multimedia System Development)",
      sub: "Universiti Kebangsaan Malaysia (UKM) | Aug 2023 – Present",
      extra: "",
      expand: {
        body: [
          "A Software Engineering degree with a Multimedia System Development focus, combining core software engineering coursework with multimedia design and development modules.",
          "Every semester includes hands-on projects — mobile apps, 3D games, webpages — either individually or in teams, each requiring critical thinking and a solid understanding of the Software Development Life Cycle (SDLC).",
        ],
        images: [],
      },
    },
    {
      title: "Foundation / Pre-University",
      sub: "Kolej Matrikulasi Melaka | Jun 2021 – Jun 2023",
      extra: "",
      expand: {
        body: [
          "Foundation studies before entering UKM's Software Engineering program, building the science and math groundwork that led into the degree.",
        ],
        images: [],
      },
    },
  ],

  achievements: [
    "2nd Place – IMEC T-Shirt Design Competition (2023–2024)",
    "4th Place – KMM Programming Race (2022)",
    "Top Coders Malaysia 2025 Pre-Competition Workshop – Python Fundamentals (Completed, 2025)",
  ],

  languages: [
    "Bahasa Malaysia (Native)",
    "English (Advanced – Speaking, Reading, Writing)",
  ],

  reference: {
    name: "Dr. Zurina Binti Muda",
    role: "Senior Lecturer, Faculty of Information Science and Technology, Universiti Kebangsaan Malaysia",
    email: "zurinam@ukm.edu.my",
    phone: "+60 13-209 1973",
  },
};
