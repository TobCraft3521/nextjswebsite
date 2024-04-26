import Image from "next/image"
import Project, { ProjectProps } from "./project"
import DiscordBanner from "/public/imgs/discord-banner.jpg"
import EcommerceBanner from "/public/imgs/ecommerce-banner.jpg"
import NotionCloneBanner from "/public/imgs/notion-banner.jpg"
import SpotifyBanner from "/public/imgs/spotify-banner.jpg"
import TobcraftXyzBanner from "/public/imgs/tobcraftxyz-banner.jpg"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import MoreBanner from "/public/imgs/muchmore.jpg"

interface ProjectsProps {}

const projects: ProjectProps[] = [
  {
    name: "E-commerce Store",
    description:
      "An e-commerce store created using Next.js, Stripe, ... with a custom admin dashboard and much more.",
    footer: "Youtube turorial by JSMastery",
    image: <Image src={EcommerceBanner} className="rounded-xl" alt="" />,
    link: "https://github.com/TobCraft3521/ecommerce",
  },
  {
    name: "Discord Clone",
    description:
      "A fully functional discord clone with realtime chat, voice chat, video chat, invite links and much more.",
    footer: "Youtube turorial by Code With Antonio",
    image: <Image src={DiscordBanner} className="rounded-xl" alt="" />,
    link: "https://github.com/TobCraft3521/discord-clone",
  },
  {
    name: "This insane Site",
    description:
      "My own personal website to showcase my skills and projects: fully responsive, dark and light mode, playground area, and much more.",
    footer: "Dope design, right? 🔥 - I love it!",
    image: <Image src={TobcraftXyzBanner} className="rounded-xl" alt="" />,
    link: "https://github.com/TobCraft3521",
  },

  {
    name: "Spotify Clone",
    description:
      "A fully functional spotify clone with liked songs library, playlists, search, and much more.",
    footer: "Youtube turorial by Code With Antonio",
    image: <Image src={SpotifyBanner} className="rounded-xl" alt="" />,
    link: "https://github.com/TobCraft3521/spotify-clone-nextjs",
  },
  {
    name: "Notion Clone",
    description:
      "A Notion clone with realtime cursors, diffrently charged accounts as well as a very cool landing page. admin dashboard and much more.",
    footer: "Youtube turorial by Web Prodigies",
    image: (
      <Image
        src={NotionCloneBanner}
        className="rounded-xl scale-[135%]"
        alt=""
      />
    ),
    link: "https://github.com/TobCraft3521/notion-clone",
  },
  {
    name: "More Projects",
    description:
      "I am also doing some AI, math or other mini projects to learn new stuff and try out new things. You might find some on my github.",
    footer: "TensorflowJS, shaders, simulations, ...",
    image: <Image src={MoreBanner} className="rounded-xl" alt="" />,
    link: "",
  },
]

const Projects = () => {
  return (
    <div
      className="group w-full flex flex-col items-center bg-fixed bg-cover p-8"
      style={{
        // clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0% 100%)",
        backgroundImage: "url('/imgs/backgrounds/bggradientpurple.webp')",
      }}
    >
      <h1 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
        My Coding Projects
      </h1>
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
