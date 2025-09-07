import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="aboutme"
      className="grid md:grid-cols-2 sm:grid-cols-1 dark:bg-zinc-800 rounded-none bg-zinc-100 border border-zinc-300 dark:border-zinc-700"
    >
      <div>
        <Image
          src="/nasa.jpg"
          alt="Picture of me"
          className="md:rounded-l-none w-full h-full object-cover sm:rounded-none"
          width={600}
          height={600}
        />
      </div>
      <div className="relative p-8">
        <div className="flex space-x-2">
          <h1 className="text-xl dark:text-white" id="welcomeText">
            Hey!
          </h1>
          {/* <p className="animate-pulse dark:text-white"> ▌ </p> */}
        </div>

        <br />
        <p className="dark:text-zinc-200">
          Hey there! I'm Viswa, a 1st year{" "}
          <a
            className="font-semibold underline dark:hover:text-zinc-400 duration-200"
            href="https://www.imperial.ac.uk/study/courses/undergraduate/electronic-information-meng/"
          >
            Electronic and Information Engineering
          </a>{" "}
          student at{" "}
          <a
            className="text-blue-500 font-semibold underline duration-200 hover:text-blue-700"
            href="https://imperial.ac.uk/"
          >
            Imperial College London
          </a>
          . My interests lie primarily in Robotics, FPGAs and Quantum Computing.
        </p>
        <br />
        <p className="dark:text-zinc-200">
          While my interests lie pretty far & wide, my ambition lies in
          developing powerful Robotics for interstellar travel, conducting FPGA
          research, both for Robotics and experimental Physics, and advancing
          Quantum Computing.
        </p>
        <br />
        <p className="dark:text-zinc-200">
          Until now, I spent the better part of the previous 2 years studying
          the{" "}
          <a
            href="https://www.ibo.org/programmes/diploma-programme/"
            className="text-blue-500 font-semibold underline hover:text-blue-700 duration-200"
          >
            International Baccalaureate Diploma Programme
          </a>{" "}
          where I achieved 40/45 points with the top grade (7) in all my Higher
          Level subjects.
        </p>
        <br />
        <p className="dark:text-zinc-200">
          The IB piqued my interest in academic research, having written papers
          on{" "}
          <a className="underline duration-200 hover:text-zinc-400" href="/">
            modelling populations using differential equations and simplex-based
            optimizations
          </a>{" "}
          and experimenting with{" "}
          <a className="underline duration-200 hover:text-zinc-400" href="/">
            Euler's Pendulum and Lagrangian Mechanics
          </a>{" "}
          for the first time (I am waiting for permission from the IB to say its
          okay to publish these).
        </p>
        <br />
        <p className="dark:text-zinc-200">
          I'm also an avid{" "}
          <Link
            href="/publications"
            className="underline duration-200 hover:text-zinc-400"
          >
            writer
          </Link>
          , calisthenics enjoyer and{" "}
          <Link
            href="/photography"
            className="underline duration-200 hover:text-zinc-400"
          >
            photographer
          </Link>{" "}
          (the photograph here was taken by me!).
        </p>
        <br />
        <p className="dark:text-zinc-200 [&>a]:text-blue-500 [&>a]:duration-200 [&>a]:hover:text-blue-700">
          <a href="mailto:reachvishm+site@gmail.com"> Email</a> /
          <a href="data/cv.pdf"> CV</a> /
          <a href="https://x.com/justanotherbyte"> Twitter</a> /
          <a href="https://www.linkedin.com/in/viswa-marepalli/"> LinkedIn</a> /
          <a href="https://github.com/justanotherbyte"> GitHub</a>
        </p>
      </div>
    </section>
  );
}
