import Link from "next/link"
import React from "react"
export interface ProjectProps {
  name: string
  description: string
  footer: string
  link: string
}

const Project = ({ name, description, footer, link }: ProjectProps) => {
  return (
    <Link href={link}>
      <div className="h-[270px] flex items-stretch flex-col p-8 rounded-xl bg-white dark:bg-[#141414] drop-shadow-xl">
        {/* <div className="flex justify-center items-center overflow-hidden h-32 mb-4 p-0">
          {image}
        </div> */}
        <div>
          <h1 className="text-xl font-semibold text-[rgb(10,37,64)] dark:text-white mb-2">
            {name}
          </h1>
          <p className="text-sm text-[rgb(10,37,64)] dark:text-white font-light">
            {description}
          </p>
        </div>
        <p className="text-[rgb(10,37,64)] dark:text-white mt-auto text-xs">
          {footer}
        </p>
      </div>
    </Link>
  )
}

export default Project
