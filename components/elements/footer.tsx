import Image from "next/image"
import Icon from "/public/imgs/hand.jpg"
import Link from "next/link"
import { Counter } from "./counter"

const Footer = () => {
  return (
    <footer className="w-full min-h-96 bg-zinc-100 dark:bg-zinc-950 p-8 z-20 text-[rgb(10,37,64)] dark:text-zinc-50 mt-20">
      <div className="h-min overflow-hidden rounded-full">
        <Image
          src={Icon}
          width={35}
          height={35}
          alt="Icon"
          className="rounded-full hover:scale-125 transition-all duration-500 cursor-pointer"
        />
      </div>
      <br />
      tobcraft.xyz
      <br />
      <br />
      <div className="flex gap-3 text-black dark:text-white font-semibold">
        <Link href="https://github.com/TobCraft3521">Github</Link>
        <Link href="https://discord.gg/65tNg6yEY7">Discord</Link>
        <Link href="https://www.tiktok.com/@tobcraft3521">TikTok</Link>
      </div>
      <br />
      <Counter />
    </footer>
  )
}

export default Footer
