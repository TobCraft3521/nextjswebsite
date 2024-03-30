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
      <Card className="h-[470px] flex items-stretch flex-col">
        <CardContent className="flex justify-center items-center overflow-hidden h-32 m-5 p-0">
          {image}
        </CardContent>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="text-[#425466] mt-auto">{footer}</CardFooter>
      </Card>
    </Link>
  )
}

export default Project
