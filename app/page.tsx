import Sidebar from "./components/Sidebar";
import RevealWrapper from "./components/RevealWrapper";

export default function Home() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main className="main">
        {/* ── HERO ── */}
        <section className="section hero" id="hero">
          <div className="hero-pre">
            // software_engineer.exe —{" "}
            <span>currently running at Fiserv</span>
          </div>
          <h1>
            Nikhil
            <span className="line2">Kotta.</span>
          </h1>
          <p className="hero-sub">
            I build things that move money, process data, and don&apos;t break at 2am.
            Three years deep in fintech at <strong>Fiserv</strong> — shipping real-time
            systems, wrangling cloud infrastructure, and writing code that actually makes
            it to production. <strong>AWS certified</strong>,{" "}
            <strong>UMD CS grad</strong>, and always looking for the next hard problem.
          </p>
          <div className="hero-btns">
            <a href="#experience" className="btn btn-accent">
              See my work
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="hero-chips">
            {["Python", "React.js", "Java", "Kafka", "AWS", "OpenShift", "Flask", "Oracle SQL", "Docker", "Spring Boot"].map((chip) => (
              <span key={chip} className="chip">{chip}</span>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="section" id="about">
          <div className="section-tag">01 — about</div>
          <div className="section-h">
            Who I <em>am</em>
          </div>
          <div className="about-body">
            <RevealWrapper>
              <div className="about-text">
                <p>
                  Software engineer with <strong>3 years of professional experience</strong> at
                  Fiserv, one of the world&apos;s largest fintech companies. I&apos;ve worked across
                  the full stack — frontend dashboards, backend APIs, cloud deployments, and
                  everything in between.
                </p>
                <p>
                  My day-to-day involves building tools that engineering teams rely on,
                  managing data pipelines that run in real time, and keeping production systems
                  healthy across <strong>20 CI/CD pipelines</strong>. I take security seriously —
                  working with encryption, vulnerability management, and compliance is part of
                  the job.
                </p>
                <p>
                  Outside of work I explore <strong>AI and computer vision</strong> — I built a
                  facial recognition time-tracking app from scratch using Python, OpenCV, and
                  Firebase. I hold an <strong>AWS Cloud Practitioner</strong> cert and am actively
                  working toward Solutions Architect.
                </p>
                <p>
                  I graduated from the <strong>University of Maryland</strong> with a B.S. in
                  Computer Science in 2023.
                </p>
              </div>
            </RevealWrapper>
            <RevealWrapper delay="d1">
              <div className="about-cards">
                {[
                  { label: "Current role", value: "Software Engineer @ Fiserv" },
                  { label: "Education", value: "B.S. CS — Univ. of Maryland '23" },
                  { label: "Certification", value: "AWS Cloud Practitioner" },
                  { label: "In progress", value: "AWS Solutions Architect" },
                  { label: "Pipelines managed", value: "20 production apps" },
                ].map((card) => (
                  <div key={card.label} className="about-card">
                    <div className="about-card-label">{card.label}</div>
                    <div className="about-card-value">{card.value}</div>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="section" id="skills">
          <div className="section-tag">02 — skills</div>
          <div className="section-h">
            What I <em>use</em>
          </div>
          <div className="skills-body">
            {[
              { title: "Languages", tags: ["Python", "JavaScript", "Java", "C / C++", "Ruby", "Swift", "R", "MATLAB"], delay: "" },
              { title: "Frontend", tags: ["React.js", "Redux", "Material-UI", "Axios", "HTML5", "CSS3"], delay: "d1" },
              { title: "Backend", tags: ["Flask", "Spring Boot", "SQLAlchemy", "Celery", "Kafka", "REST APIs"], delay: "d2" },
              { title: "Cloud & DevOps", tags: ["AWS", "Azure", "OpenShift", "Docker", "Jenkins", "CI/CD", "Fortify"], delay: "" },
              { title: "Databases", tags: ["Oracle SQL", "MySQL", "SQL Server"], delay: "d1" },
              { title: "Concepts", tags: ["Microservices", "OOP", "Data Encryption", "Agile / Scrum", "JIRA"], delay: "d2" },
            ].map((block) => (
              <RevealWrapper key={block.title} delay={block.delay}>
                <div className="skill-block" style={{ height: "100%" }}>
                  <div className="skill-title">{block.title}</div>
                  <div className="skill-tags">
                    {block.tags.map((tag) => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="section" id="experience">
          <div className="section-tag">03 — experience</div>
          <div className="section-h">
            Where I&apos;ve <em>worked</em>
          </div>
          <div className="exp-list">

            {/* Fiserv Full-time */}
            <RevealWrapper>
              <div className="exp-item">
                <div>
                  <div className="exp-co">Fiserv</div>
                  <div className="exp-date">June 2023 — Present</div>
                  <span className="exp-badge ft">Full-time</span>
                </div>
                <div>
                  <div className="exp-role">Software Engineer</div>
                  <ul className="exp-points">
                    <li>Managed CI/CD pipelines for 20 production applications and led vulnerability management with Fortify and Sonatype, ensuring security compliance across fintech platforms.</li>
                    <li>Built the Event Monitoring Tool (EMT) using React.js and Flask — a centralized dashboard that gives engineers real-time visibility into EFT platform issues, cutting resolution times and reducing client impact.</li>
                    <li>Developed the NOR CWSI GUI for the Network Management team to upload and process VisaNet BIN reports, tightening data consistency and keeping the business compliant.</li>
                    <li>Managed Kafka topics handling real-time financial data streams across EFT platforms — making sure the right data gets to the right place, fast.</li>
                    <li>Designed standardized Red Hat OpenShift deployment templates and improved Jenkins pipelines, making release management smoother for the whole team.</li>
                    <li>Worked directly with Oracle databases — writing and optimizing stored procedures and data retrieval queries for high-volume fintech workloads.</li>
                  </ul>
                </div>
              </div>
            </RevealWrapper>

            {/* Fiserv Intern */}
            <RevealWrapper>
              <div className="exp-item">
                <div>
                  <div className="exp-co">Fiserv</div>
                  <div className="exp-date">June 2021 — May 2023</div>
                  <span className="exp-badge int">Internship</span>
                </div>
                <div>
                  <div className="exp-role">Software Engineer Intern</div>
                  <ul className="exp-points">
                    <li>Contributed to an internal Audit GUI built on React.js and Spring Boot microservices — giving finance teams a clear view of transaction history and audit trails.</li>
                    <li>Embedded in Agile development cycles (CPT, SCRUM, DT) from day one — attending standups, sprint planning, and retrospectives alongside the full engineering team.</li>
                    <li>Set up and troubleshot test environments across PEN, SONA, and QA, keeping the team unblocked during development and release cycles.</li>
                    <li>Delivered measurable backend performance improvements using Spring Cache, reducing redundant database calls on frequently-accessed endpoints.</li>
                  </ul>
                </div>
              </div>
            </RevealWrapper>

            {/* Centsai */}
            <RevealWrapper>
              <div className="exp-item">
                <div>
                  <div className="exp-co">Centsai</div>
                  <div className="exp-date">Oct 2020 — Jan 2021</div>
                  <span className="exp-badge int">Internship</span>
                </div>
                <div>
                  <div className="exp-role">Market Research Intern</div>
                  <ul className="exp-points">
                    <li>Collected and structured U.S. and Mexico market data by building scrapers against the Yelp Fusion API.</li>
                    <li>Automated Salesforce data uploads using CSV pipelines, saving the team hours of manual data entry per week.</li>
                  </ul>
                </div>
              </div>
            </RevealWrapper>

          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section" id="contact">
          <div className="section-tag">04 — contact</div>
          <div className="section-h">
            Let&apos;s <em>talk.</em>
          </div>
          <div className="contact-body">
            <RevealWrapper>
              <p className="contact-intro">
                Open to full-time roles, contract work, and interesting engineering problems.
                If you have something worth building, I&apos;d love to hear about it.
              </p>
            </RevealWrapper>
            <RevealWrapper delay="d1">
              <div className="contact-big-links">
                {[
                  { type: "Email", val: "nikhilkotta20@gmail.com", href: "mailto:nikhilkotta20@gmail.com" },
                  { type: "Phone", val: "609-598-1676", href: "tel:6095981676" },
                  { type: "LinkedIn", val: "nikhil-kotta", href: "https://www.linkedin.com/in/nikhil-kotta-85872019b" },
                  { type: "GitHub", val: "nik112001", href: "https://github.com/nik112001" },
                ].map((link) => (
                  <a
                    key={link.type}
                    href={link.href}
                    className="clink-big"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="clink-big-left">
                      <span className="clink-big-type">{link.type}</span>
                      <span className="clink-big-val">{link.val}</span>
                    </div>
                    <span className="clink-big-arrow">→</span>
                  </a>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>

        <footer>
          <p>© 2026 Nikhil Kotta</p>
          <p>Open to work · New Jersey</p>
        </footer>
      </main>
    </div>
  );
}
