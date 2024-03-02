import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="container flex items-center justify-between border-t py-6 text-white">
      <p className="text-sm">© 2024. Made with ☕ by firdausthedev. </p>
      <a
        aria-label="github"
        href="https://github.com/firdausthedev/movienow"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub className="text-2xl" />
      </a>
    </footer>
  );
}
