import React from "react"

interface SkillProps {
  name: string
  progress: number
  icon: React.ReactNode
}

const Skill = ({ progress, icon, name }: SkillProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="text-[#ff5500]">{icon}</div>
      <div className="font-bold bg-gradient-to-r text-xl from-[#c5c5c5] to-[#c5c5c5] text-transparent bg-clip-text">
        {name}
      </div>
    </div>
  )
}

//#662D8C → #ED1E79 gradient for progress bar

export default Skill
