"use client"
import Image from "next/image"
import Hand from "@/public/imgs/hand.jpg"
import { ChevronRight } from "lucide-react"
import { RefObject } from "react"

const Intro = () => {
  const handleMyProjects = () => {
    const projects = document.getElementById("projects")
    projects?.scrollIntoView({ behavior: "smooth", block: "center" })
  }
  return (
    <div className="ml-[10vw] mt-16 md:mt-0">
      <h1 className="text-2xl md:translate-x-[4vw] nunito-font text-[rgb(10,37,64)] dark:text-white md:mb-4 font-bold text-center uppercase hidden md:flex">
        About me
      </h1>
      <div className="w-full flex flex-col md:flex-row md:justify-center md:items-center p-5 md:p-0 gap-8 md:max-w-[30vw] text-lg relative">
        <div className="flex flex-row justify-center items-center">
          {/* <Image
            src={Hand}
            alt="hand icon"
            className="rounded-full w-16 md:w-20 absolute -left-20"
            width={128}
            height={128}
          /> */}
          <h1 className="md:hidden text-2xl font-bold text-center translate-x-[-4vw]">
            About me
          </h1>
        </div>
        <div className="">
          Hi, I’m <span className="font-bold">Tobias</span>, a passionate
          full-stack developer 🔥 from Germany 🇩🇪. I love building complex{" "}
          <span className="font-bold">Next.js</span> fullstack projects and
          expanding my skills around the cloud ☁️, devops, webdesign 🎨 and
          more. Check them out on my{" "}
          <a href="https://github.com/tobcraft3521" className="underline">
            Github
          </a>{" "}
          and feel free to contribute. Let's connect! 🚀 I would be happy to
          network with you. Say hello at{" "}
          <a href="mailto:tobias@tobcraft.xyz" className="underline">
            tobias@tobcraft.xyz
          </a>
          .
        </div>
      </div>
      <button className="bg-gradient-to-r from-blue-500 to-purple-500 font-semibold rounded-full p-[2px] mt-8 md:ml-40">
        <span
          className="flex items-center transition-all uppercase font-semibold w-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 bg-white dark:bg-[#121212] dark:text-white hover:text-white text-base rounded-full p-2 px-8 text-[rgb(10,37,64)]"
          onClick={handleMyProjects}
        >
          My Projects <ChevronRight />
        </span>
      </button>
    </div>
  )
}

export default Intro
