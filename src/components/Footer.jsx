
import { ArrowUp, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <div>
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-white"
          >
            Stephen<span className="text-green-400">.</span>
          </a>

          <p className="mt-2 text-sm text-gray-600">
            Full-Stack Developer
          </p>
        </div>

        {/* Social / Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/StephenOnyekachi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-sm font-semibold text-gray-400 transition hover:border-green-400 hover:text-green-400"
          >
            GH
          </a>

          <a
            href="mailto:onyekachistephen18@gmail.com"
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-green-400 hover:text-green-400"
          >
            <Mail size={19} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-green-400 text-black transition hover:bg-green-300"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-white/5 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Stephen Onyekachi. All rights reserved.
        </p>

        <p>Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;
