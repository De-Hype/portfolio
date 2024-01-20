"use client";

import About from "@/Components/About";
import Contact from "@/Components/Contact";
import { Experience } from "@/Components/Experience";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Projects from "@/Components/Projects";
import MobileHero from "@/Components/MobileHero";
import FloatingNavigations from "@/Components/FloatingNavigations";
import { Skills } from "@/Components/Skills";
import { Writings } from "@/Components/Writings";
import useSmoothScroll from "@/lib/SectionRef";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const AboutRef = useRef(null);
  const SkillSetRef = useRef(null);
  const ExperienceRef = useRef(null);
  const ProjectRef = useRef(null);
  const WritingsRef = useRef(null);
  const ContactRef = useRef(null);
  const { scrollToRef } = useSmoothScroll();
  return (
    <main className="h-screen flex flex-col relative">
      <section className="w-full h-full flex relative">
        <section className="w-[30%] -z-50 h-full border-r fixed tablet:hidden">
          <Header scrollToRef />
        </section>
        <section className="w-[70%] tablet:w-full relative flex flex-col gap-8 h-full px-3 ml-auto tablet:mr-auto">
          <section className="tablet:block hidden fixed right-1.5 left-1.5 top-1.5 z-50">
            <FloatingNavigations scrollToRef />
          </section>
          <section className="tablet:block hidden mt-8">
            <MobileHero />
          </section>

          <About scrollToRef ={AboutRef}/>
          <Skills scrollToRef = {SkillSetRef} />
          <Experience scrollToRef = {ExperienceRef} />
          <Projects scrollToRef ={ProjectRef} />
          <Writings scrollToRef = {WritingsRef} />
          <Contact scrollToRef ={ContactRef}/>
          <Footer />
        </section>
      </section>
    </main>
  );
}
