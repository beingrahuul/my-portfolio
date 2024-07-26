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



const More = () => {
  const portfolios = [
    {
      id: 1,
      scr: HMS,
      demo: "https://people-care-fronted.onrender.com/",
      code: "https://github.com/Websterverse/PEOPLE_CARE_FRONTED",
      intro: "HOSPITAL MANAGEMENT SYSTEM FRONTEND",
      tech: "MERN STACK",
      desc: "The Hospital Management System frontend, developed with React.js, provides an intuitive and efficient interface for managing hospital operations. It features dynamic data handling, responsive design, and user-friendly navigation, ensuring streamlined management of patient records, appointments, and staff information."
    },
    // Other portfolio items


    
{
  id: 2,
  scr: Task,
  demo: "https://github.com/Websterverse/TASK-MANAGER",
  code : "https://github.com/Websterverse/TASK-MANAGER",
   intro : "TASK MANAGER BACKEND" ,
   tech : "MERN STACK" , 

  desc : "The Task Manager backend, crafted with the MERN stack, provides robust APIs for managing tasks efficiently. It features secure user authentication, scalable database management with MongoDB, and seamless integration of data across frontend applications, ensuring reliable task tracking and management capabilities."
},

    {
      id: 3,
      scr: IMDB,
      demo: "https://k1ngk4rr-imdb.netlify.app/",
      code : "https://github.com/Websterverse/IMDB",
       intro : "IMDB CLONE" ,
       tech : "Reactjs , TailwindCss " , 
       desc : "A clone of IMDb created with React.js and Tailwind CSS, offering comprehensive information on latest and upcoming movies. This project features a responsive interface for users to explore movie details, showcasing frontend development skills" , 

  },

  {
    id: 2,
    scr: Retrorr,
    demo: "https://miranda--websterverse.repl.co/",
    code : "https://github.com/Websterverse/TRACKKER",
     intro : "MIRANDA WEBSITE" ,
     tech : "Html , Css , Js " , 
     desc : "A retro-themed clone of the Miranda website, recreated using HTML, CSS, and JavaScript. This project captures the nostalgic essence of the original, offering a visually appealing and interactive experience reminiscent of vintage aesthetics." , 
    
  },
  

    {
        id: 4,
        scr: Cynthia,
        demo: "https://neglectedtemporalopposites.websterverse.repl.co/",
        code : "https://github.com/Websterverse/Cynthia_Clone",
         intro : "CYNTHIA WEBSITE" ,
         tech : "Html , Css , Js , Locomotivejs " ,
         desc : "A modern animation-inspired clone of the Cynthia website, crafted using HTML, CSS, and JavaScript. This project showcases contemporary design elements and interactive animations, offering a visually dynamic and engaging user experience for portfolio demonstration." ,  
        
    },
    {
      id: 5,
      scr: SIDCLUB,

      demo: "https://sidcupgolf--websterverse.repl.co/",
      code : "https://github.com/Websterverse/TRACKKER" ,
       intro : "SIDCUP-GOLF WEBSITE" ,
       tech : "Html , Css , Js , Locomotivejs " , 
   
desc : "Sidcup Golf is a modern, animated website crafted with HTML, CSS, and JavaScript. It showcases the golf club's amenities and events with dynamic animations, offering an engaging user experience for portfolio demonstration."

  },

    
        {
        id: 6,
        scr: CHATS,
        demo: "https://crown-talk.onrender.com/",
        code : "https://github.com/Websterverse/CROWN-TALK" ,
        intro : "REAL TIME CHATING APP"  ,
        tech : "Nodejs , Expressjs , SocketIo , Html , Css , Js" , 
        desc : "The real-time chatting app, developed using Node.js, Socket.IO, Express.js, HTML, CSS, and JavaScript, facilitates instant messaging with a responsive interface. It supports real-time communication and is designed to provide a seamless chatting experience for users." , 
        
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
        id: 8,
        scr: Owl,
        code: "https://github.com/Websterverse/OCHI_CLONE",
        demo : "https://cloneofochi.netlify.app/" ,
        intro : "OCHI WEBSITE"  ,
        tech : "Reactjs , Gsap , Locomotivejs" , 
      
        desc : "The Ochi website clone, built with React.js, GSAP, and Locomotive Scroll, features next-level animations. This project offers a seamless user experience with advanced scrolling effects, smooth transitions, and dynamic content, replicating the original site's. "
    },

        {
        id: 9,
        scr: Rayban,
        demo: "https://65cdc59a22d9657c29976a2f--tangerine-crepe-1938ba.netlify.app/",
        code : "https://github.com/Websterverse/RAYBAN" ,
        intro : "RAYBAN WEBISTE LANDING PAGE"  ,
        tech : " Html , Css , Js" , 
     
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
