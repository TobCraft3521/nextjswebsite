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

const MobileSkills = () => {
  return (
    <div className="md:hidden p-8 space-y-8 mb-8">
      <div className="drop-shadow-2xl bg-white dark:bg-slate-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4">
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
      <div className="drop-shadow-2xl bg-white dark:bg-slate-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4">
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
      <div className="drop-shadow-2xl bg-white dark:bg-slate-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4">
        <Skill icon={<ListMinus size={24} />} name="Python" progress={60} />
        <Skill
          icon={<Cpu size={24} />}
          name="Hardware/Tech-stuff"
          progress={50}
        />
      </div>
    </div>
  )
}

export default MobileSkills
