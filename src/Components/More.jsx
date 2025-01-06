import React from 'react';
import SIDCLUB from "../assert/SIDCLUB.png";
import Weather from '../assert/Weather.png';
import Retrorr from "../assert/retrorr.png";
import Cynthia from "../assert/Cynthia.png";
import IMDB from "../assert/imdb.png";
import track from "../assert/trrr.png";
import Task from "../assert/tasks.png";
import CHATS from "../assert/chit.png";
import Owl from "../assert/owl.png";
import Rayban from "../assert/Rayban.png";
import Quote from "../assert/quotes.png";
import Land from "../assert/Landing_Page.png";
import Bubble from "../assert/bubble.png";
import Das from "../assert/das.png";
import Back from "../assert/back.png";
import HMS from "../assert/hhm.png";
import Nike from "../assert/nike.png";
import MEDI from "../assert/MEDI.jpeg"
import AI from "../assert/AI.png"
import EL from "../assert/EL.png"
import HMSB from "../assert/HMSB.png"
import ELB from "../assert/ELB.png"
import ADV from "../assert/ADV.png"


const More = () => {
  const portfolios = [


    {
      id: 1,
      scr: MEDI,
      demo: "https://medi-sense-neon.vercel.app/screening-schedules",
      code : "https://github.com/Websterverse/mediSense" ,
      intro : "MEDISENSE"  ,
      tech : "MERN STACK , Gemini AI, Neon Dashboard, Privy. " , 
    desc : "The Medisense Project, built with advanced technologies, is an AI-powered platform designed for analyzing medical reports. It provides users with personalized treatment recommendations, AI-assisted cancer care planning, and comprehensive health insights. Featuring an intuitive dashboard and seamless functionality, the platform ensures easy access to critical medical data, enhancing user experience and improving healthcare understanding."
    },


    {
      id: 1,
      scr: EL,
      demo: "https://github.com/Websterverse/E-LEARNER-FRONTEND",
      code : "https://github.com/Websterverse/E-LEARNER-FRONTEND" ,
      intro : "E-LEARNER PLATFORM FRONTEND"  ,
      tech : "MERN STACK" , 
    desc : "The E-Learner Platform, built with the MERN stack, offers an innovative online learning experience. It features secure OTP-based login, course purchasing, video tutorials, and downloadable notes. With a user-friendly interface and dynamic functionality, it ensures seamless navigation and engaging interactions for students and administrators alike."
    },

    {
      id: 1,
      scr: HMS,
      demo: "https://people-care-fronted.onrender.com/",
      code: "https://github.com/Websterverse/PEOPLE_CARE_FRONTED",
      intro: "PEOPLE CARE  FRONTEND",
      tech: "MERN STACK",
      desc: "The Hospital Management System frontend, developed with React.js, provides an intuitive and efficient interface for managing hospital operations. It features dynamic data handling, responsive design, and user-friendly navigation, ensuring streamlined management of patient records, appointments, and staff information."
    },
    // Other portfolio items

    {
      id: 2,
      scr: Das,
      demo: "https://github.com/Websterverse/PEOPLE_CARE_DASHBOARD",
      code : "https://github.com/Websterverse/PEOPLE_CARE_DASHBOARD" ,
      intro : "PEOPLE CARE DASHBOARD"  ,
      tech : "REACTJS , CSS " , 
    desc : "The People Care Dashboard, developed with React.js, is a modern hospital management system. It features dynamic data visualization, seamless patient and staff management, and interactive elements, providing an intuitive interface that enhances operational efficiency and reflects a user-centric design."
    },
    
    {
      id: 2,
      scr: HMSB,
      demo: "https://github.com/Websterverse/PEOPLE_CARE_BACKEND",
      code : "https://github.com/Websterverse/PEOPLE_CARE_BACKEND" ,
      intro : "PEOPLE CARE BACKEND"  ,
      tech : "NODEJS , EXPRESSJS , MONGODB" , 
    desc : "The People Care Backend*, built with Node.js and Express.js, is a robust system designed to handle hospital operations efficiently. It features secure APIs, seamless database integration with MongoDB, and optimized functionality, ensuring reliable data management and smooth communication between the client and server."
    },


    {
      id: 2,
      scr: ELB,
      demo: "https://github.com/Websterverse/E-LEARNER-BACKEND",
      code : "https://github.com/Websterverse/E-LEARNER-BACKEND" ,
      intro : "E-LEARNER PLATFORM BACKEND"  ,
      tech : "NODEJS , EXPRESSJS , MONGODB" , 
    desc : "The E-Learner Platform Backend, developed with Node.js and Express.js, provides secure and scalable functionality. It features OTP-based authentication, seamless database integration with MongoDB, and optimized APIs, ensuring smooth course management and reliable user interactions."
    },
   

    {
      id: 2,
      scr: IMDB,
      demo: "https://k1ngk4rr-imdb.netlify.app/",
      code : "https://github.com/Websterverse/IMDB",
       intro : "IMDB CLONE" ,
       tech : "Reactjs , TailwindCss " , 
       desc : "A clone of IMDb created with React.js and Tailwind CSS, offering comprehensive information on latest and upcoming movies. This project features a responsive interface for users to explore movie details, showcasing frontend development skills" , 

  },


  {
    id: 2,
    scr: AI,
    demo: "https://kingly-words.onrender.com/",
    code : "https://github.com/Websterverse/CHAT-BOT" ,
    intro : "KINGLYWORDS : AI CHAT BOT"  ,
    tech : "REACTJS , GEMINI AI , TAILWIND CSS" , 
  desc : "The KinglyWords AI Chatbot, built with Gemini AI, React.js, and Tailwind CSS, delivers intelligent conversational experiences. It features dynamic response generation, modern design, and interactive elements, ensuring seamless and engaging user interactions."
  },

  {
    id: 2,
    scr: Owl,
    code: "https://github.com/Websterverse/OCHI_CLONE",
    demo : "https://cloneofochi.netlify.app/" ,
    intro : "OCHI WEBSITE"  ,
    tech : "Reactjs , Gsap , Locomotivejs" , 
  
    desc : "The Ochi website clone, built with React.js, GSAP, and Locomotive Scroll, features next-level animations. This project offers a seamless user experience with advanced scrolling effects, smooth transitions, and dynamic content, replicating the original site's. "
},




{
  id: 2,
  scr: Task,
  demo: "https://github.com/Websterverse/TASK-MANAGER",
  code : "https://github.com/Websterverse/TASK-MANAGER",
   intro : "TASK MANAGER" ,
   tech : "MERN STACK" , 

  desc : "The Task Manager backend, crafted with the MERN stack, provides robust APIs for managing tasks efficiently. It features secure user authentication, scalable database management with MongoDB, and seamless integration of data across frontend applications, ensuring reliable task tracking and management capabilities."
},
{
  id: 2,
  scr: track,
  demo: "https://trackker-1.onrender.com/",
  code : "https://github.com/Websterverse/TRACKKER" ,
  intro : "REAL TIME TRACKING APP"  ,
  tech : "REACTJS , TAILWIND CSS , LEAFLET , SOCKET.IO" , 
desc : "The Real-Time Tracking App is built with a powerful tech stack, including React.js for dynamic user interfaces, Tailwind CSS for responsive and customizable styling, Leaflet for interactive maps, and Socket.io for real-time communication and data updates. This combination ensures a smooth, real-time tracking experience with visually appealing design and high performance."
},

      


{
  id: 2,
  scr: ADV,
  demo: "https://github.com/Websterverse/ADVANCE_AUTHENTICATION",
  code : "https://github.com/Websterverse/ADVANCE_AUTHENTICATION" ,
  intro : "ADVANCE AUTHORIZATION BACKEND"  ,
  tech : "MERN STACK" , 
desc : "The Advanced Authorization Backend, developed with Node.js and Express.js, provides secure login functionality, including OTP-based authentication, password reset, and welcome email features. It ensures robust user authentication, handling both secure and user-friendly processes to protect sensitive data while offering seamless access."
},





  {
    id: 2,
    scr: Retrorr,
    demo: "https://superlative-medovik-b12f8d.netlify.app/",
    code : "https://github.com/Websterverse/MIRANDA",
     intro : "MIRANDA WEBSITE" ,
     tech : "Html , Css , Js , Locomotivejs " , 
     desc : "A retro-themed clone of the Miranda website, recreated using HTML, CSS, and JavaScript. This project captures the nostalgic essence of the original, offering a visually appealing and interactive experience reminiscent of vintage aesthetics." , 
    
  },
  

  {
    id: 4,
    scr: CHATS,
    demo: "https://crown-talk.onrender.com/",
    code : "https://github.com/Websterverse/CROWN-TALK" ,
    intro : "REAL TIME CHATING APP"  ,
    tech : "Nodejs , Expressjs , SocketIo , Html , Css , Js" , 
    desc : "The real-time chatting app, developed using Node.js, Socket.IO, Express.js, HTML, CSS, and JavaScript, facilitates instant messaging with a responsive interface. It supports real-time communication and is designed to provide a seamless chatting experience for users." , 
    
  },
  

    {
        id: 4,
        scr: Cynthia,
        demo: "https://coruscating-jalebi-56871c.netlify.app/",
        code : "https://github.com/Websterverse/Cynthia_Clone",
         intro : "CYNTHIA WEBSITE" ,
         tech : "Html , Css , Js , Locomotivejs " ,
         desc : "A modern animation-inspired clone of the Cynthia website, crafted using HTML, CSS, and JavaScript. This project showcases contemporary design elements and interactive animations, offering a visually dynamic and engaging user experience for portfolio demonstration." ,  
        
    },
    {
      id: 5,
      scr: SIDCLUB,

      demo: "https://keen-cendol-a931bc.netlify.app/",
      code : "https://github.com/Websterverse/TRACKKER" ,
       intro : "SIDCUP-GOLF WEBSITE" ,
       tech : "Html , Css , Js , Locomotivejs " , 
   
desc : "Sidcup Golf is a modern, animated website crafted with HTML, CSS, and JavaScript. It showcases the golf club's amenities and events with dynamic animations, offering an engaging user experience for portfolio demonstration."

  },

    
        {
        id: 7,
        scr: Weather,
        demo: "https://65cdc37b1d0ba6651304c1db--astonishing-arithmetic-7e0a02.netlify.app/",
        code : "https://65cdc37b1d0ba6651304c1db--astonishing-arithmetic-7e0a02.netlify.app/" ,
        intro : "WEATHER APP"  ,
        tech : "Reactjs" , 
     
        desc : "A weather application built with React.js and the OpenWeather API, providing real-time weather information. This project delivers a user-friendly interface for checking current weather conditions and forecasts, showcasing proficiency in frontend development and API."
    },


        {
        id: 9,
        scr: Rayban,
        demo: "https://65cdc59a22d9657c29976a2f--tangerine-crepe-1938ba.netlify.app/",
        code : "https://github.com/Websterverse/RAYBAN" ,
        intro : "RAYBAN WEBISTE LANDING PAGE"  ,
        tech : " Html , Css , Js , Locomotivejs" , 
     
        desc : "The RayBan website landing page is crafted using HTML, CSS, and JavaScript, featuring next-level animations for a dynamic user experience. It showcases modern design aesthetics, smooth transitions, and interactive elements to captivate and engage visitors."
    },

        {
        id: 10,
        scr: Quote,
        demo: "https://github.com/Websterverse/QUOTES",
        code : "https://github.com/Websterverse/QUOTES" ,
        intro : "Quote's Generator"  ,
        tech : "Reactjs" , 
       desc : "The Quotes Generator, built with React.js, dynamically displays inspiring quotes with each refresh. This project features a clean, user-friendly interface, ensuring a seamless and engaging experience for users seeking daily motivation and wisdom."
   
      },

    
      {
        id: 11,
        scr: Land,
        demo: "https://ephemeral-toffee-e5eed5.netlify.app/",
        code : "https://github.com/Websterverse/TAILWIND-LANDING-PAGE-" ,
        intro : "LANDING PAGE "  ,
        tech : "Html , TailwindCss, Js" , 
        desc : "The landing page, created with HTML, Tailwind CSS, and JavaScript, features a sleek, modern design. It offers responsive layouts, fast load times, and interactive elements, ensuring an engaging and visually appealing user experience across all devices."
    },
      {
        id: 12,
        scr: Bubble,
        demo: "https://668bb7e2abe78ac4f2b44d01--genuine-souffle-47f32e.netlify.app/",
        code : "https://github.com/Websterverse/BUBBLE_GAME" ,
        intro : "BUBBLE GAME"  ,
        tech : "Html , Css , Js" , 
        desc : "The Bubble Game, built with HTML, CSS, and JavaScript, challenges players to click matching numbers generated automatically. Featuring engaging visuals and smooth animations, this interactive game offers an entertaining and addictive experience for users."
      },

      {
        id: 13,
        scr: Nike,
        demo: "https://668bb7e2abe78ac4f2b44d01--genuine-souffle-47f32e.netlify.app/",
        code : "https://github.com/Websterverse/NIKE-LANDING-PAGE" ,
        intro : "NIKE WEBSITE LANDING PAGE"  ,
        tech : "Reactjs" , 
      desc : "The Nike website landing page, developed with React.js, showcases innovative design and functionality. It features dynamic content presentation, smooth animations, and interactive elements that enhance user engagement and reflect the brand's modern style."
      },









  ];

  return (
    <div className='w-full h-auto text-white bg-gradient-to-b from-gray-800 to-black'>
      <div className='pt-24  pl-4  '>
        <p className='text-4xl    font-bold inline border-b-4 border-gray-500'>PROJECTS</p>
        <p className='py-6'>Check some of my work right here -</p>
      </div>

      <div id='conti' className='container grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-8'>
        {portfolios.map(({ id, scr, demo, code, intro, tech, desc }) => (
          <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
            <center><p className='font-bold text-xl sm:text-2xl pb-2 pt-2'>{intro}</p></center>
            <div className='con'>
              <img src={scr} alt="" className='rounded-md duration-200 hover:scale-105' />
              <div className='p-4'>
                <p><b>Tech-Stack - </b>{tech}</p>
                <p><b>Description -</b>{desc}</p>
              </div>
              <div className='flex items-center justify-center'>
                <a href={demo} target='blank' className='w-1/2 px-4 py-2 sm:px-6 sm:py-3 m-2 sm:m-4 duration-200 hover:scale-105'>DEMO</a>
                <a href={code} target='blank' className='w-1/2 px-4 py-2 sm:px-6 sm:py-3 m-2 sm:m-4 duration-200 hover:scale-105'>CODE</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default More;
