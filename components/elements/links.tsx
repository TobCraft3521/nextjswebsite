import LinksBar from "./linksbar"

interface LinksProps {}

const Links = () => {
  return (
    <div className="group md:min-h-[45vh] w-full flex flex-col items-center md:hidden mt-8 mb-20">
      <h1 className="text-2xl md:translate-x-[-20vw] nunito-font text-[rgb(10,37,64)] dark:text-[#a1a1a1] mb-12 font-semibold">
        SOME LINKS
      </h1>
      <LinksBar />
    </div>
  )
}

export default Links
