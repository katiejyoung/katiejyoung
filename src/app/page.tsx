'use client';
import { HiOutlineMoon } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import Header from "./components/header";
import About from "./components/about";
import Logo from "./components/logo";
import { useState } from "react";

export default function Home() {
  const [showHeader, setShowHeader] = useState(true);

  const handleAboutClick = () => {
    setShowHeader(!showHeader);
  };

  return (
    <div>
      {!showHeader &&
        <Logo />
      }
    <div className="grid items-center justify-items-center pb-20 md:gap-16">
      <main className="flex flex-col gap-8 items-center">
      {showHeader ? 
        <Header /> : <About />
      }
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div onClick={handleAboutClick} className="flex items-center gap-2 hover:underline hover:underline-offset-4 cursor-pointer">
          <HiOutlineMoon color="#94a3b8" />
          About
        </div>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="mailto:katiejanelle3&#64;gmail&#46;com">
          <HiOutlineStar color="#94a3b8" />
          Contact
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/kyoung-resume.pdf" 
          download="katie_young_FSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiSun color="#94a3b8" />
          Download Resume →
        </a>
      </footer>
    </div>
    </div>
  );
}
