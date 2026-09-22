
import { Plus, Pencil, Trash2, Code2 } from "lucide-react";
import skills from "../data/skills";

function Skills() {
  return (
    <div className="min-h-screen bg-black px-5 py-8 text-white sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-sm text-green-400">Management</p>

          <h1 className="text-3xl font-bold">Skills</h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage the skills displayed on your portfolio.
          </p>
        </div>

        <a
          href="/admin/skills/add"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
        >
          <Plus size={18} />
          Add Skill
        </a>
      </div>

      {/* Skills */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-green-400/30"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                  <Icon size={24} />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition hover:border-green-400 hover:text-green-400"
                    title="Edit"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 transition hover:border-red-400 hover:text-red-400"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <h2 className="text-lg font-semibold">{skill.title}</h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {skill.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/10 px-2.5 py-1 text-xs text-gray-400"
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
  );
}

export default Skills;
