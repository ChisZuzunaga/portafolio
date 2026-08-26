const profileData = {
  name: "Ignacio Noel Alfonso Guerra Torres",
  contact: {
    email: "ignacioguerratorres@gmail.com",
    phone: "+56 9 9378 2361",
    phoneHref: "+56993782361",
    github: "https://github.com/ChisZuzunaga",
    linkedin: "https://www.linkedin.com/in/ignacio-guerra-torres-409a22337/",
    cvUrl: "/CV_Ignacio_Guerra.pdf",
  },
  skillGroups: [
    {
      id: "languages",
      items: [
        { id: "typescript", name: "TypeScript", slug: "typescript" },
        { id: "javascript", name: "JavaScript", slug: "javascript" },
        { id: "python", name: "Python", slug: "python" },
        { id: "html", name: "HTML", slug: "html5" },
        { id: "css", name: "CSS", slug: "css3" },
        { id: "sql", name: "SQL", slug: "sql" },
      ],
    },
    {
      id: "development",
      items: [
        { id: "react-native", name: "React Native", slug: "react" },
        { id: "expo", name: "Expo", slug: "expo" },
        { id: "react", name: "React", slug: "react" },
        { id: "vite", name: "Vite", slug: "vite" },
        { id: "fastapi", name: "FastAPI", slug: "fastapi" },
        { id: "websocket", name: "WebSocket", slug: "websocket" },
        { id: "tkinter", name: "Tkinter", slug: "tkinter" },
      ],
    },
    {
      id: "dataHardware",
      items: [
        { id: "supabase", name: "Supabase", slug: "supabase" },
        { id: "sqlite", name: "SQLite", slug: "sqlite" },
        { id: "esp32", name: "ESP32-S3", slug: "esp32" },
        { id: "maps", name: "React Native Maps", slug: "maps" },
        { id: "git", name: "Git", slug: "git" },
      ],
    },
    {
      id: "design",
      items: [
        { id: "uiux", name: "UI/UX", slug: "uiux" },
        { id: "mockups", labelKey: "resume.skills.items.mockups", slug: "mockups" },
        { id: "prototyping", labelKey: "resume.skills.items.prototyping", slug: "prototyping" },
        { id: "kanban", name: "Kanban", slug: "kanban" },
      ],
    },
  ],
};

export default profileData;
