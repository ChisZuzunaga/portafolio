import p1_main from "../assets/inventario_thumbnail.svg";
import inventario_1 from "../assets/inventario_1.svg";
import inventario_2 from "../assets/inventario_2.svg";
import inventario_3 from "../assets/inventario_3.svg";

import p2_main from "../assets/canchas_thumbnail.svg";
import canchas_1 from "../assets/canchas_1.png";
import canchas_2 from "../assets/canchas_2.svg";
import canchas_3 from "../assets/canchas_3.png";

import p3_main from "../assets/lenguaje_thumbnail.svg";
import lengua_1 from "../assets/lengua_1.png";
import lengua_2 from "../assets/lengua_2.svg";
import lengua_3 from "../assets/lengua_3.png";

import p4_main from "../assets/maximar_thumbnail.svg";
import p4_main_1 from "../assets/p4_main_1.png";
import p4_main_2 from "../assets/p4_main_2.png";
import p4_main_3 from "../assets/p4_main_3.png";

import p5_main from "../assets/galeria_thumbnail.svg";
import p5_main_1 from "../assets/p5_main_1.png";
import p5_main_2 from "../assets/p5_main_2.png";
import p5_main_3 from "../assets/p5_main_3.png";

import p6_main from "../assets/robot_thumbnail.svg";

import ubicate_main from "../assets/ubicate_thumbnail.png";
import ubicate_passenger from "../assets/ubicate_passenger.png";
import ubicate_driver from "../assets/ubicate_driver.png";
import ubicate_qr from "../assets/ubicate_qr.png";

import teadoro_main from "../assets/teadoro_thumbnail.png";
import teadoro_adaptive from "../assets/teadoro_adaptive.png";
import teadoro_profile from "../assets/teadoro_profile.png";
import teadoro_manual from "../assets/teadoro_manual.png";

import tiktokstats_main from "../assets/tiktokstats_thumbnail.svg";
import tiktokstats_records from "../assets/tiktokstats_records.png";
import tiktokstats_statistics from "../assets/tiktokstats_statistics.png";
import tiktokstats_stats from "../assets/tiktokstats_stats.png";

const projectsData = [
    {
      id: 1,
      title: {
        en: "Inventory Management System",
        es: "Sistema de Inventario",
      },
      description: {
        en: "Desktop inventory system developed with Python and Tkinter, using SQLite to manage products, clients, and suppliers.​",
        es: "Sistema de inventario de escritorio desarrollado con Python y Tkinter, utilizando SQLite para la gestión de productos, clientes y proveedores.",
      },
      date: {
        en: "February 2025",
        es: "Febrero 2025",
      },
      project: {
        en: "Built with Tkinter and SQLite to ensure an executable file without requiring external software. The system manages suppliers, clients, transactions, and generates reports per product and month. It also supports database backups and Excel import/export.",
        es: "Construido con Tkinter y SQLite para asegurar un archivo ejecutable sin necesidad de software externo. El sistema gestiona proveedores, clientes, transacciones y genera reportes por producto y mes. También permite copias de seguridad e importación/exportación en Excel.",
      },
      challenges: {
        en: "The main challenge was implementing a GUI similar to the mockup, as Tkinter lacks the styling capabilities of CSS. The layout is fixed and non-responsive.",
        es: "El principal desafío fue implementar una interfaz similar al mockup, ya que Tkinter carece de capacidades de personalización como CSS. El diseño es fijo y no responsivo.",
      },
      extrainfo_tittle: {
        en: "Extra Information",
        es: "Información Extra",
      },
      extrainfo: {
        en: "The system can generate PDF reports to analyze sales data, including the most sold products and most frequent clients or suppliers.",
        es: "El sistema puede generar informes en PDF para analizar datos de ventas, incluyendo los productos más vendidos y los clientes o proveedores más frecuentes.",
      },
      image: p1_main,
      image1: inventario_1,
      image2: inventario_2,
      image3: inventario_3,
    },

    {
      id: 2,
      title: {
        en: "Booking System",
        es: "Sistema de Reservas",
      },
      description: {
        en: "Web-based reservation system developed with HTML, CSS, JavaScript, PHP, and MariaDB.",
        es: "Sistema de reservas web desarrollado con HTML, CSS, JavaScript, PHP y MariaDB.",
      },
      date: {
        en: "September 2024",
        es: "Septiembre 2024",
      },
      project: {
        en: "Built with stakeholder collaboration, requirements were gathered through interviews and surveys. The system allows users to reserve time blocks and includes both a user and admin interface.",
        es: "Construido en colaboración con el stakeholder, se recopilaron requerimientos mediante entrevistas y encuestas. El sistema permite reservar bloques de tiempo y cuenta con una interfaz para usuarios y otra para administradores.",
      },
      challenges: {
        en: "The main challenge was implementing 30-minute time blocks while keeping a minimum reservation duration of 60 minutes, requiring complex logic for availability validation.",
        es: "El principal reto fue implementar bloques de 30 minutos manteniendo una reserva mínima de 60 minutos, lo que exigió una lógica compleja para validar la disponibilidad.",
      },
      extrainfo_tittle: {
        en: "Extra Information",
        es: "Información Extra",
      },
      extrainfo: {
        en: "Includes a user and admin mode. Admins can manage bookings, view statistics, and analyze frequent users and peak booking times.",
        es: "Incluye modo usuario y administrador. Los administradores pueden gestionar reservas, ver estadísticas y analizar usuarios frecuentes y horarios con más demanda.",
      },
      image: p2_main,
      image1: canchas_1,
      image2: canchas_2,
      image3: canchas_3,
    },  

    {
      id: 3,
      title: {
        en: "Sign Language Translator",
        es: "Traductor de Lengua de Señas",
      },
      description: {
        en: "AI-based sign language translation project using MediaPipe, TensorFlow, and OpenCV.",
        es: "Proyecto de traducción de lengua de señas basado en IA utilizando MediaPipe, TensorFlow y OpenCV.",
      },
      date: {
        en: "December 2024",
        es: "Diciembre 2024",
      },
      project: {
        en: "Developed in collaboration with a stakeholder and members of the Deaf community, the system uses CNNs with LSTM to interpret signs in context.",
        es: "Desarrollado en colaboración con un stakeholder y miembros de la comunidad sorda, el sistema usa redes neuronales convolucionales con LSTM para interpretar signos en contexto.",
      },
      challenges: {
        en: "Hardware limitations hindered model training. Each letter required around 1.200 images, taking up nearly 0.5GB of space.",
        es: "Las limitaciones del hardware dificultaron el entrenamiento del modelo. Cada letra requería unas 1.200 imágenes, ocupando cerca de 0.5GB de espacio.",
      },
      extrainfo_tittle: {
        en: "Aditionals Difficulties",
        es: "Dificultades adicionales",
      },
      extrainfo: {
        en: "Despite having a large amount of training data, the desired accuracy was not always achieved. The project emphasized community inclusion and validation with interpreters and Deaf participants throughout development.",
        es: "A pesar de tener una gran cantidad de datos para el entrenamiento, no siempre se lograba la precisión deseada. El proyecto enfatizó la inclusión y validación comunitaria con intérpretes y participantes sordos durante todo el desarrollo.",
      },
      image: p3_main,
      image1: lengua_1,
      image2: lengua_2,
      image3: lengua_3,
    },  
    
    {
      id: 4,
      title: {
        en: "Promotional Website",
        es: "Página Publicitaria",
      },
      description: {
        en: "Responsive website built to enhance design and CSS skills using pure HTML, CSS, and JavaScript.",
        es: "Sitio web responsivo desarrollado para mejorar habilidades de diseño y CSS utilizando HTML, CSS y JavaScript puro.",
      },
      date: {
        en: "February 2025",
        es: "Febrero 2025",
      },
      project: {
        en: "This project was developed to strengthen my skills in CSS and design. Although using React or frameworks like Bootstrap or Tailwind was an option, I chose to focus on raw development to challenge myself. At the time, I was also taking a React course, so I opted for pure HTML, CSS, and JavaScript to reinforce my foundational knowledge. There is potential to rebuild this project using React and Vite for a more robust implementation.",
        es: "Este proyecto fue desarrollado con el objetivo de fortalecer mis habilidades en CSS y diseño. Aunque se podría haber utilizado React u otros frameworks como Bootstrap o Tailwind, opté por enfocarme en el desarrollo puro para desafiarme a mí mismo. En ese momento también estaba tomando un curso de React, por lo que preferí utilizar HTML, CSS y JavaScript puro para reforzar mis conocimientos base. Existe la posibilidad de rehacer esta página utilizando React y Vite para una versión más robusta."
      },
      challenges: {
        en: "The main challenge was the delay in receiving the necessary information to complete the site, which postponed the final delivery. From a technical standpoint, the development went smoothly.",
        es: "El principal desafío fue el retraso en la entrega de la información necesaria para finalizar el sitio, lo que pospuso la entrega final. Desde el punto de vista técnico, el desarrollo se realizó sin mayores inconvenientes."
      },
      extrainfo_tittle: {
        en: "Extra Information",
        es: "Información Extra",
      },
      extrainfo: {
        en: "The website is fully responsive and adapts well to both mobile and desktop devices. As a promotional page, it highlights the products offered by 'Maximar'.",
        es: "El sitio web es completamente responsivo y se adapta correctamente tanto a dispositivos móviles como de escritorio. Al ser una página publicitaria, se exhiben los productos que ofrece 'Maximar'."
      },
      webUrl: "https://maximar-git-main-chis-zuzunaga.vercel.app/",
      image: p4_main,
      image1: p4_main_1,
      image2: p4_main_2,
      image3: p4_main_3,
    },  
    
    {
      id: 5,
      title: {
        en: "Responsive Gallery",
        es: "Galería Responsiva"
      },
      description: {
        en: "Developed with HTML and CSS. This project is a responsive image gallery inspired by the Pinterest layout, using a Masonry-style grid.",
        es: "Desarrollado con HTML y CSS. Este proyecto es una galería de imágenes responsiva inspirada en el diseño de Pinterest, utilizando una cuadrícula tipo Masonry."
      },
      date: {
        en: "September 2024",
        es: "Septiembre 2024"
      },
      project: {
        en: "The purpose of the project was to build a gallery that adapts to different screen sizes. The Masonry layout principle was applied to allow images of various heights to align harmoniously, emulating Pinterest’s dynamic design.",
        es: "El objetivo del proyecto fue construir una galería que se adapte a distintos tamaños de pantalla. Se aplicó el principio de diseño tipo Masonry para permitir que imágenes de distintas alturas se alinearan de forma armónica, emulando el diseño dinámico de Pinterest."
      },
      challenges: {
        en: "There were no major technical challenges during development. The most time-consuming part was selecting and curating the appropriate images for the gallery.",
        es: "No se presentaron grandes desafíos técnicos durante el desarrollo. La parte más tediosa fue la selección y curaduría de las imágenes adecuadas para la galería."
      },
      extrainfo_tittle: {
        en: "Extra Information",
        es: "Información Extra"
      },
      extrainfo: {
        en: "All the images used in this project were selected from my personal Pinterest collection.",
        es: "Todas las imágenes utilizadas en este proyecto fueron seleccionadas de mi colección personal en Pinterest."
      },
      webUrl: "https://megagaleriaqueso-ablcjcbzq-chis-zuzunaga.vercel.app/",
      image: p5_main,
      image1: p5_main_1,
      image2: p5_main_2,
      image3: p5_main_3,
    },

    // {
    //   id: 6,
    //   title: {
    //     en: "Wall-Avoiding Robot",
    //     es: "Robot esquivador de paredes",
    //   },
    //   description: {
    //     en: "Built using Arduino as part of an Automation course. The project involved programming a robot to avoid obstacles and escape from a maze.",
    //     es: "Construido usando Arduino como parte de un curso de Automatización. El proyecto consistía en programar un robot para esquivar obstáculos y salir de un laberinto.",
    //   },
    //   date: {
    //     en: "July 2024",
    //     es: "Julio 2024",
    //   },
    //   project: {
    //     en: "The robot was pre-assembled and provided by the course. My task was to program it using the built-in Arduino microcontroller so that it could autonomously detect and avoid obstacles in a maze-like environment. The project helped reinforce concepts of sensors, servomotors, and autonomous movement.",
    //     es: "El robot fue ensamblado previamente y entregado por la asignatura. Mi tarea consistía en programarlo mediante el microcontrolador Arduino incorporado, para que pudiera detectar y esquivar obstáculos de forma autónoma dentro de un entorno tipo laberinto. El proyecto permitió reforzar conceptos sobre sensores, servomotores y movimiento autónomo.",
    //   },
    //   challenges: {
    //     en: "One of the main difficulties was the use of a non-original Arduino board, which behaved differently than expected and caused compatibility issues. Additionally, the robot required four AA batteries which drained quickly, complicating testing and debugging.",
    //     es: "Una de las principales dificultades fue el uso de una placa Arduino no original, la cual se comportaba de manera diferente a la esperada y causaba problemas de compatibilidad. Además, el robot requería cuatro baterías AA que se agotaban rápidamente, lo que dificultaba el testeo y la depuración del código.",
    //   },
    //   extrainfo_tittle: {
    //     en: "Extra Information",
    //     es: "Información Extra",
    //   },
    //   extrainfo: {
    //     en: "Despite the technical limitations, working with Arduino, sensors, motors, and servos was a rewarding experience. This was my first hands-on project with embedded systems.",
    //     es: "A pesar de las limitaciones técnicas, trabajar con Arduino, sensores, motores y servos fue una experiencia muy gratificante. Este fue mi primer proyecto práctico con sistemas embebidos.",
    //   },
    //   image: p6_main,
    //   image1: "https://placehold.co/980x1110",
    //   image2: "https://placehold.co/980x430",
    //   image3: "https://placehold.co/980x450",
    // },

    {
      id: 7,
      featured: true,
      title: {
        en: "Ubicate",
        es: "Ubicate",
      },
      description: {
        en: "Visual design and frontend implementation for a public transportation mobile app, featuring role-specific navigation, interactive maps, routes, markers, stops, and location clusters.",
        es: "Diseño visual e implementación frontend de una aplicación móvil de transporte público, con navegación diferenciada por rol, mapas interactivos, recorridos, marcadores, paraderos y clusters de ubicación.",
      },
      date: {
        en: "October 2025 - June 2026",
        es: "Octubre 2025 - Junio 2026",
      },
      project: {
        en: "My work on Ubicate focused exclusively on the application's visual experience and mobile frontend. I designed and implemented differentiated passenger and driver interfaces, navigation flows, map views, route and stop visualization, custom markers, frequent-point indicators, and the visual states associated with location permissions. The interface was developed with React Native, Expo, TypeScript, React Navigation, and React Native Maps.",
        es: "Mi trabajo en Ubicate se concentró exclusivamente en la experiencia visual y el frontend móvil de la aplicación. Diseñé e implementé interfaces diferenciadas para pasajeros y conductores, flujos de navegación, vistas de mapas, visualización de recorridos y paraderos, marcadores personalizados, indicadores de puntos frecuentes y los estados visuales asociados a los permisos de ubicación. La interfaz fue desarrollada con React Native, Expo, TypeScript, React Navigation y React Native Maps.",
      },
      challenges: {
        en: "The main challenge was keeping information readable when many stops, frequent points, drivers, and route elements were visible at once. I implemented clustering according to map density and zoom level, differentiated each type of point through its own iconography, and refined marker, polyline, and directional-arrow behavior to keep the map clear and visually consistent.",
        es: "El principal desafío fue mantener la información legible cuando se mostraban simultáneamente numerosos paraderos, puntos frecuentes, conductores y elementos del recorrido. Implementé clusters según la densidad y el nivel de zoom del mapa, diferencié cada tipo de punto mediante iconografía propia y ajusté el comportamiento de marcadores, polilíneas y flechas direccionales para conservar un mapa claro y visualmente consistente.",
      },
      extrainfo_tittle: {
        en: "Visual and map design",
        es: "Diseño visual y cartográfico",
      },
      extrainfo: {
        en: "The visual system includes reusable components, passenger and driver variants, custom map icons, clustered stops and frequent points, route polylines, directional arrows, location indicators, and consistent light and dark interface resources. The objective was to make a complex transportation map understandable at a glance on a mobile screen.",
        es: "El sistema visual incluye componentes reutilizables, variantes para pasajero y conductor, íconos cartográficos personalizados, clusters de paraderos y puntos frecuentes, polilíneas de recorrido, flechas direccionales, indicadores de ubicación y recursos coherentes para interfaces claras y oscuras. El objetivo fue hacer comprensible de un vistazo un mapa de transporte complejo dentro de una pantalla móvil.",
      },
      image: ubicate_main,
      thumbnailFit: "contain",
      thumbnailBackground: "#000000",
      image1: ubicate_passenger,
      image2: ubicate_driver,
      image3: ubicate_qr,
    },

    {
      id: 8,
      featured: true,
      title: {
        en: "Teadoro",
        es: "Teadoro",
      },
      description: {
        en: "Interactive voice-based educational system for children aged 3 to 7, combining a React Native mobile app, an ESP32 plush toy, and real-time artificial intelligence.",
        es: "Sistema educativo interactivo por voz para niños de 3 a 7 años que combina una aplicación móvil React Native, un peluche con ESP32 e inteligencia artificial en tiempo real.",
      },
      date: {
        en: "Capstone project - 2026",
        es: "Proyecto de título - 2026",
      },
      project: {
        en: "Teadoro combines a physical plush toy with a parental-control mobile application. The ESP32 captures the child's voice, a bridge sends the audio to the OpenAI Realtime API, and the synthesized response returns to the toy. Adults can manage profiles, create adventures manually or with AI, review transcripts and reports, configure reinforcement phrases, and control the toy's connection and volume. Each adventure is organized into exactly three progressive levels with attempts, rounds, hints, and expected answers.",
        es: "Teadoro combina un peluche físico con una aplicación móvil de control parental. El ESP32 captura la voz del niño, un bridge envía el audio a la API Realtime de OpenAI y la respuesta sintetizada regresa al juguete. Los adultos pueden administrar perfiles, crear aventuras manualmente o con IA, revisar transcripciones e informes, configurar frases de refuerzo y controlar la conexión y el volumen del peluche. Cada aventura se organiza en exactamente tres niveles progresivos con intentos, rondas, pistas y respuestas esperadas.",
      },
      challenges: {
        en: "The main technical challenge was integrating BLE discovery, Wi-Fi provisioning, and a bidirectional PCM16 audio stream at 24 kHz across the mobile app, the voice bridge, and the ESP32. The experience also had to remain short, positive, family-friendly, and understandable for supervised use by young children.",
        es: "El principal desafío técnico fue integrar descubrimiento BLE, configuración WiFi y un flujo de audio PCM16 bidireccional a 24 kHz entre la aplicación móvil, el bridge de voz y el ESP32. La experiencia también debía mantenerse breve, positiva, apta para la familia y comprensible para el uso supervisado por niños pequeños.",
      },
      extrainfo_tittle: {
        en: "Technical scope",
        es: "Alcance técnico",
      },
      extrainfo: {
        en: "The solution uses React Native, Expo, TypeScript, React Context with AsyncStorage, React Navigation, BLE, Wi-Fi, WebSockets, Node.js, and the OpenAI Realtime API. It supports up to four locally stored profiles and one active ESP32 connection at a time, and can export supervised-use reports as PDF files.",
        es: "La solución utiliza React Native, Expo, TypeScript, React Context con AsyncStorage, React Navigation, BLE, WiFi, WebSockets, Node.js y la API Realtime de OpenAI. Admite hasta cuatro perfiles almacenados localmente y una conexión ESP32 activa a la vez, y puede exportar informes de uso supervisado en formato PDF.",
      },
      image: teadoro_main,
      thumbnailFit: "contain",
      thumbnailBackground: "#eaf7fc",
      image1: teadoro_adaptive,
      image2: teadoro_profile,
      image3: teadoro_manual,
    },

    {
      id: 9,
      featured: true,
      title: {
        en: "TikTok Stats",
        es: "TikTok Stats",
      },
      description: {
        en: "Local desktop dashboard that records TikTok Live gifts, links each gift to the sender's next comment, and provides real-time session analytics.",
        es: "Panel de escritorio local que registra regalos de TikTok Live, vincula cada regalo con el siguiente comentario del remitente y entrega estadísticas de sesión en tiempo real.",
      },
      date: {
        en: "August 2026",
        es: "Agosto 2026",
      },
      project: {
        en: "TikTok Stats listens to a TikTok Live room and organizes incoming gifts into a reviewable work queue. The first subsequent comment from the same participant is attached directly to the gift. Users can filter records by status and coin value, edit or delete entries, revisit saved sessions, and open a statistics view with duration, coins, gift totals, participants, top contributors, and an interactive time histogram.",
        es: "TikTok Stats escucha una sala de TikTok Live y organiza los regalos entrantes en una cola de trabajo revisable. El primer comentario posterior de la misma persona se adjunta directamente al regalo. Los usuarios pueden filtrar registros por estado y valor en monedas, editar o eliminar entradas, revisar sesiones guardadas y abrir una vista de estadísticas con duración, monedas, total de regalos, participantes, principales colaboradores y un histograma temporal interactivo.",
      },
      challenges: {
        en: "The application required a long-running TikTokLive listener, live synchronization between FastAPI and React through WebSockets, and a reliable fallback poll every 10 seconds. Packaging the React interface, Python backend, native dependencies, and database access into a single Windows executable was another central challenge.",
        es: "La aplicación requirió un listener persistente de TikTokLive, sincronización en vivo entre FastAPI y React mediante WebSockets y un sondeo de respaldo confiable cada 10 segundos. Empaquetar la interfaz React, el backend Python, las dependencias nativas y el acceso a la base de datos en un único ejecutable de Windows fue otro desafío central.",
      },
      extrainfo_tittle: {
        en: "Delivery and persistence",
        es: "Entrega y persistencia",
      },
      extrainfo: {
        en: "The distributable TikTokStats.exe includes the interface, backend, and Python dependencies, so the recipient does not need to install development tools. Session data is stored in a local SQLite database under the user's application-data directory and remains available when the executable is moved or replaced.",
        es: "El ejecutable distribuible TikTokStats.exe incluye la interfaz, el backend y las dependencias de Python, por lo que la persona receptora no necesita instalar herramientas de desarrollo. Los datos de sesión se guardan en una base SQLite dentro del directorio local de datos de la aplicación y permanecen disponibles aunque el ejecutable se mueva o se reemplace.",
      },
      image: tiktokstats_main,
      thumbnailFit: "contain",
      thumbnailBackground: "#020617",
      image1: tiktokstats_records,
      image2: tiktokstats_statistics,
      image3: tiktokstats_stats,
    },
];
  
  export default projectsData;
