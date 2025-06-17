import { FaLaptopCode, FaBullhorn, FaChartLine, FaDatabase, FaEnvelopeOpenText, FaFileExcel } from "react-icons/fa";

//API  Object Data for services
const servicesData = [
    { 
      id:6,
      icon: <FaFileExcel />, title: "Excel Data Management", desc: "Optimize your workflow with structured, automated Excel data solutions!", link: "https://wa.me/918700750589",
      showCase:"excelDataManagement"
  
     },
     { 
      id:5,
      icon: <FaEnvelopeOpenText />, title: "E-mail Scraping", desc: "Unlock potential leads with precision-targeted email data extraction!", link: "https://wa.me/918700750589",
      showCase:"emailScraping"
  
     },
     { 
      id:3,
      icon: <FaChartLine />, title: "Facebook & Instagram Management", desc: "Dominate social media with engaging content and strategic growth management!", link: "https://wa.me/918700750589",
      showCase:"fb Management"
     },
     { 
      id:2,
      icon: <FaBullhorn />, title: "Social Media Ads Campaigns", desc: "Maximize your reach with powerful, data-driven social media ad strategies!", link: "https://wa.me/918700750589",
    showCase:"socialMediaAdsCampaigns"
     },
   
    { 
      id:1,
      icon: <FaLaptopCode />, title: "Web Design", desc: "Stand out online with stunning, high-converting web designs tailored for success!", link: "https://wa.me/918700750589",
    showCase:"webDesign"
     },
  
    { 
      id:4,
      icon: <FaDatabase />, title: "Web Development", desc: "Transform ideas into high-performance, feature-rich web applications!", link: "https://wa.me/918700750589",
      showCase:"webDevelopment"
     },

  ]

  // API Object Data for projects
  const projects = [
    {
      id: 1,
      title: "Photoshop Poster Design Demo",
      description: "Creative Photoshop poster design demo showcasing modern graphics and vibrant colors for marketing.",
      image: "https://drive.google.com/file/d/1z7ByWfvyTNT2TMAzyTdLi4eCeAVRPDn0/preview",
    },
    {
      id: 3,
      title: "Photoshop Poster Design Demo",
      description: "Creative Photoshop poster design demo showcasing modern graphics and vibrant colors for marketing.",
      image: "https://drive.google.com/file/d/1ANWjpI-hjgAr359mQsFs4PGGU4gp4I_2/preview",
    },
    {
      id: 5,
      title: "Photoshop Poster Design Demo",
      description: "Creative Photoshop poster design demo showcasing modern graphics and vibrant colors for marketing.",
      image: "https://drive.google.com/file/d/1bJfgrzG33_BBhBXAGqLkekAJhFpQSCb-/preview"
  },
  {
      id: 7,
      title: "Photoshop Poster Design Demo",
      description: "Creative Photoshop poster design demo showcasing modern graphics and vibrant colors for marketing.",
      image: "https://drive.google.com/file/d/1r2M33BbfJrdh8bOlg6trHSArt0kX-9wp/preview"
  },
    {
      id: 8,
      title: "CorelDRAW Logo Design",
      description: "Professional logo created in CorelDRAW using blue and green colors, reflecting creativity and innovation.",
      image: "https://drive.google.com/file/d/1XMwxIzCf-jhms-cXll3hNOeBMnXNBrNE/preview"
  }
  ,
    {
      id: 2,
      title: "CorelDRAW Logo Design",
      description: "Professional logo created in CorelDRAW using blue and green colors, reflecting creativity and innovation.",
      image: "https://drive.google.com/file/d/1Q52acYUW4VQlOJer6mfDFUgax0M0mXKW/preview",
    },
  ];

  // API Object Data for projectsLive
const projectsLive = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and styled-components.",
      image: "https://rk960.github.io/itsme/",
    },
    {
      "id": 8,
      "title": "DigiMark",
      "description": "DigiMark is a digital marketing tool designed to help users analyze and optimize their online presence. It offers insights into website performance, SEO metrics, and social media engagement.",
      "image": "https://rk960.github.io/digimark/"
  }
  ,
    {
      id: 2,
      title: "School Web Page",
      description: "A modern school website built with nextjs and styled-components.",
      image: "https://school-rho-neon.vercel.app/",
    },
    {
      id: 3,
      title: "Diecs Game",
      description: "Diecs is a dice-based game by Rohit Kumar Singh. Roll the dice, score points, and aim for the highest score! Play here",
      image: "https://rk960.github.io/DiecsGame/",
    },
    {
      "id": 5,
      "title": "Image Search Tool",
      "description": "An image search tool by Rohit Kumar Singh that allows users to search for images based on their queries.",
      "image": "https://rk960.github.io/imgsearch/"
  },
  {
      "id": 7,
      "title": "Books Manager",
      "description": "A web-based application designed to help users manage their book collections efficiently, allowing for easy addition, editing, and organization of book details.",
      "image": "https://rk960.github.io/booksmanager/"
  },
  {
      "id": 10,
      "title": "Projects",
      "description": "A collection of projects developed by Rohit Kumar Singh, showcasing various applications and tools, including a calculator with basic arithmetic functions.",
      "image": "https://rk960.github.io/projects/"
  }
  ,
    {
      "id": 4,
      "title": "Notes Management System",
      "description": "A system designed to help users manage their notes efficiently, allowing for easy creation, editing, and organization of notes.",
      "image": "https://rk960.github.io/userListProject/"
  },
  {
      "id": 9,
      "title": "My Report",
      "description": "A personal portfolio website showcasing the skills, resume, and projects of Rohit Kumar Singh, a web designer and front-end developer.",
      "image": "https://rk960.github.io/myreport/"
  }
  ,
    {
      id: 6,
      title: "Weather App",
      description: "This is a weather app that provides users with real-time weather updates. It has a simple interface for easy location-based weather checks.",
      image: "https://rk960.github.io/weatherApps/"
  },
  
  
  ];

   // console.log(randomNumber(),"about imge")
   const randomNumber = () =>{
    return Math.floor(Math.random() * 2) + 1
}
//API Object Data for education
      const education = [
          {
            year: "2017 - 2021",
            degree: "Bachelor of Arts (Programme)",
            institution: "Delhi University",
            description: "B.A Programme",
            grade: "1st Division",
            models: `./imgs/pic0${randomNumber()}.png`
          },
          {
              year: "2018 - 2019",
              degree: "Diploma in Computer Application",
              institution: "RIIT INFOTECH PVT. LTD.",
              description: "Computer Application",
              grade: "A Grade",
              models: `./imgs/pic0${randomNumber()}.png`
            },
          {
            year: "2017 - 2018",
            degree: "Senior Secondary School (12th)",
            institution: "G.S.B.V. D-Block Janak Puri",
            description: "Arts with Eco",
            grade: "74%",
            models: `./imgs/pic0${randomNumber()}.png`
          },
          {
            year: "2015 - 2016",
            degree: "Secondary School (10th)",
            institution: "G.S.B.V. D-Block Janak Puri",
            description: "General Studies",
            grade: "6.6 CGPE",
            models: `./imgs/pic0${randomNumber()}.png`
          },
         
        ]
        
  export {servicesData,projects,projectsLive,education}