import React from 'react';
import { Link } from "react-router-dom";
import SIDCLUB from "../assert/SIDCLUB.png";
import Retrorr from "../assert/retrorr.png";
import Cynthia from "../assert/Cynthia.png";
import IMDB from "../assert/imdb.png";
import CHATS from "../assert/chit.png";
import track from "../assert/trrr.png";
import Hills from "../assert/z.png";
import Ball from "../assert/we.png";
import Ship from "../assert/ship.png";
import TOKYO from "../assert/kor.png";
import HMS from "../assert/hhm.png";
import MEDI from "../assert/MEDI.jpeg"
import Research from "../assert/research.png";
import Owl from "../assert/owl.png";
import EL from "../assert/EL.png"
import DEST from "../assert/DEST.png"
import Apple from "../assert/apple.png"

import '../Home.css';

const Portfolio = () => {
  const portfolios = [
    { id: 2, scr: HMS, demo: "https://people-care-fronted.onrender.com/", code: "https://github.com/Websterverse/PEOPLE_CARE_FRONTED", intro: "PEOPLE CARE" },
    { id: 3, scr: MEDI, demo: "https://medi-sense-neon.vercel.app/screening-schedules", code: "https://github.com/Websterverse/mediSense", intro: "MEDISENSE" },
    { id: 4, scr: Owl, demo: "https://cloneofochi.netlify.app/", code: "https://github.com/Websterverse/OCHI_CLONE", intro: "OCHI WEBSITE" },
    { id: 5, scr: EL, demo: "https://github.com/Websterverse/E-LEARNER-FRONTEND", code: "https://github.com/Websterverse/E-LEARNER-FRONTEND", intro: "E-LEARNER PLATFORM" },
    { id: 1, scr: track, demo: "https://trackker-1.onrender.com/", code: "https://github.com/Websterverse/TRACKKER", intro: "REAL TIME TRACKING APP" },
    { id: 6, scr: IMDB, demo: "https://k1ngk4rr-imdb.netlify.app/", code: "https://github.com/Websterverse/IMDB", intro: "IMDB CLONE" },
  ];

  const portfolioss = [
    { id: 1, scr: TOKYO, demo: "https://k-pop.onrender.com/", code: "https://github.com/Websterverse/Animation", intro: "3D SCROLLING ANIMATION" },
    { id: 2, scr: Hills, demo: "https://zong-hills.onrender.com/", code: "https://github.com/Websterverse/ZONG_HILLS", intro: "3D PARALLAX EFFECT" },
    { id: 3, scr: Ball, demo: "https://we-have-balls.onrender.com/", code: "https://github.com/Websterverse/WE-HAVE-BALLS", intro: "SCROLLING ANIMATION" },
    { id: 4, scr: Ship, demo: "https://cruise-39br.onrender.com/", code: "https://github.com/Websterverse/CRUISE", intro: "DRAGGABLE EFFECT" },
    { id: 5, scr: DEST, demo: "https://capable-medovik-94fe23.netlify.app/", code: "https://capable-medovik-94fe23.netlify.app/", intro: "EXPLOSION EFFECT" },
    { id: 6, scr: Apple, demo: "https://apple-vision-pro-clone-in.netlify.app/", code: "https://apple-vision-pro-clone-in.netlify.app/", intro: "APPLE VISION 3D EFFECT  " },
  ];

  return (
    <>
      <div id='ppt' name="portfolio" className='portfolio w-full h-auto text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='mt-16 pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>PROJECTS</p>
            <p className='py-6'>Check some of my work right here</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
            {portfolios.map(({ id, scr, demo, code, intro }) => (
              <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                <center><p className='font-bold text-xl'>{intro}</p></center>
                <div>
                  <img src={scr} alt="" className='rounded-md duration-200 hover:scale-105' />
                  <div className='flex items-center justify-center'>
                    <a href={demo} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>DEMO</a>
                    <a href={code} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>CODE</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <center>
            <div className='mb-8 p-8'>
              <Link to='/more' className='cursor-pointer'>More</Link>
            </div>
          </center>
        </div>
      </div>

      <div id='ppt' name="portfolio" className='portfolio w-full h-auto text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='mt-16 pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>ANIMATIONS</p>
            <p className='py-6'>Check some of my work right here</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
            {portfolioss.map(({ id, scr, demo, code, intro }) => (
              <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                <center><p className='font-bold text-xl'>{intro}</p></center>
                <div>
                  <img src={scr} alt="" className='rounded-md duration-200 hover:scale-105' />
                  <div className='flex items-center justify-center'>
                    <a href={demo} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>DEMO</a>
                    <a href={code} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>CODE</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div id='ppt' name="portfolio" className='portfolio w-full h-auto text-white bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='mt-16 pb-8'>
            <p className='text-4xl font-bold inline   border-gray-500'>DOCUMENTATION ON PROJECTS</p>
            <p className='py-6'>Check some of my work right here</p>
          </div>
          <div className='shadow-md shadow-gray-500 rounded-lg'>
            <center><p className='font-bold text-xl'>PEOPLE CARE: HOSPITAL MANAGEMENT SYSTEM</p></center>
            <div>
              <img src={Research} alt="" className='rounded-md' />
              <div className='flex items-center justify-center'>
                <a href="https://drive.google.com/file/d/1crgu2QNOLBwfFsb5Of6DxxZYdo1RHitq/view?usp=sharing" target='blank' className='px-6 py-3 m-4 duration-200 hover:scale-105'>READ</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Portfolio;
