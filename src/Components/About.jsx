import {FaStar} from "react-icons/fa"

const About = () => {
  return (
    <section className="pt-3 about" id="about">
      <h3 className=" text-lg font-semibold pb-2 flex items-center gap-3"><FaStar/>About</h3>
      <aside className="flex flex-col gap-1">
        <article className=" text-sm">
          I&apos;m a passionate Fullstack developer with a strong proficiency in
          HTML, CSS, TailwindCSS, React.js, Next.js, Svelte, Node.js,
          Express.js, Typescript, and good ol&apos; Javascript. With a keen eye for
          clean code, and a knack for creating interactive interfaces,
          responsive and scalable web applications. I thrive on turning ideas
          into reality
        </article>
        <article className=" text-sm">
          In addition to the core technologies, i rely on tools like Git for
          version control, Postman for API testing, and Jest for testing. My aim
          is to create robust, scalable applications that stands the test of
          time.
        </article>
        <article className=" text-sm">
          Let&apos;s make a mark in the digital landscape, by connecting,
          collaborating, and bringing out outstanding web projects to life. If
          you have an exciting project or just want to chat about the latest in
          web development, and software engineering, feel free to reach out.
          Together, we can make the web a better place, one line of code at a
          time. And of course, with Naruto showing on the screen 😹🍿
        </article>
      </aside>
    </section>
  );
};

export default About;
