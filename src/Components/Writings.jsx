import {FaStar} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import picture from "@/assets/picture.jpg";


export const Writings = () => {
  return (
    <section className="pt-3 writings" id="writings">
    <h3 className=" text-lg font-semibold pb-2 flex items-center gap-3"><FaStar/>Writings</h3>
    <section className="grid grid-cols-2 pad:grid-cols-1 gap-4">
    <aside className="h-52 w-full border transition-all cursor-pointer hover:shadow">
    <Image
            className="h-1/2 w-full  self-center border-black"
            src={picture}
            alt="An image of David Hype"
          />
    <section className="h-full w-full flex flex-col items-center">
      <h2 className="text-center font-bold">Understanding The Power Of Blockchain Technology</h2>
      
      <Link
            href='/'
          
            className="hover:bg-black hover:text-white font-semibold border-black border outline-none bg-white m-2 text-xs text-nowrap rounded-sm px-4 py-2"
          >
            Read More
          </Link>
          
          
     
    </section>
    </aside>
    
    <aside className="h-52 w-full border transition-all cursor-pointer hover:shadow">
    <Image
            className="h-1/2 w-full  self-center border-black"
            src={picture}
            alt="An image of David Hype"
          />
    <section className="h-full w-full flex flex-col items-center">
      <h2 className="text-center font-bold">Understanding The Power Of Blockchain Technology</h2>
      
      <Link
            href='/'
          
            className="hover:bg-black hover:text-white font-semibold border-black border outline-none bg-white m-2 text-xs text-nowrap rounded-sm px-4 py-2"
          >
            Read More
          </Link>
          
          
     
    </section>
    </aside>
    
    <aside className="h-52 w-full border transition-all cursor-pointer hover:shadow">
    <Image
            className="h-1/2 w-full  self-center border-black"
            src={picture}
            alt="An image of David Hype"
          />
    <section className="h-full w-full flex flex-col items-center">
      <h2 className="text-center font-bold">Understanding Blockchain Technology</h2>
      
      <Link
            href='/'
          
            className="hover:bg-black hover:text-white font-semibold border-black border outline-none bg-white m-2 text-xs text-nowrap rounded-sm px-4 py-2"
          > Read More
          </Link>
          
          
     
    </section>
    </aside>
    
    </section>
    </section>
    )
}
