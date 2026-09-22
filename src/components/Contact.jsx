
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-[#050505] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-green-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            <span className="text-gray-500">Let's build it.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Whether you need a website, web application, or a custom digital
            solution, I'd love to hear about your project.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact information */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
            <h3 className="text-2xl font-semibold text-white">
              Let's talk
            </h3>

            <p className="mt-3 leading-7 text-gray-500">
              Tell me a little about what you're building and how I can help.
            </p>

            <div className="mt-10 space-y-7">
              {/* Email */}
              <a
                href="mailto:onyekachistephen18@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition group-hover:border-green-400/30 group-hover:text-green-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-gray-300 transition group-hover:text-green-400 sm:text-base">
                    onyekachistephen18@gmail.com
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 text-gray-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-gray-300 sm:text-base">
                    Nigeria
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 text-gray-400">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-gray-500 sm:text-base">
                    Available on request
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(event) => event.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Stephen"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-green-400/50"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-green-400/50"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mt-6">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm text-gray-400"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="Tell me about your project"
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-green-400/50"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-400"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-700 focus:border-green-400/50"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-400 px-6 py-3.5 font-semibold text-black transition duration-300 hover:bg-green-300 sm:w-auto"
            >
              Send Message
              <ArrowUpRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
