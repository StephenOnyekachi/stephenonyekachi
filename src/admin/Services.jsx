
import { Plus, Pencil, Trash2 } from "lucide-react";
import services from "../data/services";

function Services() {
  return (
    <div className="min-h-screen bg-black px-5 py-8 text-white sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-sm text-green-400">Management</p>

          <h1 className="text-3xl font-bold">Services</h1>

          <p className="mt-2 text-sm text-gray-500">
            Manage the services displayed on your portfolio.
          </p>
        </div>

        <a
          href="/admin/services/add"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
        >
          <Plus size={18} />
          Add Service
        </a>
      </div>

      {/* Services */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.id}
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

              <div className="mb-2 text-xs font-semibold tracking-widest text-green-400">
                {service.number}
              </div>

              <h2 className="text-lg font-semibold">{service.title}</h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
