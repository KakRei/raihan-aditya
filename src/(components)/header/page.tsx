import { TiHome } from "react-icons/ti";

export default function Header() {
  return (
    <header className="w-[1280px] h-[65px] flex justify-center items-center mt-[20px]">
        <nav className="w-[90%] h-[100%] bg-[#171717] rounded-[50px]">
        <div className="w-[100%] h-[100%] flex justify-between items-center">
        <ul className="flex text-[#fff] gap-[5px] mx-[9px]">
            <li className="nav-button">About</li>
            <li className="nav-button">Project</li>
        </ul>
        <span className="text-[#fff] text-[40px]">
          <TiHome/>
        </span>
        <ul className="flex text-[#fff] gap-[5px] mx-[9px] scree">
            <li className="nav-button">Blog</li>
            <li className="nav-button">Contact</li>
        </ul>
        </div>
        </nav>
    </header>
  )
}
