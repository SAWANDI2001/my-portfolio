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
            <a href="#" className="text-cyan-400">
              Home
            </a>
            <a href="#about" className="text-slate-300 hover:text-white">
              About
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white">
              Skills
            </a>
            <a href="#experience" className="text-slate-300 hover:text-white">
              Experience
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white">
              Projects
            </a>
            <a href="#education" className="text-slate-300 hover:text-white">
              Education
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
            <p className="mb-4 text-lg font-medium text-cyan-400">Hello, I'm</p>

            <h1 className="text-5xl font-bold leading-tight md:text-6xl">
              J.P.S.
              <span className="block text-cyan-400">Nawodya</span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-slate-300">
              Software Developer
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              I build responsive and user-friendly web applications using modern
              web technologies. I enjoy learning new technologies and turning
              ideas into practical solutions.
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
                <div className="text-7xl font-bold text-cyan-400">JPSN</div>

                <p className="mt-3 text-slate-400">Software Developer</p>
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

            <h2 className="mt-2 text-4xl font-bold">About Me</h2>
          </div>

          {/* About Content */}
          <div className="grid gap-10 md:grid-cols-2">
            {/* Left Side */}
            <div>
              <h3 className="text-2xl font-semibold">Software Developer</h3>

              <p className="mt-5 leading-8 text-slate-400">
                I am a motivated Software Developer with a strong interest in
                developing web applications and software solutions. I enjoy
                solving problems, learning new technologies, and building
                applications that are simple, useful, and user-friendly.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                I have hands-on experience working with front-end development,
                back-end technologies, databases, and version control. I am
                continuously improving my technical skills and exploring modern
                software development technologies.
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
      <section id="skills" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <p className="text-cyan-400">What I Work With</p>

            <h2 className="mt-2 text-4xl font-bold">My Skills</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Skill Card */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-xl font-semibold">HTML</h3>
              <p className="mt-2 text-sm text-slate-400">Web Structure</p>
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
              <p className="mt-2 text-sm text-slate-400">Backend Development</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-xl font-semibold">Java</h3>
              <p className="mt-2 text-sm text-slate-400">
                Application Development
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-xl font-semibold">MySQL</h3>
              <p className="mt-2 text-sm text-slate-400">Database Management</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-xl font-semibold">MongoDB</h3>
              <p className="mt-2 text-sm text-slate-400">NoSQL Database</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-xl font-semibold">Node.js</h3>
              <p className="mt-2 text-sm text-slate-400">Backend Development</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-xl font-semibold">Git &amp; GitHub</h3>
              <p className="mt-2 text-sm text-slate-400">Version Control</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-xl font-semibold">Bootstrap</h3>
              <p className="mt-2 text-sm text-slate-400">UI Development</p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-cyan-400">
              <h3 className="text-xl font-semibold">Tailwind CSS</h3>
              <p className="mt-2 text-sm text-slate-400">Modern UI Styling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="border-t border-slate-800 bg-slate-900/50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <p className="text-cyan-400">My Journey</p>

            <h2 className="mt-2 text-4xl font-bold">Experience</h2>
          </div>

          {/* Experience Card */}
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-lg">
              {/* Timeline Line */}
              <div className="absolute left-0 top-8 h-16 w-1 rounded-r bg-cyan-400"></div>

              <div className="md:flex md:items-start md:justify-between">
                {/* Experience Details */}
                <div>
                  <p className="text-sm font-medium text-cyan-400">
                    Software Development
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Software Developer Intern
                  </h3>

                  <p className="mt-2 text-lg text-slate-300">
                    Southern Provincial Road Development Authority
                  </p>
                </div>

                {/* Date */}
                <div className="mt-4 md:mt-0">
                  <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-400">
                    2025 – 2026
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <p className="leading-8 text-slate-400">
                  Worked as a Software Developer Intern and gained practical
                  experience in developing and maintaining web-based
                  applications in a real-world working environment.
                </p>

                <ul className="mt-6 space-y-3 text-slate-400">
                  <li className="flex gap-3">
                    <span className="text-cyan-400">▹</span>
                    Developed and updated web application features.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-cyan-400">▹</span>
                    Worked with front-end technologies and backend development.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-cyan-400">▹</span>
                    Connected web applications with databases and handled
                    data-related tasks.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-cyan-400">▹</span>
                    Identified and fixed technical issues during application
                    development.
                  </li>

                  <li className="flex gap-3">
                    <span className="text-cyan-400">▹</span>
                    Collaborated with team members to improve system
                    functionality.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="mb-12 text-center">
            <p className="text-cyan-400">My Recent Work</p>

            <h2 className="mt-2 text-4xl font-bold">Projects</h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Here are some of the projects I have worked on while learning and
              developing my software development skills.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
              <div className="flex h-48 items-center justify-center bg-slate-800">
                <span className="text-5xl font-bold text-cyan-400">PRDA</span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">PRDA Website</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  A web-based system developed for the Southern Provincial Road
                  Development Authority to provide information and online
                  services to users.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    PHP
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    MySQL
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    Bootstrap
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    JavaScript
                  </span>
                </div>

                <a
                  href="https://github.com/SAWANDI2001/prda.sp.gov.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
              <div className="flex h-48 items-center justify-center bg-slate-800">
                <span className="text-5xl font-bold text-cyan-400">VMS</span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">
                  Vehicle Management System
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  A web-based vehicle management system for managing vehicles,
                  employees, drivers, requests, repairs and job card
                  information.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    PHP
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    MySQL
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    Bootstrap
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    JavaScript
                  </span>
                </div>

                <a
                  href="https://github.com/shehara1234203/vehicle_management-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  View on GitHub →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">
              <div className="flex h-48 items-center justify-center bg-slate-800">
                <span className="text-5xl font-bold text-cyan-400">GG</span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">Grocery Grove</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  An online supermarket application developed to provide a
                  simple and user-friendly shopping experience with product
                  management and database integration.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    React
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    Node.js
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    Express
                  </span>

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-400">
                    MongoDB
                  </span>
                </div>

                <a
                  href="#"
                  className="mt-6 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="border-t border-slate-800 bg-slate-900/50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-cyan-400">My Education</p>

            <h2 className="mt-2 text-4xl font-bold">Education</h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm font-medium text-cyan-400">
                    Higher National Diploma
                  </p>

                  <h3 className="mt-2 text-2xl font-bold">
                    Higher National Diploma in Information Technology
                  </h3>

                  <p className="mt-3 text-slate-300">
                    SLIATE - Advanced Technological Institute - Labuduwa
                  </p>
                </div>

                <span className="w-fit rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-400">
                  IT
                </span>
              </div>

              <p className="mt-6 leading-7 text-slate-400">
                Studied software development, web technologies, databases,
                programming, system development and other information technology
                concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-cyan-400">Let's Connect</p>

            <h2 className="mt-2 text-4xl font-bold">Contact Me</h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Interested in working together or have an opportunity? Feel free
              to get in touch with me.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h3 className="text-2xl font-bold">Get In Touch</h3>

              <p className="mt-4 leading-7 text-slate-400">
                I am open to software development opportunities, internships,
                and projects where I can learn and contribute my skills.
              </p>

              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-sm text-slate-500">Email</p>

                  <a
                    href="mailto:your-email@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    sawandinawodya@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-500">GitHub</p>

                  <a
                    href="https://github.com/SAWANDI2001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    github.com/SAWANDI2001
                  </a>
                </div>

                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>

                  <a
                    href="https://www.linkedin.com/in/j-p-s-nawodya-23739230a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
