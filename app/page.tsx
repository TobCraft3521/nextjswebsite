import Header from "@/components/elements/header"
import Skills from "@/components/elements/skills"
import Image from "next/image"
import BackgroundImage from "/public/imgs/background.png"
import Projects from "@/components/elements/projects"
import Links from "@/components/elements/links"

interface TobCraftxzyProps {}

const TobCraftxzy = () => {
  return (
    <div className="">
      <div className="pointer-events-none">
        <div className="absolute h-[90vh] w-full translate-y-[-10vh]">
          <div className="z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none sticky">
            <div className="w-[108rem] flex-none flex justify-end">
              <Image
                src={BackgroundImage}
                width={1000}
                alt="background"
                className="w-[105rem] opacity-90 flex-none max-w-none md:translate-x-36"
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[90vh] w-full top-0">
          <div className="z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none sticky">
            <div className="w-[108rem] flex-none flex justify-end">
              <Image
                src={BackgroundImage}
                width={1000}
                alt="background"
                className="w-[105rem] opacity-90 flex-none max-w-none md:translate-x-36"
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[90vh] w-full top-0">
          <div className="z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none sticky">
            <div className="w-[108rem] flex-none flex justify-end">
              <Image
                src={BackgroundImage}
                width={1000}
                alt="background"
                className="w-[105rem] opacity-90 flex-none max-w-none md:translate-x-36"
              />
            </div>
          </div>
        </div>
      </div>

      <Header />

      <section className="flex items-center justify-center transition-opacity ease-in duration-700 opacity-100 mb-32 pb-5 content">
        <h1 className="bg-gradient-to-r text-7xl from-[#00eeff] to-[#00ff5e] text-transparent bg-clip-text md:flex hidden text-center">
          Hi! I'm Tobias
        </h1>
        <h1 className="bg-gradient-to-r text-7xl from-[#00eeff] to-[#00ff5e] text-transparent bg-clip-text md:hidden flex text-center">
          Hi! I'm
          <br />
          Tobias
        </h1>
      </section>

      {/* sections */}
      <section
        className="flex justify-center items-center mb-16 content"
        id="skills"
      >
        <Skills />
      </section>
      <section className="flex justify-center items-center mb-16" id="projects">
        <Projects />
      </section>
      <section className="flex justify-center items-center mb-16" id="links">
        <Links />
      </section>
      <section
        className="flex justify-center items-center mb-16"
        id="projects"
      ></section>
      <section
        className="flex justify-center items-center mb-16"
        id="projects"
      ></section>
    </div>
  )
}

export default TobCraftxzy
