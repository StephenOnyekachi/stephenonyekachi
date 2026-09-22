
import { ExternalLink, GitBranch } from "lucide-react";
import projects from "../data/project";

function Projects() {
  return (
    <section id="projects" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Projects I've built.
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Here are some of the digital products and web applications I've
            worked on.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-green-400/30 hover:bg-white/[0.05]"
            >
              {/* Project number */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-medium text-green-400">
                  {project.number}
                </span>

                <div className="h-px flex-1 bg-white/10 ml-4" />
              </div>

              {/* Project info */}
              <p className="mb-3 text-sm text-green-400">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold text-white transition group-hover:text-green-400">
                {project.title}
              </h3>

              <p className="mt-4 min-h-[120px] text-sm leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-3">
                <div className="mt-8 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300 transition hover:border-green-400 hover:text-green-400"
                    >
                      <GitBranch size={16} />
                      Code
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-green-400 px-4 py-2 text-sm font-medium text-black transition hover:bg-green-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-green-400/10 blur-3xl transition duration-500 group-hover:bg-green-400/20" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
