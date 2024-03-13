import React from "react"

interface SkillProps {
  name: string
  progress: number
  icon: React.ReactNode
}

const Skill = ({ progress, icon, name }: SkillProps) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="text-[#4c9cab]">{icon}</div>
      <div className="font-bold text-2xl text-[#9c9c9c]">{name}</div>
    </div>
  )
}

//#662D8C → #ED1E79 gradient for progress bar

export default Skill
