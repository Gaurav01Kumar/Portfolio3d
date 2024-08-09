import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    
    
    tesla,
    shopify,
    medical,
    amazon,
    portfolio,
    threejs,
    shoptop,
    freelance,
    yaadgarpal,
    aisummary,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title:"Full Stack Developer",
      icon:backend
    },
    {
      title:"React Native Developer",
      icon:web
    },
    {
      title:"Php-Laravel Developer",
      icon:web
    }
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "Github",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Developer Engineer",
      company_name: "Infocartgroup",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2024 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "NonStandard Digital",
      icon: freelance,
      iconBg: "#E6DEDD",
      date: "March 2023 - June 2024",
      points: [
        "Developed and maintained backend APIs using Node.js and Spring Boot.",
        "Worked on multiple APIs simultaneously, ensuring that they were all working properly and meeting the requirements of the project.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shoptop",
      icon: shoptop,
      iconBg: "#383E56",
      date: "July 2022 - October 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
   
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
   
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Health Care",
      description:
        "Website was created with React, a cutting-edge and dependable JavaScript library that fast and dynamic web development, delivering high-quality performance and user facilitates engagement.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "Login auth",
          color: "pink-text-gradient",
        },
      ],
      image: medical,
      source_code_link: "https://github.com/Gaurav01Kumar/Mediplus",
    },
    {
      name: "Amazon Clone",
      description:
        "Web application  Clone of amazon e-commerce platform using reactjs making frontend ui.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: amazon,
      source_code_link: "https://github.com/Gaurav01Kumar/Amazon-Clone-React",
    },
    
    {
      name: "Personal portfolio",
      description:
        " The objective of this project is to develop a portfolio website using ReactJS that showcases my skills and experience as a software engineer",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Gaurav01Kumar/Portfolio3d",
    },
    {
      name: "yaadgarpal.com",
      description:
        " Developed an event booking application using React,Tailwindcss , Node.js, Mongodb and Express.js . Implemented hotel registration ,secure pre-payment via Razorpay and comprehensive dashboard for seller and admin",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Rest Api",
          color: "pink-text-gradient",
                  },
        {
          name: "MongoDb",
          color: "pink-text-gradient",
        },
      ],
      image: yaadgarpal,
      source_code_link: "yaadgarpal.com",
    },
    {
      name: "Exam-Question-Creator-and-Checker",
      description:
        " Developed an Ai Based Exam Question paper creation and checkor i use google vission api and chagpt api for implement features of question creation and checking",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Rest Api",
          color: "pink-text-gradient",
                  },
        {
          name: "Mysql",
          color: "pink-text-gradient",
        },
      ],
      image: "https://private-user-images.githubusercontent.com/97530398/344383669-929cf31d-fd95-470b-8c99-380ad495bdc6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMyMTY4MTAsIm5iZiI6MTcyMzIxNjUxMCwicGF0aCI6Ii85NzUzMDM5OC8zNDQzODM2NjktOTI5Y2YzMWQtZmQ5NS00NzBiLThjOTktMzgwYWQ0OTViZGM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA4MDklMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwODA5VDE1MTUxMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQwYzBjZTgwZThjZWYxMzBhYTg1MmQzZTIzOTRmZGVhYTAxZjNhZWIxODViMDQ5YTcyMjhhZjIzYTAwZTA1ZGYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5pcHxggCKklDotG62Xs0QyYkcKNMXGDQoeBD0ITBetQ",
      source_code_link: "https://github.com/Gaurav01Kumar/Exam-Question-Creator-and-Checker",
    },
    {
      name: "Exam-Question-Creator-and-Checker",
      description:
        " Developed an Ai Based Sass Application where i implement RapidApi for summary create logo and many more",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
        {
          name: "Rest Api",
          color: "pink-text-gradient",
                  },
      
      ],
      image: aisummary,
      source_code_link: "https://github.com/Gaurav01Kumar/AI-Webpage",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };