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
import React from "react"
interface ProjectProps {
  name: string
  description: React.ReactNode
  image: React.ReactNode
  footer: string
}

const Project = ({ name, description, image, footer }: ProjectProps) => {
  return (
    <div>
      <Card className="h-[420px]">
        <CardContent className="flex justify-center items-center overflow-hidden h-32 m-5 p-0 rounded-lg">
          {image}
        </CardContent>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardFooter className="text-slate-500">{footer}</CardFooter>
      </Card>
    </div>
  )
}

export default Project
