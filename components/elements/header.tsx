import { Home, LinkIcon } from "lucide-react"
import Image from "next/image"
import Icon from "/public/imgs/hand.jpg"
import Link from "next/link"

interface HeaderProps {}

const Header = () => {
  return (
    <header className="flex justify-center items-center p-5 md:justify-between mt-2 md:mt-0">
      <div className="flex flex-row gap-5 items-center md:pl-10">
        <div className="h-min overflow-hidden rounded-full">
          <Image
            src={Icon}
            width={50}
            height={50}
            alt="Icon"
            className="rounded-full hover:scale-125 transition-all duration-500 cursor-pointer"
          />
        </div>

        <div className="font-semibold text-2xl text-[#ced7db]">
          tobcraft.xzy
        </div>
      </div>
      <div className="text-[#a1a1a1]  flex-row gap-5 text-xl font-semibold mr-10 hidden md:flex">
        <Link href={""}>Skills</Link>
        <Link href={""}>Projects</Link>
        <Link href={""}>Projects</Link>
        <Link href={""}>Skills</Link>
      </div>
    </header>
  )
}

export default Header
