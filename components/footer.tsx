import Image from "next/image";

export default function Footer() {
  return (
    <footer className="container mx-auto max-w-screen-xl p-8">
      <div className="grid grid-cols-3 dark:text-zinc-500">
        <div>© 2025 Viswa Marepalli</div>
        <div className="text-center justify-self-center">
          <a href="#aboutme" className="hover:text-zinc-300 duration-200">
            About{" "}
          </a>
          ·
          <a
            href="mailto:reachvishm+site@gmail.com"
            className="hover:text-zinc-300 duration-200"
          >
            {" "}
            Contact
          </a>
        </div>
        <div className="flex space-x-3 justify-self-end hidden dark:flex">
          <a href="https://github.com/justanotherbyte" target="_blank">
            <Image
              src="/github-mark-white.svg"
              alt="GitHub page"
              className="h-8 w-8"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/viswa-marepalli/"
            target="_blank"
          >
            <Image
              src="/InBug-White.png"
              alt="GitHub page"
              className="h-8 w-8"
              width={24}
              height={24}
            />
          </a>
        </div>
        <div className="flex space-x-3 justify-self-end visible dark:hidden">
          <a href="https://github.com/justanotherbyte" target="_blank">
            <Image
              src="/github-mark.png"
              alt="GitHub page"
              className="h-8 w-8"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/viswa-marepalli/"
            target="_blank"
          >
            <Image
              src="/InBug-Black.png"
              alt="GitHub page"
              className="h-8 w-8"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
