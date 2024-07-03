import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#f2f4f7] h-[500px] flex justify-center items-center w-[100vw]">
      <div className="flex justify-start items-center w-[720px] h-fit gap-[30px]">
        <div>
          <div className="relative h-[300px] w-[220px]">
            <div className="absolute bottom-[1px] bg-[#9773FE] h-[250px] w-[220px] rounded-[60px]">
            </div>
            <Image src={'/me1.png'} alt="me 1" width={250} height={1} className="absolute bottom-[1px] rounded-[60px]"></Image>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="font-semibold text-[40px]">
            <span className="text-[#613AFD]">About</span> me!
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel inventore atque commodi. Obcaecati optio iste possimus error beatae quidem animi unde!
          </p>

          <div className="flex gap-[20px]">
            <button className="px-[20px] py-[5px] border-[.1px] border-[rgba(0,0,0,.1)] rounded-[50px] bg-[#9773fe] text-[#fff] hover:bg-[#613AFD]">
              Resume
            </button>
            <button className="px-[20px] py-[5px] border-[.1px] border-[rgba(0,0,0,.1)] rounded-[50px] bg-[#9773fe] text-[#fff] hover:bg-[#613AFD]">
              Hire me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
