import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "rentease",
    title: "RentEase — Rental House Management System",
    shortTitle: "RentEase",
    tagline:
      "A comprehensive rental management platform featuring tenant booking workflows, approval pipelines, and property allocations across web and mobile interfaces.",
    summary:
      "RentEase is an academic group software project designed to streamline rental property operations for landlords, property managers, and prospective tenants. The platform replaces fragmented communication with automated booking lifecycles, schedule validation, and tenant allocation workflows across both web and mobile environments.",
    categories: ["web", "mobile"],
    context: "academic",
    status: "completed",
    team: "group",
    role: "Tenant Booking & Allocation Module Lead",
    featured: true,
    published: true,
    order: 1,
    period: "Academic Project • Year 2",
    thumbnail: {
      src: "/images/projects/RentEase-thumbnail.jpg",
      alt: "RentEase — Rental House Management System web application interface",
      width: 1242,
      height: 587,
    },
    technologies: [
      { name: "React", note: "Web administration portal" },
      { name: "React Native", note: "Mobile tenant application" },
      { name: "Expo", note: "Mobile toolchain & testing" },
      { name: "Node.js", note: "Backend runtime" },
      { name: "Express.js", note: "REST API service layer" },
      { name: "MongoDB", note: "Document database with Mongoose ODM" },
      { name: "REST APIs", note: "Inter-service data contracts" }
    ],
    conceptsHighlighted: [
      "RESTful API Design",
      "State Management",
      "CRUD Operations",
      "Date Validation Logic",
      "Role-Based Access Control",
      "Cross-Platform Mobile Development"
    ],
    problem:
      "Traditional rental workflows suffer from double-booking risks, disorganized paper agreements, delayed application approvals, and poor transparency between tenants and property managers.",
    solution:
      "RentEase provides a centralized platform that manages tenant applications through structured status states (Pending, Approved, Rejected, Cancelled), validates date spans in real time, and handles allocation queues gracefully.",
    features: [
      "Property discovery and listing management with detailed amenities",
      "Tenant booking submission and real-time scheduling checks",
      "Landlord and administrator approval / rejection workflows",
      "Automated tenant allocation and lease tracking",
      "Waitlist management for high-demand rental units",
      "Booking history and status audit logs for tenants",
      "Cross-platform mobile client for on-the-go tenant requests"
    ],
    contribution: {
      summary:
        "Led the full-stack design and implementation of the core Tenant Booking and Allocation Management module across web and mobile clients.",
      responsibilities: [
        "Architected MongoDB schemas and Mongoose models for booking requests, status transitions, and allocation records.",
        "Built resilient RESTful API endpoints for booking submission, administrative approval/rejection, cancellation, and waitlist queuing.",
        "Engineered backend date-validation algorithms to eliminate scheduling overlaps and prevent double-booking of rental units.",
        "Developed web booking management dashboards in React with dynamic status filtering, tenant detail modals, and audit history.",
        "Implemented the tenant booking request flow on the React Native mobile application using Expo, supporting seamless submission and status tracking.",
        "Handled booking lifecycle edge cases including cancellations, expirations, and automatic waitlist notifications."
      ],
      areas: ["frontend", "backend", "mobile", "database"]
    },
    variants: [
      {
        name: "Web Application",
        description:
          "Desktop-optimized administrative and property management portal for reviewing applications, handling approvals, and tracking occupancy.",
        technologies: ["React", "CSS / Tailwind", "Axios", "Node.js", "Express.js", "MongoDB"]
      },
      {
        name: "Mobile Application",
        description:
          "Mobile-first tenant application built with React Native and Expo for exploring properties, submitting booking requests, and viewing application statuses.",
        technologies: ["React Native", "Expo", "React Navigation", "Node.js", "Express.js"]
      }
    ],
    challenges: [
      {
        challenge: "Preventing conflicting reservation dates across asynchronous concurrent requests.",
        solution:
          "Designed compound query validation at the database layer with status constraints to reject overlapping date intervals before saving new records."
      },
      {
        challenge: "Synchronizing state cleanly between web admin dashboards and mobile tenant views.",
        solution:
          "Standardized unified REST response structures and well-defined booking lifecycle enum states (Pending, Confirmed, Rejected, Cancelled)."
      }
    ],
    learnings: [
      "Deepened practical understanding of coordinating full-stack workflows across both web and mobile environments.",
      "Gained hands-on experience structuring scalable REST APIs with robust error handling and business logic validation.",
      "Learned the value of team API contract alignment during group project sprints."
    ],
    links: []
  },
  {
    slug: "findr",
    title: "Findr — Lost and Found Item Application",
    shortTitle: "Findr",
    tagline:
      "A modern web application connecting communities to report, search, and recover lost and found personal belongings.",
    summary:
      "Findr is a personal full-stack project focused on solving the community challenge of recovering lost items. Built with a focus on intuitive user workflows, secure authentication, and responsive discovery tools, Findr allows users to publish reports, upload item imagery, and coordinate recoveries.",
    categories: ["web"],
    context: "personal",
    status: "in-development",
    team: "individual",
    role: "Sole Developer & Architect",
    featured: true,
    published: true,
    order: 2,
    technologies: [
      { name: "React", note: "Frontend UI components" },
      { name: "Node.js", note: "Backend runtime environment" },
      { name: "Express.js", note: "REST API service" },
      { name: "MongoDB", note: "NoSQL database for item listings & user profiles" },
      { name: "REST APIs", note: "Client-server communication" },
      { name: "JWT", note: "Secure user authentication" }
    ],
    conceptsHighlighted: [
      "User Authentication & Authorization",
      "Multipart Image Uploads",
      "Full-Text Search & Filtering",
      "CRUD Operations",
      "Responsive UI Design"
    ],
    problem:
      "Lost items are often reported across fragmented social media groups or physical noticeboards, leading to low recovery rates and lack of searchable records.",
    solution:
      "Findr provides a dedicated, searchable platform with categorized listings, photo uploads, and location tags so finders and owners can quickly match and recover belongings.",
    features: [
      "User registration and authenticated account management",
      "Creation of categorized 'Lost' and 'Found' item posts",
      "Image upload support for visual verification of items",
      "Real-time search and multi-criteria filtering by category and status",
      "Author post management (editing, updating status, and deletion)",
      "Detailed item view pages with contact verification workflows"
    ],
    contribution: {
      summary:
        "Designed and implemented the application end-to-end as an independent personal engineering project.",
      responsibilities: [
        "Architected the database schema for users, items, categories, and audit states.",
        "Implemented JWT-based authentication with password hashing and protected API routes.",
        "Built responsive client interfaces for post creation, image handling, and dynamic catalog searching.",
        "Engineered server-side query filters to allow instant keyword and category lookups."
      ],
      areas: ["frontend", "backend", "database"]
    },
    challenges: [
      {
        challenge: "Handling image uploads securely without overloading server memory.",
        solution:
          "Configured controlled file-stream validation and storage pipeline with client-side image compression."
      }
    ],
    learnings: [
      "End-to-end full-stack development experience from initial concept to deployment planning.",
      "Best practices for securing sensitive user routes and validating client-submitted inputs."
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/pamithenuka/Findr.git",
        kind: "github"
      }
    ]
  },
  {
    slug: "carepulse",
    title: "CarePulse — AI-Powered Emergency Healthcare Triage & Operations",
    shortTitle: "CarePulse",
    tagline:
      "An intelligent emergency healthcare coordination system combining multi-agent AI architecture, multi-role web portals, and mobile response clients.",
    summary:
      "CarePulse is an academic group software engineering project aimed at streamlining emergency department triage and patient routing. Incorporating an agentic AI architecture alongside robust enterprise services, the system models patient prioritization, medical staff coordination, and clinical operations across dedicated web and mobile interfaces.",
    categories: ["web", "mobile", "ai-ml"],
    context: "academic",
    status: "in-development",
    team: "group",
    role: "Full-Stack & Subsystem Contributor",
    featured: true,
    published: true,
    order: 3,
    thumbnail: {
      src: "/images/projects/CarePulse.png",
      alt: "CarePulse — Emergency Healthcare Triage & Operations interface",
      width: 2934,
      height: 1500,
    },
    technologies: [
      { name: "ASP.NET Core", note: "Enterprise backend API framework" },
      { name: "Entity Framework Core", note: "ORM & relational database migrations" },
      { name: "PostgreSQL", note: "Primary relational database" },
      { name: "React", note: "Doctor & administrator web applications" },
      { name: "Flutter", note: "Patient & nurse cross-platform mobile apps" },
      { name: "JWT", note: "Role-based token authentication" },
      { name: "Agentic AI Architecture", note: "Multi-agent triage & decision support subsystem" },
      { name: "REST APIs", note: "Inter-tier service contracts" }
    ],
    conceptsHighlighted: [
      "Multi-Agent AI Architecture",
      "Enterprise Backend Engineering (.NET)",
      "Relational Database Modeling",
      "Role-Based Security",
      "Cross-Platform Mobile Integration"
    ],
    problem:
      "Emergency rooms frequently suffer from bottlenecked triage assessments, delayed prioritization of critical cases, and fragmented communication between ambulatory staff and hospital clinicians.",
    solution:
      "CarePulse integrates an automated multi-agent triage architecture with unified backend services, enabling rapid patient symptom intake, algorithmic urgency classification, and synchronized visibility for doctors and nurses.",
    features: [
      "Dedicated mobile interfaces for incoming patient intake and nurse vitals logging",
      "Web applications for physician triage oversight and hospital administrator operations",
      "ASP.NET Core enterprise backend with strict data contracts and PostgreSQL persistence",
      "Role-based authentication ensuring isolated clinical data access across roles",
      "Multi-agent AI triage subsystem designed to assess symptoms and recommend severity ranks",
      "Comprehensive patient journey logs and resource availability dashboards"
    ],
    contribution: {
      summary:
        "Contributed to backend API architecture, database migrations, and client-side integration for verified subsystem components.",
      responsibilities: [
        "Collaborated on designing PostgreSQL entity relational schemas using Entity Framework Core.",
        "Implemented RESTful endpoints in ASP.NET Core for clinical data exchange and authenticated access.",
        "Integrated client components with backend services following structured API schemas.",
        "Participated in architecture design sessions for the multi-agent AI triage subsystem."
      ],
      areas: ["backend", "frontend", "database"]
    },
    challenges: [
      {
        challenge: "Managing clean architecture across diverse client frameworks (React and Flutter) backed by .NET.",
        solution:
          "Enforced strict OpenAPI/Swagger data contracts and standardized HTTP status responses across all controllers."
      }
    ],
    learnings: [
      "Hands-on experience architecting software with enterprise .NET technologies and PostgreSQL.",
      "Gained exposure to multi-agent AI system architectures and their application to complex domain problems.",
      "Strengthened collaboration skills in a multi-disciplinary software engineering team."
    ],
    links: [
      {
        label: "GitHub Repository",
        href: "https://github.com/pamithenuka/CarePulse-AI_SE_049.git",
        kind: "github"
      }
    ]
  },
  {
    slug: "bike-rental",
    title: "Bike Rental Management System",
    shortTitle: "Bike Rental",
    tagline:
      "An enterprise Java application implementing MVC architecture, DAO patterns, and custom QuickSort algorithms for bike fleet management.",
    summary:
      "The Bike Rental System is an academic Java enterprise application built to manage commercial bike rental operations. Designed with strict adherence to Object-Oriented Programming (OOP) principles and MVC separation of concerns, the system handles inventory tracking, reservation lifecycles, and location-based fleet querying using custom data structure implementations.",
    categories: ["web"],
    context: "academic",
    status: "completed",
    team: "group",
    role: "Bike Management Module Developer",
    featured: false,
    published: true,
    order: 4,
    period: "Academic Project",
    technologies: [
      { name: "Java", note: "Core application programming language" },
      { name: "Jakarta EE", note: "Enterprise Java standards" },
      { name: "JSP (JavaServer Pages)", note: "Dynamic server-side views" },
      { name: "Servlets", note: "Controller layer handling HTTP requests" },
      { name: "Apache Tomcat", note: "Web application container" },
      { name: "File-Based Storage", note: "Data persistence layer" }
    ],
    conceptsHighlighted: [
      "Object-Oriented Programming (OOP)",
      "MVC Architecture",
      "Data Access Object (DAO) Pattern",
      "CRUD Operations",
      "QuickSort Algorithm Implementation",
      "Separation of Concerns"
    ],
    problem:
      "Managing distributed bike rental inventory across multiple stations requires reliable tracking of operational status, dynamic pricing calculation, and efficient catalog sorting.",
    solution:
      "Built a modular Java MVC web application implementing a clear Data Access Object (DAO) pattern, decoupled business logic, and custom sorting algorithms for inventory queries.",
    features: [
      "Complete bike inventory lifecycle (Add, Edit, View, Remove)",
      "Real-time availability status and pricing adjustment management",
      "Location-based fleet querying and multi-station inventory visibility",
      "In-memory QuickSort implementation for high-efficiency catalog sorting",
      "MVC architecture strictly separating JSP presentation, Servlet controllers, and DAO layers",
      "File-based data persistence handling record storage and retrieval"
    ],
    contribution: {
      summary:
        "Engineered the complete Bike Management subsystem, implementing business logic, controller servlets, DAO operations, and algorithmic sorting.",
      responsibilities: [
        "Designed and implemented the Bike model class applying encapsulation and OOP best practices.",
        "Built the Bike DAO layer to manage file-based CRUD persistence operations cleanly.",
        "Implemented controller Servlets to process client requests, validate parameters, and route responses.",
        "Implemented a custom QuickSort algorithm to efficiently sort and display bike listings by price and availability.",
        "Developed dynamic JSP views for bike catalog browsing, admin addition forms, and status toggles."
      ],
      areas: ["backend", "frontend"]
    },
    challenges: [
      {
        challenge: "Maintaining reliable state and query operations without an external relational database.",
        solution:
          "Structured a robust DAO file serialization and parsing layer with transactional integrity checks during file I/O."
      }
    ],
    learnings: [
      "Solidified foundational software engineering concepts including OOP, MVC, and design patterns.",
      "Deepened practical understanding of applying Data Structures and Algorithms (QuickSort) to real-world software modules.",
      "Mastered the enterprise Java request lifecycle (Request → Filter → Servlet → DAO → JSP)."
    ],
    links: []
  },
  {
    slug: "medical-cost-prediction",
    title: "Medical Cost Personal Prediction",
    shortTitle: "Medical Cost ML",
    tagline:
      "A machine learning regression analysis pipeline predicting personal healthcare charges, featuring rigorous outlier detection and data preprocessing.",
    summary:
      "An academic machine learning project utilizing regression models to forecast individual medical costs based on demographic and lifestyle factors. The project covers the end-to-end data science lifecycle, from Exploratory Data Analysis (EDA) and robust outlier removal to model evaluation and residual analysis.",
    categories: ["ai-ml"],
    context: "academic",
    status: "completed",
    team: "group",
    role: "Outlier Detection & Data Preprocessing Lead",
    featured: false,
    published: true,
    order: 5,
    technologies: [
      { name: "Python", note: "Primary programming language" },
      { name: "Pandas", note: "Data manipulation & tabular analysis" },
      { name: "NumPy", note: "Numerical computing & vector operations" },
      { name: "Scikit-learn", note: "Preprocessing, regression algorithms & metrics" },
      { name: "Data Preprocessing", note: "Handling missing values, scaling & encoding" },
      { name: "Regression Models", note: "Linear and ensemble regression architectures" }
    ],
    conceptsHighlighted: [
      "Machine Learning Lifecycle",
      "Statistical Outlier Detection (IQR / Z-Score)",
      "Feature Engineering & Encoding",
      "Regression Analysis",
      "Model Evaluation Metrics"
    ],
    problem:
      "Medical expense forecasting is heavily influenced by skewed distributions and extreme outliers (e.g., severe acute treatments), which distort standard regression models if not properly handled.",
    solution:
      "Implemented a comprehensive preprocessing pipeline with rigorous outlier detection and feature transformation to train and evaluate generalized regression models.",
    features: [
      "Exploratory Data Analysis (EDA) uncovering correlations between smoking, BMI, age, and charges",
      "Statistical outlier detection and treatment to prevent model distortion",
      "Categorical encoding and feature normalization pipelines using Scikit-learn",
      "Comparative regression model training across baseline and regularized estimators",
      "Evaluation reporting supporting RMSE, MAE, and R² evaluation metrics"
    ],
    contribution: {
      summary:
        "Led the statistical analysis, outlier detection, data sanitation, and feature preprocessing pipeline.",
      responsibilities: [
        "Conducted distribution analysis on financial target variables and demographic features using Pandas and NumPy.",
        "Implemented statistical outlier detection techniques (Interquartile Range - IQR) to isolate and treat anomalies.",
        "Constructed Scikit-learn transformers for one-hot encoding categorical variables and standardizing continuous features.",
        "Prepared cleaned train/test splits and assisted in running baseline regression model evaluations."
      ],
      areas: ["ml"]
    },
    challenges: [
      {
        challenge: "Balancing outlier removal without discarding legitimate high-cost medical scenarios.",
        solution:
          "Applied segmented IQR boundaries conditioned on key risk categories (e.g., smoker status) to retain valid high-risk distributions."
      }
    ],
    learnings: [
      "Hands-on mastery of data preprocessing techniques and their critical impact on downstream model generalization.",
      "Practical experience evaluating regression performance with Scikit-learn.",
      "Appreciation for data hygiene and ethical handling of medical insurance datasets."
    ],
    links: []
  },
  {
    slug: "library-management",
    title: "Web-Based Library Management System",
    shortTitle: "Library System",
    tagline:
      "An academic library management solution managing inventory, borrowing workflows, queue reservations, and fine calculations.",
    summary:
      "An academic group software project designed to digitize and automate university library operations. Features book inventory tracking, user lending lifecycles, waitlist queue systems, and administrative rule configurations.",
    categories: ["web"],
    context: "academic",
    status: "completed",
    team: "group",
    role: "Project Contributor",
    featured: false,
    published: false, // KEPT FALSE per requirement until user specifies verified responsibilities & stack!
    order: 6,
    technologies: [{ name: "Web Development" }],
    features: [
      "Book inventory catalog management",
      "Borrowing and return processing",
      "Reservation and queue management",
      "Reviews and ratings",
      "Notifications and alerts",
      "Rule configuration"
    ],
    links: []
  }
];
