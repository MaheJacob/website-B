import Image from "next/image";
import { useState } from "react";
import Hero from '../components/Hero';
import Header from "@/components/Header";
import About from '@/components/About'
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"
import Project from '@/components/Project'


export default function Home() {
  return (
    <div className="">
    <Header />
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
    </main>
    <Footer/>
  </div>
  );
}
