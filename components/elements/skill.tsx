import React from "react"

interface SkillProps {
  name: string
  progress: number
  icon: React.ReactNode
}

const Skill = ({ progress, icon, name }: SkillProps) => {
  return (
    <div className="w-full md:w-[40vw] lg:w-[18vw]">
      <div className="flex flex-row items-center gap-4">
        <div className="text-[#00eeff]">{icon}</div>
        <div className="font-bold text-xl text-[rgb(10,37,64)] dark:text-slate-100">
          {name}
        </div>
      </div>
      {/* Progress bar */}
      <div className="flex justify-center w-full mt-2">
        <div className="mt-2 rounded-full w-[100%] bg-[rgba(10,37,64,0.14)] dark:bg-slate-900 h-4">
          <div
            className={
              "h-4 rounded-full bg-[rgb(10,37,64)] dark:bg-slate-800 relative"
            }
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

//#662D8C → #ED1E79 gradient for progress bar

export default Skill
