function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            Nawodya<span className="text-cyan-400">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden gap-8 md:flex">
            <a href="#" className="text-cyan-400">Home</a>
            <a href="#about" className="text-slate-300 hover:text-white">
              About
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white">
              Skills
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white">
              Projects
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white">
              Contact
            </a>
          </div>

        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center px-6 py-20">

        <div className="grid w-full items-center gap-12 md:grid-cols-2">

          {/* Left Side */}
          <div>

            <p className="mb-4 text-lg font-medium text-cyan-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              J.P.S.
              <span className="block text-cyan-400">
                Nawodya
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-slate-300">
              Junior Web Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I build responsive and user-friendly web applications
              using modern web technologies. I enjoy learning new
              technologies and turning ideas into practical solutions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900 shadow-2xl shadow-cyan-500/10 md:h-96 md:w-96">

              <div className="text-center">
                <div className="text-7xl font-bold text-cyan-400">
                  JPSN
                </div>

                <p className="mt-3 text-slate-400">
                  Web Developer
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}

export default App