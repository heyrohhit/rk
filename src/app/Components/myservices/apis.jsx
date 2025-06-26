import { FaLaptopCode, FaBullhorn, FaChartLine, FaDatabase, FaEnvelopeOpenText, FaFileExcel } from "react-icons/fa";

// API Object Data for services with expanded 250-word descriptions
const servicesData = [
  {
    id: 6,
    icon: <FaFileExcel />,
    title: "Excel Data Management",
    desc: "In today’s data-driven world, managing large volumes of information efficiently is essential for business success...",
    link: "https://wa.me/918700750589",
  },
  {
    id: 5,
    icon: <FaEnvelopeOpenText />,
    title: "E-mail Scraping",
    desc: "Email marketing remains one of the most powerful tools in digital outreach—when it’s backed by accurate and relevant data...",
    link: "https://wa.me/918700750589",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Facebook & Instagram Management",
    desc: "Social media isn't just about posting—it's about building a digital presence that connects, engages, and grows...",
    link: "https://wa.me/918700750589",
  },
  {
    id: 2,
    icon: <FaBullhorn />,
    title: "Social Media Ads Campaigns",
    desc: "Reaching your target audience with precision is essential in today’s competitive market...",
    link: "https://wa.me/918700750589",
  },
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Web Design",
    desc: "Your website is often the first impression your audience gets—make it unforgettable with our Web Design service...",
    link: "https://wa.me/918700750589",
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: "Web Development",
    desc: "We bring your digital ideas to life with robust, high-performance web development solutions tailored to your needs...",
    link: "https://wa.me/918700750589",
  },
];


// Projects (Design) Data
const projects = [
  {
    id: 1,
    title: "Photoshop Poster Design Demo",
    description: "This project showcases a creative demo of Photoshop poster design, featuring vibrant colors, modern aesthetics, and visual appeal for marketing and promotions. It highlights skills in layout, typography, and image editing to create visually compelling posters that capture attention and communicate messages effectively. The demo reflects a deep understanding of design principles, such as balance, contrast, and hierarchy, tailored for digital and print media alike.",
    image: "https://drive.google.com/file/d/1z7ByWfvyTNT2TMAzyTdLi4eCeAVRPDn0/preview",
    date:"2025-06-26"
  },
  {
    id: 3,
    title: "Photoshop Poster Design Demo",
    description: "A visually stunning Photoshop poster demo emphasizing clean design, color harmony, and modern graphics tailored for advertisements. The project demonstrates mastery of Photoshop tools, layering techniques, and effects that result in professional-grade promotional material, perfect for branding, product launches, and event announcements.",
    image: "https://drive.google.com/file/d/1ANWjpI-hjgAr359mQsFs4PGGU4gp4I_2/preview",
    date:"2025-06-26"
  },
  {
    id: 5,
    title: "Photoshop Poster Design Demo",
    description: "A poster design project that explores the creative use of color palettes and visual storytelling through Photoshop. It reflects expertise in graphic composition and branding through detailed mockups aimed at enhancing marketing campaigns.",
    image: "https://drive.google.com/file/d/1bJfgrzG33_BBhBXAGqLkekAJhFpQSCb-/preview",
    date:"2025-06-26"
  },
  {
    id: 7,
    title: "Photoshop Poster Design Demo",
    description: "A creative poster design showcasing illustrative graphics and impactful typography. Designed using Photoshop, it demonstrates how effective visuals can help convey a brand’s message and attract the desired audience.",
    image: "https://drive.google.com/file/d/1r2M33BbfJrdh8bOlg6trHSArt0kX-9wp/preview",
    date:"2025-06-26"
  },
  {
    id: 8,
    title: "CorelDRAW Logo Design",
    description: "This logo design project, created in CorelDRAW, reflects brand identity with professional use of blue and green tones. The design process focuses on simplicity, memorability, and versatility while showcasing creativity and conceptual thinking vital in building strong visual brands.",
    image: "https://drive.google.com/file/d/1XMwxIzCf-jhms-cXll3hNOeBMnXNBrNE/preview",
    date:"2025-06-26"
  },
  {
    id: 2,
    title: "CorelDRAW Logo Design",
    description: "A professional logo crafted using CorelDRAW to reflect innovation, clarity, and brand consistency. The use of colors, shapes, and typographic elements in this logo showcases thoughtful visual strategy and execution.",
    image: "https://drive.google.com/file/d/1Q52acYUW4VQlOJer6mfDFUgax0M0mXKW/preview",
    date:"2025-06-26"
  },
];

// Live Projects Data
const projectsLive = [
  {
    id: 11,
    title: "rk portfolio",
    description: "rk96x0 is a personal web space that reflects creativity, clean design, and modern development practices. It showcases a blend of professional identity and technical skill, built to leave a lasting impression. From sleek visuals to smooth interactions, it's designed to represent my digital presence with clarity and elegance.",
    image: "https://rk960.vercel.app",
    date:"2025-06-26"
  },
  {
    id: 8,
    title: "DigiMark",
    description: "DigiMark is a smart digital marketing tool I built to help users understand how well their website and social media are performing. It gives clear insights into important SEO metrics, website speed, and even social media engagement. Whether you're a marketer, freelancer, or small business owner, DigiMark helps you identify areas for improvement in your online presence. The design is simple and user-friendly, and it pulls relevant data through APIs to generate detailed reports. It's like having a personal assistant for your digital marketing analysis — always there to help you grow.",
    image: "https://rk960.github.io/digimark/",
    date:"2025-06-26"
  },
  {
    id: 2,
    title: "School Web Page",
    description: "This project is a responsive school website made using Next.js and styled-components. The design is clean and professional, made to reflect the values and structure of a modern educational institution. The homepage includes key sections for academics, upcoming events, faculty details, and a contact page. I focused on easy navigation and mobile responsiveness to ensure parents, students, and faculty can easily find the information they need. The goal was to create a site that’s functional, informative, and visually welcoming, whether someone is accessing it from a desktop or a phone.",
    image: "https://school-rho-neon.vercel.app/",
    date:"2025-06-26"
  },
  {
    id: 3,
    title: "Diecs Game",
    description: "Diecs is a fun, browser-based dice game I developed just for entertainment and practice. Players can roll the dice, earn points, and challenge themselves to beat their high score. I built this using JavaScript, HTML, and CSS, focusing on simplicity and interactivity. The game is lightweight and works smoothly in any modern browser. It’s a small but enjoyable project that combines logic, randomness, and UI animation — perfect for casual play or for showcasing frontend development in game design.",
    image: "https://rk960.github.io/DiecsGame/",
    date:"2025-06-26"
  },
  {
    id: 1,
    title: "Portfolio Website",
    description: "This portfolio website is a personal space created using Next.js and styled-components, where I showcase my development work, skills, resume, and contact details. It’s clean, responsive, and fast-loading — designed to give visitors a clear and engaging overview of my capabilities. The goal was to create a professional first impression while also making it easy for someone to browse through my projects and get in touch. I’ve kept the UI modern and minimal, with smooth navigation and clear sectioning for everything from project showcases to my professional journey. Whether viewed on a desktop or mobile device, the layout adapts beautifully.",
    image: "https://rk960.github.io/itsme/",
    date:"2025-06-26"
  },
  {
    id: 5,
    title: "Image Search Tool",
    description: "This image search tool allows users to quickly find images based on their search terms. I created it using HTML, CSS, JavaScript, and integrated it with an image API for real-time search results. The interface is clean and intuitive — you type in a keyword, and it fetches relevant images in a grid layout. It’s a great example of working with APIs, handling asynchronous requests, and creating a user-friendly frontend that focuses on performance and visual feedback. Ideal for learning how modern search tools work.",
    image: "https://rk960.github.io/imgsearch/",
    date:"2025-06-26"
  },
  {
    id: 7,
    title: "Books Manager",
    description: "Books Manager is a simple, browser-based app I made to help users manage their personal book collection. You can add new books, edit details like title and author, and even delete entries you no longer want. It’s designed for simplicity and ease of use, with a straightforward interface that keeps everything organized. This project highlights my ability to build CRUD (Create, Read, Update, Delete) applications, manage state, and offer users a productive and smooth experience even in small-scale tools.",
    image: "https://rk960.github.io/booksmanager/",
    date:"2025-06-26"
  },
  {
    id: 10,
    title: "Projects",
    description: "This is a hub where I’ve gathered multiple small projects I’ve built — from calculators to fun tools and experiments. Each one is designed to demonstrate a particular concept or skill, whether it’s handling user input, working with logic, or creating polished UIs. It's a great place for visitors to explore my range of work and see how I approach different types of problems in web development. The interface is neat and simple, making it easy to browse through everything in one place.",
    image: "https://rk960.github.io/projects/",
    date:"2025-06-26"
  },
  {
    id: 4,
    title: "Notes Management System",
    description: "This Notes Management System is a lightweight app built to help users write, edit, and organize their notes easily. Whether it’s a quick to-do list or long-form notes, users can create entries with just a few clicks. I focused on creating a distraction-free interface, clean structure, and fast interactions. It’s a great demonstration of working with user-generated content and storing it locally in the browser. Simple, functional, and ideal for productivity-focused users.",
    image: "https://rk960.github.io/userListProject/",
    date:"2025-06-26"
  },
  {
    id: 9,
    title: "My Report",
    description: "My Report is another personal portfolio variant I created to highlight my journey as a web designer and frontend developer. It includes a resume section, skill matrix, project highlights, and a personal story. The idea was to make something more visually narrative-driven, offering not just a list of skills but context behind each one. It’s styled with clarity and modern design principles, providing a unique way to introduce myself beyond a standard resume.",
    image: "https://rk960.github.io/myreport/",
    date:"2025-06-26"
  },
  {
    id: 6,
    title: "Weather App",
    description: "The Weather App is a simple but useful tool that gives real-time weather updates based on the user’s location or searched city. I used a weather API to fetch data and designed a clean UI that shows temperature, condition, humidity, and more. It’s responsive and works well on all devices. This project shows my ability to integrate third-party APIs and build functional, real-world applications with a clear user experience.",
    image: "https://rk960.github.io/weatherApps/",
    date:"2025-06-26"
  }
];


// Education Data
const education = [
  {
    year: "2017 - 2021",
    degree: "Bachelor of Arts (Programme)",
    institution: "Delhi University",
    description: "B.A Programme",
    grade: "1st Division",
    models: "./imgs/pic01.png"
  },
  {
    year: "2018 - 2019",
    degree: "Diploma in Computer Application",
    institution: "RIIT INFOTECH PVT. LTD.",
    description: "Computer Application",
    grade: "A Grade",
    models: "./imgs/pic02.png"
  },
  {
    year: "2017 - 2018",
    degree: "Senior Secondary School (12th)",
    institution: "G.S.B.V. D-Block Janak Puri",
    description: "Arts with Eco",
    grade: "74%",
    models: "./imgs/pic01.png"
  },
  {
    year: "2015 - 2016",
    degree: "Secondary School (10th)",
    institution: "G.S.B.V. D-Block Janak Puri",
    description: "General Studies",
    grade: "6.6 CGPE",
    models: "./imgs/pic02.png"
  }
];

export { servicesData, projects, projectsLive, education };
