export const personalInfo = {
    name: 'Santiago Álvarez Gutiérrez',
    shortName: 'Santiago Álvarez',
    initials: 'SA',
    role: 'Tecnólogo en Desarrollo de Software',
    location: 'Santiago de Cali, Valle del Cauca, Colombia',
    email: {
        primary: 'santiago.alvarez.gutierrez.@correounivalle.edu.co',
        secondary: 'santiagoalvarez2005@hotmail.com',
    },
    phone: '+57 321 8669135',
    github: 'https://github.com/Santiago-AGZ',
    linkedin: 'https://www.linkedin.com/in/santiago-alvarez-gutierrez-033359375',
    description: 'Apasionado por el desarrollo web moderno, especializado en React, TypeScript y soluciones cloud. Con experiencia en proyectos fullstack y metodologías ágiles.',
    shortBio: 'Especializado en aplicaciones web modernas con React, TypeScript y tecnologías cloud. Apasionado por crear soluciones digitales impactantes.',
};

export const aboutMe = {
    paragraphs: [
        'Soy un desarrollador de software en formación con una pasión por crear experiencias digitales excepcionales. Actualmente curso el programa de Tecnología en Desarrollo de Software en la Universidad del Valle, donde he desarrollado habilidades sólidas en desarrollo web fullstack.',
        'Mi experiencia incluye el desarrollo de aplicaciones web completas utilizando React, TypeScript y tecnologías cloud como Supabase y Firebase. Me especializo en crear interfaces de usuario modernas, intuitivas y altamente funcionales.',
        'Trabajo eficientemente en equipos utilizando metodologías ágiles como Scrum, y tengo experiencia sólida en control de versiones con Git y GitHub. Estoy constantemente aprendiendo nuevas tecnologías y mejores prácticas para mantenerme actualizado en este campo en constante evolución.',
    ],
    highlights: [
        { label: 'Formación', value: 'Universidad del Valle' },
        { label: 'Proyectos', value: '3+ Completados' },
        { label: 'Experiencia', value: 'Fullstack' },
        { label: 'Metodología', value: 'Scrum' },
    ],
};

export const education = [
    {
        title: 'Tecnología en Desarrollo de Software',
        institution: 'Universidad del Valle',
        location: 'Yumbo, Valle del Cauca',
        year: '2025',
        current: true,
    },
    {
        title: 'Técnico en Sistemas',
        institution: 'Servicio Nacional de Aprendizaje (SENA)',
        location: 'Santiago de Cali, Valle del Cauca',
        year: '2022',
    },
    {
        title: 'Bachiller Técnico en Mecánica Industrial',
        institution: 'CASD - Institución Educativa General Francisco de Paula Santander',
        location: 'Santiago de Cali, Valle del Cauca',
        year: '2020',
    },
];

export const complementaryEducation = [
    {
        title: 'Fundamentos de Análisis y Cálculo Numérico',
        institution: 'Universidad del Valle',
        hours: 144,
        year: '2025',
    },
    {
        title: 'Desarrollo de Software II',
        institution: 'Universidad del Valle',
        hours: 144,
        year: '2024',
    },
    {
        title: 'Bases de Datos',
        institution: 'Universidad del Valle',
        hours: 192,
        year: '2023',
    },
];

export const skills = {
    languages: {
        title: 'Lenguajes',
        icons: ['typescript', 'javascript', 'java', 'python', 'html', 'css'],
    },
    frontend: {
        title: 'Frontend',
        icons: ['react', 'vite', 'tailwind'],
    },
    backend: {
        title: 'Backend & Databases',
        icons: ['spring', 'nodejs', 'postgres', 'supabase', 'firebase'],
    },
    tools: {
        title: 'Herramientas & DevOps',
        icons: ['git', 'github', 'docker', 'vercel', 'vscode', 'postman'],
    },
    other: {
        title: 'Otros',
        icons: ['blender', 'threejs', 'figma'],
    },
};

export const projects = [
 {
    id: 'fajas-anjully',
    title: 'Fajas AnjulLy – Plataforma E-commerce',
    description: 'Plataforma web de comercio electrónico desarrollada para la venta de fajas y productos de bienestar, con experiencia de usuario intuitiva y un panel administrativo para la gestión de productos y pedidos.',
    period: 'Febrero - Junio 2025',
    technologies: [
        'React',
        'Vite',
        'Tailwind CSS',
        'Supabase',
        'PostgreSQL',
        'Vercel'
    ],
    features: [
        'Catálogo de productos con filtros dinámicos y paginación',
        'Vista detallada de productos con variantes de talla y color',
        'Carrito de compras funcional y persistente',
        'Flujo completo de checkout y confirmación de pedido',
        'Gestión de productos y órdenes desde panel administrativo',
        'Autenticación y gestión de usuarios',
        'Notificaciones automáticas por correo electrónico'
    ],
    demoUrl: 'https://fajas-anjully.vercel.app/',
    githubUrl: 'https://github.com/Santiago-AGZ/ecommerce-faja-anjully',
    images: ['fajas1.png', 'fajas2.png', 'fajas3.png', 'fajas4.png'],
    color: '#FF6B35',
}
,
     {
        id: 'DogApp',
        title: 'DogApp – Plataforma de gestión de citas veterinarias',
        description: 'Aplicación para la gestión de citas veterinarias caninas que permite registrar, visualizar, editar y eliminar citas, administrar información de mascotas y propietarios, e integrar autenticación de usuarios y servicios externos para la obtención dinámica de razas e imágenes de perros.',
        period: 'Febrero - Junio 2025',
        technologies: ['Android (Java)', 'Retrofit', 'Firebase Authentication', 'Firebase Firestore', 'Git','Github','Dog CEO API','Arquitectura MVVM','Dagger Hilt','JUnit', 'Mockito'],
        features: [
            'Sistema de login y registro con autenticación segura',
            'Gestión completa de citas (crear, listar, editar y eliminar)',
            'Visualización detallada de información de mascotas y propietarios',
            'Autocompletado de razas mediante consumo de API externa',
            'Asignación dinámica de imágenes según la raza del perro',
            'Interfaz gráfica basada en principios de UX/UI',
            'Persistencia de datos en la nube con Firestore'
        ],
        demoUrl: '',
        githubUrl: 'https://github.com/AlexanderJAON/EquipoTres',
        images: ["dogapp1.png","dogapp2.png","dogapp3.png","dogapp4.png","dogapp5.png","dogapp6.png"], 
        color: '#9D4EDD',
    },
    {
    id: 'textile-purify',
    title: 'Textile Purify – Plataforma Web 3D Educativa',
    description: 'Plataforma Web 3D educativa enfocada en la contaminación del agua, diseñada para sensibilizar y educar a los usuarios mediante experiencias inmersivas e interactivas que presentan problemáticas, impactos y soluciones ambientales.',
    period: 'Agosto - Diciembre 2024',
    technologies: [
        'React',
        'React Three Fiber',
        'Three.js',
        'Drei',
        'Blender',
        'Firebase',
        'TypeScript',
        'Zustand',
        'Vercel',
        'Git',
        'GitHub',
        'Figma',
        'Jira'
    ],
    features: [
        'Escenarios 3D interactivos sobre la contaminación del agua',
        'Visualización inmersiva de causas, impactos y soluciones ambientales',
        'Sistema de autenticación y gestión de usuarios en la nube',
        'Navegación guiada y arquitectura de información orientada a la usabilidad'
    ],
    impact: 'Proyecto orientado a la educación ambiental y la concienciación sobre la contaminación del agua mediante tecnologías Web 3D.',
    demoUrl: 'https://textile-purify-ten.vercel.app/',
    githubUrl: 'https://github.com/Elkin-Pena-UV/textile-purify',
    images: ['textile1.png', 'textile2.png', 'textile3.png', 'textile4.png'],
    color: '#00D9FF',
}

   
];

export const navigation = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
];
