import { useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";

export default function Footer() {
    const [hover, setHover] = useState(false);
    const toggleHover = () => setHover(!hover);

    let hoverRotate = hover ? 'rotate-45' : '';

  return (
    <footer className="flex h-[450px] bg-[#272727] text-[#fff] items-center w-[100vw] justify-center">
        <div className="flex flex-col items-center max-w-[1280px] overflow-hidden">
            <div className="flex gap-[550px] my-[30px]">
                <h2 className="text-[50px] font-semibold">
                Lets connect there
                </h2>
                <button className="h-[40px] w-[110px] bg-[#9773fe] rounded-[10px] flex items-center justify-center hover:bg-[#613AFD] transition-all" onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
                    Hire me <span className={`ml-[1px] text-[20px] transition-all ${hoverRotate}`}><FiArrowUpRight/></span>
                </button>
            </div>
            <div className="bg-[#475467] h-[3px] w-[100%]"></div>
            <div className="flex gap-[20px] my-[30px]">
                <div className="flex flex-col gap-[20px] w-[500px] my-[20px]">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non pariatur dolorem itaque architecto minima magni voluptas quae, dignissimos animi voluptate sapiente?
                    </p>
                    <div className="flex gap-[5px]">
                        <a href="https://www.youtube.com/channel/UC6JlUqEitXBwVLJaEcz835w" target="_blank"><BsYoutube/></a>
                        <a href="https://www.instagram.com/kak.rei_/" target="_blank"><BsInstagram/></a>
                        <a href="https://www.linkedin.com/in/raihan-aditya-a67b07276/" target="_blank"><BsLinkedin/></a>
                        <a href="https://github.com/KakRei" target="_blank"><BsGithub/></a>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="my-[20px]">Navigation</h2>
                    <ul className="flex flex-col gap-[5px]">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Project</li>
                        <li className="cursor-pointer">Blog</li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h2 className="my-[20px]">Contact</h2>
                    <ul className="flex flex-col gap-[5px]">
                        <li className="flex">
                            <span className="mr-[5px] flex items-center justify-center"><BsWhatsapp/></span>
                            +62 838 9786 6959
                        </li>
                        <li className="flex">
                            <span className="mr-[5px] flex items-center justify-center"><MdEmail/></span>
                            ra.raihanaditya@gmail.com
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="my-[20px]">Lets discuss</h2>
                    <form action="send" className="flex items-center justify-center">
                        <input type="email" name="email" className="h-[40px] w-[200px] rounded-l-[10px] pl-[10px] text-[#000]" placeholder="Email address"/>
                        <button type="submit" className="h-[40px] w-[40px] rounded-r-[10px] bg-[#9773FE] items-center justify-center flex hover:bg-[#613AFD]"><PiPaperPlaneRightFill/></button>
                    </form>
                </div>
            </div>
            <div className="bg-[#475467] h-[3px] w-[100%]"></div>
            <div className="flex items-center justify-center mt-[20px]">
                <p>Made with 🧠 by Raihan Aditya</p>
            </div>
        </div>
    </footer>
  )
}
