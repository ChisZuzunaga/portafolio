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

import p5_main from "../assets/galeria_thumbnail.svg";

import p6_main from "../assets/robot_thumbnail.svg";

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
      image: p4_main,
      image1: "https://placehold.co/980x1110",
      image2: "https://placehold.co/980x430",
      image3: "https://placehold.co/980x450",
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
      image: p5_main,
      image1: "https://placehold.co/980x1110",
      image2: "https://placehold.co/980x430",
      image3: "https://placehold.co/980x450",
    },

    {
      id: 6,
      title: {
        en: "Wall-Avoiding Robot",
        es: "Robot esquivador de paredes",
      },
      description: {
        en: "Built using Arduino as part of an Automation course. The project involved programming a robot to avoid obstacles and escape from a maze.",
        es: "Construido usando Arduino como parte de un curso de Automatización. El proyecto consistía en programar un robot para esquivar obstáculos y salir de un laberinto.",
      },
      date: {
        en: "July 2024",
        es: "Julio 2024",
      },
      project: {
        en: "The robot was pre-assembled and provided by the course. My task was to program it using the built-in Arduino microcontroller so that it could autonomously detect and avoid obstacles in a maze-like environment. The project helped reinforce concepts of sensors, servomotors, and autonomous movement.",
        es: "El robot fue ensamblado previamente y entregado por la asignatura. Mi tarea consistía en programarlo mediante el microcontrolador Arduino incorporado, para que pudiera detectar y esquivar obstáculos de forma autónoma dentro de un entorno tipo laberinto. El proyecto permitió reforzar conceptos sobre sensores, servomotores y movimiento autónomo.",
      },
      challenges: {
        en: "One of the main difficulties was the use of a non-original Arduino board, which behaved differently than expected and caused compatibility issues. Additionally, the robot required four AA batteries which drained quickly, complicating testing and debugging.",
        es: "Una de las principales dificultades fue el uso de una placa Arduino no original, la cual se comportaba de manera diferente a la esperada y causaba problemas de compatibilidad. Además, el robot requería cuatro baterías AA que se agotaban rápidamente, lo que dificultaba el testeo y la depuración del código.",
      },
      extrainfo_tittle: {
        en: "Extra Information",
        es: "Información Extra",
      },
      extrainfo: {
        en: "Despite the technical limitations, working with Arduino, sensors, motors, and servos was a rewarding experience. This was my first hands-on project with embedded systems.",
        es: "A pesar de las limitaciones técnicas, trabajar con Arduino, sensores, motores y servos fue una experiencia muy gratificante. Este fue mi primer proyecto práctico con sistemas embebidos.",
      },
      image: p6_main,
      image1: "https://placehold.co/980x1110",
      image2: "https://placehold.co/980x430",
      image3: "https://placehold.co/980x450",
    },
];
  
  export default projectsData;