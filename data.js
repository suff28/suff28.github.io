window.PORTFOLIO_DATA = {
  hero: {
    name: "Mohammed Sufiyan",
    role: "Data Analytics • Data Engineering • Applied AI",
    summary:
      "Data Engineer and MS Applied Data Analytics student at Boston University focused on ETL pipelines, SQL optimization, AWS, Docker, and practical data systems. I have IEEE-published research in Pix2Pix-GAN lung segmentation and ongoing work on LLMs in reinforcement learning. My projects include CleanCampus IoT monitoring, agentic LLM workflows, 3D avatar reconstruction, Formula 1 analytics, and full-stack app development.",
    monogram: "MS",
    portrait: "https://github.com/suff28.png",
    stats: [
      { value: "3.9", label: "BU graduate GPA" },
      { value: "10GB+", label: "daily ETL data handled" },
      { value: "IEEE", label: "published research" }
    ]
  },
  about:
    "Data Engineer and BU Applied Data Analytics graduate student focused on reliable pipelines, SQL optimization, cloud tooling, and useful analytics systems. I have IEEE-published research in Pix2Pix-GAN lung segmentation and ongoing LLM/RL research. Recent work includes CleanCampus IoT monitoring, StarRez housing systems, agentic LLM workflows, 3D avatar reconstruction, Formula 1 analytics, and full-stack app development.",
  skills: [
    "Python",
    "SQL",
    "R",
    "JavaScript",
    "Node.js",
    "PostgreSQL",
    "SQL Server",
    "MySQL",
    "Power BI",
    "Tableau",
    "AWS S3/Lambda",
    "Docker",
    "DigitalOcean",
    "REST APIs",
    "Machine Learning",
    "Scikit-learn",
    "PPO",
    "LLMs",
    "LangGraph",
    "MuJoCo",
    "Leaflet",
    "StarRez"
  ],
  experience: [
    {
      title: "Research Assistant - Urban Heat Island / CleanCampus Project",
      org: "Boston University",
      meta: "Jan 2026 - Aug 2026 • Boston, MA",
      description:
        "Built the CleanCampus IoT monitoring dashboard with Node.js REST APIs, PostgreSQL, PM2/nginx, DigitalOcean, and Leaflet to ingest live sensor readings and visualize BU campus heat patterns.",
      highlights: [
        "Modeled 5 PostgreSQL tables for sensors, gateways, zones, readings, and alerts.",
        "Added filters, trend charts, alert views, and CSV export for field monitoring.",
        "Presented BU Urban Heat Island research at ACSP 2026 in Pittsburgh, Pennsylvania."
      ],
      links: [
        { label: "Portfolio Case Study", href: "#cleancampus" },
        { label: "GitHub", href: "https://github.com/suff28/cleancampus-urban-heat-island" },
        { label: "Live Demo", href: "https://suff28.github.io/cleancampus-urban-heat-island/" }
      ]
    },
    {
      title: "Summer/Fall Operations Assistant - StarRez / Housing Systems",
      org: "Boston University Housing",
      meta: "May 2026 - Present • Boston, MA",
      description:
        "Supported full-time summer and fall BU Housing operations while improving how dorm room records, furniture updates, assignments, and resident/staff workflows were tracked in StarRez.",
      highlights: [
        "Built a DBMS-backed StarRez pipeline for room/bed records, summer assignments, check-in/out updates, and staff task tracking.",
        "Maintained accurate StarRez records and room readiness updates across BU dorm operations."
      ]
    },
    {
      title: "Data Engineer",
      org: "Power Tech",
      meta: "Jun 2024 - May 2025 • Bengaluru, India",
      description:
        "Worked on data cleaning, SQL optimization, reporting, containerized deployments, and event-driven ETL pipelines for internal business operations.",
      highlights: [
        "Reduced processing time by 40% by automating 15+ Python data cleaning and transformation workflows.",
        "Improved reporting performance by 30% by optimizing 20+ SQL queries and building 5 Power BI dashboards.",
        "Processed 10GB+ daily using AWS S3/Lambda ETL pipelines and reduced Docker deployment time from 2 hours to under 30 minutes."
      ]
    }
  ],
  research: [
    {
      title: "Pix2Pix-GAN-Based Lung Segmentation for Chest X-Rays",
      org: "IEEE Publication",
      meta: "Sep 2024 - Apr 2025",
      description:
        "Built a Pix2Pix-GAN lung segmentation workflow for chest X-rays to improve medical image preprocessing and support early disease detection workflows.",
      abstract:
        "This work applies a Pix2Pix-GAN image-to-image learning approach to lung segmentation in chest X-rays. The goal was to create cleaner lung masks that can support downstream screening workflows for conditions such as tuberculosis, asthma, and pneumonia, especially where manual segmentation is slow or inconsistent.",
      highlights: [
        "Focused on robust lung-region segmentation for CXR images.",
        "Authored an IEEE-published paper based on the project."
      ],
      links: [
        { label: "IEEE", href: "https://ieeexplore.ieee.org/document/10939550/" },
        { label: "Google Scholar", href: "https://scholar.google.com/citations?user=XSDrhfMAAAAJ&hl=en" }
      ]
    },
    {
      title: "LLMs in Reinforcement Learning: Comparative Analysis",
      org: "Research with Machine Learning Professor",
      meta: "Nov 2025 - Present",
      description:
        "Comparing how LLM-guided policy shaping and reward design can influence PPO-based reinforcement learning workflows.",
      abstract:
        "This ongoing research studies how large language models can assist reinforcement learning by shaping rewards, influencing policy exploration, and explaining training behavior. The current work compares PPO-based experiments to understand where LLM guidance helps and where it adds noise.",
      highlights: [
        "Explores LLM support for policy influence, reward shaping, and training interpretation.",
        "Manuscript currently in progress."
      ]
    }
  ],
  projects: [
    {
      title: "CleanCampus Urban Heat Island Dashboard",
      category: "IoT / Data Platform",
      description:
        "Built a BU IoT monitoring platform with field sensors, Raspberry Pi gateway ingestion, Node.js REST APIs, PostgreSQL, Leaflet maps, alerts, trends, and CSV export for urban heat island research.",
      tags: ["Node.js", "PostgreSQL", "Leaflet", "IoT", "DigitalOcean"],
      image: "./assets/cleancampus/01-dashboard-real-capture.png",
      alt: "CleanCampus Urban Heat Island dashboard",
      links: [
        { label: "Case Study", href: "#cleancampus" },
        { label: "GitHub", href: "https://github.com/suff28/cleancampus-urban-heat-island" },
        { label: "Live Demo", href: "https://suff28.github.io/cleancampus-urban-heat-island/" }
      ]
    },
    {
      title: "3D Avatar Reconstruction Pipeline",
      category: "Computer Vision / 3D Pipeline",
      description:
        "Reconstructed a personal 3D avatar from multi-angle references, exported optimized GLB assets, and integrated the result into a Unity/Blender runner prototype with C# movement, camera follow, and demo videos.",
      tags: ["3D Reconstruction", "GLB", "Unity", "Blender", "C#"],
      image: "",
      alt: "3D avatar reconstruction project",
      links: [
        { label: "GitHub", href: "https://github.com/suff28/3D-avatar-reconstruction-pipeline" }
      ]
    },
    {
      title: "Agentic LLM Web QA System",
      category: "Generative AI / Agents",
      description:
        "Built a local LangGraph/Ollama QA workflow with researcher, evaluator, and writer agents that search the web, rank JSON evidence, and return sourced answers instead of raw model output.",
      tags: ["LangGraph", "Ollama", "LLMs", "Agents", "Web Search"],
      image: "",
      alt: "Agentic web QA system",
      links: [
        { label: "GitHub", href: "https://github.com/suff28/multi-agent-web-qa-system" }
      ]
    },
    {
      title: "RL Biped Robot Simulation",
      category: "Reinforcement Learning",
      description:
        "Designed a bird-legged biped in Blender, imported it into MuJoCo, and trained walking behavior with PPO-style reward design for balance, stride, and forward motion.",
      tags: ["Python", "MuJoCo", "PPO", "Blender", "RL"],
      image: "",
      alt: "Rendered bird-legged biped robot",
      links: [
        { label: "GitHub", href: "https://github.com/suff28/bird-legged-biped-robot" }
      ]
    },
    {
      title: "Formula 1 Pit Stop Analytics DBMS",
      category: "Database / Analytics",
      description:
        "Built a Formula 1 pit-stop analytics system with SQL Server, ETL staging, normalized OLTP tables, star-schema reporting, and ML models for slow pit-stop prediction.",
      tags: ["SQL Server", "ETL", "Star Schema", "ML", "DBMS"],
      image: "",
      alt: "Formula 1 database project",
      links: [
        { label: "GitHub", href: "https://github.com/suff28/formula1-pitstop-dbms" }
      ]
    },
    {
      title: "Spotify Popularity Analysis",
      category: "Statistics / Data Analysis",
      description:
        "Analyzed 1,000 Spotify tracks in R using regression, t-tests, ANOVA, and ggplot visualizations to identify how audio features, genre, and explicit content relate to popularity.",
      tags: ["R", "Regression", "ANOVA", "ggplot", "EDA"],
      image: "",
      alt: "Spotify popularity analysis",
      links: [
        { label: "GitHub", href: "https://github.com/suff28/spotify-popularity-analysis" }
      ]
    },
    {
      title: "Bizzlink Full-Stack Networking App",
      category: "Full-Stack Application",
      description:
        "Built a global entrepreneur networking app with Flutter, Node.js/Express, MySQL, Firebase image storage, authentication, profile search, and connection workflows.",
      tags: ["Flutter", "Node.js", "Express", "MySQL", "Firebase"],
      image: "",
      alt: "Bizzlink app",
      links: [
        { label: "GitHub", href: "https://github.com/suff28/Bizzlink-with-backend" }
      ]
    }
  ],
  cleancampus: {
    title: "CleanCampus Urban Heat Island IoT Platform",
    subtitle:
      "A BU Research Assistant project connecting environmental field sensors, gateway data ingestion, PostgreSQL storage, and a live web dashboard for campus-scale heat monitoring.",
    role: "Graduate Research Assistant",
    meta: "Boston University • Jan 2026 - Aug 2026",
    stack: ["Node.js", "PostgreSQL", "REST APIs", "Leaflet", "PM2", "nginx", "DigitalOcean", "CSV Export"],
    links: [
      { label: "GitHub", href: "https://github.com/suff28/cleancampus-urban-heat-island" },
      { label: "Live Demo", href: "https://suff28.github.io/cleancampus-urban-heat-island/" }
    ],
    overview:
      "I built the data path from campus sensors to a research dashboard: validating incoming readings, storing them in normalized PostgreSQL tables, mapping sensor locations, surfacing stale/missing-data alerts, and making readings exportable for analysis.",
    highlights: [
      "Designed the sensor, gateway, zone, reading, and alert data model so field data could be queried reliably.",
      "Built Node.js REST endpoints for registered sensor ingestion and dashboard requests.",
      "Created Leaflet map views, zone and sensor filters, environmental trend panels, alert summaries, and CSV export.",
      "Connected technical work with field deployment, professor feedback, and BU urban heat island research needs."
    ],
    gallery: [
      {
        title: "Live IoT dashboard",
        caption: "Map, zone filtering, missing-data alerts, environmental trends, and export controls for campus sensors.",
        image: "./assets/cleancampus/01-dashboard-real-capture.png"
      },
      {
        title: "Sensor data pipeline",
        caption: "Field readings move from sensors to a Raspberry Pi gateway, through the Express API, into PostgreSQL, and back to the UI.",
        image: "./assets/cleancampus/03-live-data-pipeline.gif"
      },
      {
        title: "Fieldwork with professors",
        caption: "Worked with Professor Bora Eryilmaz and Professor Yesim Sungu-Eryilmaz on field deployment and dashboard requirements.",
        image: "./assets/cleancampus/04-fieldwork-with-professors.png"
      },
      {
        title: "Sensor deployment",
        caption: "Outdoor and indoor sensor placements for temperature, humidity, voltage, RSSI, and SNR monitoring across campus zones.",
        image: "./assets/cleancampus/05-sensor-deployment-collage.png"
      },
      {
        title: "Backend and frontend logic",
        caption: "API validation, registered sensor checks, PostgreSQL inserts, bounded dashboard fetches, and safe UI requests.",
        image: "./assets/cleancampus/02-code-overview-detailed.png"
      },
      {
        title: "Planning before implementation",
        caption: "Notebook planning for schemas, sensor fields, gateway-to-dashboard flow, and database/API behavior.",
        image: "./assets/cleancampus/07-planning-notes-collage.png"
      },
      {
        title: "Performance evaluation feedback",
        caption: "BU evaluation feedback noted strong technical skills, attention to detail, responsiveness, and clear presentation.",
        image: "./assets/cleancampus/06-evaluation-feedback.png"
      }
    ]
  },
  education: [
    {
      title: "MS in Applied Data Analytics",
      org: "Boston University",
      meta: "Sep 2025 - Dec 2026 • GPA: 3.9",
      description:
        "Graduate coursework focused on analytics, databases, statistical modeling, applied machine learning, and data-driven software systems."
    },
    {
      title: "B Tech in Computer Science and Engineering (Data Science)",
      org: "Presidency University",
      meta: "Sep 2020 - Jul 2024 • Bengaluru, India",
      description:
        "Undergraduate foundation in computer science, data science, software development, databases, and machine learning."
    }
  ],
  certificates: [],
  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google / Coursera",
      category: "Data Analytics",
      href: "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/google%20data%20analytics.pdf"
    },
    {
      title: "Data Analysis with R Programming",
      issuer: "Google / Coursera",
      category: "R Programming",
      href: "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/Data%20Analysis%20with%20R%20Programming.pdf"
    },
    {
      title: "Analyze Data to Answer Questions",
      issuer: "Google / Coursera",
      category: "Data Analysis",
      href: "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/Analyze%20Data%20to%20Answer%20Questions.pdf"
    },
    {
      title: "Process Data from Dirty to Clean",
      issuer: "Google / Coursera",
      category: "Data Cleaning",
      href: "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/Process%20Data%20from%20Dirty%20to%20Clean.pdf"
    },
    {
      title: "Share Data Through Visualization",
      issuer: "Google / Coursera",
      category: "Visualization",
      href: "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/Share%20Data%20Through%20the%20Art%20of%20Visualization.pdf"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL / Online Certification",
      category: "Cloud",
      href: "https://github.com/suff28/certificates/blob/main/cloud%20computing.pdf"
    },
    {
      title: "Ethical Hacking",
      issuer: "NPTEL / Online Certification",
      category: "Cybersecurity",
      href: "https://github.com/suff28/certificates/blob/main/Ethical%20hacking.pdf"
    },
    {
      title: "Johns Hopkins Certificate",
      issuer: "Johns Hopkins",
      category: "Professional Certificate",
      href: "https://github.com/suff28/certificates/blob/main/john%20hopkins.pdf"
    },
    {
      title: "Learning Analytics Tool",
      issuer: "Academic / Technical Certificate",
      category: "Analytics",
      href: "https://github.com/suff28/certificates/blob/main/leaning%20analytic%20tool.pdf"
    },
    {
      title: "Online Privacy",
      issuer: "Professional Certificate",
      category: "Privacy",
      href: "https://github.com/suff28/certificates/blob/main/online%20privacy.pdf"
    },
    {
      title: "SmartKnower Internship Certificate",
      issuer: "SmartKnower",
      category: "Internship",
      href: "https://github.com/suff28/certificates/blob/main/smartknower/smartknower.jpg"
    },
    {
      title: "Teachnook Certificate",
      issuer: "Teachnook",
      category: "Training",
      href: "https://github.com/suff28/certificates/blob/main/teachnook/teachnook1.jpg"
    },
    {
      title: "Younity Internship Certificate",
      issuer: "Younity",
      category: "Internship",
      href: "https://github.com/suff28/certificates/blob/main/younity/younity%20internship.pdf"
    }
  ],
  resume: {
    href: "./assets/docs/Mohammed_Sufiyan_Resume.pdf",
    label: "View Resume"
  },
  github: {
    href: "https://github.com/suff28",
    label: "GitHub"
  },
  contact: {
    text:
      "I am open to data analyst, data engineer, machine learning, and applied AI opportunities. The fastest way to reach me is by email or LinkedIn.",
    links: [
      { label: "Email", href: "mailto:suff280602@gmail.com", primary: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/suff28" },
      { label: "GitHub", href: "https://github.com/suff28" },
      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=XSDrhfMAAAAJ&hl=en" }
    ]
  }
};
