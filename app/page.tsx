import Header from "@/components/elements/header"
import Links from "@/components/elements/links"
import Projects from "@/components/elements/projects"
import Skills from "@/components/elements/skills"

import Footer from "@/components/elements/footer"
import LinksBar from "@/components/elements/linksbar"
import Intro from "@/components/elements/intro"
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

      {/* lg  */}
      <div
        className="font-bold text-6xl md:text-7xl hidden md:flex justify-center items-center w-[100vw] bg-fixed bg-white text-white p-32 mb-0 overflow-hidden -z-20"
        style={{
          backgroundImage: "url('/imgs/backgrounds/bggradientpurple.webp')",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
          zIndex: -20,
        }}
      >
        <h1 className="translate-y-8 z-30 hi">
          Hi! I'm
          <br />
          Tobias
        </h1>
      </div>

      {/* sm  */}
      <div
        className="font-bold text-6xl md:text-7xl flex md:hidden justify-center items-center w-[100vw] bg-fixed bg-white text-white p-32 mb-0 overflow-hidden -z-20"
        style={{
          backgroundImage: "url('/imgs/backgrounds/bggradientred2.webp')",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 85%)",
          zIndex: -20,
        }}
      >
        <h1 className="translate-y-8 z-30 hi">
          Hi! I'm
          <br />
          Tobias
        </h1>
      </div>

      {/* sections */}
      <section
        className="flex flex-col justify-center items-center mb-4 content"
        id="skills"
      >
        <Skills />
        <Intro />
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
      <section
        className="flex flex-col justify-center items-center mb-16 md:mt-48"
        id="more"
      >
        <h1 className="text-2xl nunito-font text-[rgb(10,37,64)] dark:text-[#a1a1a1] font-bold z-10 uppercase">
          Placeholder
        </h1>
        ...
      </section>
      <section className="flex justify-center items-center" id="links">
        <Links />
      </section>
      <Footer />
    </div>
  )
}

export default TobCraftxzy
