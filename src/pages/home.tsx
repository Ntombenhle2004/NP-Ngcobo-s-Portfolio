import { motion } from "framer-motion";
import profileImg from "../assets/images/Gemini_Generated_Image_b1sp62b1sp62b1sp (1).png";
import weather from "../assets/images/images.jfif";
import job from "../assets/images/jobtracker.png";
import linki from "../assets/images/links (1).jfif";
import dictionary from "../assets/images/dictionary(1).jfif"



// Reveal-on-scroll: simple fade with no sliding
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Home() {
  return (
    <main className="home-page">
      {/* About / Hero */}
      <section id="about">
        <div className="container">
          <motion.div
            className="hero-card"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div className="hero-right" variants={fadeIn}>
              <span className="small-tag">Welcome to my portfolio</span>
              <h1 className="hero-name">Ntombenhle Ngcobo</h1>
              <p className="hero-role">Software Developer</p>
              <p className="hero-desc">
                ICT Applications Development graduate with hands-on training and
                strong skills in software development, web technologies, and
                cybersecurity. Passionate about building innovative solutions.
              </p>
              <div className="contact-line">
                <a href="mailto:ngcobontombenhle434@gmail.com">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      stroke="#111827"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>ngcobontombenhle434@gmail.com</span>
                </a>
                <a href="tel:0767814774">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M3 5a2 2 0 012-2h2l2 4-2 2a12 12 0 006 6l2-2 4 2v2a2 2 0 01-2 2h-1C9.163 19 5 14.837 5 9V8a3 3 0 01-2-3z"
                      stroke="#111827"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>076 781 4774</span>
                </a>
                <a
                  href="https://www.google.com/maps?q=Durban,+South+Africa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="11"
                      r="2.5"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                  </svg>
                  <span>Durban, South Africa</span>
                </a>
              </div>
              <div className="cta-row" style={{ marginTop: 12 }}>
                <a
                  className="btn btn-linkedin"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  className="btn btn-github"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.14-.02-2.07-3.06.67-3.71-1.3-3.71-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.18.91.1-.71.38-1.19.7-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.02 1.12.87-.24 1.8-.36 2.73-.36.93 0 1.86.12 2.73.36 2.1-1.41 3.02-1.12 3.02-1.12.6 1.53.22 2.66.11 2.94.7.77 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1 .74 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.36-1.45 7.5-5.57 7.5-10.43C23.02 5.25 18.27.5 12 .5z" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
            <motion.div className="hero-left" variants={fadeIn}>
              <div className="hero-photo-circle">
                <img src={profileImg} alt="Ntombenhle Ngcobo" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section id="skills">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <p className="section-sub">Technologies and tools I work with</p>
          </div>

          {/* Top row: 4 monochrome cards */}
          <div className="skills-grid-4">
            {/* Frontend */}
            <motion.div
              className="skill-card"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.35 }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">
                  {/* code icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M8 16l-4-4 4-4"
                      stroke="#111827"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 8l4 4-4 4"
                      stroke="#111827"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="skill-title">Frontend</div>
              </div>
              <div className="skill-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">TypeScript</span>
                <span className="tag">React</span>
                <span className="tag">UX/UI Design</span>
                <span className="tag">Bootstrap</span>
                <span className="tag">Tailwind CSS</span>
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="skill-card"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">
                  {/* server icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="6"
                      rx="1.2"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="18"
                      height="6"
                      rx="1.2"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                    <circle cx="7" cy="7" r="1" fill="#111827" />
                    <circle cx="7" cy="17" r="1" fill="#111827" />
                  </svg>
                </div>
                <div className="skill-title">Backend</div>
              </div>
              <div className="skill-tags">
                <span className="tag">C#</span>
                <span className="tag">ASP.NET</span>
                <span className="tag">Node.js</span>
              </div>
            </motion.div>

            {/* Database */}
            <motion.div
              className="skill-card"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">
                  {/* database icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <ellipse
                      cx="12"
                      cy="6"
                      rx="7"
                      ry="3"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
                <div className="skill-title">Database</div>
              </div>
              <div className="skill-tags">
                <span className="tag">SQL</span>
                <span className="tag">Azure</span>
                <span className="tag">MongoDB</span>
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              className="skill-card"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              <div className="skill-card-header">
                <div className="skill-icon">
                  {/* tools icon */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M14 7l3-3 3 3-3 3-3-3zM3 14l5-5 3 3-5 5H3v-3zM12 12l6 6"
                      stroke="#111827"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="skill-title">Tools</div>
              </div>
              <div className="skill-tags">
                <span className="tag">VS Code</span>
                <span className="tag">Visual Studio</span>
                <span className="tag">Android Studio</span>
                <span className="tag">Brackets</span>
                <span className="tag">Figma</span>
              </div>
            </motion.div>
          </div>

          {/* Soft skills panel */}
          <motion.div
            className="soft-panel"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="soft-header">Soft Skills</div>
            <div className="soft-list">
              <div className="soft-chip">
                <span className="check">✓</span> Problem‑solving
              </div>
              <div className="soft-chip">
                <span className="check">✓</span> Team Collaboration
              </div>
              <div className="soft-chip">
                <span className="check">✓</span> Adaptability
              </div>
              <div className="soft-chip">
                <span className="check">✓</span> Time Management
              </div>
              <div className="soft-chip">
                <span className="check">✓</span> Creativity
              </div>
              <div className="soft-chip">
                <span className="check">✓</span> Attention to Detail
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-sub">
              A collection of academic and personal projects showcasing
              practical application of software development skills and
              problem-solving abilities.
            </p>
          </div>

          <div className="cards-grid">
            {/* Weather App - first card */}
            <motion.div
              className="card grid-span-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-thumb">
                <img src={weather} alt="Weather App" />
              </div>
              <div className="panel-title">Weather App</div>
              <div className="panel-sub">
                The Weather App is a responsive React app that shows real-time
                weather for your current location and lets you search, view
                hourly and 7-day forecasts, and save favorite places.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="pill">React</span>
                <span className="pill">localStorage</span>
                <span className="pill">React Router</span>
                <span className="pill">Geolocation</span>
              </div>
              <div style={{ marginTop: 12 }}>
                <a
                  href="https://weather-ev0z.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View Project
                </a>
              </div>
            </motion.div>
            {/* <motion.div
              className="card grid-span-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-thumb">
                <img
                  src="src/assets/images/shopping(1).jfif"
                  alt="Shopping List Manager"
                />
              </div>
              <div className="panel-title">Shopping List Manager</div>
              <div className="panel-sub">
                The Shopping List Manager allows users to securely create, edit,
                delete,search and organize shopping lists and add items to the
                list.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="pill">React</span>
                <span className="pill">TypeScript</span>
                <span className="pill">Redux</span>
                <span className="pill">JSON Server</span>
                <span className="pill">React Router</span>
              </div>
            </motion.div> */}
            <motion.div
              className="card grid-span-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <div className="project-thumb">
                <img
                  src={job}
                  alt="Job Application Tracker"
                />
              </div>
              <div className="panel-title">Job Application Tracker</div>
              <div className="panel-sub">
                A responsive React app for registering, logging in, and managing
                job applications. Supports add/edit/delete, search and filter.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="pill">React</span>
                <span className="pill">JSON Server</span>
                <span className="pill">localStorage</span>
                <span className="pill">React Router</span>
              </div>
              <div style={{ marginTop: 12 }}>
                <a
                  href="https://job-application-tracker-q45q.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View Project
                </a>
              </div>
            </motion.div>
            <motion.div
              className="card grid-span-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="project-thumb">
                <img
                  src={linki}
                  alt="Favorite Links Manager"
                />
              </div>
              <div className="panel-title">Favorite Links Manager</div>
              <div className="panel-sub">
                A responsive React app to save, edit, delete, and search
                favorite website links.{" "}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="pill">React</span>
                <span className="pill">localStorage</span>
                <span className="pill">CSS</span>
                <span className="pill">Media Queries</span>
              </div>

              <div style={{ marginTop: 12 }}>
                <a
                  href="https://task2-linkvault.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View Project
                </a>
              </div>
            </motion.div>

            <motion.div
              className="card grid-span-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-thumb">
                <img
                  src={dictionary}
                  alt="dictionary"
                />
              </div>
              <div className="panel-title">Dictionary</div>
              <div className="panel-sub">
                A multi-functional converter application featuring File
                Transfer, Temperature Converter, Scientific Notation Converter,
                and Metric Prefix Converter.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="pill">Redux</span>
                <span className="pill">CSS</span>
                <span className="pill">React</span>
              </div>
              <div style={{ marginTop: 12 }}>
                <a
                  href="https://redux-dictionary.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  View Project
                </a>
              </div>
            </motion.div>
            {/* <motion.div
              className="card grid-span-4"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <div className="project-thumb">
                <img
                  src="/projects/book-ordering.jpg"
                  alt="Book Ordering System"
                />
              </div>
              <div className="panel-title">Book Ordering System</div>
              <div className="panel-sub">
                An introductory web application for managing book orders,
                featuring product browsing and order management capabilities.
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="pill">ASP.NET</span>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Education & Certifications</h2>
            <p className="section-sub">
              My academic journey and professional credentials
            </p>
          </div>

          {/* Two education cards */}
          <div className="education-grid-2">
            {/* Diploma */}
            <motion.div
              className="edu-card"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.35 }}
            >
              <div className="edu-header">
                <div className="edu-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 3l9 5-9 5-9-5 9-5z"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M7 12v4c0 1.1 2.24 2 5 2s5-.9 5-2v-4"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
                <div>
                  <div className="edu-title">
                    Diploma in ICT: Applications Development
                  </div>
                  <a
                    className="edu-inst"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Durban University of Technology
                  </a>
                  <div className="edu-dates">January 2022 – 2025</div>
                </div>
              </div>
              <p className="edu-desc">
                Comprehensive program covering software development, web
                technologies, database management, and application design.
                Completed multiple hands on projects.
              </p>
            </motion.div>

            {/* Matric */}
            <motion.div
              className="edu-card"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <div className="edu-header">
                <div className="edu-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 3l9 5-9 5-9-5 9-5z"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M7 12v4c0 1.1 2.24 2 5 2s5-.9 5-2v-4"
                      stroke="#111827"
                      strokeWidth="1.6"
                    />
                  </svg>
                </div>
                <div>
                  <div className="edu-title">Matric</div>
                  <a
                    className="edu-inst"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    Ubuhlebesizwe Secondary School
                  </a>
                  <div className="edu-dates">January 2017 – November 2021</div>
                </div>
              </div>
              <p className="edu-desc">
                Completed secondary education with a strong foundation in
                mathematics, science, and technology subjects, preparing for
                higher education in ICT.
              </p>
            </motion.div>
          </div>

          {/* Certifications panel */}
          <motion.div
            className="edu-certs-panel"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="certs-header">
              <div className="edu-icon small">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="8"
                    stroke="#111827"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 8v5l3 2"
                    stroke="#111827"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="edu-title">Professional Certifications</div>
            </div>
            <div className="certs-grid">
              <span className="cert-chip">
                Full Stack Development • FNB App Academy
              </span>
              <span className="cert-chip">Networking Essentials • Cisco</span>
              <span className="cert-chip">
                Responsive Web Design • freeCodeCamp
              </span>
              <span className="cert-chip">
                Cybersecurity Essentials • Cisco
              </span>
              <span className="cert-chip">
                JavaScript Algorithms and Data Structures • freeCodeCamp
              </span>
              <span className="cert-chip">Linux Unhatched • Cisco</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-sub">
              Interested in working together? Feel free to reach out through any
              of the channels below.
            </p>
          </div>

          <div className="contact-grid">
            <motion.div
              className="panel"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.35 }}
            >
              <div className="panel-title">Contact Information</div>
              <div className="panel-sub">Get in touch directly</div>
              <div style={{ display: "grid", gap: 10 }}>
                <div>
                  <div className="panel-sub">Email</div>
                  <div>
                    <a
                      href="mailto:ngcobontombenhle434@gmail.com"
                      className="contact-link"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"
                          stroke="#111827"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M4 7l8 6 8-6"
                          stroke="#111827"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>ngcobontombenhle434@gmail.com</span>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="panel-sub">Phone</div>
                  <div>
                    <a href="tel:0767814774" className="contact-link">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M3 5a2 2 0 012-2h2l2 4-2 2a12 12 0 006 6l2-2 4 2v2a2 2 0 01-2 2h-1C9.163 19 5 14.837 5 9V8a3 3 0 01-2-3z"
                          stroke="#111827"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>076 781 4774</span>
                    </a>
                  </div>
                </div>
                <div>
                  <div className="panel-sub">Location</div>
                  <div>
                    <a
                      href="https://www.google.com/maps?q=Durban+4001,+South+Africa"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path
                          d="M12 21s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z"
                          stroke="#111827"
                          strokeWidth="1.6"
                        />
                        <circle
                          cx="12"
                          cy="11"
                          r="2.5"
                          stroke="#111827"
                          strokeWidth="1.6"
                        />
                      </svg>
                      <span>
                        Durban 4001, South Africa
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="panel"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.35 }}
            >
              <div className="panel-title">Connect Online</div>
              <div className="panel-sub">Find me on social platforms</div>
              <div style={{ display: "grid", gap: 10 }}>
                <a
                  className="btn btn-linkedin"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
                <a
                  className="btn btn-github"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.14-.02-2.07-3.06.67-3.71-1.3-3.71-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.18.91.1-.71.38-1.19.7-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.02 1.12.87-.24 1.8-.36 2.73-.36.93 0 1.86.12 2.73.36 2.1-1.41 3.02-1.12 3.02-1.12.6 1.53.22 2.66.11 2.94.7.77 1.13 1.74 1.13 2.94 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1 .74 2.03 0 1.47-.01 2.66-.01 3.02 0 .29.2.64.76.53 4.36-1.45 7.5-5.57 7.5-10.43C23.02 5.25 18.27.5 12 .5z" />
                  </svg>
                  <span>View GitHub Profile</span>
                </a>
                <p className="panel-sub">
                  Check out my repositories and contributions on GitHub, or
                  connect with me professionally on LinkedIn.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
