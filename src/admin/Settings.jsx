
import { useState } from "react";
import { Save, User, Mail, Globe, Lock } from "lucide-react";

function Settings() {
  const [formData, setFormData] = useState({
    name: "Stephen Onyekachi",
    email: "onyekachistephen18@gmail.com",
    website: "Stephen Portfolio",
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

    console.log("Settings:", formData);

    alert("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen bg-black px-5 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm text-green-400">Management</p>

          <h1 className="text-3xl font-bold">Settings</h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage your portfolio and admin account settings.
          </p>
        </div>

        {/* Profile Settings */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <User size={19} />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Profile Information
                </h2>

                <p className="text-xs text-gray-500">
                  Update your public portfolio information.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>

                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-green-400"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-green-400"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="md:col-span-2">
                <label
                  htmlFor="website"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Website Name
                </label>

                <div className="relative">
                  <Globe
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                    id="website"
                    name="website"
                    type="text"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black py-3 pl-11 pr-4 text-sm text-white outline-none focus:border-green-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-7">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
                <Lock size={19} />
              </div>

              <div>
                <h2 className="font-semibold text-white">Security</h2>

                <p className="text-xs text-gray-500">
                  Password and authentication settings.
                </p>
              </div>
            </div>

            <p className="text-sm leading-6 text-gray-500">
              Authentication will be connected to Django when we build the
              backend.
            </p>
          </div>

          {/* Save */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
            >
              <Save size={17} />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
