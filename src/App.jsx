import "./App.css";
import profilePic from "./picture/Profile picture.png";

const skillGroups = [
  {
    label: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3", "UI/UX Design"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST API Design", "JWT Auth"],
  },
  {
    label: "Database",
    items: ["MongoDB", "Mongoose"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "Figma", "Agile / Sprints"],
  },
];

const experience = {
  role: "Full Stack Developer",
  org: "Myinception Tech, Chennai",
  period: "June 2025 — June 2026",
  points: [
    "Developed and deployed full-stack web applications using React.js on the frontend and Node.js with Express.js on the backend.",
    "Designed and integrated RESTful APIs to connect client and server layers.",
    "Built responsive, cross-device UI components using HTML5 and CSS3.",
    "Contributed to database integration, code reviews, and agile sprint delivery within a collaborative team.",
  ],
};

const projects = [
  {
    name: "Visitor Pass Management System",
    period: "Jul 2026 — Aug 2026",
    stack: "React · Node.js · Express · MongoDB · JWT",
    description:
      "A full-stack MERN app that replaces a paper visitor register with a proper workflow: registration, approval, check-in/check-out and a full audit trail.",
    highlights: [
      "Three role-based logins — Admin, Receptionist and Employee — each seeing only what their role needs.",
      "Every visit request moves through a real state machine: pending → approved/rejected → checked-in → checked-out, with rules like one active visit per visitor and a 3-pending-request cap per employee enforced on the server, not just the UI.",
      "Every action is written to an append-only activity log, so nothing in the audit trail can be edited after the fact.",
      "Auth is JWT-based with bcrypt-hashed passwords, and every mutating endpoint checks both login and role before it runs.",
    ],
    link: "https://github.com/Rehoboth-125/visitor-pass-system",
  },
  {
    name: "Wrightpath — E-Learning Platform",
    period: "Jul 2025 — Dec 2025",
    stack: "React · Node.js · GCP",
    description:
      "A full-stack e-learning platform built with React on the frontend and Node.js on the backend, with scalable REST APIs behind it.",
    highlights: [
      "Deployed and managed on Google Cloud Platform.",
      "Delivered features iteratively in an agile team environment.",
    ],
    link: null,
  },
  {
    name: "Edmentum",
    period: "Dec 2025 — Jun 2026",
    stack: "HTML5 · CSS3",
    description:
      "Contract project with Integra E-Publishing on an e-learning platform, focused on the interface layer.",
    highlights: [
      "Built responsive, cross-device web interfaces.",
      "Kept UI standards consistent and optimised layouts across screen sizes.",
    ],
    link: null,
  },
];

const education = {
  degree: "B.E, Computer Science & Engineering",
  school: "Loyola Institute of Technology and Science",
  period: "Jun 2021 — May 2025",
  detail: "CGPA: 8.1",
};

const certifications = [
  "Web Development — AK Infopark (3-month course)",
  "UI/UX Design — eMax Education (5-month course)",
];

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function App() {
  return (
    <div className="page">
      <header className="nav">
        <a className="nav-brand" href="#top">
          Rehoboth S
        </a>
        <nav className="nav-links">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              {s.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href="#contact">
          Contact
        </a>
      </header>

      <main>
        <section id="top" className="hero">
          <div className="hero-text">
            <p className="hero-kicker">Software Developer</p>
            <h1 className="hero-title">
              Hi, I'm
              <br />
              Rehoboth S
            </h1>
            <p className="hero-sub">
              Software Developer with 1+ year of experience building web applications using HTML, CSS, JavaScript, React.js, Node.js, and MongoDB.
Experienced in developing responsive and user-friendly interfaces with basic UI/UX principles and Figma.
Worked on frontend, backend, REST API integration, database management, and application development.
Familiar with Git and GitHub for version control and collaborative development.

            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/portfolio 2/public/RehobothS_Software_Developer_Sep_2026.pdf" download="Rehoboth-S-Resume.pdf">
  Download Resume
</a>
              <a className="btn" href="#projects">
                See Projects
              </a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/Rehoboth-125" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rehoboth-s-9620102b0/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-frame">
             
              <img src={profilePic} alt="Rehoboth S" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <p className="section-eyebrow">01</p>
          <h2 className="section-title">About</h2>
          <p className="prose">
            I'm a full stack developer and Software developer working across the MERN stack —
            comfortable moving from a React interface down to the Node and
            Express layer, and into MongoDB where the data actually lives. A
            year of hands-on experience has mostly gone into internal tools
            and e-learning platforms, where the interesting problems are
            usually about correctness and clear workflows, not decoration.
          </p>
          <p className="prose">
            I'm based in Nagercoil, India, and I'm currently open to
            full-stack roles where I can keep building things end to end.
          </p>
        </section>

        <section id="skills" className="section">
          <p className="section-eyebrow">02</p>
          <h2 className="section-title">Skills</h2>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div key={group.label} className="skill-group">
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <p className="section-eyebrow">03</p>
          <h2 className="section-title">Experience</h2>
          <div className="timeline-item">
            <span className="timeline-date">{experience.period}</span>
            <h3 className="timeline-role">{experience.role}</h3>
            <p className="timeline-org">{experience.org}</p>
            <ul className="point-list">
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-eyebrow">04</p>
          <h2 className="section-title">Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <div className="project-head">
                  <div>
                    <h3>{project.name}</h3>
                    <span className="project-period">{project.period}</span>
                  </div>
                  <span className="project-stack">{project.stack}</span>
                </div>
                <p className="prose">{project.description}</p>
                <ul className="point-list">
                  {project.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {project.link && (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub →
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <p className="section-eyebrow">05</p>
          <h2 className="section-title">Education</h2>
          <div className="timeline-item">
            <span className="timeline-date">{education.period}</span>
            <h3 className="timeline-role">{education.degree}</h3>
            <p className="timeline-org">
              {education.school} · {education.detail}
            </p>
          </div>
          <div className="cert-list">
            <h3>Certifications</h3>
            <ul>
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="section-eyebrow">06</p>
          <h2 className="contact-title">Let's talk</h2>
          <p className="prose">
            Open to full-stack roles and interesting problems. Email is the
            fastest way to reach me.
          </p>
          <div className="contact-list">
            <a href="mailto:rehobothselvakumar@gmail.com">
              rehobothselvakumar@gmail.com
            </a>
            <a href="tel:+919487147311">+91 94871 47311</a>
            <a
              href="https://github.com/Rehoboth-125"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Rehoboth-125
            </a>
            <a
              href="https://www.linkedin.com/in/rehoboth-s-9620102b0/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/rehoboth-s
            </a>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Rehoboth S</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
