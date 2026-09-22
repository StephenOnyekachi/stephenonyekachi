
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  FolderKanban,
  Code2,
  BriefcaseBusiness,
  MessageSquare,
  Settings,
  LogOut,
  X,
  ChevronDown,
  Plus,
  List,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

function AdminSidebar({ open, onClose }) {
  const location = useLocation();

  const [projectsOpen, setProjectsOpen] = useState(
    location.pathname.startsWith("/admin/projects")
  );

  const [skillsOpen, setSkillsOpen] = useState(
    location.pathname.startsWith("/admin/skills")
  );

  const [servicesOpen, setServicesOpen] = useState(
    location.pathname.startsWith("/admin/services")
  );

  useEffect(() => {
    if (location.pathname.startsWith("/admin/projects")) {
      setProjectsOpen(true);
    }

    if (location.pathname.startsWith("/admin/skills")) {
      setSkillsOpen(true);
    }

    if (location.pathname.startsWith("/admin/services")) {
      setServicesOpen(true);
    }
  }, [location.pathname]);

  const menuLink = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
      isActive
        ? "bg-green-400/10 text-green-400"
        : "text-gray-400 hover:bg-green-400/10 hover:text-green-400"
    }`;

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/70 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed bottom-0 left-0 top-20 z-50 w-64 border-r border-white/10 bg-black transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-5 py-4 lg:hidden">
          <span className="text-sm font-medium text-gray-400">
            Navigation
          </span>

          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 transition hover:text-green-400"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-4">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-600">
            Management
          </p>

          <div className="space-y-1">
            {/* Dashboard */}
            <NavLink
              to="/admin/dashboard"
              onClick={onClose}
              className={menuLink}
            >
              <LayoutDashboard size={19} />
              <span>Dashboard</span>
            </NavLink>

            {/* Projects */}
            <div>
              <button
                type="button"
                onClick={() => setProjectsOpen(!projectsOpen)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm text-gray-400 transition hover:bg-green-400/10 hover:text-green-400"
              >
                <span className="flex items-center gap-3">
                  <FolderKanban size={19} />
                  <span>Projects</span>
                </span>

                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    projectsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {projectsOpen && (
                <div className="ml-5 mt-1 space-y-1 border-l border-white/10 pl-3">
                  <NavLink
                    to="/admin/projects"
                    onClick={onClose}
                    className={menuLink}
                  >
                    <List size={16} />
                    <span>All Projects</span>
                  </NavLink>

                  <NavLink
                    to="/admin/projects/add"
                    onClick={onClose}
                    className={menuLink}
                  >
                    <Plus size={16} />
                    <span>Add Project</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* Skills */}
            <div>
              <button
                type="button"
                onClick={() => setSkillsOpen(!skillsOpen)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm text-gray-400 transition hover:bg-green-400/10 hover:text-green-400"
              >
                <span className="flex items-center gap-3">
                  <Code2 size={19} />
                  <span>Skills</span>
                </span>

                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    skillsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {skillsOpen && (
                <div className="ml-5 mt-1 space-y-1 border-l border-white/10 pl-3">
                  <NavLink
                    to="/admin/skills"
                    onClick={onClose}
                    className={menuLink}
                  >
                    <List size={16} />
                    <span>All Skills</span>
                  </NavLink>

                  <NavLink
                    to="/admin/skills/add"
                    onClick={onClose}
                    className={menuLink}
                  >
                    <Plus size={16} />
                    <span>Add Skill</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* Services */}
            <div>
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm text-gray-400 transition hover:bg-green-400/10 hover:text-green-400"
              >
                <span className="flex items-center gap-3">
                  <BriefcaseBusiness size={19} />
                  <span>Services</span>
                </span>

                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="ml-5 mt-1 space-y-1 border-l border-white/10 pl-3">
                  <NavLink
                    to="/admin/services"
                    onClick={onClose}
                    className={menuLink}
                  >
                    <List size={16} />
                    <span>All Services</span>
                  </NavLink>

                  <NavLink
                    to="/admin/services/add"
                    onClick={onClose}
                    className={menuLink}
                  >
                    <Plus size={16} />
                    <span>Add Service</span>
                  </NavLink>
                </div>
              )}
            </div>

            {/* Messages */}
            <NavLink
              to="/admin/messages"
              onClick={onClose}
              className={menuLink}
            >
              <MessageSquare size={19} />
              <span>Messages</span>
            </NavLink>

            {/* Settings */}
            <NavLink
              to="/admin/settings"
              onClick={onClose}
              className={menuLink}
            >
              <Settings size={19} />
              <span>Settings</span>
            </NavLink>
          </div>

          {/* Logout */}
          <div className="mt-8 border-t border-white/10 pt-5">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-500 transition hover:bg-red-400/10 hover:text-red-400"
            >
              <LogOut size={19} />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default AdminSidebar;
