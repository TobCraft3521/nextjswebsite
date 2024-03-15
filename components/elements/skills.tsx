import {
  AArrowDown,
  Atom,
  Brackets,
  Code2,
  Gauge,
  Github,
  HardDriveUpload,
  Hash,
  ListMinus,
  Pen,
  Server,
} from "lucide-react"
import Skill from "./skill"

interface SkillsProps {}

const Skills = () => {
  return (
    <div className="group h-[45vh] w-full flex flex-col items-center">
      <h1 className="text-2xl translate-x-[-10vw] md:translate-x-[-20vw] nunito-font text-[#a1a1a1] mb-10 font-semibold">
        MY TECH SKILLS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8">
        <Skill icon={<Atom size={35} />} name="React/NextJS" progress={30} />
        <Skill
          icon={<Brackets size={35} />}
          name="Java-/Typescript"
          progress={95}
        />
        <Skill
          icon={<Hash size={35} />}
          name="TailwindCSS/Style"
          progress={100}
        />
        <Skill
          icon={<HardDriveUpload size={35} />}
          name="Hosting/Linux"
          progress={100}
        />
        <Skill icon={<Github size={35} />} name="Git/-hub" progress={100} />
        <Skill
          icon={<Gauge size={35} />}
          name="Shortcuts/Workflow"
          progress={100}
        />
        <Skill icon={<ListMinus size={35} />} name="Python" progress={100} />
        <Skill
          icon={<Code2 size={35} />}
          name="Hardware/Tech-stuff"
          progress={100}
        />
      </div>
    </div>
  )
}

export default Skills
