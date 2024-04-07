import Header from "@/components/elements/header"
import Skills from "@/components/elements/skills"
import Image from "next/image"
import BackgroundImage from "/public/imgs/background.png"
import Projects from "@/components/elements/projects"
import Links from "@/components/elements/links"
import { Github } from "lucide-react"
import Discord from "/public/imgs/discord.svg"

import { useTheme } from "next-themes"
import LinksBar from "@/components/elements/linksbar"
import Footer from "@/components/elements/footer"
import { useEffect } from "react"
import { Counter, count } from "@/components/elements/counter"
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
          className="top-0 left-0 w-full h-[50vh] z-[-1] opacity-80 dark:opacity-80 sticky"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 22%, 0 100%)",
          }}
        ></iframe>
      </div>

      {/* box behind the projects  */}
      {/* lg  */}
      <div
        className="pointer-events-none absolute w-full md:top-[105vh] lg:top-[110vh] md:h-[70vh] lg:h-[85vh] bg-zinc-100 dark:bg-zinc-950 hidden md:block"
        style={{
          clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
        }}
      ></div>
      {/* sm  */}
      <div className="pointer-events-none absolute w-full top-[141vh] h-[67vh] bg-zinc-100 dark:bg-zinc-950 md:hidden"></div>

      {/* dashed lines */}
      <div className="md:hidden">
        <div className="Guides top-0 -z-1">
          <div className="Guides__containerSm">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
        <div className="Guides top-0 -z-1">
          <div className="Guides__containerSm">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="Guides top-0 -z-1">
          <div className="Guides__containerLg">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
        <div className="Guides top-0 -z-1">
          <div className="Guides__containerLg">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
      </div>

      <div className="fixed right-0 h-full top-0 w-16 flex-col justify-center hidden md:flex">
        <LinksBar />
      </div>

      <section className="flex items-center justify-center opacity-100 mb-16 pb-5 content">
        {/* <h1 className="text-8xl font-bold text-[rgb(10,37,64)] dark:text-white md:hidden hidden text-center z-[-2] -translate-x-20">
          Hey! I'm Tobias
        </h1> */}
        <h1 className="font-bold text-6xl md:text-8xl md:flex z-[-2] flex text-center md:-translate-x-32">
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

      {/* dashed lines */}
      <div className="md:hidden">
        <div className="Guides top-0 -translate-y-[90vh] h-[120%] -z-2">
          <div className="Guides__containerSm">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
        <div className="Guides top-0 -translate-y-[90vh] h-[120%] -z-2">
          <div className="Guides__containerSm">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="Guides top-0 -translate-y-[90vh] h-[120%] -z-2">
          <div className="Guides__containerLg">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
        <div className="Guides top-0 -translate-y-[90vh] h-[120%] -z-2">
          <div className="Guides__containerLg">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
      </div>
      <section className="flex justify-center items-center" id="links">
        <Links />
      </section>
      <section
        className="flex flex-col justify-center items-center mb-16 md:mt-48"
        id="more"
      >
        <h1 className="text-2xl md:-translate-x-[10vw] nunito-font text-[rgb(10,37,64)] dark:text-[#a1a1a1] mb-10 font-semibold z-10 uppercase">
          Placeholder
        </h1>
        ...
      </section>
      <Footer />
    </div>
  )
}

export default TobCraftxzy
