
import { Bell, Menu } from "lucide-react";

function AdminNavbar({ onMenuClick }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 h-20 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="flex h-full items-center justify-between px-5 sm:px-6">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-green-400 hover:text-green-400 lg:hidden"
            aria-label="Open admin menu"
          >
            <Menu size={20} />
          </button>

          <a
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            Stephen<span className="text-green-400">.</span>
          </a>

          <span className="hidden border-l border-white/10 pl-4 text-sm text-gray-500 sm:block">
            Admin Panel
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:border-green-400 hover:text-green-400"
          >
            <Bell size={18} />
          </button>

          <div className="flex items-center gap-3 border-l border-white/10 pl-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-white">
                Stephen
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10 text-sm font-semibold text-green-400">
              SO
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AdminNavbar;
