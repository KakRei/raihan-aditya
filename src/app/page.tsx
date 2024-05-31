import About from "@/components/about/page";
import Contact from "@/components/contact/page";
import Skills from "@/components/skills/page";
import Image from "next/image";

export default function App() {
  return (
    <main className="scroll-smooth transition-all">
      <section className="h-[80vh] bg-grey-100 flex justify-between">
        <div>
          <h1>Raihan Aditya</h1>
          <p>Full stack web developer from Indonesia</p>
        </div>
        <div className=" w-[400px] flex">
          <div className="h-[300px] w-[300px] rounded-tl-[1000px] rounded-tr-[500px] rounded-bl-[300px] rounded-br-[400px] bg-purple-900 z-0 absolute right-[50px] top-[10px]"></div>
          <div className="h-[300px] w-[300px] rounded-tl-[1000px] rounded-tr-[500px] rounded-bl-[300px] rounded-br-[400px] bg-purple-900 z-1 absolute right-[150px] bottom-[100px]"></div>
          <div className="h-[300px] w-[300px] rounded-tl-[1000px] rounded-tr-[500px] rounded-bl-[500px] rounded-br-[400px] bg-purple-900 z-1 absolute right-[20px] bottom-[100px]"></div>
          <Image src="/file.png" alt="profile picture" width={"350"} height={"350"} quality={100} className="z-[100] rounded-br-[100px] rounded-bl-[200px]" />
        </div>
      </section>
      <About />
      <Skills />
      <Contact />
    </main>
  )
}
