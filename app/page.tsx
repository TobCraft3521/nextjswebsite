import Header from "@/components/elements/header"
import Links from "@/components/elements/links"
import Projects from "@/components/elements/projects"
import Skills from "@/components/elements/skills"

import Footer from "@/components/elements/footer"
import Intro from "@/components/elements/intro"
import LinksBar from "@/components/elements/linksbar"
import Image from "next/image"
import GradientShape from "/public/imgs/backgrounds/clickupgradient2.png"
import MobileSkills from "@/components/elements/mobile-skills"
import TypeWriter, { TypewriterClass } from "typewriter-effect"
import Heading from "@/components/elements/heading"
import ABTestComponent from "@/components/elements/ab-test"
import SEO from "@/lib/seo/seo"
interface TobCraftxzyProps {}

const TobCraftxzy = () => {
  return (
    <div className="w-screen overflow-x-hidden">
      <Header />
      {/* dashed lines */}
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
      <div className="absolute right-0 h-full top-[25vh] w-16 flex-col justify-center hidden md:flex z-20">
        <LinksBar orientation="vertical" />
      </div>

      <div className="absolute right-0 top-0 overflow-hidden">
        <Image
          src={GradientShape}
          alt="background gradient shape"
          className="hidden md:flex md:w-[60vw] md:h-[90vh] -z-50 pointer-events-none select-none drop-shadow-2xl"
        />
      </div>
      <Skills />
      <div className="min-h-screen">
        <div className="font-bold text-6xl md:text-7xl flex justify-center items-center w-[100vw] dark:text-white text-[rgb(10,37,64)] md:p-32 md:pb-0 drop-shadow-2xl">
          <h1 className="md:-translate-x-[25vw] mt-48 md:mt-16 md:mb-20 z-20 text-center">
            Hi! I'm <br className="md:hidden" />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text">
              Tobias
            </span>
            <br />
            <Heading />
          </h1>
        </div>

        <div className="">
          <Intro />
        </div>
      </div>
      <MobileSkills />

      {/* sections */}
      <section className="flex justify-center items-center mb-16" id="projects">
        <Projects />
      </section>

      <section className="flex justify-center items-center" id="links">
        <Links />
      </section>
      <ABTestComponent />
      <Footer />

      <SEO
        title="tobcraft.xyz"
        description="My portfolio and social links site"
        image="favicon.ico"
        keywords="portfolio, tobcraft, tobias, tobcraft.xyz, tobcraft3521, projects, about, github"
        url="https://tobcraft.xyz"
      />
    </div>
  )
}

export default TobCraftxzy
