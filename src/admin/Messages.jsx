
import { Mail, MailOpen, Trash2, Eye } from "lucide-react";

const messages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Website Development",
    message:
      "Hello Stephen, I would like to discuss building a website for my business.",
    date: "Sep 22, 2026",
    read: false,
  },
  {
    id: 2,
    name: "Sarah Williams",
    email: "sarah@example.com",
    subject: "Project Inquiry",
    message:
      "I came across your portfolio and would like to know more about your services.",
    date: "Sep 21, 2026",
    read: true,
  },
  {
    id: 3,
    name: "Michael James",
    email: "michael@example.com",
    subject: "Restaurant Website",
    message:
      "I need a modern restaurant website with an online menu and ordering system.",
    date: "Sep 20, 2026",
    read: true,
  },
];

function Messages() {
  return (
    <div className="min-h-screen bg-black px-5 py-8 text-white sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 text-sm text-green-400">Management</p>

        <h1 className="text-3xl font-bold">Messages</h1>

        <p className="mt-2 text-sm text-gray-500">
          View and manage messages received through your portfolio.
        </p>
      </div>

      {/* Messages */}
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`rounded-2xl border p-5 transition ${
              message.read
                ? "border-white/10 bg-white/[0.02]"
                : "border-green-400/20 bg-green-400/[0.03]"
            }`}
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              {/* Message info */}
              <div className="flex gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    message.read
                      ? "bg-white/5 text-gray-500"
                      : "bg-green-400/10 text-green-400"
                  }`}
                >
                  {message.read ? (
                    <MailOpen size={20} />
                  ) : (
                    <Mail size={20} />
                  )}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-semibold text-white">
                      {message.name}
                    </h2>

                    {!message.read && (
                      <span className="rounded-full bg-green-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-green-400">
                        New
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm text-gray-500">
                    {message.email}
                  </p>

                  <h3 className="mt-4 text-sm font-medium text-gray-300">
                    {message.subject}
                  </h3>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-500">
                    {message.message}
                  </p>

                  <p className="mt-4 text-xs text-gray-600">
                    {message.date}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 lg:shrink-0">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-gray-400 transition hover:border-green-400 hover:text-green-400"
                >
                  <Eye size={16} />
                  View
                </button>

                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-gray-500 transition hover:border-red-400 hover:text-red-400"
                  title="Delete"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
