
import { useEffect } from "react";

export default function AdminDashboard() {
  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      window.location.href = "/admin/login";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold">
              Portfolio <span className="text-cyan-400">Admin</span>
            </h1>

            <p className="text-sm text-slate-400">
              Admin Dashboard
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-lg border border-red-500 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <p className="text-cyan-400">Welcome back</p>

          <h2 className="mt-2 text-4xl font-bold">
            Dashboard
          </h2>

          <p className="mt-3 text-slate-400">
            Manage your portfolio content from here.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Projects */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Total Projects
            </p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              0
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Portfolio projects
            </p>
          </div>

          {/* Messages */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Total Messages
            </p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              0
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Contact messages
            </p>
          </div>

          {/* Skills */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">
              Total Skills
            </p>

            <h3 className="mt-3 text-4xl font-bold text-cyan-400">
              0
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Technical skills
            </p>
          </div>
        </div>

        {/* Management Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Projects */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">
              Projects
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              Add, edit and delete projects displayed on your portfolio.
            </p>

            <button
              type="button"
              className="mt-6 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Manage Projects
            </button>
          </div>

          {/* Messages */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-2xl font-bold">
              Messages
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              View messages submitted through your portfolio contact form.
            </p>

            <button
              type="button"
              className="mt-6 rounded-lg border border-cyan-400 px-5 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              View Messages
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

