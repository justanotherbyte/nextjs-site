"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white border-zinc-200 dark:bg-zinc-900 sticky top-0 z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Viswa Marepalli
          </span>
        </a>
        <button
          onClick={() => setOpen(!open)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden md:overflow-visible w-full md:block md:w-auto ${open ? "max-h-96" : "max-h-0"} md:max-h-full`}
          id="navbar-default"
          onClick={() => setOpen(!open)}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-zinc-100 rounded-sm bg-zinc-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700">
            <li id="navItem">
              <a
                href="/#aboutme"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-600 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                About Me
              </a>
            </li>
            <li id="navItem">
              <a
                href="/#projects"
                className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Projects
              </a>
            </li>
            <li id="navItem">
              <a
                href="/#publications"
                className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Publications
              </a>
            </li>
            <li id="navItem">
              <a
                href="data/cv.pdf"
                className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Curriculum Vitae
              </a>
            </li>
            <li id="navItem">
              <a
                href="mailto:reachvishm+site@gmail.com"
                className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
