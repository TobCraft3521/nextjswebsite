import Image from "next/image"
import Link from "next/link"
import ModeToggle from "../global/mode-toggle"
import Icon from "/public/imgs/hand.jpg"
interface HeaderProps {}

const Header = () => {
  return (
    <header className="top-0 absolute header z-50 w-full drop-shadow-2xl">
      <div className="flex justify-center items-center p-10 md:px-32 md:justify-between md:mt-0 top-0">
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

          <div className="font-semibold text-2xl text-[rgb(10,37,64)] dark:text-white hover:text-slate-300">
            tobcraft.xzy
          </div>
        </div>
        <div className="text-white dark:text-white flex-row gap-5 text-xl font-semibold mr-10 hidden md:flex justify-center items-center">
          <Link
            className="hover:text-slate-300 transition-all"
            href={"#skills"}
          >
            Skills
          </Link>
          <Link
            className="hover:text-slate-300 transition-all"
            href={"#projects"}
          >
            Projects
          </Link>
          <Link className="hover:text-slate-300 transition-all" href={"#links"}>
            Links
          </Link>
          <Link className="hover:text-slate-300 transition-all" href={"#more"}>
            More
          </Link>
          <span className="text-[rgb(10,37,64)]">
            <ModeToggle />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
