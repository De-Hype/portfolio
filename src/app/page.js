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

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <main className="h-screen flex flex-col relative">
      <section className="w-full h-full flex relative">
        <section className="w-[30%] -z-50 h-full border-r fixed tablet:hidden">
          <Header />
        </section>
        <section className="w-[70%] tablet:w-full relative flex flex-col gap-8 h-full px-3 ml-auto tablet:mr-auto">
          <section className="tablet:block hidden fixed right-1.5 left-1.5 top-1.5 z-50">
            <FloatingNavigations />
          </section>
          <section className="tablet:block hidden mt-8" data-aos="fade-up">
            <MobileHero />
          </section>
          <section data-aos="fade-up">
            <About />
          </section>

          <section data-aos="fade-up">
            <Skills />
          </section>
          <section data-aos="fade-up">
            <Experience />
          </section>

          <section data-aos="fade-up">
            <Projects />
          </section>

          <section data-aos="fade-up">
            <Writings data-aos="fade-up" />
          </section>
          <section data-aos="fade-up">
            <Contact />
          </section>

          <Footer />
        </section>
      </section>
    </main>
  );
}
