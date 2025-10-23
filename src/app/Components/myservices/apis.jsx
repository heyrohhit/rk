import { FaLaptopCode, FaBullhorn, FaChartLine, FaDatabase, FaEnvelopeOpenText, FaFileExcel } from "react-icons/fa";
import { FaGoogle, FaPaintBrush, FaServer } from 'react-icons/fa';

// API Object Data for services with expanded 250-word descriptions


const servicesData = [
  // {
  //   id: 1,
  //   icon: <FaLaptopCode />,
  //   title: "Web Design",
  //   desc: "Learn how to design modern, responsive websites with a focus on user experience and visual appeal. This course introduces students to layout design, color theory, typography, and mobile-first principles using HTML5, CSS3, and design tools like Figma. Ideal for beginners looking to build a strong foundation in front-end design.",
  //   link: "https://wa.me/918700750589",
  // },
  {
    id: 2,
    icon: <FaDatabase />,
    title: "Web Development",
    desc: "Dive into full-stack web development with hands-on projects that teach you how to build dynamic websites and applications. Learn technologies like JavaScript, React, Node.js, and databases. This course helps students understand both front-end and back-end concepts, perfect for aspiring developers.",
    link: "https://wa.me/918700750589",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Social Media Marketing",
    desc: "Understand how social media platforms work and how to use them for brand building and engagement. Learn how to create content, analyze audience behavior, and run basic campaigns on platforms like Instagram, Facebook, and LinkedIn. Ideal for students interested in digital branding and content strategy.",
    link: "https://wa.me/918700750589",
  },
  // {
  //   id: 4,
  //   icon: <FaBullhorn />,
  //   title: "Facebook & Google Ads",
  //   desc: "Learn the basics of online advertising through Facebook and Google platforms. This course helps students understand ad targeting, budgeting, keyword strategy, and performance analysis. A great starting point for anyone looking to explore digital advertising or pursue a marketing career.",
  //   link: "https://wa.me/918700750589",
  // },
  {
    id: 5,
    icon: <FaGoogle />,
    title: "Digital Marketing",
    desc: "Explore the core areas of digital marketing including SEO, content marketing, PPC, email marketing, and analytics. This course helps students build strategic thinking and practical skills to grow any online presence. Perfect for those aiming to work in marketing or run their own projects.",
    link: "https://wa.me/918700750589",
  },
  // {
  //   id: 6,
  //   icon: <FaPaintBrush />,
  //   title: "UI/UX Design",
  //   desc: "Learn how to create intuitive and attractive user interfaces for websites and apps. This course covers user research, wireframing, prototyping, and interface design using tools like Adobe XD and Figma. Designed for students who want to understand how design impacts user behavior.",
  //   link: "https://wa.me/918700750589",
  // },
  // {
  //   id: 7,
  //   icon: <FaServer />,
  //   title: "SMM Servers",
  //   desc: "Understand the technical side of social media marketing by learning how SMM (Social Media Marketing) servers work. Students will explore automation tools, data management, and multi-platform scheduling used in large-scale digital campaigns. Great for those interested in marketing tech and systems.",
  //   link: "https://wa.me/918700750589",
  // },
  {
    id: 8,
    icon: <FaFileExcel />,
    title: "Excel Data Management",
    desc: "Master the use of Microsoft Excel for organizing and analyzing data. Learn about formulas, pivot tables, charts, and macros to improve productivity and decision-making. Ideal for students in business, finance, or data-related fields.",
    link: "https://wa.me/918700750589",
  },
  {
    id: 9,
    icon: <FaEnvelopeOpenText />,
    title: "Email Scraping & Marketing",
    desc: "Learn how email marketing works from the ground up, including how to ethically collect email data and create personalized campaigns. Discover tools for automation, design, and analytics to build effective communication strategies. Useful for students interested in outreach, lead generation, or digital marketing.",
    link: "https://wa.me/918700750589",
  },
];


export default servicesData;


// Projects (Design) Data
const projects = [
  {
    id:11,
    title:"Photoshop Poster Design Demo",
    description:"Creative Photoshop poster with modern layout, colors, and typography for branding impact.",
    image:"https://drive.google.com/thumbnail?id=17Dy938TR5rHOlqAqlSLhajzspYfHu5wd",
    date:"2025-05-13"
  },
  {
    id:10,
    title:"Photoshop Poster Design Demo",
    description:"A vibrant poster demo highlighting design balance, contrast, and effective visual messaging.",
    image:"https://drive.google.com/thumbnail?id=17RyFNZ32vsxxKVWuWQPeOxSJFDXDHcFD",
    date:"2025-06-26"
  },
  {
    id:1,
    title:"Photoshop Poster Design Demo",
    description:"Poster demo showcasing Photoshop skills in layout, typography, and modern visual effects.",
    image:"https://drive.google.com/thumbnail?id=1z7ByWfvyTNT2TMAzyTdLi4eCeAVRPDn0",
    date:"2022-08-06"
  },
  {
    id:3,
    title:"Photoshop Poster Design Demo",
    description:"Clean poster demo with color harmony, effects, and modern design for ads and promotions.",
    image:"https://drive.google.com/thumbnail?id=1ANWjpI-hjgAr359mQsFs4PGGU4gp4I_2",
    date:"2022-08-06"
  },
  {
    id:5,
    title:"Photoshop Poster Design Demo",
    description:"Poster project exploring storytelling with Photoshop using creative colors and composition.",
    image:"https://drive.google.com/thumbnail?id=1bJfgrzG33_BBhBXAGqLkekAJhFpQSCb-",
    date:"2023-02-26"
  },
  {
    id:7,
    title:"Photoshop Poster Design Demo",
    description:"Creative poster featuring impactful typography and illustrations for strong brand presence.",
    image:"https://drive.google.com/thumbnail?id=1r2M33BbfJrdh8bOlg6trHSArt0kX-9wp",
    date:"2024-06-26"
  },
];


// //Lpgo Prohect 
// const logo = [
//   // {
//   //   id:12,
//   //   title:"Logo Design",
//   //   description:"CorelDRAW logo design with blue-green tones, focusing on brand identity and simplicity.",
//   //   image:"https://drive.google.com/thumbnail?id=17CekstJ81Nd2hU2tgWVdlI4-7oMYkeeC",
//   //   date:"2025-02-26"
//   // },
//   {
//     id:9,
//     title:"CorelDRAW Logo Design",
//     description:"Modern CorelDRAW logo using clean shapes and colors to represent clarity and identity.",
//     image:"https://drive.google.com/thumbnail?id=1fBdTJQu22FRObe8tB3aNr7e29VtusPPi",
//     date:"2024-06-26"
//   },
//   {
//     id:8,
//     title:"CorelDRAW Logo Design",
//     description:"Professional CorelDRAW logo with versatility, creativity, and strong visual appeal.",
//     image:"https://drive.google.com/thumbnail?id=1XMwxIzCf-jhms-cXll3hNOeBMnXNBrNE",
//     date:"2024-10-16"
//   },
//   {
//     id:2,
//     title:"CorelDRAW Logo Design",
//     description:"Logo crafted in CorelDRAW reflecting innovation, brand consistency, and clarity.",
//     image:"https://drive.google.com/thumbnail?id=1Q52acYUW4VQlOJer6mfDFUgax0M0mXKW",
//     date:"2025-02-26"
//   },
// ];

// Live Projects Data
const projectsLive = [
  {
    id:8,
    title:"DigiMark",
    description:"Digital marketing tool for SEO, speed, and engagement analysis with user-friendly design.",
    image:"https://heyrohhit.github.io/digimark/",
    date:"2024-06-04"
  },
  {
    id:2,
    title:"School Web Page",
    description:"Responsive Next.js school site with academics, events, faculty, and contact sections.",
    image:"https://school-rho-neon.vercel.app/",
    date:"2025-04-01"
  },
  {
    id:11,
    title:"rk portfolio",
    description:"Personal portfolio reflecting creativity, modern design, and professional identity.",
    image:"https://rk960.vercel.app",
    date:"2025-03-04"
  },
  {
    id:3,
    title:"Diecs Game",
    description:"A fun dice game built with HTML, CSS, JS featuring scoring, randomness, and interactivity.",
    image:"https://heyrohhit.github.io/DiecsGame/",
    date:"2023-08-01"
  },
  {
    id:1,
    title:"Portfolio Website",
    description:"Next.js portfolio with projects, resume, and contact; modern, responsive, and clean UI.",
    image:"https://heyrohhit.github.io/itsme/",
    date:"2023-05-07"
  },
  {
    id:5,
    title:"Image Search Tool",
    description:"Real-time image search app with API integration, responsive design, and clean UI.",
    image:"https://heyrohhit.github.io/imgsearch/",
    date:"2023-06-08"
  },
  {
    id:7,
    title:"Books Manager",
    description:"Simple CRUD web app to manage books, with add, edit, and delete functionality.",
    image:"https://heyrohhit.github.io/booksmanager/",
    date:"2023-06-30"
  },
  {
    id:10,
    title:"Projects",
    description:"Hub of small projects including tools, calculators, and experiments for learning.",
    image:"https://heyrohhit.github.io/projects/",
    date:"2023-05-28"
  },
  {
    id:4,
    title:"Notes Management System",
    description:"Lightweight note app for creating, editing, and managing personal notes easily.",
    image:"https://heyrohhit.github.io/userListProject/",
    date:"2024-02-20"
  },
  {
    id:9,
    title:"My Report",
    description:"Portfolio variant with resume, skills, and narrative design for personal branding.",
    image:"https://heyrohhit.github.io/myreport/",
    date:"2022-03-07"
  },
  {
    id:6,
    title:"Weather App",
    description:"Real-time weather app using API to show temperature, conditions, and humidity.",
    image:"https://heyrohhit.github.io/weatherApps/",
    date:"2023-06-30"
  },
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
