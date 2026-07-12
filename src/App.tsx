import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  GitBranch,
  Link,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Vue.js",
  "Nuxt.js",
  "Laravel",
  "Node.js",
  "RESTful APIs",
  "Vite",
  "React Hook Form",
  "Formik",
  "Yup",
  "Zod",
  "Bun Js",
  "Git",
  "Responsive Design",
];
const jobs = [
  [
    "Frontend Developer",
    "PT Rapier Technology International",
    "Jan 2024 — Feb 2025",
    "Developed enterprise applications with React.js and Next.js, reusable UI systems, complex business forms, API integrations, and performance improvements.",
  ],
  [
    "Backend Developer",
    "PT Rapier Technology International",
    "Mar 2021 — Present",
    "Builds backend services, RESTful APIs, business logic, and reliable integrations for scalable enterprise products.",
  ],
  [
    "Owner",
    "Start Track Semarang",
    "Dec 2022 — Present",
    "Leads digital product development, business operations, and tailored software solution delivery.",
  ],
  [
    "Full Stack Web Developer",
    "Satu Pintu Indonesia",
    "Sep 2020 — Feb 2021",
    "Delivered a complete catering order management system from frontend and backend through deployment.",
  ],
  [
    "Web Developer",
    "Bengkelbaik",
    "Jan 2020 — Aug 2020",
    "Developed and maintained company websites and web applications with internal teams.",
  ],
];
const projects = [
  [
    "WMS BAJ",
    "Warehouse Management System",
    "A web platform designed to streamline inventory, warehouse operations, and logistics workflows.",
    "React · TypeScript · REST API",
    "",
  ],
  [
    "WMS Sushi Tei",
    "Enterprise Operations",
    "An internal warehouse dashboard built for enterprise-scale operational processes.",
    "Next.js · React · Enterprise UI",
    "",
  ],
  [
    "Info Kejadian Semarang",
    "Local News Platform",
    "A local portal providing incident updates and information for Semarang and surrounding areas.",
    "Web Platform · Responsive UI",
    "https://infokejadiansemarang.com",
  ],
  [
    "Haloemas",
    "Company Landing Page",
    "A company website featuring business information and dynamic gold price content.",
    "Landing Page · API Integration",
    "https://haloemas.id",
  ],
  [
    "BAS HOLDING",
    "Company Landing Page",
    "A company website featuring business information.",
    "Landing Page · API Integration",
    "",
  ],
  [
    "The Sultan Travel",
    "Management Booking Bus",
    "A company website featuring business for management booking.",
    "Landing Page · API Integration",
    "https://thesultantour.com",
  ],
];

const educations = [
  {
    year: "2015-2019",
    academic: "Bachelor of Computer Science, Informatics",
    school: "Dian Nuswantor University (UDINUS)",
  },
  {
    year: "2012-2015",
    academic: "Senior High School (IPA)",
    school: "SMA Negeri 1 Semarang",
  },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);
  return (
    <div>
      <header>
        <a className="brand" href="#home">
          <b>AA</b>
          <span>Abdurahman.</span>
        </a>
        <nav className={menu ? "open" : ""}>
          {["About", "Experience", "Projects", "Contact"].map((x) => (
            <a onClick={() => setMenu(false)} href={"#" + x.toLowerCase()}>
              {x}
            </a>
          ))}
          <a className="resume" href="/Abdurahman-Argoebie-CV.pdf" download>
            Resume <Download size={16} />
          </a>
        </nav>
        <div className="actions">
          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </button>
          <button className="mobile" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="copy">
            <div className="available">
              <i />
              Available for new opportunities
            </div>
            <p className="eyebrow">Frontend Developer · Full Stack Developer</p>
            <h1>
              I build digital products that feel <em>clear, fast,</em> and
              dependable.
            </h1>
            <p className="intro">
              I’m Abdurahman, a developer based in Semarang with 5+ years of
              experience creating scalable enterprise applications, operational
              dashboards, and business-focused web solutions.
            </p>
            <div className="cta">
              <a className="primary" href="#projects">
                Explore my work <ArrowDown />
              </a>
              <a href="mailto:abdurahmanrizal1@gmail.com">
                Let’s talk <ArrowUpRight />
              </a>
            </div>
            <div className="social">
              <a href="https://github.com/abdurahmanrizal">
                <GitBranch />
                GitHub
              </a>
              <a href="https://linkedin.com/in/abdurahmanargoebie">
                <Link />
                LinkedIn
              </a>
              <span>
                <MapPin />
                Semarang, Indonesia
              </span>
            </div>
          </div>
          <div className="visual">
            <div className="card">
              <small>PORTFOLIO / 2026</small>
              <div className="letter">A</div>
              <div>
                <small>FOCUSED ON</small>
                <h3>
                  Enterprise Web
                  <br />
                  Experiences
                </h3>
              </div>
              <footer>React · Typescript · Next.js · Laravel</footer>
            </div>
          </div>
        </section>
        <section id="about">
          <label>01 / ABOUT</label>
          <div className="split">
            <h2>Engineering useful products, not just interfaces.</h2>
            <div>
              <p className="lead">
                My work sits at the intersection of thoughtful frontend
                engineering, reliable backend systems, and practical business
                needs.
              </p>
              <p>
                I turn complex workflows into intuitive, scalable products—from
                warehouse management systems and dashboards to forms, APIs, and
                complete business platforms.
              </p>
              <div className="stats">
                <b>
                  5+<span>Years experience</span>
                </b>
                <b>
                  {projects.length || 1}
                  <span>Selected projects</span>
                </b>
                <b>
                  3<span>Development disciplines</span>
                </b>
              </div>
            </div>
          </div>
          <div className="skills">
            {skills.map((x) => (
              <span>{x}</span>
            ))}
          </div>
        </section>
        <section id="experience">
          <label>02 / EXPERIENCE</label>
          <h2>Building software across the full product lifecycle.</h2>
          <div className="timeline">
            {jobs.map((j, i) => (
              <article>
                <code>0{i + 1}</code>
                <div>
                  <h3>{j[0]}</h3>
                  <p>{j[1]}</p>
                </div>
                <p>{j[3]}</p>
                <time>{j[2]}</time>
              </article>
            ))}
          </div>
        </section>
        <section id="projects">
          <label>03 / SELECTED WORK</label>
          <h2>Selected systems and digital products.</h2>
          <div className="grid">
            {projects.map((p, i) => (
              <article className="project">
                <div className="art">
                  <div className="window">
                    <i />
                    <i />
                    <i />
                    <span />
                  </div>
                </div>
                <small>{p[1]}</small>
                <div className="ptitle">
                  <h3>{p[0]}</h3>
                  {p[4] && (
                    <a href={p[4]}>
                      <ArrowUpRight />
                    </a>
                  )}
                </div>
                <p>{p[2]}</p>
                <code>{p[3]}</code>
                <b>0{i + 1}</b>
              </article>
            ))}
          </div>
        </section>
        <section className="education">
          <label>04 / EDUCATION</label>
          <h2>My academic journey.</h2>
          <ol className="education-timeline">
            {(educations || [])?.map((education, index) => (
              <li>
                <article>
                  <small>{education.year}</small>
                  <h3>{education.academic}</h3>
                  <p>{education.school}</p>
                </article>
                <span aria-hidden="true">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </li>
            ))}
          </ol>
        </section>
        <section className="contact" id="contact">
          <p className="eyebrow">Have a project or opportunity?</p>
          <h2>Let’s build something that works beautifully.</h2>
          <a href="mailto:abdurahmanrizal1@gmail.com">
            <Mail />
            abdurahmanrizal1@gmail.com
            <ArrowUpRight />
          </a>
        </section>
      </main>
      <div className="bottom">
        <span>© 2026 Abdurahman Argoebie</span>
        <span>Built with React, Vite, TypeScript & Bun</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </div>
  );
}
