"use client"
import TypeWriter, { TypewriterClass } from "typewriter-effect"

const Heading = () => {
  const setupTypewriter = (typewriter: TypewriterClass) => {
    typewriter
      .typeString("<span class='text-sky-400'>Fullstack Dev</span>")
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(1000)
      .typeString("<span class='text-red-400'>like Typescript</span>")
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(1000)
      .typeString("<span class='text-yellow-400'>speak German</span>")
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(1000)
      .typeString("<span class='text-sky-400'>speak French</span>")
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(1000)
      .typeString("<span class='text-orange-500'>speak English</span>")
      .pauseFor(1000)
      .deleteAll()
      .pauseFor(1000)
      .start()
  }
  return (
    <span className="text-black w-[700px]">
      <TypeWriter
        onInit={(typewriter) => setupTypewriter(typewriter)}
        options={{ loop: true }}
      />
    </span>
  )
}

export default Heading
