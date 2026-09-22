
import about from "../data/about";

function About() {
  return (
    <section id="about" className="bg-black px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            {about.eyebrow}
          </p>

          <h2 className="max-w-xl text-4xl font-bold leading-tight text-white sm:text-5xl">
            {about.title}
          </h2>
        </div>

        {/* Right */}
        <div>
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg leading-8 text-gray-400 ${
                index > 0 ? "mt-6" : ""
              }`}
            >
              {paragraph}
            </p>
          ))}

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full border border-green-400/30 px-6 py-3 font-medium text-green-400 transition duration-300 hover:bg-green-400 hover:text-black"
          >
            Let's work together
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-20 grid max-w-7xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {about.stats.map((stat) => (
          <div key={stat.id} className="bg-black p-8">
            <p className="text-3xl font-bold text-white">{stat.value}</p>

            <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
