import {FaStar} from "react-icons/fa"
import { SkillData } from "@/lib/SkillData";

export const Skills = () => {
  return (
    <section className="pt-3 skills" id="skills">
      <h3 className=" text-lg font-semibold pb-2 flex items-center gap-3"><FaStar/> Skillset</h3>
      <section className="">
        {SkillData.map((skills) => (
          <button
            type="button"
            key={skills.id}
            className="hover:bg-black hover:text-white border-black border outline-none bg-white m-2 text-xs text-nowrap rounded-sm px-2 py-1"
          >
            {skills.skill}
          </button>
        ))}
      </section>
    </section>
  );
};
