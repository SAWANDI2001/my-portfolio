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
            Software Developer
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
                   Software Developer
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About Section */}
<section
  id="about"
  className="border-t border-slate-800 bg-slate-900/50 px-6 py-20"
>
  <div className="mx-auto max-w-6xl">

    {/* Section Title */}
    <div className="mb-12 text-center">
      <p className="text-cyan-400">Get To Know Me</p>

      <h2 className="mt-2 text-4xl font-bold">
        About Me
      </h2>
    </div>

    {/* About Content */}
    <div className="grid gap-10 md:grid-cols-2">

      {/* Left Side */}
      <div>
        <h3 className="text-2xl font-semibold">
          Software Developer
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          I am a motivated Software Developer with a strong interest
          in developing web applications and software solutions.
          I enjoy solving problems, learning new technologies, and
          building applications that are simple, useful, and
          user-friendly.
        </p>

        <p className="mt-4 leading-8 text-slate-400">
          I have hands-on experience working with front-end
          development, back-end technologies, databases, and
          version control. I am continuously improving my technical
          skills and exploring modern software development
          technologies.
        </p>
      </div>

      {/* Right Side */}
      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h4 className="text-lg font-semibold text-cyan-400">
            Education
          </h4>
          <p className="mt-2 text-slate-400">
            Higher National Diploma in Information Technology
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h4 className="text-lg font-semibold text-cyan-400">
            Experience
          </h4>
          <p className="mt-2 text-slate-400">
            Software Development Experience
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h4 className="text-lg font-semibold text-cyan-400">
            Development
          </h4>
          <p className="mt-2 text-slate-400">
            Web &amp; Software Applications
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-6">
          <h4 className="text-lg font-semibold text-cyan-400">
            Learning
          </h4>
          <p className="mt-2 text-slate-400">
            Always Learning New Technologies
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

{/* Skills Section */}
<section
  id="skills"
  className="border-t border-slate-800 px-6 py-20"
>
  <div className="mx-auto max-w-6xl">

    {/* Section Title */}
    <div className="mb-12 text-center">
      <p className="text-cyan-400">What I Work With</p>

      <h2 className="mt-2 text-4xl font-bold">
        My Skills
      </h2>
    </div>

    {/* Skills Grid */}
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {/* Skill Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">HTML</h3>
        <p className="mt-2 text-sm text-slate-400">
          Web Structure
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">CSS</h3>
        <p className="mt-2 text-sm text-slate-400">
          Styling & Responsive Design
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">JavaScript</h3>
        <p className="mt-2 text-sm text-slate-400">
          Interactive Web Applications
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">React</h3>
        <p className="mt-2 text-sm text-slate-400">
          Frontend Development
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">PHP</h3>
        <p className="mt-2 text-sm text-slate-400">
          Backend Development
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">Java</h3>
        <p className="mt-2 text-sm text-slate-400">
          Application Development
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">MySQL</h3>
        <p className="mt-2 text-sm text-slate-400">
          Database Management
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">MongoDB</h3>
        <p className="mt-2 text-sm text-slate-400">
          NoSQL Database
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">Node.js</h3>
        <p className="mt-2 text-sm text-slate-400">
          Backend Development
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">Git &amp; GitHub</h3>
        <p className="mt-2 text-sm text-slate-400">
          Version Control
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">Bootstrap</h3>
        <p className="mt-2 text-sm text-slate-400">
          UI Development
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
        <h3 className="text-xl font-semibold">Tailwind CSS</h3>
        <p className="mt-2 text-sm text-slate-400">
          Modern UI Styling
        </p>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default App