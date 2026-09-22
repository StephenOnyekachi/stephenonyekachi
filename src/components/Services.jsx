
import { ArrowUpRight } from "lucide-react";
import services from "../data/services";

function Services() {
  return (
    <section id="services" className="bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            What I Do
          </p>

          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Services I provide.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            I help individuals and businesses turn their ideas into practical
            and professional digital experiences.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition duration-300 hover:-translate-y-1 hover:border-green-400/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-400/10 text-green-400 transition duration-300 group-hover:bg-green-400 group-hover:text-black">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm font-medium text-gray-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white transition group-hover:text-green-400">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-gray-400 transition group-hover:text-green-400">
                  Learn more

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-green-400/5 blur-3xl transition duration-500 group-hover:bg-green-400/10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
