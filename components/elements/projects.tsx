import Project, { ProjectProps } from "./project"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

interface ProjectsProps {}

const projects: ProjectProps[] = [
  {
    name: "Aktionstage App",
    description:
      "A complex web app for my school to manage summer projects ☀️, including room, teacher and project management 📊, and cross page animations ✨.",
    footer: "Click to star or contribute on GitHub!",
    link: "https://github.com/tobcraft3521/aktionstage",
  },
  {
    name: "Discord Clone",
    description:
      "A fully functional discord clone with realtime chat 💬, voice chat, video chat 🎥, invite links 🔗 and much more.",
    footer: "Youtube turorial by Code With Antonio",
    link: "https://github.com/TobCraft3521/discord-clone",
  },
  {
    name: "LinguaPro",
    description:
      "The next-gen language learning platform 🌍 with a wide variety of tasks including AI 🤖 listening, word matching, gap texts, and much more.",
    footer: "100% by me. Make sure to star it on GitHub!",
    link: "https://linguapro.vercel.app",
  },
  {
    name: "E-commerce Store",
    description:
      "An e-commerce store 🏪 created using Next.js, Stripe 💵, ... with a custom admin dashboard and much more.",
    footer: "Youtube turorial by JSMastery",
    link: "https://github.com/TobCraft3521/ecommerce",
  },
  {
    name: "Notion Clone",
    description:
      "A Notion clone with realtime cursors 🖱️, diffrently charged accounts 💳 as well as a very cool landing page. admin dashboard and much more.",
    footer: "Youtube turorial by Web Prodigies",

    link: "https://github.com/TobCraft3521/notion-clone",
  },
  {
    name: "Spotify Clone",
    description:
      "A fully functional spotify clone 🎵 with liked songs library, playlists 📃, search 🔍, and much more.",
    footer: "Youtube turorial by Code With Antonio",
    link: "https://github.com/TobCraft3521/spotify-clone-nextjs",
  },
  {
    name: "This insane Site",
    description:
      "My own personal website to showcase my skills and projects: fully responsive, dark and light mode, cool animations, and much more.",
    footer: "Dope design, right? 🔥 - I love it!",
    link: "https://github.com/TobCraft3521",
  },
  {
    name: "More Projects",
    description:
      "I am also doing some AI 🤖, math or other mini projects to learn new stuff and try out new things. You might find some (not all) on my github.",
    footer: "TensorflowJS, shaders, simulations, ...",
    link: "",
  },
]

const Projects = () => {
  return (
    <div
      className="group w-full flex flex-col items-center bg-fixed bg-cover p-16 projects drop-shadow-2xl"
      style={{
        // clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
        backgroundImage: "url('/imgs/backgrounds/bggradientpurple.webp')",
      }}
    >
      <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
        My Coding Projects
      </h1>
      <p className="mt-2 text-xl text-gray-300 mb-4">
        These are some of my large Next.js fullstack projects I made.{" "}
        <span className="font-extrabold text-white">Make sure to star ⭐</span>{" "}
        them on GitHub and follow me there!
      </p>
      <br />
      <div className="flex">
        <Carousel
          opts={{ loop: true, align: "start" }}
          className="w-full xl:max-w-5xl max-w-[70vw]"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                key={index}
              >
                <Project {...project} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Projects
