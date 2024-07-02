import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { PiPaperPlaneRightFill } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="flex h-[70vh] bg-[#272727] text-[#fff] items-center">
        <div className="flex flex-col items-center w-[1280px] max-w-[1280px] overflow-hidden">
            <div className="flex gap-[550px] my-[30px]">
                <h2 className="text-[50px] font-semibold">
                Lets connect there
                </h2>
                <button className="h-[40px] w-[120px] bg-[#9773fe] rounded-[10px] flex items-center justify-center">
                    Hire me <span className="ml-[5px] text-[20px]"><FiArrowUpRight/></span>
                </button>
            </div>
            <div className="bg-[#475467] h-[3px] w-[90%]"></div>
            <div className="flex gap-[20px] my-[30px]">
                <div className="flex flex-col gap-[20px] w-[500px]">
                    <h2 className="mb-[10px]">
                        Rei
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non pariatur dolorem itaque architecto minima magni voluptas quae, dignissimos animi voluptate sapiente?
                    </p>
                    <div className="flex gap-[5px]">
                        <BsYoutube/>
                        <BsInstagram/>
                        <BsWhatsapp/>
                        <BsLinkedin/>
                        <BsGithub/>
                        <BsTwitter/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="my-[20px]">Navigation</h2>
                    <ul className="flex flex-col gap-[5px]">
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                        <li>Blog</li>
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
                        <button type="submit" className="h-[40px] w-[40px] rounded-r-[10px] bg-[#9773FE] items-center justify-center flex"><PiPaperPlaneRightFill/></button>
                    </form>
                </div>
            </div>
            <div className="bg-[#475467] h-[3px] w-[90%]"></div>
            <div className="flex items-center justify-center mt-[20px]">
                <p>Made with 🧠 by Raihan Aditya</p>
            </div>
        </div>
    </footer>
  )
}
