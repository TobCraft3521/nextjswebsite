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

interface SkillsProps {}

const Skills = () => {
  return (
    <div className="group w-full flex flex-col items-center mb-16 p-16 pt-8">
      <h1 className="text-2xl translate-x-[-10vw] md:translate-x-[-20vw] nunito-font text-[rgb(10,37,64)] dark:text-white mb-10 font-bold">
        MY TECH SKILLS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
        <Skill icon={<Atom size={27} />} name="React/NextJS" progress={90} />
        <Skill
          icon={<Brackets size={27} />}
          name="Java-/Typescript"
          progress={90}
        />
        <Skill
          icon={<Hash size={27} />}
          name="Tailwind-CSS/Style"
          progress={80}
        />
        <Skill
          icon={<HardDriveUpload size={27} />}
          name="Hosting/Linux/Computers"
          progress={70}
        />
        <Skill icon={<Github size={27} />} name="Git/-hub" progress={85} />
        <Skill
          icon={<Gauge size={27} />}
          name="Shorstcuts/Universal"
          progress={85}
        />
        <Skill icon={<ListMinus size={27} />} name="Python" progress={60} />
        <Skill
          icon={<Cpu size={27} />}
          name="Hardware/Tech-stuff"
          progress={50}
        />
      </div>
    </div>
  )
}

export default Skills
