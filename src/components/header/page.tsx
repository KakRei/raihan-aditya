import Link from "next/link";
import { GoHomeFill, GoPersonFill } from "react-icons/go";
import { IoMail } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";

export default function Header() {
    return (
        <header className="h-screen w-[50px] m-[10px] fixed flex items-center justify-center">
        <div className="h-[50%] bg-red-200 w-full justify-center items-center flex rounded-[7px]">
          <nav className="flex flex-col items-center gap-[40px] justify-center">
            <Link href="/">
            <GoHomeFill className="size-[30px]"/>
            </Link>
            <Link href="#about">
            <GoPersonFill className="size-[30px]"/>
            </Link>
            <Link href="#skills">
            <RiReactjsFill className="size-[30px]"/>
            </Link>
            <Link href="#contact">
            <IoMail className="size-[30px]"/>
            </Link>
          </nav>
        </div>
      </header>
    )
}