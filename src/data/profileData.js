const profileData = {
  nombre: "Ignacio Guerra Torres",
  contacto: {
    ubicacion: {
      en: "Santiago, Chile",
      es: "Santiago, Chile",
    },
    email: "tu.email@ejemplo.com",
    telefono: "+56 9 1234 5678",
    linkedin: "https://www.linkedin.com/in/ignacio-guerra-torres-409a22337/",
    github: "https://github.com/tu-usuario",
    cvUrl: "/cv.pdf",
  },

  resumen: {
    en: "Developer focused on interfaces and user experience (UX/UI). I work with React and the modern web ecosystem to build accessible, fast, and scalable products.",
    es: "Desarrollador enfocado en interfaces y experiencia de usuario (UX/UI). Trabajo con React y el ecosistema web moderno para crear productos accesibles, rápidos y escalables.",
  },

  habilidadesBlandas: {
    en: [
      "Effective communication",
      "Teamwork",
      "Time management",
      "Adaptability",
      "Critical thinking",
      "User experience orientation (UX/UI)"
    ],
    es: [
      "Comunicación efectiva",
      "Trabajo en equipo",
      "Gestión del tiempo",
      "Adaptabilidad",
      "Pensamiento crítico",
      "Orientación a la experiencia de usuario (UX/UI)"
    ]
  },

  tecnologias: [
    { id: "react", nombre: "React", slug: "react" },
    { id: "javascript", nombre: "JavaScript", slug: "javascript" },
    { id: "python", nombre: "Python", slug: "python" },
    { id: "html5", nombre: "HTML5", slug: "html5" },
    { id: "css3", nombre: "CSS3", slug: "css3" },
    { id: "neo4j", nombre: "Neo4j", slug: "neo4j" },
    { id: "php", nombre: "PHP", slug: "php" },
    { id: "kotlin", nombre: "Kotlin", slug: "kotlin" },
    { id: "git", nombre: "Git", slug: "git" }
  ],

  herramientas: [
    { id: "figma", nombre: "Figma", slug: "figma" },
    { id: "photoshop", nombre: "Adobe Photoshop", slug: "adobephotoshop" },
    { id: "uxui", nombre: "UX/UI", slug: null, custom: "uxui" }
  ],

  certificaciones: [
    { titulo: {en:"dd",es:"dd"}, entidad:"dd", fecha:"dd", enlace:"dd" }
  ],

  estudios: [
    { institucion:"dd", programa:{en:"dd",es:"dd"}, periodo:"2025 - 2025", descripcion:{en:"dd",es:"dd"} }
  ]
};

export default profileData;
