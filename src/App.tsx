export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Wesley Dev</h1>
          <nav className="space-x-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-6">Hi, I'm Wesley 👋</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            A passionate Frontend & Full Stack Developer building modern,
            responsive, and user-friendly web applications.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition">
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Developer"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6">About Me</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a web developer focused on building beautiful and functional
              websites using React, JavaScript, and modern frontend tools.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I enjoy solving problems, learning new technologies, and creating
              smooth user experiences.
            </p>
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-14">
            Featured Projects
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={`https://picsum.photos/500/300?random=${project}`}
                  alt="Project"
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-3">
                    Project {project}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    A modern web application built with React and responsive UI
                    design principles.
                  </p>

                  <button className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-12">My Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "GitHub",
              "Tailwind CSS",
              "TypeScript",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition"
              >
                <h4 className="font-semibold text-lg">{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Contact Me</h3>
          <p className="text-gray-700 mb-8">
            Interested in working together or hiring me for a project? Let's
            connect.
          </p>

          <form className="bg-white p-8 rounded-3xl shadow-xl space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© {new Date().getFullYear()} Wesley Dev. All rights reserved.</p>
      </footer>
    </div>
  );
}
