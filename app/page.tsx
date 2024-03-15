import Header from "@/components/elements/header"
import Skills from "@/components/elements/skills"
import Image from "next/image"
import BackgroundImage from "/public/imgs/background.png"

interface TobCraftxzyProps {}

const TobCraftxzy = () => {
  return (
    <div>
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <Image
            src={BackgroundImage}
            width={1000}
            alt="background"
            className="w-[125rem] flex-none max-w-none dark:block md:translate-x-36"
          />
        </div>
      </div>
      <Header />
      <section className="flex items-center justify-center h-[30vh] transition-opacity ease-in duration-700 opacity-100 mb-8">
        <h1 className="bg-gradient-to-r text-7xl from-[#00eeff] to-[#00ff5e] text-transparent bg-clip-text md:flex hidden text-center">
          Hi! I'm Tobias
        </h1>
        <h1 className="bg-gradient-to-r text-7xl from-[#00eeff] to-[#00ff5e] text-transparent bg-clip-text md:hidden flex text-center">
          Hi! I'm
          <br />
          Tobias
        </h1>
      </section>
      <section className="flex justify-center items-center">
        <Skills />
      </section>
    </div>
  )
}

export default TobCraftxzy
