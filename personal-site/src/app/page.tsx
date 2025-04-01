import { HiOutlineMoon } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";
import { HiSun } from "react-icons/hi";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-8xl font-sans text-purple-800">Katie Young</p>
        <p className="text-xl">Full-Stack Software Engineer | B.S. Computer Science | B.A. English</p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href={`/api/auth/sign-in/`} className="flex items-center gap-2 hover:underline hover:underline-offset-4">
          <HiOutlineMoon color="#94a3b8" />
          About
        </Link>
        <Link href={`/api/auth/create-account/`} className="flex items-center gap-2 hover:underline hover:underline-offset-4">
        <HiOutlineStar color="#94a3b8" />
          Contact
        </Link>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiSun color="#94a3b8" />
          Download Resume →
        </a>
      </footer>
    </div>
  );
}
