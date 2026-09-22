
import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function AddProject() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    technologies: "",
    description: "",
    github: "",
    live: "",
    status: "Development",
    featured: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const savedProjects =
      JSON.parse(localStorage.getItem("portfolioProjects")) || [];

    const newProject = {
      id: Date.now(),
      title: formData.title,
      category: formData.category,
      description: formData.description,
      technologies: formData.technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
      github: formData.github,
      live: formData.live,
      number: String(savedProjects.length + 1).padStart(2, "0"),
      status: formData.status,
      featured: formData.featured,
    };

    localStorage.setItem(
      "portfolioProjects",
      JSON.stringify([...savedProjects, newProject])
    );

    alert("Project saved successfully.");

    navigate("/admin/projects");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-4xl px-6 py-10">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/admin/projects"
            className="mb-5 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-green-400"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Projects
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Add New Project
          </h1>

          <p className="mt-2 text-gray-500">
            Add a new project to your portfolio.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="grid gap-6">
            {/* Project Name */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Project Name
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Blue Rich Food"
                required
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Category
              </label>

              <input
                id="category"
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. Restaurant Platform"
                required
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />
            </div>

            {/* Technologies */}
            <div>
              <label
                htmlFor="technologies"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Technologies
              </label>

              <input
                id="technologies"
                name="technologies"
                type="text"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="React, Tailwind CSS, JavaScript"
                required
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />

              <p className="mt-2 text-xs text-gray-600">
                Separate technologies with commas.
              </p>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the project..."
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />
            </div>

            {/* GitHub */}
            <div>
              <label
                htmlFor="github"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                GitHub URL
              </label>

              <input
                id="github"
                name="github"
                type="url"
                value={formData.github}
                onChange={handleChange}
                placeholder="https://github.com/..."
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />
            </div>

            {/* Live Demo */}
            <div>
              <label
                htmlFor="live"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Live Demo URL
              </label>

              <input
                id="live"
                name="live"
                type="url"
                value={formData.live}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-green-400/50"
              />
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Project Status
              </label>

              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition focus:border-green-400/50"
              >
                <option value="Live">Live</option>
                <option value="Development">Development</option>
              </select>
            </div>

            {/* Featured */}
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-black/40 p-4">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="h-4 w-4 accent-green-400"
              />

              <div>
                <p className="text-sm font-medium text-gray-300">
                  Featured Project
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  Highlight this project on your portfolio.
                </p>
              </div>
            </label>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <Link
              to="/admin/projects"
              className="flex items-center justify-center rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-gray-400 transition hover:border-white/20 hover:text-white"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
            >
              <Save size={17} />
              Save Project
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default AddProject;
