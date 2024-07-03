'use client'

import About from "@/(components)/about/page";
import Footer from "@/(components)/footer/page";
import Header from "@/(components)/header/page";
import Project from "@/(components)/project/page";
import Image from "next/image";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RiCss3Fill, RiHtml5Fill, RiJavascriptFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";


export default function App() {

    const [show, setShow] = useState(false);
    const [hover, setHover] = useState(false);

    const toggleShow = () => setShow(!show);
    const toggleHover = () => setHover(!hover);

    let addFlexA = show ? 'translate-skills-1': '';
    let addFlexB = show ? 'translate-skills-2': '';
    let addFlexC = show ? 'translate-skills-3': '';
    let addFlexD = show ? 'translate-skills-4': '';
    let addFlexE = show ? 'translate-skills-5': '';
    let addFlexF = show ? 'translate-skills-6': '';
    let showHeader = show ? 'translate-y-[-260px]' : '';
    let showName = show ? 'translate-y-[400px]' : '';
    
    let hoverBg = hover ? 'bg-[#613AFD] pl-[20px] pr-[40px] py-[5px]' : 'px-[10px] py-[1px] bg-transparent';
    let hoverArrow = hover ? 'opacity-[1] translate-x-[60px]' : 'opacity-[0] translate-x-[70px]';
    let hoverBgHidden = hover ? 'px-[10px] py-[1px] bg-transparent' : 'bg-[#613AFD] pl-[20px] pr-[40px] py-[5px]';
    let hoverArrowHidden = hover ? ' opacity-[0] translate-x-[60px]' : 'opacity-[1] translate-x-[60px]';

  return (
    <>
        <Header/>
        <section className="h-[500px] bg-[#fff] max-w-[1280px] overflow-y-hidden overflow-x-hidden w-[100vw] flex flex-col justify-end items-center">
          <div className={`relative flex flex-col justify-center items-center h-fit text-center ${showName} transition duration-300 ease-in-out`}>
            <Image className="absolute right-[115px] top-[-20px]" src={"/vec1.svg"} alt="vector" width={27.5} height={28.5}></Image>
            <h2 className="rounded-[50px] border-[1px] border-[#000] px-[15px] py-[2px]">
              Hello!
            </h2>
            <h1 className="text-[45px] font-semibold justify-center w-[350px] ">
              I am
              <span className="text-[#613AFD]"> Raihan</span>
              , Web Developer
            </h1>
            <Image className="absolute rotate-180 bottom-[-50px] left-[-50px]" src={"/vec1.svg"} alt="vector" width={71} height={78}></Image>
          </div>

          {/* <div className="flex justify-between items-center text-center">
            <h2 className="w-[300px]">
              I am front-end developer, i have high motivation to learn technology 
            </h2>
            <div className="flex">
              <BsGithub/>
              <BsLinkedin/>
              <BsYoutube/>
              <BsInstagram/>
            </div>
          </div> */}
          
          <div className="relative flex justify-center items-center h-fit w-fit mt-[80px]">
            <div className="relative bg-[#9773FE] rounded-t-full h-[230px] w-[430px] flex items-center justify-center z-[10]" onMouseEnter={toggleShow} onMouseLeave={toggleShow}>
              <Image src={'/me.png'} alt="me" width={220} height={1} className="absolute bottom-[1px]"></Image>
            
              {/* Bottom nav */}
              <div className="w-fit backdrop-blur-[25px] bg-[rgba(255,255,255,.1)] rounded-[50px] absolute bottom-[23%] border-[.1px] border-[rgba(255,255,255,.5)] z-[1]">
                <ul className="flex items-center justify-center m-[4px]">
                  <li className={`relative flex font-medium mx-[2.5px] text-[20px] text-[#fff] items-center justify-center float-start text-center rounded-[50px] border-[rgba(255,255,255,.5)] ${hoverBgHidden} overflow-hidden transition-all duration-[300ms] ease-in-out`}>
                    <h2>Resume</h2>
                    <span className={`text-[27px] text-center ${hoverArrowHidden} absolute transition mr-[10px] duration-[200ms]`}><FiArrowUpRight/></span>
                  </li>
                  <li className={`relative flex font-medium mx-[2.5px] text-[20px] text-[#fff] items-center justify-center float-start text-center rounded-[50px] border-[rgba(255,255,255,.5)] ${hoverBg} overflow-hidden transition-all duration-[300ms] ease-in-out`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                    <h2>Hire me</h2>
                    <span className={`text-[27px] text-center ${hoverArrowHidden} absolute transition mr-[10px] duration-[200ms] ${hoverArrow}`}><FiArrowUpRight/></span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className={`absolute ${showHeader} transition duration-300 top-[50px] z-[2]`}>
              <Image className="absolute left-[-20px] top-[-4px] scale-[-1] rotate-90" src={"/vec1.svg"} alt="vector" width={27.5} height={28.5}></Image>
              <h2 className="text-[50px] font-semibold">My <span className="text-[#613AFD]">Skills</span></h2>
              <Image className="absolute rotate-90 bottom-[-35px] right-[-60px] " src={"/vec1.svg"} alt="vector" width={71} height={78}></Image>
            </div>
              {/* Skills */}
            <section className="flex absolute z-[2] top-[50%] left-[50%] items-center">
              <ul className="absolute justify-center items-center w-[1px] h-[1px] flex">
                <li className={`skills transition duration-[0.5s] ${addFlexA}`}><RiHtml5Fill color="#E96228"/></li>
                <li className={`skills transition duration-[0.5s] ${addFlexB}`}><RiCss3Fill color="#2862E9"/></li>
                <li className={`skills transition duration-[0.5s] ${addFlexC}`}><RiJavascriptFill color="#F7E025"/></li>
                <li className={`skills transition duration-[0.5s] ${addFlexD}`}><RiTailwindCssFill color="#38BDF8"/></li>
                <li className={`skills transition duration-[0.5s] ${addFlexE}`}><RiReactjsFill color="#5ED3F3"/></li>
                <li className={`skills transition duration-[0.5s] ${addFlexF}`}><RiNextjsFill color="#000000"/></li>
              </ul>
            </section>
          </div>
        </section>
      <About />
      <Project/>
      <Footer/>
      </>
  )
}
