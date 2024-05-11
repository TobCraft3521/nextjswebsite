import LinksBar from "./linksbar"

interface LinksProps {}

const Links = () => {
  return (
    <div className="group w-full flex flex-col items-center mt-16 p-12 mb-20 md:mb-0 bg-fixed bg-cover relative">
      <div className="w-[15vw] blur-[45px] rounded-full h-16 absolute bg-black/30 -z-50 top-14 "></div>
      <h1 className="text-2xl nunito-font text-[rgb(10,37,64)] dark:text-[#a1a1a1] mb-4 font-bold">
        SOME LINKS
      </h1>
      <LinksBar orientation="horizontal" />
    </div>
  )
}

export default Links
