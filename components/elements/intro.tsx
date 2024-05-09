import Image from "next/image"
import Hand from "@/public/imgs/hand.jpg"

const Intro = () => {
  return (
    <div className="ml-[10vw]">
      <h1 className="text-2xl md:translate-x-[4vw] nunito-font text-[rgb(10,37,64)] dark:text-white md:mb-4 font-bold text-center uppercase hidden md:flex">
        About me
      </h1>
      <div className="w-full flex flex-col md:flex-row md:justify-center md:items-center p-5 md:p-0 gap-8 md:max-w-[30vw] text-lg mb-16 relative">
        <div className="flex flex-row justify-center items-center gap-4">
          {/* <Image
            src={Hand}
            alt="hand icon"
            className="rounded-full w-16 md:w-20 absolute -left-20"
            width={128}
            height={128}
          /> */}
          <h1 className="md:hidden text-2xl font-bold">About me</h1>
        </div>
        <div className="">
          Hi, I am <span className="font-bold">Tobias</span>, Hobby Fullstack
          Software Developer from Germany. I'm currently learning{" "}
          <span className="font-bold">Next.js</span> as well as all the stuff
          around it for frontend and backend including TypeScript, TailwindCSS,
          webdesign, Prisma, DevOps and more. I'm also interested in other
          topics such as AI, iot, math and much more.
        </div>
      </div>
    </div>
  )
}

export default Intro
