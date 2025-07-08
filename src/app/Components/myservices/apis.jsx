import { FaLaptopCode, FaBullhorn, FaChartLine, FaDatabase, FaEnvelopeOpenText, FaFileExcel } from "react-icons/fa";
import { FaGoogle, FaPaintBrush, FaServer } from 'react-icons/fa';

// API Object Data for services with expanded 250-word descriptions


const servicesData = [
  {
    id: 1,
    icon: <FaLaptopCode />,
    title: "Web Design",
    desc: "Transform your online presence with our cutting-edge Web Design service. Your website is your digital storefront—make it unforgettable with stunning visuals, intuitive navigation, and seamless user experiences. Our expert designers craft responsive, aesthetically pleasing websites tailored to your brand’s identity, ensuring they captivate visitors and drive conversions. From sleek landing pages to comprehensive e-commerce platforms, we blend creativity with functionality to deliver pixel-perfect designs optimized for all devices. Using the latest technologies like HTML5, CSS3, and modern frameworks, we ensure fast load times, accessibility, and SEO readiness. Our collaborative approach involves understanding your business goals to create a website that not only looks exceptional but also aligns with your marketing strategy. Whether you're a startup or an established enterprise, we empower you to stand out in a crowded digital landscape with a website that reflects your vision and engages your audience effectively. Let us help you make a lasting first impression that converts visitors into loyal customers. Contact us today to elevate your brand’s online identity!",
    link: "https://wa.me/918700750589",
  },
  {
    id: 2,
    icon: <FaDatabase />,
    title: "Web Development",
    desc: "Bring your digital vision to life with our robust Web Development solutions. We build high-performance, scalable websites and applications tailored to your unique business needs. Our developers leverage cutting-edge technologies like React, Next.js, and Node.js to create secure, fast, and dynamic platforms that drive results. From custom CMS to complex e-commerce systems, we ensure seamless functionality, cross-browser compatibility, and mobile responsiveness. Our process begins with a deep dive into your goals, followed by meticulous coding and rigorous testing to deliver flawless performance. We prioritize clean code, robust security, and SEO optimization to enhance user experience and search engine rankings. Whether you need a corporate website, a web app, or an API-driven platform, our solutions are built to scale with your business. With a focus on user-centric design and backend efficiency, we empower you to engage customers and streamline operations. Let us turn your ideas into a powerful digital reality—connect with us today!",
    link: "https://wa.me/918700750589",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Social Media Marketing",
    desc: "Amplify your brand’s reach with our dynamic Social Media Marketing (SMM) services. In today’s digital age, platforms like Facebook, Instagram, Twitter, and LinkedIn are more than just social spaces—they’re powerful tools for building connections and driving growth. Our expert team crafts tailored SMM strategies to boost engagement, increase followers, and convert audiences into loyal customers. We create compelling content, including eye-catching visuals, engaging videos, and strategic posts, designed to resonate with your target demographic. By leveraging data-driven insights, we optimize campaigns for maximum ROI, ensuring every post aligns with your brand’s voice and goals. From community management to influencer collaborations, we handle it all to elevate your online presence. Our advanced analytics track performance, allowing us to refine strategies in real-time for better results. Whether you’re launching a new product or growing your brand, our SMM expertise ensures you stand out in a crowded digital space. Let’s ignite your social media success—contact us today!",
    link: "https://wa.me/918700750589",
  },
  {
    id: 4,
    icon: <FaBullhorn />,
    title: "Facebook & Google Ads",
    desc: "Supercharge your growth with our expertly crafted Facebook & Google Ads campaigns. Reach your ideal audience with precision through targeted ads that drive clicks, conversions, and revenue. Our team designs high-impact ad creatives and leverages advanced targeting tools to ensure your message reaches the right people at the right time. On Facebook, we create engaging ads tailored to demographics, interests, and behaviors, maximizing engagement and leads. For Google Ads, we optimize search, display, and shopping campaigns to boost visibility and drive traffic to your website. Our data-driven approach includes keyword research, A/B testing, and performance tracking to deliver measurable results. We focus on cost-effective strategies to maximize your ad spend, whether you’re aiming for brand awareness or sales. From campaign setup to ongoing optimization, we handle every detail to ensure your ads perform at their peak. Ready to dominate the digital advertising space? Connect with us today to launch campaigns that deliver!",
    link: "https://wa.me/918700750589",
  },
  {
    id: 5,
    icon: <FaGoogle />,
    title: "Digital Marketing",
    desc: "Unleash your brand’s potential with our comprehensive Digital Marketing services. We craft holistic strategies that blend SEO, content marketing, PPC, and social media to drive traffic, engagement, and conversions. Our team starts by understanding your business goals, then designs customized campaigns to reach your target audience across digital channels. From optimizing your website for search engines to creating compelling content that resonates, we ensure every touchpoint builds your brand’s authority. Our PPC expertise delivers targeted ads that maximize ROI, while our email marketing campaigns nurture leads into loyal customers. With advanced analytics, we track performance and refine strategies to keep you ahead of the competition. Whether you’re a small business or a global brand, our innovative solutions are designed to scale your online presence and deliver measurable results. Let’s take your digital strategy to the next level—contact us now!",
    link: "https://wa.me/918700750589",
  },
  {
    id: 6,
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Create unforgettable user experiences with our top-tier UI/UX Design services. We design intuitive, visually stunning interfaces that captivate users and drive engagement. Our process begins with in-depth user research to understand your audience’s needs, followed by wireframing, prototyping, and pixel-perfect design. We blend aesthetics with functionality to create seamless experiences across websites, apps, and digital products. Our designs are responsive, accessible, and optimized for performance, ensuring users stay engaged on any device. Using tools like Figma and Adobe XD, we craft interfaces that align with your brand and business goals. From e-commerce platforms to mobile apps, our UI/UX solutions enhance user satisfaction and boost conversions. We also conduct usability testing to refine designs for maximum impact. Elevate your digital products with designs that users love—reach out today to get started!",
    link: "https://wa.me/918700750589",
  },
  {
    id: 7,
    icon: <FaServer />,
    title: "SMM Servers",
    desc: "Power up your social media strategy with our cutting-edge SMM Servers. Our robust server solutions are designed to supercharge your social media marketing campaigns, ensuring seamless performance and scalability. We provide high-speed, secure servers optimized for managing large-scale social media tasks, from automated posting to real-time analytics. Our servers support multi-platform integration, allowing you to manage campaigns across Facebook, Instagram, Twitter, and more from a single dashboard. With advanced features like load balancing and uptime guarantees, we ensure your campaigns run smoothly, even during peak traffic. Our team customizes server setups to meet your specific needs, whether you’re handling thousands of posts or analyzing massive datasets. Security is paramount—our servers are fortified with encryption and regular backups to protect your data. Scale your SMM efforts effortlessly and stay ahead of the competition with our reliable server solutions. Contact us today to boost your social media performance!",
    link: "https://wa.me/918700750589",
  },
  {
    id: 8,
    icon: <FaFileExcel />,
    title: "Excel Data Management",
    desc: "Master your data with our advanced Excel Data Management services. In today’s fast-paced, data-driven world, efficient information management is the backbone of business success. Our experts transform complex datasets into actionable insights using powerful Excel tools and automation. From data cleaning and organization to advanced formulas, pivot tables, and macros, we streamline your workflows to save time and boost productivity. We create custom dashboards and reports tailored to your business needs, enabling smarter decision-making. Whether you’re managing sales data, customer records, or financial metrics, our solutions ensure accuracy and efficiency. We also provide training and support to empower your team to leverage Excel’s full potential. Our secure, scalable processes handle large datasets with ease, ensuring your data is always ready for analysis. Take control of your data and unlock its full potential—connect with us today!",
    link: "https://wa.me/918700750589",
  },
  {
    id: 9,
    icon: <FaEnvelopeOpenText />,
    title: "Email Scraping & Marketing",
    desc: "Revolutionize your outreach with our Email Scraping & Marketing services. We deliver targeted, high-quality email lists to fuel your marketing campaigns, ensuring you connect with the right audience. Our ethical scraping techniques gather accurate, relevant email data while complying with regulations. Paired with our email marketing expertise, we craft personalized campaigns that drive engagement and conversions. From compelling subject lines to responsive email templates, we design messages that resonate with your audience. Our team uses advanced segmentation and automation to deliver emails at the perfect time, maximizing open rates and ROI. We also provide detailed analytics to track performance and refine strategies. Whether you’re nurturing leads or promoting products, our end-to-end solutions make email marketing effortless and effective. Boost your outreach with precision—contact us today to get started!",
    link: "https://wa.me/918700750589",
  },
];

export default servicesData;


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
    date:"025-03-04"
  },
  {
    id: 8,
    title: "DigiMark",
    description: "DigiMark is a smart digital marketing tool I built to help users understand how well their website and social media are performing. It gives clear insights into important SEO metrics, website speed, and even social media engagement. Whether you're a marketer, freelancer, or small business owner, DigiMark helps you identify areas for improvement in your online presence. The design is simple and user-friendly, and it pulls relevant data through APIs to generate detailed reports. It's like having a personal assistant for your digital marketing analysis — always there to help you grow.",
    image: "https://rk960.github.io/digimark/",
    date:"2024-06-04"
  },
  {
    id: 2,
    title: "School Web Page",
    description: "This project is a responsive school website made using Next.js and styled-components. The design is clean and professional, made to reflect the values and structure of a modern educational institution. The homepage includes key sections for academics, upcoming events, faculty details, and a contact page. I focused on easy navigation and mobile responsiveness to ensure parents, students, and faculty can easily find the information they need. The goal was to create a site that’s functional, informative, and visually welcoming, whether someone is accessing it from a desktop or a phone.",
    image: "https://school-rho-neon.vercel.app/",
    date:"2025-04-01"
  },
  {
    id: 3,
    title: "Diecs Game",
    description: "Diecs is a fun, browser-based dice game I developed just for entertainment and practice. Players can roll the dice, earn points, and challenge themselves to beat their high score. I built this using JavaScript, HTML, and CSS, focusing on simplicity and interactivity. The game is lightweight and works smoothly in any modern browser. It’s a small but enjoyable project that combines logic, randomness, and UI animation — perfect for casual play or for showcasing frontend development in game design.",
    image: "https://rk960.github.io/DiecsGame/",
    date:"2023-08-01"
  },
  {
    id: 1,
    title: "Portfolio Website",
    description: "This portfolio website is a personal space created using Next.js and styled-components, where I showcase my development work, skills, resume, and contact details. It’s clean, responsive, and fast-loading — designed to give visitors a clear and engaging overview of my capabilities. The goal was to create a professional first impression while also making it easy for someone to browse through my projects and get in touch. I’ve kept the UI modern and minimal, with smooth navigation and clear sectioning for everything from project showcases to my professional journey. Whether viewed on a desktop or mobile device, the layout adapts beautifully.",
    image: "https://rk960.github.io/itsme/",
    date:"2023-05-07"
  },
  {
    id: 5,
    title: "Image Search Tool",
    description: "This image search tool allows users to quickly find images based on their search terms. I created it using HTML, CSS, JavaScript, and integrated it with an image API for real-time search results. The interface is clean and intuitive — you type in a keyword, and it fetches relevant images in a grid layout. It’s a great example of working with APIs, handling asynchronous requests, and creating a user-friendly frontend that focuses on performance and visual feedback. Ideal for learning how modern search tools work.",
    image: "https://rk960.github.io/imgsearch/",
    date:"2023-06-08"
  },
  {
    id: 7,
    title: "Books Manager",
    description: "Books Manager is a simple, browser-based app I made to help users manage their personal book collection. You can add new books, edit details like title and author, and even delete entries you no longer want. It’s designed for simplicity and ease of use, with a straightforward interface that keeps everything organized. This project highlights my ability to build CRUD (Create, Read, Update, Delete) applications, manage state, and offer users a productive and smooth experience even in small-scale tools.",
    image: "https://rk960.github.io/booksmanager/",
    date:"2023-06-30"
  },
  {
    id: 10,
    title: "Projects",
    description: "This is a hub where I’ve gathered multiple small projects I’ve built — from calculators to fun tools and experiments. Each one is designed to demonstrate a particular concept or skill, whether it’s handling user input, working with logic, or creating polished UIs. It's a great place for visitors to explore my range of work and see how I approach different types of problems in web development. The interface is neat and simple, making it easy to browse through everything in one place.",
    image: "https://rk960.github.io/projects/",
    date:"2023-05-28"
  },
  {
    id: 4,
    title: "Notes Management System",
    description: "This Notes Management System is a lightweight app built to help users write, edit, and organize their notes easily. Whether it’s a quick to-do list or long-form notes, users can create entries with just a few clicks. I focused on creating a distraction-free interface, clean structure, and fast interactions. It’s a great demonstration of working with user-generated content and storing it locally in the browser. Simple, functional, and ideal for productivity-focused users.",
    image: "https://rk960.github.io/userListProject/",
    date:"2024-02-20"
  },
  {
    id: 9,
    title: "My Report",
    description: "My Report is another personal portfolio variant I created to highlight my journey as a web designer and frontend developer. It includes a resume section, skill matrix, project highlights, and a personal story. The idea was to make something more visually narrative-driven, offering not just a list of skills but context behind each one. It’s styled with clarity and modern design principles, providing a unique way to introduce myself beyond a standard resume.",
    image: "https://rk960.github.io/myreport/",
    date:"2022-03-07"
  },
  {
    id: 6,
    title: "Weather App",
    description: "The Weather App is a simple but useful tool that gives real-time weather updates based on the user’s location or searched city. I used a weather API to fetch data and designed a clean UI that shows temperature, condition, humidity, and more. It’s responsive and works well on all devices. This project shows my ability to integrate third-party APIs and build functional, real-world applications with a clear user experience.",
    image: "https://rk960.github.io/weatherApps/",
    date:"2023-06-30"
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
