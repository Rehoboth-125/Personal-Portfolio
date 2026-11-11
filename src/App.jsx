import "./App.css";
import { useState } from "react";


const profilePic = "/images/Profile picture.png";

const eyeKartImages = [
  "/images/eyekart 1.png",
  "/images/eyekart 2.png",
  "/images/eyekart 3.png",
  "/images/eyekart 4.png",
  "/images/eyekart 5.png",
  "/images/eyekart 6.png",
  "/images/eyekart 7.png",
  "/images/eyekart 8.PNG",
  "/images/eyekart 9.jpeg",
  "/images/eyekart 10.png",
];

const visitorImages = [
  "./images/Visitor Pass Management System 1.png",
  "./images/Visitor Pass Management System 2.png",
  "./images/Visitor Pass Management System 3.png",
  "./images/Visitor Pass Management System 4.png",
  "./images/Visitor Pass Management System 5.png",
];

// SKILLS
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

// EXPERIENCE
const experience = {
  role: "Full Stack Developer",
  org: "MyInception Tech, Chennai",
  period: "June 2025 — June 2026",
  points: [
    "Developed full-stack web applications using React.js, Node.js and Express.js.",
    "Designed and integrated RESTful APIs connecting frontend and backend applications.",
    "Built responsive web interfaces using HTML5, CSS3 and JavaScript.",
    "Contributed to database integration, code reviews and agile sprint delivery.",
  ],
};

// PROJECT IMAGE GALLERY
function ProjectGallery({ images, name }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const previousImage = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? images.length - 1 : previous - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((previous) =>
      previous === images.length - 1 ? 0 : previous + 1
    );
  };

  return (
    <div className="project-gallery">
      <div className="gallery-heading">
        <h4>Project Screenshots</h4>

        <span>
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </span>
      </div>

      <div className="gallery-image">
        <img
  src={images[currentIndex]}
  alt={`${name} screenshot ${currentIndex + 1}`}
  onError={() => {
    console.log("Failed image:", images[currentIndex]);
  }}
/>
      </div>

      <div className="gallery-controls">
        <button
          type="button"
          onClick={previousImage}
          aria-label="Previous image"
        >
          ←
        </button>

        <span>
          {currentIndex + 1} of {images.length}
        </span>

        <button
          type="button"
          onClick={nextImage}
          aria-label="Next image"
        >
          →
        </button>
      </div>
    </div>
  );
}

// PROJECTS
const projects = [
  {
    name: "EyeKart – MERN Stack E-Commerce Application",
    period: "Personal Project",
    stack: "React · Node.js · Express · MongoDB",

    description:
      "EyeKart is a full-stack e-commerce web application developed using the MERN stack. It allows users to browse eyewear products, manage their shopping cart, place orders, and track their purchases through a user-friendly interface.",

    highlights: [
      "User Authentication: Google OAuth integration and secure authentication using JWT and bcrypt.",
      "Product Management: Category-based product browsing, filtering, and individual product details.",
      "Shopping Cart: Add products, update quantities, and remove items.",
      "Checkout: Customer details, delivery address, Cash on Delivery (COD) and UPI payment options.",
      "Order Management: Store customer orders in MongoDB and view order history through My Orders.",
      "Email Notifications: Brevo integration for order-related email notifications.",
      "SMS Notifications: Sms8 io Programmable Messaging for COD order notifications, currently in testing due to trial account restrictions.",
      "Responsive UI: User-friendly interface for a smooth shopping experience.",
      "Integrated React Leaflet and OpenStreetMap to build an interactive Store Locator, allowing users to view eyewear store locations on a map.",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google OAuth",
      "JWT",
      "bcrypt",
      "Razorpay",
      "Brevo",
      "Sms8 io",
      "Leaflet",
      "OpenStreetMap",
    ],

    role:
      "Developed frontend components, implemented backend REST APIs, connected MongoDB, integrated authentication and third-party services, and worked on checkout and order management workflows.",

    images: eyeKartImages,
    link: null,
  },

  {
    name: "Visitor Pass Management System",
    period: "July 2026 — August 2026",
    stack: "React · Node.js · Express · MongoDB · JWT",

    description:
      "A full-stack MERN application that replaces manual visitor registers with a digital visitor management workflow.",

    highlights: [
      "Role-Based Access: Separate Admin, Receptionist and Employee logins.",
      "Visitor Registration: Employees can register visitor details and submit visit requests.",
      "Approval Workflow: Receptionists can approve or reject visitor requests.",
      "Visit Tracking: Manage visitor check-in and check-out workflows.",
      "Server-Side Validation: Enforced active visit restrictions and pending request limits.",
      "Activity Logs: Append-only records to maintain visitor activity history.",
      "Security: JWT authentication, bcrypt password hashing and role-based API authorization.",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
    ],

    role:
      "Developed frontend components, backend APIs, authentication, role-based access control, visitor approval workflows and activity logging.",

    images: visitorImages,
    link: "https://github.com/Rehoboth-125/visitor-pass-system",
  },

  {
    name: "Wrightpath – E-Learning Platform",
    period: "July 2025 — December 2025",
    stack: "React · Material UI · Node.js · Express.js · GCP",

    description:
      "A full-stack e-learning platform developed to provide users with an interactive digital learning experience.",

    highlights: [
      "Developed frontend and backend application features.",
      "Built user interface components using React.js.",
      "Worked with Node.js backend functionality and REST APIs.",
      "Used Google Cloud Platform for application deployment and management.",
      "Collaborated with the development team in an agile environment.",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "GCP",
    ],

    role:
      "Contributed to frontend development, backend functionality, REST API integration and application deployment.",

    images: [],
    link: null,
  },

  {
    name: "Study Island – E-Learning Content Development",
    period: "December 2025 — June 2026",
    stack: "HTML5 · CSS3 · Inline CSS",

    description:
      "Worked on an e-learning content development project for Edmentum's Study Island platform through Integra. Study Island is a cloud-based educational platform designed to support K–12 students through digital learning materials, practice activities and assessments.",

    highlights: [
      "Developed and formatted digital e-book screens using HTML5 and CSS3.",
      "Used different HTML elements and div-based layouts to structure educational content.",
      "Applied inline CSS for screen-level styling and formatting.",
      "Maintained consistent layouts and visual presentation across multiple content screens.",
      "Worked with structured educational content to ensure readability and proper alignment.",
    ],

    technologies: ["HTML5", "CSS3", "Inline CSS"],

    role:
      "Worked on digital e-book screen development and content formatting as Programmer trainee for the Study Island platform. Project Partner: Integra (IntegraNXT). Company: MyInception Tech.",

    images: [],
    link: null,
  },
];


// EDUCATION
// CERTIFICATIONS
// EDUCATION
// EDUCATION DETAILS
const education = {
  degree: "B.E, Computer Science & Engineering",
  school: "Loyola Institute of Technology and Science",
  period: "June 2021 — May 2025",
  detail: "CGPA: 8.1",
};
// CERTIFICATIONS
const certifications = [
  {
    title: "Web Development — AK Infopark",
    duration: "3-Month Course",
    description:
      "Learned HTML, CSS, JavaScript, React.js and XAMPP, with practical knowledge of building responsive and interactive web interfaces.",
  },
  {
    title: "UI/UX Design — eMax Education",
    duration: "5-Month Course",
    description:
      "Learned HTML, CSS, JavaScript, jQuery, Photoshop, Illustrator, Adobe XD and Figma, with practical experience in wireframing, prototyping and visual design.",
  },
];

// NAVIGATION
const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// MAIN APP
function App() {
  return (
    <div className="page">
      {/* NAVBAR */}
      <header className="nav">
        <a className="nav-brand" href="#top">
          Rehoboth<span>.</span>
        </a>

        <nav className="nav-links">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Talk <span>↗</span>
        </a>
      </header>

      <main>
        {/* HERO */}
        <section id="top" className="hero">
          <div className="hero-text">
            <p className="hero-kicker">
              <span className="status-dot"></span>
              SOFTWARE DEVELOPER
            </p>

            <h1 className="hero-title">
              Building digital
              <br />
              experiences with
              <br />
              <span>purpose.</span>
            </h1>

            <p className="hero-sub">
              Hi, I'm Rehoboth S. A Software Developer with 1+ year of
              experience building web applications using React.js,
              JavaScript, Node.js and MongoDB. Passionate about creating
              responsive interfaces and practical full-stack solutions.
            </p>

            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href="/RehobothS_resume.pdf"
                download="Rehoboth-S-Resume.pdf"
              >
                Download Resume ↗
              </a>

              <a className="btn btn-outline" href="#projects">
                Explore Projects →
              </a>
            </div>

            <div className="hero-links">
              <a
                href="https://github.com/Rehoboth-125"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/rehoboth-s-9620102b0/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-frame">
              <img src={profilePic} alt="Rehoboth S" />
            </div>

            <div className="photo-caption">
              <span>01 / DEVELOPER</span>
              <span>Nagercoil, India</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <p className="section-eyebrow">01 — INTRODUCTION</p>

          <h2 className="section-title">
            About <span>Me.</span>
          </h2>

          <div className="about-content">
            <p className="prose">
              I'm a Full Stack Developer working across the MERN stack,
              comfortable building React interfaces, developing backend
              functionality with Node.js and Express.js, and integrating
              MongoDB databases.
            </p>

            <p className="prose">
              My experience includes working on e-learning platforms,
              digital publishing and full-stack applications. I enjoy
              understanding problems and turning them into practical,
              user-friendly solutions.
            </p>

            <p className="prose">
              Based in Nagercoil, India. Currently open to opportunities
              where I can continue growing as a developer.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <p className="section-eyebrow">02 — WHAT I WORK WITH</p>

          <h2 className="section-title">
            Skills & <span>Technologies.</span>
          </h2>

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

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <p className="section-eyebrow">03 — CAREER JOURNEY</p>

          <h2 className="section-title">
            Work <span>Experience.</span>
          </h2>

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

        {/* PROJECTS */}
        <section id="projects" className="section">
          <p className="section-eyebrow">04 — SELECTED WORK</p>

          <h2 className="section-title">
            Featured <span>Projects.</span>
          </h2>

          <div className="project-list">
            {projects.map((project, index) => (
              <article key={project.name} className="project-card">
                <div className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="project-head">
                  <div>
                    <h3>{project.name}</h3>

                    <span className="project-period">
                      {project.period}
                    </span>
                  </div>

                  <span className="project-stack">{project.stack}</span>
                </div>

                <div className="project-content">
                  <h4>Project Overview</h4>

                  <p className="prose">{project.description}</p>

                  <h4>Key Features & Responsibilities</h4>

                  <ul className="point-list">
                    {project.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <div className="project-technologies">
                    <h4>Technologies Used</h4>

                    <div className="tech-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-role">
                    <h4>My Role</h4>

                    <p className="prose">{project.role}</p>
                  </div>

                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub ↗
                    </a>
                  )}

                  <ProjectGallery
                    images={project.images}
                    name={project.name}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="section">
          <p className="section-eyebrow">05 — ACADEMIC BACKGROUND</p>

          <h2 className="section-title">
            Education & <span>Certifications.</span>
          </h2>

          <div className="timeline-item">
            <span className="timeline-date">{education.period}</span>

            <h3 className="timeline-role">{education.degree}</h3>

            <p className="timeline-org">
              {education.school} · {education.detail}
            </p>
          </div>

          <div className="cert-list">
  <h3>Certifications & Training</h3>

  <div className="cert-items">
    {certifications.map((cert) => (
      <div className="cert-item" key={cert.title}>
        <div className="cert-header">
          <h4>{cert.title}</h4>
          <span>{cert.duration}</span>
        </div>

        <p>{cert.description}</p>
      </div>
    ))}
  </div>
</div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <p className="section-eyebrow">06 — GET IN TOUCH</p>

          <h2 className="contact-title">
            Let's build something
            <br />
            <span>meaningful.</span>
          </h2>

          <p className="prose">
            Open to full-stack developer opportunities and interesting
            projects. Let's connect and discuss how we can work together.
          </p>

          <div className="contact-list">
            <a href="mailto:rehobothselvakumar@gmail.com">
              rehobothselvakumar@gmail.com ↗
            </a>

            <a href="tel:+919487147311">+91 94871 47311</a>

            <a
              href="https://github.com/Rehoboth-125"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/rehoboth-s-9620102b0/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <span>© {new Date().getFullYear()} Rehoboth S</span>

          <span>Designed & Developed with care.</span>
        </footer>
      </main>
    </div>
  );
}

export default App;