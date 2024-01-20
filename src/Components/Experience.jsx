import { FaStar } from "react-icons/fa";

export const Experience = () => {
  return (
    <main className="pt-3 experience" id="experience">
      <h3 className=" text-lg font-semibold pb-6 flex items-center gap-3">
        <FaStar /> Experience
      </h3>
      <section className="flex flex-col gap-6">
        <aside className="flex flex-col gap-1">
          <h4 className="font-bold text-slate-900">Frontend Developer</h4>
          <h3 className="font-extrabold">DalensAI</h3>
          <h5 className="font-semibold text-slate-500">2023 - Present</h5>
          <p className="text-sm">
            As a Frontend Developer at Dalensai, I played a pivotal role in
            advancing our AI-driven livestock platform. Leveraging React.js and
            Tailwind CSS, I skillfully implemented robust website routing,
            optimizing user journeys. Engaging with a pre-existing codebase, I
            showcased adaptability and seamlessly integrated into the team.
            Collaborating across departments, I contributed to a cohesive user
            experience. Noteworthy achievements include a 90% proficiency in
            implementing website routing and an 85% rating for codebase
            integration and collaboration. My commitment to detail and
            problem-solving skills significantly elevated the quality of our
            frontend development.
          </p>
        </aside>
        <aside className="flex flex-col gap-1">
          <h4 className="font-bold text-slate-900">Technical Writer</h4>
          <h3 className="font-extrabold">SmileDevs Community</h3>
          <h5 className="font-semibold text-slate-500">2023 - 2023</h5>
          <p className="text-sm">
            Achieved a 90% increase in knowledge within the SmilleDevs community
            by creating informative content on frontend technologies, fostering
            growth and enhancing the understanding of new members.
          </p>
        </aside>
        <aside className="flex flex-col gap-1">
          <h4 className="font-bold text-slate-900">SEO Content Writer</h4>
          <h3 className="font-extrabold">Naijaventure</h3>
          <h5 className="font-semibold text-slate-500">2021 - 2023</h5>
          <p className="text-sm">
            As the SEO content Writer for Naijaventure, mastered SEO techniques
            leading to a substantial 80% improvement in content rankings.
            Contributed significantly to the blogs visibility, enhancing online
            presence by 75% through strategic content and optimization.
          </p>
        </aside>
      </section>
    </main>
  );
};
