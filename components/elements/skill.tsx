import React from "react"

interface SkillProps {
  name: string
  progress: number
  icon: React.ReactNode
}

const Skill = ({ progress, icon, name }: SkillProps) => {
  return (
    <div className="w-full md:w-[40vw] lg:w-[18vw] cursor-pointer skill">
      <div className="flex flex-row items-center gap-4">
        <div className="text-[rgb(10,37,64)] dark:text-white">{icon}</div>
        <div className="font-bold text-xl text-[rgb(10,37,64)] dark:text-slate-100 truncate">
          {name}
        </div>
      </div>
      {/* Progress bar */}
      <div className="flex justify-center w-full mt-2">
        <div className="mt-2 rounded-full w-[100%] bg-[#566778] dark:bg-slate-800 h-4 overflow-hidden">
          <div
            className={"h-4 rounded-full relative"}
            style={{
              width: `${progress}%`,
            }}
          >
            <div className="w-full bg-[rgb(10,37,64)] h-4 relative dark:bg-slate-600 rounded-full skillani"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

//#662D8C → #ED1E79 gradient for progress bar

export default Skill
