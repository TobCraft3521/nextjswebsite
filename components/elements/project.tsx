import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { link } from "fs"
import Link from "next/link"
import React from "react"
export interface ProjectProps {
  name: string
  description: string
  image: React.ReactNode
  footer: string
  link: string
}

const Project = ({ name, description, image, footer, link }: ProjectProps) => {
  return (
    <Link href={link}>
      <div className="h-[230px] flex items-stretch flex-col p-8 rounded-3xl bg-white">
        {/* <div className="flex justify-center items-center overflow-hidden h-32 mb-4 p-0">
          {image}
        </div> */}
        <div>
          <h1 className="text-xl font-semibold text-[rgb(10,37,64)]">{name}</h1>
          <p className="text-sm text-[rgb(10,37,64)] font-light">
            {description}
          </p>
        </div>
        <p className="text-[rgb(10,37,64)] mt-auto text-xs">{footer}</p>
      </div>
    </Link>
  )
}

export default Project
