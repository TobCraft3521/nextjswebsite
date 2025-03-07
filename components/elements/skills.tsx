"use client"
import {
  Atom,
  Brackets,
  Cpu,
  Database,
  DollarSign,
  Gauge,
  GitFork,
  Github,
  HardDriveUpload,
  Hash,
  Layers,
  ListMinus,
  Server,
  Users,
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
      <div className="w-[60vw] relative">
        <div
          style={{
            transform: `translateX(${scrollPosition}px)`,
          }}
          className="drop-shadow-2xl skills bg-white dark:bg-zinc-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4 absolute left-[5vw]"
        >
          <Skill
            icon={<Atom size={24} />}
            name="Frontend/NextJS"
            progress={90}
          />
          <Skill
            icon={<Database size={24} />}
            name="Backend & Database"
            progress={85}
          />
          <Skill
            icon={<Layers size={24} />}
            name="Web Design & UI/UX"
            progress={70}
          />
        </div>
        <div
          style={{
            transform: `translateX(${scrollPosition * 2.5}px)`,
          }}
          className="drop-shadow-2xl skills2 bg-white dark:bg-zinc-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4 absolute top-[4vh] left-[32vw]"
        >
          <Skill
            icon={<Github size={24} />}
            name="Git & Workflow Optimization"
            progress={90}
          />
          <Skill
            icon={<GitFork size={24} />}
            name="DevOps & CI/CD"
            progress={65}
          />
          <Skill
            icon={<Server size={24} />}
            name="Deployment & Cloud"
            progress={50}
          />
        </div>
        <div
          style={{
            transform: `translateX(${scrollPosition * 2}px)`,
          }}
          className="drop-shadow-2xl skills3 bg-white dark:bg-zinc-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4 absolute top-[38vh] left-[8vw]"
        >
          <Skill
            icon={<Users size={24} />}
            name="Teamwork & Organization"
            progress={90}
          />
          <Skill
            icon={<DollarSign size={24} />}
            name="SaaS & Marketing"
            progress={60}
          />
        </div>
      </div>
    </div>
  )
}

export default Skills
