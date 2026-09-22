
import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="bg-[#050505] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Skills & Technologies
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Tools I use to build.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            A collection of technologies and development skills I use to turn
            ideas into functional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.id}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:-translate-y-1 hover:border-green-400/30 hover:bg-white/[0.04]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-green-400/20 bg-green-400/10 text-green-400 transition duration-300 group-hover:bg-green-400 group-hover:text-black">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {skill.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {skill.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400 transition group-hover:border-white/20"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
