import { Home, LinkIcon } from "lucide-react"
import Image from "next/image"
import Icon from "/public/imgs/hand.jpg"
import Link from "next/link"
import ModeToggle from "../global/mode-toggle"
import BackgroundImage from "/public/imgs/background.png"
interface HeaderProps {}

const Header = () => {
  return (
    <header className="h-[25vh] md:h-[23vh] top-0 header z-50">
      <div className="flex justify-center items-center p-10 md:justify-between md:mt-0 sticky top-0">
        <div className="flex flex-row gap-5 items-center md:pl-10 ">
          <div className="h-min overflow-hidden rounded-full">
            <Image
              src={Icon}
              width={50}
              height={50}
              alt="Icon"
              className="rounded-full hover:scale-125 transition-all duration-500 cursor-pointer"
            />
          </div>

          <div className="font-semibold text-2xl dark:text-white text-[rgb(10,37,64)]">
            tobcraft.xzy
          </div>
        </div>
        <div className="text-[rgb(10,37,64)] dark:text-white flex-row gap-5 text-xl font-semibold mr-10 hidden md:flex justify-center items-center">
          <Link className="hover:text-white transition-all" href={"#skills"}>
            Skills
          </Link>
          <Link className="hover:text-white transition-all" href={"#projects"}>
            Projects
          </Link>
          <Link className="hover:text-white transition-all" href={"#links"}>
            Links
          </Link>
          <Link className="hover:text-white transition-all" href={"#more"}>
            More
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
