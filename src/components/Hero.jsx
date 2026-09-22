
function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-6 pt-24"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/4 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-green-400/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div className="relative z-10 animate-[fadeIn_0.8s_ease-out]">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Full-Stack Developer
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            I build{" "}
            <span className="text-green-400">digital experiences.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm Stephen Onyekachi, a developer focused on building modern,
            responsive, and user-friendly web applications that turn ideas
            into real digital products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-green-400 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105 hover:bg-green-300"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 px-6 py-3 font-semibold text-white transition duration-300 hover:border-green-400 hover:text-green-400"
            >
              Contact Me
            </a>

            <a
              href="/cv/Stephen-Onyekachi-CV.pdf"
              download
              className="rounded-full border border-white/10 px-6 py-3 font-semibold text-gray-300 transition duration-300 hover:border-green-400 hover:text-green-400"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
            <span>React</span>
            <span>JavaScript</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        {/* Profile image */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-72 w-72 animate-[float_5s_ease-in-out_infinite] sm:h-96 sm:w-96">
            <div className="absolute inset-0 rounded-full bg-green-400/20 blur-3xl" />

            <div className="relative h-full w-full overflow-hidden rounded-full border border-green-400/30 bg-white/5 p-2">
              <img
                src="/images/stephen.jpg"
                alt="Stephen Onyekachi"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <div className="absolute -inset-3 -z-10 rounded-full border border-green-400/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
