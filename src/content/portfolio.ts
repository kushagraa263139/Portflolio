/**
 * Single source of truth for every piece of portfolio content.
 * Edit text, links and facts here; components only render what is defined.
 * Leave a URL as an empty string to hide that link everywhere.
 */

export type Tone = "sky" | "sage" | "lavender" | "peach" | "butter" | "cream";

export interface SocialLink {
  id: "linkedin" | "github" | "leetcode" | "codechef" | "codeforces";
  label: string;
  handle: string;
  url: string;
}

export const profile = {
  name: "Kushagra Agrawal",
  firstName: "Kushagra",
  lastName: "Agrawal",
  role: "Software Development Engineer",
  focus: "AI/ML & Generative AI",
  intro: "I build software, explore intelligent systems and turn ideas into useful products.",
  summary:
    "Computer Science undergraduate with experience in software engineering, machine learning, Generative AI and product development.",
  location: "Dehradun, India",
  cgpa: "9.01",
  cgpaScale: "10",
  email: "kagrawal.work0@gmail.com",
  phone: "+91 84394 47977",
  phoneHref: "+918439447977",
  resumeUrl: "/Kushagra_Agrawal_Resume.pdf",
  resumeFileName: "Kushagra_Agrawal_Resume.pdf",
  /** Rotating "currently" line in the hero. */
  currently: [
    "co-building VIRASAT",
    "exploring Generative AI",
    "wiring RAG into LLMs",
    "solving DSA problems",
    "studying CSE at UPES",
  ],
};

export const socials: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "kushagra-agrawal",
    url: "https://linkedin.com/in/kushagra-agrawal-361a44376",
  },
  { id: "github", label: "GitHub", handle: "kushagraa263139", url: "https://github.com/kushagraa263139" },
  { id: "leetcode", label: "LeetCode", handle: "kushagraa685", url: "https://leetcode.com/u/kushagraa685" },
  {
    id: "codechef",
    label: "CodeChef",
    handle: "acute_ref_51",
    url: "https://www.codechef.com/users/acute_ref_51",
  },
  {
    id: "codeforces",
    label: "Codeforces",
    handle: "kushagra263139",
    url: "https://codeforces.com/profile/kushagra263139",
  },
];

/** Links with an empty URL are never rendered. */
export function withUrl<T extends { url: string }>(links: T[]): T[] {
  return links.filter((l) => l.url.trim().length > 0);
}

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "Right now I'm a Computer Science and Engineering undergraduate at the University of Petroleum and Energy Studies (UPES) in Dehradun. Most of my work sits between two questions: how do I build this properly, and is it worth building at all?",
    "I like problems with some structure to them — the kind you work through with data structures and algorithms, or by staring at a log stream until a pattern shows up. Lately that has meant machine learning, deep learning and Generative AI: clustering noisy cluster logs, training CNNs on X-rays, and wiring retrieval into language models so their answers stay grounded.",
    "I care just as much about the product side. Noticing what's broken for people, shaping a fix, and shipping something they actually use — that's how VIRASAT started.",
  ],
  interests: [
    { label: "Software engineering", tone: "sky" as Tone },
    { label: "Problem solving", tone: "butter" as Tone },
    { label: "Data Structures & Algorithms", tone: "cream" as Tone },
    { label: "Machine learning", tone: "sage" as Tone },
    { label: "Deep learning", tone: "lavender" as Tone },
    { label: "Generative AI", tone: "peach" as Tone },
    { label: "Building useful products", tone: "butter" as Tone },
  ],
};

export const experience = {
  dell: {
    company: "Dell Technologies",
    role: "Software Engineering Intern",
    period: "June 2026 – July 2026",
    mode: "Onsite",
    points: [
      "Worked on a real-time monitoring system processing Kubernetes cluster logs.",
      "Applied unsupervised machine learning and clustering to semi-structured log data.",
      "Identified unusual behaviour in live log streams.",
      "Built features that present detected anomalies to engineers in a clear, meaningful view.",
    ],
    tags: ["Kubernetes", "Log Analytics", "Anomaly Detection", "Unsupervised Learning"],
  },
  virasat: {
    company: "VIRASAT",
    role: "Co-Founder & Product Lead",
    period: "2026 – Present",
    url: "https://virasat.virasat-app.workers.dev/",
    problem:
      "Toppers' notes, previous-year question papers, teacher presentations and placement material were scattered across too many places.",
    journey: [
      { step: "Noticed", text: "Students were hunting for notes, PYQs, teacher PPTs and placement prep across scattered sources." },
      { step: "Built", text: "A single platform that brings academic and placement resources together." },
      { step: "Launched", text: "Shipped it to students and owned the journey from discovery to launch." },
      { step: "Extended", text: "Added one-on-one mentorship connecting students with seniors." },
    ],
    tags: ["Product discovery", "Web platform", "Mentorship", "Launch"],
  },
};

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  tone: Tone;
  oneLiner: string;
  description: string;
  built: string[];
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  /** Set false to hide a project without deleting its content. */
  visible: boolean;
}

export const projects: Project[] = [
  {
    id: "youtube-mind-rag",
    index: "01",
    title: "YouTube Mind-RAG",
    subtitle: "Generative AI Q&A assistant",
    category: "Generative AI · RAG",
    tone: "lavender",
    oneLiner: "Ask a YouTube video a question in plain language and get an answer grounded in what was actually said.",
    description:
      "A Retrieval-Augmented Generation application that answers natural-language questions about YouTube videos.",
    built: [
      "Extracted YouTube transcripts",
      "Chunked transcript content",
      "Generated embeddings and indexed them in FAISS",
      "Semantic search to retrieve relevant context",
      "Gemini API for context-grounded answers",
      "Streamlit application for real-time Q&A",
    ],
    tech: ["Python", "LangChain", "RAG", "FAISS", "Embeddings", "Gemini API", "Streamlit"],
    githubUrl: "https://github.com/kushagraa263139/YouTubeMind-RAG",
    visible: true,
    demoUrl: "",
  },
  {
    id: "chest-xray",
    index: "02",
    title: "Chest X-Ray Disease Classification",
    subtitle: "Deep learning / computer vision",
    category: "Deep learning · Computer vision",
    tone: "sage",
    oneLiner: "A CNN that sorts chest X-rays into COVID-19, Viral Pneumonia or Normal, served through a simple upload app.",
    description:
      "A CNN-based classification application that classifies chest X-ray images into COVID-19, Viral Pneumonia and Normal.",
    built: [
      "Built a CNN image-classification model",
      "Trained and evaluated it with classification metrics",
      "Used a confusion matrix for evaluation",
      "Streamlit interface for image uploads and predictions",
    ],
    tech: ["Python", "TensorFlow", "CNN", "Computer Vision", "Image Classification", "Streamlit"],
    githubUrl: "https://github.com/kushagraa263139/XRay-Check",
    visible: true,
    demoUrl: "",
  },
  {
    id: "jdbc-student-mgmt",
    index: "03",
    title: "JDBC Student Management App",
    subtitle: "Java · JDBC · SQL",
    category: "Java · Database",
    tone: "butter",
    oneLiner:
      "A menu-driven command-line Student Management System in Java that talks to a SQL database through JDBC, with every write going through a Prepared Statement.",
    description: "A command-line Student Management System developed using Java, JDBC and SQL.",
    built: [
      "Developed a command-line Student Management System using Java, JDBC and SQL",
      "Implemented CRUD operations — add, update, delete, display",
      "Used secure Prepared Statements for every database write",
      "Created and managed relational database tables",
      "Connected to a MySQL/SQL database using JDBC",
      "Built a menu-driven CLI for user-friendly interaction and a smooth workflow",
    ],
    tech: ["Java", "JDBC", "SQL", "CRUD", "Database Connectivity", "Prepared Statements"],
    githubUrl: "https://github.com/kushagraa263139/JDBC",
    visible: true,
    demoUrl: "",
  },
  {
    id: "helmet-detection",
    index: "04",
    title: "Helmet Detection System",
    subtitle: "Python · YOLOv8 · OpenCV",
    category: "Computer vision · Video",
    tone: "sky",
    oneLiner:
      "Runs a video frame by frame with a YOLOv8 model, boxes every helmet it finds with a confidence label, and writes the marked-up result out.",
    description:
      "A helmet detection tool that analyzes videos and identifies people wearing helmets using YOLOv8 models.",
    built: [
      "Built a helmet detection tool that analyzes videos with YOLOv8 models",
      "Processed each video frame and highlighted detected helmets",
      "Drew boxes and confidence labels on every detection",
      "Added options to save the output video with all detections clearly marked",
      "Designed simple command-line use so users can choose the video, model and output easily",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "Video Processing"],
    githubUrl: "https://github.com/kushagraa263139/helmet-detection",
    visible: true,
    demoUrl: "",
  },
  {
    id: "productivity-tracker",
    index: "05",
    title: "Personalized Productivity Tracker",
    subtitle: "Python · Flask · ML",
    category: "Machine learning · API",
    tone: "peach",
    oneLiner:
      "Cleans raw user data, trains a Random Forest to predict a productivity score, and serves it through a Flask API with personalized suggestions.",
    description: "An ML-based productivity prediction system using Python, Flask and scikit-learn.",
    built: [
      "Built an ML-based productivity prediction system using Python, Flask and scikit-learn",
      "Cleaned and preprocessed raw user data, handling missing values",
      "Encoded features for the model",
      "Trained a Random Forest model to predict productivity scores accurately",
      "Integrated the model into a Flask API with real-time predictions",
      "Returned personalized suggestions with each prediction",
    ],
    tech: ["Python", "Flask", "ML", "scikit-learn", "Data Cleaning", "Random Forest", "API Development"],
    githubUrl: "https://github.com/kushagraa263139/ML-Project",
    visible: true,
    demoUrl: "",
  },
];

export const visibleProjects = projects.filter((p) => p.visible);

export const skills: { title: string; tone: Tone; note: string; items: string[]; icon: string }[] = [
  { title: "Programming Languages", tone: "butter", note: "daily drivers", items: ["Python", "Java"], icon: "code" },
  {
    title: "Core Computer Science",
    tone: "cream",
    note: "the foundations",
    items: ["Data Structures and Algorithms", "Object-Oriented Programming", "Problem Solving"],
    icon: "braces",
  },
  {
    title: "Machine Learning",
    tone: "sage",
    note: "finding patterns",
    items: ["Supervised Learning", "Unsupervised Learning", "K-Means Clustering", "Anomaly Detection", "Model Evaluation"],
    icon: "scatter",
  },
  {
    title: "Deep Learning",
    tone: "sky",
    note: "seeing things",
    items: ["Neural Networks", "CNN", "TensorFlow", "Computer Vision", "Image Classification"],
    icon: "layers",
  },
  {
    title: "Generative AI",
    tone: "lavender",
    note: "current obsession",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "Embeddings",
      "FAISS",
      "Prompt Engineering",
      "Gemini API",
      "AI-assisted Development Tools",
    ],
    icon: "sparkle",
  },
  { title: "Tools", tone: "peach", note: "on the desk", items: ["Git", "GitHub", "Streamlit", "Kubernetes", "Log Monitoring"], icon: "wrench" },
];

export const education = {
  university: "University of Petroleum and Energy Studies (UPES)",
  short: "UPES, Dehradun",
  degree: "B.Tech – Computer Science and Engineering",
  period: "July 2023 – Present",
  cgpa: "9.01",
  coursework: [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Machine Learning",
  ],
  school: [
    { level: "Class XII", board: "CBSE", score: "91.60%", year: "2023" },
    { level: "Class X", board: "CBSE", score: "94.60%", year: "2021" },
  ],
};

export const practice = [
  { platform: "LeetCode", figure: "300+", caption: "problems solved", tone: "butter" as Tone, linkId: "leetcode" as const },
  { platform: "CodeChef", figure: "1421", caption: "rating · 2-Star coder", tone: "sage" as Tone, linkId: "codechef" as const },
  { platform: "Codeforces", figure: "998", caption: "rating", tone: "sky" as Tone, linkId: "codeforces" as const },
];

export function socialUrl(id: SocialLink["id"]): string {
  return socials.find((s) => s.id === id)?.url ?? "";
}
