import { Code2 } from "lucide-react"
import Skill from "./skill"

interface SkillsProps {}

const Skills = () => {
  return (
    <div className="group h-[45vh] w-full flex flex-col items-center">
      <h1 className="text-2xl translate-x-[-10vw] md:translate-x-[-25vw] nunito-font text-[#a1a1a1] mb-10">
        MY TECH SKILLS
      </h1>
      {/* First line */}
      <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-x-16 gap-y-16">
        <Skill icon={<Code2 size={48} />} name="HTML/JSX" progress={100} />
        <Skill
          icon={<Code2 size={48} />}
          name="Javascript/Typescript"
          progress={95}
        />
        <Skill
          icon={<Code2 size={48} />}
          name="CSS Tailwind/Style"
          progress={100}
        />
        <Skill icon={<Code2 size={48} />} name="HTML/JSX" progress={100} />
        <Skill icon={<Code2 size={48} />} name="HTML/JSX" progress={100} />
        <Skill icon={<Code2 size={48} />} name="HTML/JSX" progress={100} />
      </div>
    </div>
  )
}

export default Skills
