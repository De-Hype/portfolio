import { FaStar } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import picture from "@/assets/picture.jpg";
import flixcart from "@/assets/flixcart.jpg";
import migibio from "@/assets/migibio.jpg";
import edcircle from "@/assets/edcircle.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <section className="pt-3 projects" id="projects" >
      <h3 className=" text-lg flex items-center gap-3 font-semibold pb-2">
        <FaStar />
        Projects
      </h3>
      <section className="grid grid-cols-2 pad:grid-cols-1 gap-4">
        <aside data-aos="fade-up" className="min-h-[250px] flex flex-col w-full p-3 border cursor-pointer gap-2">
          <Image
            className="h-1/2 w-full  self-center border-black "
            src={flixcart}
            alt="An image of David Hype"
          />
          <section className="h-full w-full flex flex-col gap-2">
            <p className="font-bold text-">
              Flixcart (An e-commerce web application)
            </p>
            <p className="font-extralight text-xs">
              An e-commerce website built where users can shop for cars of their
              choose. To proceed to checkout, you will need to sign up, or/and
              log in your account.
            </p>

            <section className="flex w-full flex-wrap gap-2 mb-auto">
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                React.js
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                TailwindCSS
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Node
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Express
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                MongoDB
              </button>
            </section>
            <section className="flex items-center justify-between w-full gap-2 ">
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="/"
              >
                <IoLogoGithub />
              </Link>
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="/"
              >
                <IoEyeSharp />
              </Link>
            </section>
          </section>
        </aside>

        <aside data-aos="fade-up" className="min-h-[250px] flex flex-col w-full p-3 border cursor-pointer gap-2">
          <Image
            className="h-1/2 w-full  self-center border-black "
            src={picture}
            alt="An image of David Hype"
          />
          <section className="h-full w-full flex flex-col gap-2">
            <p className="font-bold text-">Property Pulse</p>
            <p className="font-extralight text-xs">
              A real estate marketplace where only registered users can list any
              real estate property they want, and make it available to other
              customers.
            </p>

            <section className="flex w-full flex-wrap gap-2 mb-auto">
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                React.js
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                TailwindCSS
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Typescript
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Firebase
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Node
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Express
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                MongoDB
              </button>
            </section>
            <section className="flex items-center justify-between w-full gap-2 ">
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="/"
              >
                <IoLogoGithub />
              </Link>
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="/"
              >
                <IoEyeSharp />
              </Link>
            </section>
          </section>
        </aside>

        <aside data-aos="fade-up" className="min-h-[250px] flex flex-col w-full p-3 border cursor-pointer gap-2">
          <Image
            className="h-1/2 w-full  self-center border-black "
            src={picture}
            alt="An image of David Hype"
          />
          <section className="h-full w-full flex flex-col gap-2">
            <p className="font-bold text-">Centauri Blog</p>
            <p className="font-extralight text-xs">
              A content management system where users can read blog post made by
              others, if and only if they are registered and can also create their own content.
            </p>

            <section className="flex w-full flex-wrap gap-2 mb-auto">
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                React.js
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                TailwindCSS
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Node
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Express
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                MongoDB
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Firebase
              </button>
            </section>
            <section className="flex items-center justify-between w-full gap-2 ">
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="/"
              >
                <IoLogoGithub />
              </Link>
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="https://centauri-sooty.vercel.app/"
              >
                <IoEyeSharp />
              </Link>
            </section>
          </section>
        </aside>

        <aside data-aos="fade-up" className="min-h-[250px] flex flex-col w-full p-3 border cursor-pointer gap-2">
          <Image
            className="h-1/2 w-full  self-center border-black "
            src={picture}
            alt="An image of David Hype"
          />
          <section className="h-full w-full flex flex-col gap-2">
            <p className="font-bold text-">Siblychat</p>
            <p className="font-extralight text-xs">
              A chat application that uses the websocket protocol. Users can
              create and log in accounts. And can also message other users of
              the app via their ID.
            </p>

            <section className="flex w-full flex-wrap gap-2 mb-auto">
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                React.js
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                TailwindCSS
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Node.js
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Redis
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                MongoDB
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Firebase
              </button>
            </section>
            <section className="flex items-center justify-between w-full gap-2 ">
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="/"
              >
                <IoLogoGithub />
              </Link>
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="https://sibly-app.vercel.app"
              >
                <IoEyeSharp />
              </Link>
            </section>
          </section>
        </aside>

        <aside data-aos="fade-up" className="min-h-[250px] flex flex-col w-full p-3 border cursor-pointer gap-2">
          <Image
            className="h-1/2 w-full  self-center border-black "
            src={migibio}
            alt="An image of David Hype"
          />
          <section className="h-full w-full flex flex-col gap-2">
            <p className="font-bold text-">Migibio AI Generator</p>
            <p className="font-extralight text-xs">
              An An application that generates social bios for users. Users will
              need to register and log in account before they can use it.
            </p>

            <section className="flex flex-wrap w-full gap-2 mb-auto">
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Next.js
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                TailwindCSS
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                OpenAI
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Node
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                Express
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                MongoDB
              </button>
            </section>
            <section className="flex items-center justify-between w-full gap-2 ">
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="/"
              >
                <IoLogoGithub />
              </Link>
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="https://frontend-migibio.vercel.app"
              >
                <IoEyeSharp />
              </Link>
            </section>
          </section>
        </aside>

        <aside data-aos="fade-up" className="min-h-[250px] flex flex-col w-full p-3 border cursor-pointer gap-2">
          <Image
            className="h-1/2 w-full  self-center border-black "
            src={edcircle}
            alt="An image of David Hype"
          />
          <section className="h-full w-full flex flex-col gap-2">
            <p className="font-bold text-">Ed-Circle</p>
            <p className="font-extralight text-xs">
              A landing page for an education website. Was designed by Shoaib
              and built by David Hype
            </p>

            <section className="flex flex-wrap w-full gap-2 mb-auto">
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                React.js
              </button>
              <button
                type="button"
                className="hover:bg-black hover:text-white border-black border outline-none bg-white  text-xs text-nowrap rounded-sm px-2 py-1"
              >
                TailwindCSS
              </button>
            </section>
            <section className="flex items-center justify-between w-full gap-2 ">
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="/"
              >
                <IoLogoGithub />
              </Link>
              <Link
                className="border-black border py-1 px-3 bg-black text-white rounded"
                href="/"
              >
                <IoEyeSharp />
              </Link>
            </section>
          </section>
        </aside>
      </section>
    </section>
  );
};

export default Projects;
