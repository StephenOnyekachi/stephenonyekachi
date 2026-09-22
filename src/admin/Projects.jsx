
import { useEffect, useState } from "react";
import {
  FolderKanban,
  Plus,
  Edit3,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

import projectsData from "../data/project";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = JSON.parse(
      localStorage.getItem("portfolioProjects")
    );

    if (savedProjects && savedProjects.length > 0) {
      setProjects(savedProjects);
    } else {
      setProjects(projectsData);
    }
  }, []);

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmed) {
      return;
    }

    const updatedProjects = projects.filter(
      (project) => project.id !== id
    );

    setProjects(updatedProjects);

    localStorage.setItem(
      "portfolioProjects",
      JSON.stringify(updatedProjects)
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-400">
              Projects
            </p>

            <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
              All Projects
            </h1>

            <p className="mt-2 text-gray-500">
              Manage the projects displayed on your portfolio.
            </p>
          </div>

          <Link
            to="/admin/projects/add"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
          >
            <Plus size={18} />
            Add Project
          </Link>
        </div>

        {/* Project Count */}
        <div className="mb-6 flex items-center gap-3 text-sm text-gray-500">
          <FolderKanban size={18} className="text-green-400" />
          <span>
            {projects.length}{" "}
            {projects.length === 1 ? "project" : "projects"}
          </span>
        </div>

        {/* Projects */}
        {projects.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
            <FolderKanban
              size={40}
              className="mx-auto text-gray-600"
            />

            <h2 className="mt-5 text-lg font-semibold text-white">
              No projects yet
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Add your first project to get started.
            </p>

            <Link
              to="/admin/projects/add"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
            >
              <Plus size={17} />
              Add Project
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/30"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                    <FolderKanban size={21} />
                  </div>

                  {project.live ? (
                    <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs font-medium text-green-400">
                      Live
                    </span>
                  ) : (
                    <span className="rounded-full bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-400">
                      Development
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="mt-6 flex-1">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-600">
                    {project.category}
                  </p>

                  <h2 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies?.map(
                      (technology, index) => (
                        <span
                          key={`${technology}-${index}`}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                        >
                          {technology}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition hover:border-green-400/30 hover:text-green-400"
                    >
                      GitHub
                      <ExternalLink size={14} />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition hover:border-green-400/30 hover:text-green-400"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                  <button
                    type="button"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm text-gray-400 transition hover:border-green-400/30 hover:text-green-400"
                  >
                    <Edit3 size={16} />
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(project.id)}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-gray-500 transition hover:border-red-400/30 hover:bg-red-400/10 hover:text-red-400"
                    aria-label={`Delete ${project.title}`}
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Projects;
