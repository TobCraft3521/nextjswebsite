import Image from "next/image"
import Project from "./project"
import EcommerceBanner from "/public/imgs/ecommerce-banner.jpg"
import DiscordBanner from "/public/imgs/discord-banner.jpg"
import NotionCloneBanner from "/public/imgs/notion-banner.jpg"
import TobcraftXyzBanner from "/public/imgs/tobcraftxyz-banner.jpg"
import SpotifyBanner from "/public/imgs/spotify-banner.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import { Card, CardContent } from "../ui/card"

interface ProjectsProps {}

const Projects = () => {
  return (
    <div className="group min-h-[45vh] w-full flex flex-col items-center">
      <h1 className="text-2xl md:translate-x-[20vw] nunito-font text-slate-500 dark:text-[#a1a1a1] mb-10 font-semibold">
        MY CODING PROJECTS
      </h1>
      <div className="flex">
        <Carousel
          opts={{ loop: true }}
          className="w-full xl:max-w-6xl max-w-[75vw]"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <Project
                name="E-commerce store"
                description={
                  <>
                    An e-commerce store created using Next.js, Stripe, ... with
                    a custom admin dashboard and much more.
                  </>
                }
                footer="Youtube turorial by JSMastery"
                image={<Image src={EcommerceBanner} className="" alt="" />}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <Project
                name="This insane Site"
                description={
                  <>
                    My own personal website to showcase my skills and projects:
                    fully responsive, dark and light mode, playground area, and
                    much more.
                  </>
                }
                footer="Youtube turorial by Code With Antonio"
                image={<Image src={TobcraftXyzBanner} className="" alt="" />}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <Project
                name="Discord Clone"
                description={
                  <>
                    A fully functional discord clone with realtime chat, voice
                    chat, video chat, invite links and much more.
                  </>
                }
                footer="Youtube turorial by Code With Antonio"
                image={<Image src={DiscordBanner} className="" alt="" />}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <Project
                name="Notion Clone"
                description={
                  <>
                    A Notion clone with realtime cursors, diffrently charged
                    accounts aswell as a very cool landing page. admin dashboard
                    and much more.
                  </>
                }
                footer="Youtube turorial by Web Prodigies"
                image={<Image src={NotionCloneBanner} className="" alt="" />}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/4">
              <Project
                name="Spotify Clone"
                description={
                  <>
                    A fully functional spotify clone with liked songs library,
                    playlists, search, and much more.
                  </>
                }
                footer="Youtube turorial by Code With Antonio"
                image={<Image src={SpotifyBanner} className="" alt="" />}
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Projects
