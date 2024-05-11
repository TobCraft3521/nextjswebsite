"use client"
import {
  Atom,
  Brackets,
  Cpu,
  Gauge,
  Github,
  HardDriveUpload,
  Hash,
  ListMinus,
} from "lucide-react"
import Skill from "./skill"
import { useEffect, useState } from "react"

interface SkillsProps {}

const Skills = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setScrollPosition(scrollTop)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <div className="absolute top-[20vh] right-0 w-[60vw] hidden lg:flex">
      {/* <h1 className="text-2xl nunito-font translate-x-[16vw] text-[rgb(10,37,64)] md:text-white mb-10 font-bold">
        MY TECH SKILLS
      </h1> */}
      <div className="w-[60vw] relative">
        <div
          style={{
            transform: `translateX(${scrollPosition}px)`,
          }}
          className="drop-shadow-2xl skills bg-white dark:bg-zinc-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4 absolute left-[2vw]"
        >
          <Skill icon={<Atom size={24} />} name="React/NextJS" progress={90} />
          <Skill
            icon={<Brackets size={24} />}
            name="Java-/Typescript"
            progress={90}
          />
          <Skill
            icon={<Hash size={24} />}
            name="Tailwind-CSS/Style"
            progress={80}
          />
        </div>
        <div
          style={{
            transform: `translateX(${scrollPosition * 2.5}px)`,
          }}
          className="drop-shadow-2xl skills2 bg-white dark:bg-zinc-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4 absolute top-[4vh] left-[28vw]"
        >
          <Skill
            icon={<HardDriveUpload size={24} />}
            name="Hosting/Linux/Computers"
            progress={70}
          />
          <Skill icon={<Github size={24} />} name="Git/-hub" progress={85} />
          <Skill
            icon={<Gauge size={24} />}
            name="Shorstcuts/Universal"
            progress={85}
          />
        </div>
        <div
          style={{
            transform: `translateX(${scrollPosition * 2}px)`,
          }}
          className="drop-shadow-2xl skills3 bg-white dark:bg-zinc-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4 absolute top-[42vh] left-[8vw]"
        >
          <Skill icon={<ListMinus size={24} />} name="Python" progress={50} />
          <Skill
            icon={<Cpu size={24} />}
            name="Hardware/Tech-stuff"
            progress={40}
          />
        </div>
      </div>
    </div>
  )
}

export default Skills

/* <Skill icon={<Atom size={24} />} name="React/NextJS" progress={90} />
<Skill
  icon={<Brackets size={24} />}
  name="Java-/Typescript"
  progress={90}
/>
<Skill
  icon={<Hash size={24} />}
  name="Tailwind-CSS/Style"
  progress={80}
/>
<Skill
  icon={<HardDriveUpload size={24} />}
  name="Hosting/Linux/Computers"
  progress={70}
/>
<Skill icon={<Github size={24} />} name="Git/-hub" progress={85} />
<Skill
  icon={<Gauge size={24} />}
  name="Shorstcuts/Universal"
  progress={85}
/>
<Skill icon={<ListMinus size={24} />} name="Python" progress={60} />
<Skill
  icon={<Cpu size={24} />}
  name="Hardware/Tech-stuff"
  progress={50}
/> */
