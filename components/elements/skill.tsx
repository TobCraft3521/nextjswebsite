import React from "react"

interface SkillProps {
  name: string
  progress: number
  icon: React.ReactNode
}

const Skill = ({ progress, icon, name }: SkillProps) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <div className="text-[#ff5500]">{icon}</div>
        <div className="font-bold bg-gradient-to-r text-xl from-[#c5c5c5] to-[#c5c5c5] text-transparent bg-clip-text">
          {name}
        </div>
      </div>
      {/* Progress bar */}
      <div className="flex justify-center w-full mt-2">
        <div className="mt-2 rounded-full w-[90%] bg-slate-900 h-3 text-[#ff8800]">
          <div
            className={
              "w-[" +
              progress +
              "%] h-3 bg-white rounded-full bg-gradient-to-r from-[#ff2f00] to-[#ff8800]"
            }
          ></div>
        </div>
      </div>
    </div>
  )
}

//#662D8C → #ED1E79 gradient for progress bar

export default Skill
