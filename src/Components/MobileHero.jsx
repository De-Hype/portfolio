

import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import {
  IoLogoWhatsapp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMdDocument,

} from "react-icons/io";
import {FaArrowRight, FaMedium} from "react-icons/fa6";
import me from "@/assets/me.jpg";

const MobileHero = () => {
  return (
    <header className="h-full flex flex-col px-5 pt-3  w-full gap-3 ">
        <section className="flex items-center justify-between">
          <h3 className="text-lg font-bold cursor-pointer">Hype.</h3>
          <section className="">
            <FaToggleOff className="text-lg font-bold cursor-pointer" />
          </section>
        </section>

        <section className="flex flex-col gap-1">
          <h4 className="text-lg laptop:text-sm font-semibold self-center ">
            Hello, I&apos;m David Hype
          </h4>
          <Image
            className="h-40 w-40 object-fill rounded-full self-center border-black p-3 border-3"
            src={me}
            alt="An image of David Hype"
          />

          <h3 className="text-lg laptop:text-base font-semibold self-center ">
            <Typewriter
              options={{
                strings: [
                  "Fullstack Javascript Developer",
                  "Technical Writer",
                  "Solution Provider",
                  "Otaku",
                ],
                autoStart: true,
                loop: true,
                cursor: "|",
                wrapperClassName: "self-center text-lg laptop:text-sm font-bold  mb-2",
              }}
            />
          </h3>

          <p className="text-center text-sm laptop:text-xs">
          I&apos;m a passionate software developer, dedicated to create beautiful
            and scalable experiences with Javascript/Typescript.
          </p>
        </section>
        <Link
          href="/"
          className="bg-black  text-white flex items-center gap-2 self-center px-4 rounded-md py-2"
        >
          <span className="text-xs">View CV</span>
          <span>
            <IoMdDocument className="text-xl skew-x-12" />
          </span>
        </Link>
        <section className="mx-auto flex items-center gap-3">
          <Link href="https://github.com/De-Hype" className="">
            <IoLogoGithub className="text-2xl" />
          </Link>
          <Link href="/" className="">
            <IoLogoLinkedin className="text-2xl" />
          </Link>
          <Link href="/" className="">
            <IoLogoWhatsapp className="text-2xl" />
          </Link>
          <Link href="/" className="">
            <FaMedium className="text-2xl" />
          </Link>
        </section>
        </header>
  )
}

export default MobileHero