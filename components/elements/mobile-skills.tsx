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

const MobileSkills = () => {
  return (
    <div className="md:hidden p-8 space-y-8 mb-8">
      <div className="drop-shadow-2xl bg-white dark:bg-slate-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4">
        <Skill icon={<Atom size={24} />} name="Frontend/NextJS" progress={95} />
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
      <div className="drop-shadow-2xl bg-white dark:bg-slate-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4">
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
      <div className="drop-shadow-2xl bg-white dark:bg-slate-950 rounded-3xl lg:w-[22vw] p-8 border-slate-200 dark:border-slate-800 border-[1px] space-y-4">
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
  )
}

export default MobileSkills
