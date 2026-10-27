window.PORTFOLIO_DATA = {
  "hero": {
    "name": "Mohammed Sufiyan",
    "role": "Data Engineer",
    "summary": "I am a data engineer and Boston University Applied Data Analytics master’s student. I build Python and SQL pipelines, AWS S3 and Lambda workflows, and data quality checks using tools including Spark, Airflow, dbt, and Snowflake.",
    "monogram": "MS",
    "portrait": "https://github.com/suff28.png",
    "stats": [
      {
        "value": "3.9",
        "label": "BU graduate GPA"
      },
      {
        "value": "10GB+",
        "label": "daily ETL data handled"
      },
      {
        "value": "40%",
        "label": "faster processing at Power Tech"
      }
    ]
  },
  "about": "I build data pipelines, warehouse models, and validation checks with Python, SQL, AWS, Spark, Airflow, dbt, and Snowflake. My work includes data engineering at Power Tech and research and analytics systems at Boston University.",
  "skills": [
    {
      "category": "Data Quality & Testing",
      "items": [
        "ETL Testing",
        "Regression Testing",
        "Test Automation",
        "pytest",
        "Source-to-Target Validation",
        "Data Reconciliation",
        "Data Profiling",
        "Data Validation"
      ]
    },
    {
      "category": "Data Engineering & Databases",
      "items": [
        "Python",
        "Pandas",
        "SQL",
        "Snowflake",
        "dbt",
        "PostgreSQL",
        "SQL Server",
        "MySQL",
        "Redis",
        "Apache Airflow",
        "Apache Spark",
        "Redpanda",
        "ETL",
        "Data Warehousing",
        "Data Modeling",
        "Star Schema",
        "Dimensional Modeling"
      ]
    },
    {
      "category": "Cloud & Tools",
      "items": [
        "AWS S3",
        "AWS Lambda",
        "Docker",
        "Docker Compose",
        "DigitalOcean",
        "PM2",
        "nginx",
        "Power BI",
        "Git"
      ]
    },
    {
      "category": "AI / ML & Backend",
      "items": [
        "scikit-learn",
        "TensorFlow",
        "OpenCV",
        "Llama",
        "Sentence-BERT",
        "PPO",
        "MATLAB",
        "Node.js",
        "FastAPI",
        "Streamlit",
        "REST APIs"
      ]
    }
  ],
  "experience": [
    {
      "title": "Data Engineer",
      "org": "Power Tech",
      "meta": "Jun 2024 - May 2025 • Bengaluru, India",
      "description": "Built data cleaning, transformation, reporting, and AWS ETL workflows for business operations.",
      "highlights": [
        "Cut processing time by 40% with 25+ Python workflows across 17 datasets.",
        "Improved reporting performance by 30% with 40+ SQL queries and five Power BI dashboards.",
        "Processed 10GB+ daily with AWS S3 and Lambda; Dockerized four apps and reduced deployment from three hours to under 30 minutes."
      ]
    },
    {
      "title": "Graduate Research Assistant",
      "org": "Boston University",
      "meta": "Jan 2026 - Aug 2026 • Boston, MA",
      "description": "Built data and dashboard systems for campus sensor research on urban heat islands.",
      "highlights": [
        "Designed a 29-table PostgreSQL schema and Node.js REST APIs for sensor data ingestion.",
        "Analyzed campus temperatures in MATLAB and built a DigitalOcean-hosted Leaflet dashboard with trend views and missing-data alerts.",
        "Presented the research at Boston University and ACSP 2026 in Pittsburgh."
      ],
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/suff28/cleancampus-urban-heat-island"
        },
        {
          "label": "Case study",
          "href": "#cleancampus"
        }
      ]
    },
    {
      "title": "Graduate Teaching Assistant",
      "org": "Boston University",
      "meta": "Sep 2026 - Present • Boston, MA",
      "description": "Support 35 students through Zoom sessions and grading technical assignments, with clear feedback on their work."
    }
  ],
  "research": [
    {
      "title": "Pix2Pix GAN Lung Segmentation for Chest Radiographs",
      "org": "Published in IEEE",
      "meta": "Sep 2024 - Apr 2025",
      "description": "Trained a Pix2Pix U-Net using TensorFlow and OpenCV for lung segmentation in chest radiographs.",
      "abstract": "The model achieved 98.25% accuracy and 98.05% Dice on the Montgomery dataset, and 95.87% accuracy on Shenzhen.",
      "links": [
        {
          "label": "IEEE paper",
          "href": "https://ieeexplore.ieee.org/document/10939550/"
        },
        {
          "label": "Google Scholar",
          "href": "https://scholar.google.com/citations?user=XSDrhfMAAAAJ&hl=en"
        }
      ]
    },
    {
      "title": "LLMs in Reinforcement Learning: Comparative Analysis",
      "org": "Accepted in IEEE",
      "meta": "Nov 2025 - Present",
      "description": "Compared Llama 2 7B and Sentence-BERT with PPO, using policy guidance and reward shaping.",
      "abstract": "Across eight runs per method, the work raised mean DoorKey reward from 0.38 to 0.53."
    }
  ],
  "projects": [
    {
      "title": "Data Quality and ETL Validation Framework",
      "meta": "Oct 2026",
      "category": "Data Engineering / Warehouse Quality",
      "description": "Generated 65.4M synthetic records locally and loaded a 65,443-row sample into Snowflake. The sample passed 46 dbt nodes, 97 Python regression tests, and 59 SQL quality checks across seven tables.",
      "tags": [
        "Python",
        "SQL",
        "dbt",
        "Snowflake",
        "AWS S3",
        "Parquet",
        "Data Quality"
      ],
      "image": "./assets/warehouse-quality/snowflake-raw-row-counts.png",
      "featured": true,
      "metrics": [
        {
          "value": "65.4M",
          "label": "synthetic records generated locally"
        },
        {
          "value": "65,443",
          "label": "rows loaded to Snowflake"
        },
        {
          "value": "97",
          "label": "Python tests passed"
        },
        {
          "value": "59",
          "label": "SQL checks passed"
        }
      ],
      "accent": "#c084fc",
      "alt": "Snowflake results for warehouse sample",
      "links": [
        {
          "label": "GitHub Project",
          "href": "https://github.com/suff28/warehouse-quality-platform"
        }
      ]
    },
    {
      "title": "Pipeline Health Monitor",
      "meta": "Jan 2026",
      "category": "Data Reliability",
      "description": "Validated 100,000 synthetic orders locally with Spark and Airflow. Added Snowflake dbt models and tests, and tracked pipeline runs and rejected records in MySQL and Streamlit.",
      "tags": [
        "Python",
        "Apache Spark",
        "Apache Airflow",
        "dbt",
        "Snowflake",
        "MySQL",
        "Streamlit",
        "Docker Compose"
      ],
      "image": "",
      "art": "Pipeline Health",
      "accent": "#6bf0d2",
      "alt": "Pipeline Health Monitor project",
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/suff28/datapulse-ai-self-healing-pipeline"
        }
      ]
    },
    {
      "title": "Card Fraud Detection and Alerting Platform",
      "meta": "Jun 2026",
      "category": "Streaming Data Platform",
      "description": "Scored 10,000+ simulated card transactions locally with Python rules and returned a risk score with reasons. Used Redpanda, PostgreSQL, and Redis for the streaming, storage, and alerting workflow.",
      "tags": [
        "Python",
        "Redpanda",
        "PostgreSQL",
        "Redis",
        "Docker Compose"
      ],
      "image": "",
      "art": "Fraud Stream",
      "accent": "#c084fc",
      "alt": "Card fraud detection platform",
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/suff28/finguard-fraud-intelligence-platform"
        }
      ]
    },
    {
      "title": "Formula 1 Pit Stop Analysis and Prediction",
      "meta": "Nov 2025",
      "category": "Database / Analytics",
      "description": "Modeled 54 SQL Server tables and a star schema. Cleaned 10,452 records with Python ETL and compared models for slow pit-stop prediction.",
      "tags": [
        "SQL Server",
        "Python",
        "ETL",
        "Star Schema",
        "scikit-learn"
      ],
      "image": "",
      "art": "Pit Stop DBMS",
      "accent": "#c084fc",
      "alt": "Formula 1 database project",
      "metrics": [
        {
          "value": "93.8%",
          "label": "test accuracy"
        },
        {
          "value": "0.875",
          "label": "F1 score"
        }
      ],
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/suff28/formula1-pitstop-dbms"
        }
      ]
    }
  ],
  "cleancampus": {
    "title": "CleanCampus Urban Heat Island Dashboard",
    "subtitle": "Boston University research project connecting campus sensor data, PostgreSQL, and a web dashboard for urban heat island analysis.",
    "role": "Graduate Research Assistant",
    "meta": "Boston University • Jan 2026 - Aug 2026",
    "stack": [
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "MATLAB",
      "Leaflet",
      "DigitalOcean"
    ],
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/suff28/cleancampus-urban-heat-island"
      },
      {
        "label": "Live Demo",
        "href": "https://suff28.github.io/cleancampus-urban-heat-island/"
      }
    ],
    "overview": "Designed a 29-table PostgreSQL schema and REST APIs for sensor data ingestion. Analyzed campus temperatures in MATLAB and deployed a Leaflet dashboard with sensor trends, missing-data alerts, and CSV export.",
    "highlights": [
      "Designed a 29-table PostgreSQL schema for sensor, gateway, zone, reading, and alert data.",
      "Built Node.js REST APIs to validate and ingest campus sensor readings.",
      "Analyzed temperatures in MATLAB and deployed a Leaflet dashboard on DigitalOcean.",
      "Presented the Urban Heat Island research at Boston University and ACSP 2026 in Pittsburgh."
    ],
    "gallery": [
      {
        "title": "Live IoT dashboard",
        "caption": "Map, zone filtering, missing-data alerts, environmental trends, and export controls for campus sensors.",
        "image": "./assets/cleancampus/01-dashboard-real-capture.png"
      },
      {
        "title": "Sensor data pipeline",
        "caption": "Field readings move from sensors to a Raspberry Pi gateway, through the Express API, into PostgreSQL, and back to the UI.",
        "image": "./assets/cleancampus/03-live-data-pipeline.gif"
      },
      {
        "title": "Fieldwork with professors",
        "caption": "Worked with Professor Bora Eryilmaz and Professor Yesim Sungu-Eryilmaz on field deployment and dashboard requirements.",
        "image": "./assets/cleancampus/04-fieldwork-with-professors.png"
      },
      {
        "title": "Sensor deployment",
        "caption": "Outdoor and indoor sensor placements for temperature, humidity, voltage, RSSI, and SNR monitoring across campus zones.",
        "image": "./assets/cleancampus/05-sensor-deployment-collage.png"
      },
      {
        "title": "Backend and frontend logic",
        "caption": "API validation, registered sensor checks, PostgreSQL inserts, bounded dashboard fetches, and safe UI requests.",
        "image": "./assets/cleancampus/02-code-overview-detailed.png"
      },
      {
        "title": "Planning before implementation",
        "caption": "Notebook planning for schemas, sensor fields, gateway-to-dashboard flow, and database/API behavior.",
        "image": "./assets/cleancampus/07-planning-notes-collage.png"
      },
      {
        "title": "Performance evaluation feedback",
        "caption": "BU evaluation feedback noted strong technical skills, attention to detail, responsiveness, and clear presentation.",
        "image": "./assets/cleancampus/06-evaluation-feedback.png"
      }
    ]
  },
  "education": [
    {
      "title": "MS in Applied Data Analytics",
      "org": "Boston University",
      "meta": "Sep 2025 - Dec 2026 • GPA: 3.9",
      "description": "Final semester; available to start work January 15, 2027."
    },
    {
      "title": "B.Tech in Computer Science and Engineering (Data Science)",
      "org": "Presidency University",
      "meta": "Sep 2020 - Jul 2024 • Bengaluru, India",
      "description": "Bachelor of Technology in Computer Science and Engineering, specializing in Data Science."
    }
  ],
  "certificates": [],
  "certifications": [
    {
      "title": "Google Data Analytics Professional Certificate",
      "issuer": "Google / Coursera",
      "category": "Data Analytics",
      "href": "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/google%20data%20analytics.pdf"
    },
    {
      "title": "Data Analysis with R Programming",
      "issuer": "Google / Coursera",
      "category": "R Programming",
      "href": "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/Data%20Analysis%20with%20R%20Programming.pdf"
    },
    {
      "title": "Analyze Data to Answer Questions",
      "issuer": "Google / Coursera",
      "category": "Data Analysis",
      "href": "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/Analyze%20Data%20to%20Answer%20Questions.pdf"
    },
    {
      "title": "Process Data from Dirty to Clean",
      "issuer": "Google / Coursera",
      "category": "Data Cleaning",
      "href": "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/Process%20Data%20from%20Dirty%20to%20Clean.pdf"
    },
    {
      "title": "Share Data Through Visualization",
      "issuer": "Google / Coursera",
      "category": "Visualization",
      "href": "https://github.com/suff28/certificates/blob/main/google%20data%20analytics/Share%20Data%20Through%20the%20Art%20of%20Visualization.pdf"
    },
    {
      "title": "Cloud Computing",
      "issuer": "NPTEL / Online Certification",
      "category": "Cloud",
      "href": "https://github.com/suff28/certificates/blob/main/cloud%20computing.pdf"
    },
    {
      "title": "Ethical Hacking",
      "issuer": "NPTEL / Online Certification",
      "category": "Cybersecurity",
      "href": "https://github.com/suff28/certificates/blob/main/Ethical%20hacking.pdf"
    },
    {
      "title": "Johns Hopkins Certificate",
      "issuer": "Johns Hopkins",
      "category": "Professional Certificate",
      "href": "https://github.com/suff28/certificates/blob/main/john%20hopkins.pdf"
    },
    {
      "title": "Learning Analytics Tool",
      "issuer": "Academic / Technical Certificate",
      "category": "Analytics",
      "href": "https://github.com/suff28/certificates/blob/main/leaning%20analytic%20tool.pdf"
    },
    {
      "title": "Online Privacy",
      "issuer": "Professional Certificate",
      "category": "Privacy",
      "href": "https://github.com/suff28/certificates/blob/main/online%20privacy.pdf"
    },
    {
      "title": "SmartKnower Internship Certificate",
      "issuer": "SmartKnower",
      "category": "Internship",
      "href": "https://github.com/suff28/certificates/blob/main/smartknower/smartknower.jpg"
    },
    {
      "title": "Teachnook Certificate",
      "issuer": "Teachnook",
      "category": "Training",
      "href": "https://github.com/suff28/certificates/blob/main/teachnook/teachnook1.jpg"
    },
    {
      "title": "Younity Internship Certificate",
      "issuer": "Younity",
      "category": "Internship",
      "href": "https://github.com/suff28/certificates/blob/main/younity/younity%20internship.pdf"
    }
  ],
  "resume": {
    "href": "./assets/docs/Mohammed_Sufiyan_Resume.pdf",
    "label": "View Resume"
  },
  "github": {
    "href": "https://github.com/suff28",
    "label": "GitHub"
  },
  "contact": {
    "text": "I am completing my MS in Applied Data Analytics at Boston University and am available to start work on January 15, 2027. I am interested in data engineering and data quality roles.",
    "links": [
      {
        "label": "Email",
        "href": "mailto:suff280602@gmail.com",
        "primary": true
      },
      {
        "label": "LinkedIn",
        "href": "https://www.linkedin.com/in/suff28"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/suff28"
      },
      {
        "label": "Google Scholar",
        "href": "https://scholar.google.com/citations?user=XSDrhfMAAAAJ&hl=en"
      }
    ]
  }
};
