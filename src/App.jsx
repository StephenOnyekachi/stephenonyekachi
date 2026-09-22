
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminLayout from "./admin/AdminLayout";
import AdminProjects from "./admin/Projects";
import AddProject from "./admin/AddProject";
import AdminSkills from "./admin/Skills";
import AddSkill from "./admin/AddSkill";
import AdminServices from "./admin/Services";
import AddService from "./admin/AddService";
import Messages from "./admin/Messages";
import Settings from "./admin/Settings";

function Portfolio() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      <div className="reveal">
        <About />
      </div>

      <div className="reveal">
        <Skills />
      </div>

      <div className="reveal">
        <Projects />
      </div>

      <div className="reveal">
        <Services />
      </div>

      <div className="reveal">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Portfolio */}
        <Route path="/" element={<Portfolio />} />

        {/* Admin Login */}
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <AdminDashboard />
            </AdminLayout>
          }
        />

        {/* Admin Projects */}
        <Route
          path="/admin/projects"
          element={
            <AdminLayout>
              <AdminProjects />
            </AdminLayout>
          }
        />

        {/* Admin Add Project */}
        <Route
          path="/admin/projects/add"
          element={
            <AdminLayout>
              <AddProject />
            </AdminLayout>
          }
        />

        {/* Admin Skills */}
        <Route
          path="/admin/skills"
          element={
            <AdminLayout>
              <AdminSkills />
            </AdminLayout>
          }
        />

        {/* Admin Add Skill */}
        <Route
          path="/admin/skills/add"
          element={
            <AdminLayout>
              <AddSkill />
            </AdminLayout>
          }
        />

        {/* Admin Services */}
        <Route
          path="/admin/services"
          element={
            <AdminLayout>
              <AdminServices />
            </AdminLayout>
          }
        />
        
        {/* Admin Add Service */}
        <Route
          path="/admin/services/add"
          element={
            <AdminLayout>
              <AddService />
            </AdminLayout>
          }
        />

        {/* Admin Messages */}
        <Route
          path="/admin/messages"
          element={
            <AdminLayout>
              <Messages />
            </AdminLayout>
          }
        />

        {/* Admin Settings */}
        <Route
          path="/admin/settings"
          element={
            <AdminLayout>
              <Settings />
            </AdminLayout>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
