import Header from "@/components/elements/header"
import Skills from "@/components/elements/skills"
import Image from "next/image"
import BackgroundImage from "/public/imgs/background.png"
import Projects from "@/components/elements/projects"
import Links from "@/components/elements/links"
import { Github } from "lucide-react"

interface TobCraftxzyProps {}

const TobCraftxzy = () => {
  return (
    <div className="">
      {/* <div className="pointer-events-none">
        <div className="absolute h-[90vh] w-full translate-y-[-10vh]">
          <div className="-z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none sticky">
            <div className="w-[108rem] flex-none flex justify-end">
              <Image
                src={BackgroundImage}
                width={1000}
                alt="background"
                className="w-[70rem] opacity-90 flex-none max-w-none md:-translate-x-36"
              />
              
            </div>
          </div>
        </div>
        <div className="absolute h-[90vh] w-full top-0">
          <div className="-z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none sticky">
            <div className="w-[108rem] flex-none flex justify-end">
              <Image
                src={BackgroundImage}
                width={1000}
                alt="background"
                className="w-[70rem] opacity-90 flex-none max-w-none md:-translate-x-36"
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[90vh] w-full top-0">
          <div className="-z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none sticky">
            <div className="w-[108rem] flex-none flex justify-end">
              <Image
                src={BackgroundImage}
                width={1000}
                alt="background"
                className="w-[70rem] opacity-90 flex-none max-w-none md:-translate-x-36"
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[90vh] w-full top-0 dark:hidden">
          <div className="-z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none sticky">
            <div className="w-[108rem] flex-none flex justify-end">
              <Image
                src={BackgroundImage}
                width={1000}
                alt="background"
                className="w-[70rem] opacity-90 flex-none max-w-none md:-translate-x-36"
              />
            </div>
          </div>
        </div>
      </div> */}

      <Header />
      {/* sticky container */}
      {/* dope gradient */}
      <div className="pointer-events-none absolute h-[60vh] w-full top-0">
        <iframe
          src="https://fabulous-lolly-6bfbb9.netlify.app/Gradient.html"
          className="top-0 left-0 w-full h-[50vh] z-[-1] opacity-85 dark:opacity-80 sticky"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 20%, 0 100%)",
          }}
        ></iframe>
      </div>

      {/* links: next commit
      <div className="fixed right-0 h-full top-0 w-16 flex flex-col justify-center">
        <div className="bg-black h-96 w-16 rounded-tl-3xl rounded-bl-3xl">
          <Github />
        </div>
      </div> */}

      <section className="flex items-center justify-center opacity-100 mb-16 pb-5 content">
        {/* <h1 className="text-8xl font-bold text-[rgb(10,37,64)] dark:text-white md:hidden hidden text-center z-[-2] -translate-x-20">
          Hi! I'm Tobias
        </h1> */}
        <h1 className="bg-gradient-to-r font-bold  text-5xl md:text-8xl dark:from-[#00eeff] dark:to-[#00ff5e] bg-clip-text md:flex z-[-1] flex text-center md:-translate-x-32">
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
