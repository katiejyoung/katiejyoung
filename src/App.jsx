import React from "react";
import profilePhoto from "./assets/profile.jpg";

const LINKS = {
  linkedin: "https://linkedin.com/in/katiejanelle/",
  github: "https://github.com/katiejyoung/",
  tangible: "https://github.com/katiejyoung/tangible-demo",
};

function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="section">
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function TimelineItem({ period, role, org, children }) {
  return (
    <li className="timeline-item">
      <span className="timeline-period">{period}</span>
      <div>
        <h3>
          {role} <span className="org">@ {org}</span>
        </h3>
        {children}
      </div>
    </li>
  );
}

export default function App() {
  return (
    <>
      <header className="hero">
        <img
          src={profilePhoto}
          alt="Portrait of Katie Young"
          width="160"
          height="160"
          loading="eager"
          decoding="async"
        />
        <div>
          <h1>Katie Young</h1>
          <p className="tagline">Full-stack engineer · React, TypeScript, Next.js · Asheville, NC</p>          
          <nav className="links">
            <a href={LINKS.linkedin}>LinkedIn</a>
            <a href={LINKS.github}>GitHub</a>
            <a href="#tangible" className="pill">Tangible → solo project</a>          
          </nav>
        </div>
      </header>

      <main>
        <Section id="about" kicker="Hello there" title="TL;DR">
          <p>
            I've spent five years building production web applications — most recently shipping
            TypeScript, React, and Next.js features at Storyblocks. I'm the teammate people go to for support, the one who volunteers for the
            gnarly legacy workflow nobody wants, and (per my{" "}
            <a href="https://www.linkedin.com/in/katiejanelle/details/recommendations/">
            LinkedIn recommendations</a>) someone people genuinely enjoy working with.
          </p>
          <p>
            Off the clock, I'm converting a trailer into a traveling woodshop, plotting my next international trip, and designing <a href="#tangible">my first independent app</a>.
          </p>
        </Section>

        <Section id="lately" kicker="Personal development" title="What I've been up to">
          <p>
            Since fall 2024 I've been working independently while developing several projects of my own:
          </p>
          <ul>
            <li>
              <strong>Tangible</strong> — a second-brain app with AI and IoT features.{" "}
              <a href="#tangible">Details below ↓</a>
            </li>
            <li>
              <strong>Home infrastructure</strong> — self-hosted a Synology NAS running
              Jellyfin and Synology Photos for family media sharing, digitized family
              photos, paperwork, and DVDs, and migrated my whole household to more
              secure digital practices (Proton Mail, Bitwarden, VPN), plus home
              automations via IoT sensors.
            </li>
            <li>
              <strong>Carpentry</strong> — apprenticed with a natural builder: framed a
              3-bedroom house, worked on a tiny-house build from foundation to siding,
              and took on solo handywork clients alongside software projects.
            </li>
         </ul>
        </Section>

        <Section id="tangible" kicker="Current project" title="Tangible">
          <p>
            A second-brain meets to-do app: notes, tasks, and reference material in one
            place, connected to the physical world through IoT integrations and brought
            to life with built-in AI.
          </p>
          <p>
            It started when I built myself a full second brain in Notion — meal planner,
            exercise library, project board, recurring tasks, hobby notes — and kept
            running into the same walls. I wanted everything in one place, and I knew I
            could build it better. So I am.
          </p>
          <p>
            Fittingly, Tangible's development is currently tracked in the Jira-style
            project board from that same Notion system.
          </p>
          <p className="aside">
            Built on Next.js with a Python microservice handling the IoT layer.
            Currently in active development — launching soon.
          </p>
          <a href={LINKS.tangible} className="pill action-button">Follow on GitHub</a>
        </Section>

        <Section id="experience" kicker="Recent experience" title="Experience">
          <ol className="timeline">
            <TimelineItem role="Full-Stack Software Engineer" org="Starfall Studio, LLC — Greensboro, NC" period="2025 — Now">
            <p>
              Developing an automated task-tracking platform: Next.js, Docker, Prisma,
              Tailwind, Clerk auth, plus an AI-powered feature and a Python IoT microservice.
            </p>
            </TimelineItem>
            <TimelineItem role="Working Sabbatical" org="Independent — Richmond, VA" period="2024 — 2025">
            <p>
              Leveled up in Next.js, React, and Tailwind; built a home NAS and IoT system;
              built out my own toolkit of Notion templates (a personal
              Kanban board, a recurring-task list, a meal planner, a pack list generator, and more).
            </p>
            </TimelineItem>
            <TimelineItem role="Senior Software Engineer" org="Storyblocks — Remote" period="2023 — 2024">
            <p>
              Full-stack TypeScript/React/Next.js plus PHP/SQL on a fully remote team; key
              contributor to the PHP-monolith-to-Next.js migration; volunteered to
              modernize legacy admin workflows for customer support ops.
            </p>
            </TimelineItem>
            <TimelineItem role="Software Engineer" org="Storyblocks — Remote" period="2022 — 2023">
              <p>Converted sections of a PHP monolith to React with Redux state management; ran SQL database migrations.</p>
            </TimelineItem>
          </ol>
          <details>
          <summary>Earlier chapters (DevSecOps @ BridgePhase, Engineering Intern @ Dell RSA, B.A. English @ Georgetown, B.S. CS @ Oregon State)</summary>
          <p>
            Education: B.A. in English at Georgetown, then a B.S. in Computer Science
            at Oregon State.
          </p>
          <p>
            Work Experience: DevSecOps at BridgePhase and an
            engineering internship at Dell RSA. Pre-tech, I worked in legal marketing
            and PR — so I can explain your product <em>and</em> build it.
          </p>
        </details>
        </Section>

        <Section id="skills" kicker="Toolbox" title="Skills">
          <p>
            TypeScript · JavaScript · React · Redux · Next.js · Tailwind · HTML/CSS · SQL · PHP ·
            Java · C/C++ · Python · Docker · Git/Bash · Jira · Figma · GitHub Copilot · Agile
          </p>
          <p className="subheading">Human languages</p>
          <p className="aside">
            English (native), Spanish (~B1, weekly tutoring with a native Spanish speaker), Modern
            Standard Arabic (~A2, Georgetown minor), Egyptian Arabic (just started tutoring & currently
            accepting recommendations for Egyptian films).
          </p>
        </Section>

        <Section id="contact" kicker="Say hello" title="Let's talk">
        <p>
          I'm open to full-stack roles and interesting contracts — especially with
          international or distributed teams. I've worked fully remote for years and
          thrive across time zones. Reach out on{" "}
          <a href={LINKS.linkedin}>LinkedIn</a> — that's where I'm fastest to respond —
          or see what I'm building on <a href={LINKS.github}>GitHub</a>.
        </p>
        </Section>
      </main>

      <footer>
        <p>© 2026 Katie Young</p>
      </footer>
    </>
  );
}