import useSmoothScroll from "@/lib/SectionRef";
import { Link as Scroll } from "react-scroll";
const FloatingNavigations = () => {
  const handleClick = () => {
    console.log("Handle click made");
  };
  return (
    <nav className="flex  w-full mx-auto items-center justify-between py-2 px-3 rounded-md border  bg-white ">
      <Scroll
        to="about"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleClick}
        className=" text-xs cursor-pointer transition-all  hover:text-slate-500"
      >
        About
      </Scroll>

      <Scroll
        to="experience"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleClick}
        className=" text-xs cursor-pointer transition-all  hover:text-slate-500 "
      >
        Experience
      </Scroll>

      <Scroll
        to="skills"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleClick}
        className=" text-xs cursor-pointer transition-all   hover:text-slate-500"
      >
        Skills
      </Scroll>

      <Scroll
        to="projects"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleClick}
        className=" text-xs cursor-pointer transition-all  hover:text-slate-500"
      >
        Projects
      </Scroll>

      <Scroll
        to="writings"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={handleClick}
        className=" text-xs cursor-pointer transition-all  hover:text-slate-500"
      >
        Writings
      </Scroll>
      <Scroll
        to="contacts"
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
        onClick={handleClick}
        className=" text-xs cursor-pointer transition-all  hover:text-slate-500"
      >
        Contacts
      </Scroll>
    </nav>
  );
};

export default FloatingNavigations;
