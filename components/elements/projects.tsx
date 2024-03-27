import Image from "next/image"
import Project from "./project"
import Icon from "/public/imgs/hand.jpg"

interface ProjectsProps {}

const Projects = () => {
  return (
    <div className="group min-h-[45vh] w-full flex flex-col items-center">
      <h1 className="text-2xl translate-x-[10vw] md:translate-x-[20vw] nunito-font text-slate-500 dark:text-[#a1a1a1] mb-10 font-semibold">
        SOME CODING PROJECTS
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <Project
          name="E-commerce store"
          description={
            <>
              An e-commerce store created using Next.js, Stripe, ... with a
              custom{" "}
              <p className="bg-gradient-to-r font-semibold from-[#00ffea] to-[#00ff44] text-transparent bg-clip-text">
                admin dashboard
              </p>{" "}
              and much more.
            </>
          }
          footer="Youtube turorial by JSMastery"
          image={<Image src={Icon} className="" alt="" />}
        />
        <Project
          name="Notion Clone"
          description={
            <>
              A Notion clone with realtime cursors, diffrently charged accounts
              aswell as a very cool landing page.{" "}
              <p className="bg-gradient-to-r font-semibold from-[#00ffea] to-[#00ff44] text-transparent bg-clip-text">
                admin dashboard
              </p>{" "}
              and much more.
            </>
          }
          footer="Youtube turorial by Web Prodigies"
          image={<Image src={Icon} className="" alt="" />}
        />
        <Project
          name="E-commerce store"
          description={
            <>
              An e-commerce store created using Next.js, Stripe, ... with a
              custom{" "}
              <p className="bg-gradient-to-r font-semibold from-[#00ffea] to-[#00ff44] text-transparent bg-clip-text">
                admin dashboard
              </p>{" "}
              and much more.
            </>
          }
          footer="Youtube turorial by JSMastery"
          image={<Image src={Icon} className="" alt="" />}
        />
      </div>
    </div>
  )
}

export default Projects
