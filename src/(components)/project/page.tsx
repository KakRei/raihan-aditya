import Image from "next/image";
import { useState } from "react";
import { RiCss3Fill, RiHtml5Fill, RiJavascriptFill } from "react-icons/ri";

export default function Project() {
  const [hoverProject, setHoverProject] = useState(false);
  const toggleHoverProject = () => setHoverProject(!hoverProject);

  const [hoverProjectA, setHoverProjectA] = useState(false);
  const toggleHoverProjectA = () => setHoverProjectA(!hoverProjectA);

  let hoverBlur = hoverProject ? 'blur-[2px]' : '';
  let hoverText = hoverProject ? '' : 'translate-y-[60px]';
  let hoverBg = hoverProject ? 'pl-[5px] pr-[280px] pb-[55px] bg-[rgba(0,0,0,.2)] backdrop-blur-[30px]' : '';
  let hoverTech = hoverProject ? 'flex' : 'hidden';

  let hoverBlurA = hoverProjectA ? 'blur-[2px]' : '';
  let hoverTextA = hoverProjectA ? '' : 'translate-y-[60px]';
  let hoverBgA = hoverProjectA ? 'pl-[5px] pr-[343px] pb-[55px] bg-[rgba(0,0,0,.2)] backdrop-blur-[30px]' : '';
  let hoverTechA = hoverProjectA ? 'flex' : 'hidden';

  return (
    <section className="h-[80vh] bg-[#fff]">
      <div className="mx-[70px] my-[100px]">
        <h2 className="text-[40px] font-semibold mb-[30px]">
          My <span className="text-[#613afd]">Portfolio</span>
        </h2>

        <div className="flex gap-[50px]">
          <div className="relative h-[300px] w-[500px] overflow-hidden bg-blue-400 flex justify-center items-center rounded-[20px]" onMouseEnter={toggleHoverProject} onMouseLeave={toggleHoverProject}>
            <Image src={'/netflixclone.png'} alt="project" width={500} height={1} className={`${hoverBlur} transition-all`}></Image>
            <div className={`absolute bottom-[1px] mb-[4px] ml-[4px] rounded-[20px] left-[1px] ${hoverBg} transition-all duration-[200]`}>
              <h2 className="text-[#fff] font-bold text-[30px] mt-[10px] ml-[20px] mb-[10px]">Netflix clone</h2>
              <div className={`${hoverTech} absolute right-[1px] top-[1px] mt-[10px] mr-[10px] text-[40px] gap-[5px]`}>
                <RiHtml5Fill color="#E96228"/>
                <RiCss3Fill color="#2862E9"/>
                <RiJavascriptFill color="#F7E025"/>
              </div>
              <p className={`text-[#fff] font-normal text-[15px] ml-[20px] mb-[10px] absolute ${hoverText}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis sapiente dicta.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] w-[500px] overflow-hidden bg-blue-400 flex justify-center items-center rounded-[20px]" onMouseEnter={toggleHoverProjectA} onMouseLeave={toggleHoverProjectA}>
            <Image src={'/todolist.png'} alt="project" width={500} height={1} className={`${hoverBlurA} transition-all`}></Image>
            <div className={`absolute bottom-[1px] mb-[4px] ml-[4px] rounded-[20px] left-[1px] ${hoverBgA} transition-all duration-[200]`}>
              <h2 className="text-[#fff] font-bold text-[30px] mt-[10px] ml-[20px] mb-[10px]">Todolist</h2>
              <div className={`${hoverTechA} absolute right-[1px] top-[1px] mt-[10px] mr-[10px] text-[40px] gap-[5px]`}>
                <RiHtml5Fill color="#E96228"/>
                <RiCss3Fill color="#2862E9"/>
                <RiJavascriptFill color="#F7E025"/>
              </div>
              <p className={`text-[#fff] font-normal text-[15px] ml-[20px] mb-[10px] absolute ${hoverTextA}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat veritatis sapiente dicta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
