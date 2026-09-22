
import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AddSkill() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New skill:", {
      ...formData,
      technologies: formData.technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    });

    alert("Skill saved successfully!");

    navigate("/admin/skills");
  };

  return (
    <div className="min-h-screen bg-black px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8">
          <button
            type="button"
            onClick={() => navigate("/admin/skills")}
            className="mb-5 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-green-400"
          >
            <ArrowLeft size={17} />
            Back to Skills
          </button>

          <p className="mb-2 text-sm text-green-400">Management</p>

          <h1 className="text-3xl font-bold">Add Skill</h1>

          <p className="mt-2 text-sm text-gray-500">
            Add a new skill to your portfolio.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7"
        >
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Skill Name
              </label>

              <input
                id="title"
                name="title"
                type="text"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Frontend Development"
                required
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-green-400"
              />
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
                rows="4"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe this skill..."
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-green-400"
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
                placeholder="React, JavaScript, HTML, CSS"
                required
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-green-400"
              />

              <p className="mt-2 text-xs text-gray-600">
                Separate each technology with a comma.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate("/admin/skills")}
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-gray-400 transition hover:border-white/20 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
            >
              <Save size={17} />
              Save Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSkill;
