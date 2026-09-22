
import { useEffect, useState } from "react";
import {
  FolderKanban,
  MessageSquare,
  BriefcaseBusiness,
  Code2,
  ArrowUpRight,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

import projectsData from "../data/project";
import skills from "../data/skills";
import services from "../data/services";

function AdminDashboard() {
  const [projects, setProjects] = useState(projectsData);

  useEffect(() => {
    const savedProjects = JSON.parse(
      localStorage.getItem("portfolioProjects")
    );

    if (savedProjects && savedProjects.length > 0) {
      setProjects(savedProjects);
    }
  }, []);

  const totalProjects = projects.length;
  const totalSkills = skills.length;
  const totalServices = services.length;

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Admin Dashboard
          </p>

          <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">
                Welcome back, Stephen.
              </h1>

              <p className="mt-2 text-gray-500">
                Manage your portfolio and website content.
              </p>
            </div>

            <span className="flex items-center gap-2 text-sm text-gray-500">
              <Clock3 size={16} />
              Admin Panel
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {/* Projects */}
          <Link
            to="/admin/projects"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <FolderKanban size={21} />
              </div>

              <ArrowUpRight
                size={18}
                className="text-gray-600 transition group-hover:text-green-400"
              />
            </div>

            <p className="mt-6 text-3xl font-bold text-white">
              {totalProjects}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Total Projects
            </p>
          </Link>

          {/* Messages */}
          <Link
            to="/admin/messages"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <MessageSquare size={21} />
              </div>

              <ArrowUpRight
                size={18}
                className="text-gray-600 transition group-hover:text-green-400"
              />
            </div>

            <p className="mt-6 text-3xl font-bold text-white">
              0
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Messages
            </p>
          </Link>

          {/* Services */}
          <Link
            to="/admin/services"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <BriefcaseBusiness size={21} />
              </div>

              <ArrowUpRight
                size={18}
                className="text-gray-600 transition group-hover:text-green-400"
              />
            </div>

            <p className="mt-6 text-3xl font-bold text-white">
              {totalServices}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              Services
            </p>
          </Link>

          {/* Skills */}
          <Link
            to="/admin/skills"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/30"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
              <Code2 size={21} />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-white">
                  {totalSkills}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Skills
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-gray-600 transition group-hover:text-green-400"
              />
            </div>
          </Link>
        </div>

        {/* Recent Projects */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Recent Projects
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Projects currently displayed on your portfolio.
              </p>
            </div>

            <Link
              to="/"
              className="text-sm font-medium text-green-400 transition hover:text-green-300"
            >
              View portfolio
            </Link>
          </div>

          <div className="divide-y divide-white/5">
            {projects.length === 0 ? (
              <div className="px-6 py-10 text-center text-sm text-gray-500">
                No projects available.
              </div>
            ) : (
              projects.map((project) => (
                <div
                  key={project.id}
                  className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-medium text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {project.category}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
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
                </div>
              ))
            )}
          </div>
        </div>

        {/* Content Overview */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Portfolio Content */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">
              Portfolio Content
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-sm text-gray-500">
                  Projects
                </span>

                <span className="font-medium text-white">
                  {totalProjects}
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="text-sm text-gray-500">
                  Skills
                </span>

                <span className="font-medium text-white">
                  {totalSkills}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Services
                </span>

                <span className="font-medium text-white">
                  {totalServices}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">
              Quick Actions
            </h2>

            <div className="mt-6 grid gap-3">
              <Link
                to="/admin/projects"
                className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-gray-300 transition hover:border-green-400/30 hover:text-green-400"
              >
                <span>Manage Projects</span>
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/admin/skills"
                className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-gray-300 transition hover:border-green-400/30 hover:text-green-400"
              >
                <span>Manage Skills</span>
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/admin/services"
                className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-left text-sm text-gray-300 transition hover:border-green-400/30 hover:text-green-400"
              >
                <span>Manage Services</span>
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
