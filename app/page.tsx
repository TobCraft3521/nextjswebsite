import Header from "@/components/elements/header"
import Links from "@/components/elements/links"
import Projects from "@/components/elements/projects"
import Skills from "@/components/elements/skills"

import Footer from "@/components/elements/footer"
import LinksBar from "@/components/elements/linksbar"
import Intro from "@/components/elements/intro"
import GradientShape from "/public/imgs/backgrounds/clickupgradient2.png"
import Image from "next/image"
import Skill from "@/components/elements/skill"
interface TobCraftxzyProps {}

const TobCraftxzy = () => {
  return (
    <div className="">
      <Header />
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
      {/* 2nd page of dashed lines */}
      <div className="md:hidden">
        <div className="Guides top-[100vh] -z-10">
          <div className="Guides__containerSm">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
        <div className="Guides top-[100vh] -z-10">
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
        <div className="Guides top-[100vh] -z-10">
          <div className="Guides__containerLg">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
        <div className="Guides top-[100vh] -z-10">
          <div className="Guides__containerLg">
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
            <div className="Guides__guide"></div>
          </div>
        </div>
      </div>

      {/* links bar */}
      <div className="fixed right-0 h-full top-0 w-16 flex-col justify-center hidden md:flex z-20">
        <LinksBar orientation="vertical" />
      </div>

      <div className="absolute right-0 top-0">
        <Image
          src={GradientShape}
          alt="background gradient shape"
          className="md:w-[60vw] md:h-[90vh] -z-50 pointer-events-none select-none"
        />
      </div>
      <Skills />
      <div className="min-h-screen">
        <div className="font-bold text-6xl md:text-7xl flex justify-center items-center w-[100vw] text-white md:text-[rgb(10,37,64)] md:p-32 md:pb-0">
          <h1 className="md:-translate-x-[25vw] mt-32 md:mt-32 md:mb-20 z-20">
            Hi! I'm
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Tobias
            </span>
          </h1>
        </div>

        <div className="">
          <Intro />
        </div>
      </div>

      {/* sections */}
      <section className="flex justify-center items-center mb-16" id="projects">
        <Projects />
      </section>

      <section className="flex justify-center items-center" id="links">
        <Links />
      </section>
      <Footer />
    </div>
  )
}

export default TobCraftxzy
