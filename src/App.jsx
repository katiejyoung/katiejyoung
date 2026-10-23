import profilePhoto from "./assets/profile.jpg";
import LeafAccents from "./LeafAccents";

const LINKS = {
  linkedin: "https://linkedin.com/in/katiejanelle/",
  github: "https://github.com/katiejyoung/",
  tangible: "https://github.com/katiejyoung/tangible-demo",
  starfall: "https://www.thestarfallstudio.com/",
  throneOfGlass: "https://sarahjmaas.com/throne-of-glass-series/",
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
      <LeafAccents />
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
            <a href={LINKS.starfall}>Starfall Studio</a>
          </nav>
        </div>
      </header>

      <main>
        <Section id="about" kicker="Hello there" title="TL;DR">
          <p>
            I've spent five years building production web applications — most recently shipping
            TypeScript, React, and Next.js features at Storyblocks. I've also been
            building my own product end to end. I'm the teammate people go to for support, the one who 
            volunteers for opportunities to fine-tune my craft, and per my{" "}
            <a href="https://www.linkedin.com/in/katiejanelle/details/recommendations/">
            LinkedIn recommendations</a>, someone people genuinely enjoy working with.
          </p>
        </Section>

        <Section id="tangible" kicker="My current obsession" title="Tangible">
          <p>
            A second brain with elaborate to-do automation plus Y2K-inspired theme customization.
            The app connects to the physical world through IoT integrations and reduces UX friction from data entry with a built-in AI feature.
          </p>
          <p className="subheading">The backstory</p>
          <p>
            After building myself a full second brain in Notion — complete with hobby notes 
            and a to-do list that handled recurrence better than any app I had found — I realized that Notion automations still 
            had too many limitations for my use case. I knew I could build what I wanted better with code. So I did.
          </p>
          <p className="aside">
            Built on Next.js with a Python microservice handling the IoT layer.
            Currently in beta.
          </p>
          <a href={LINKS.tangible} className="pill action-button">Follow on GitHub</a>
        </Section>

        <Section id="experience" kicker="Recent experience" title="Experience">
          <ol className="timeline">
            <TimelineItem role="Founder | Full-Stack Software Engineer & Builder" org="Starfall Studio, LLC — Asheville, NC" period="2024 — Now">
              <p>
                I formed a business entity to tackle projects of my own design, including Tangible and a 
                building-specific DBA, Starfall Residential Services. Alongside the app work, I spent this period on 
                deliberate skill-building: a carpentry apprenticeship (interior framing, a tiny-house build, an earthen floor, two decks), 
                three college courses, and weekly Spanish tutoring — now past thirty lessons with a native speaker.
              </p>
            </TimelineItem>
            <TimelineItem role="Senior Software Engineer" org="Storyblocks — Remote" period="2023 — 2024">
            <p>
              Full-stack TypeScript, React, and Next.js, plus PHP and SQL alongside a fully remote team; key
              contributor to the PHP-monolith-to-Next.js migration; volunteered to
              modernize legacy admin workflows for customer support ops.
            </p>
            </TimelineItem>
            <TimelineItem role="Software Engineer" org="Storyblocks — Remote" period="2022 — 2023">
              <p>Converted sections of a PHP monolith to React with Redux state management.</p>
            </TimelineItem>
          </ol>
          <details>
          <summary>Earlier chapters (DevSecOps @ BridgePhase, Engineering Intern @ Dell RSA, B.A. English @ Georgetown, B.S. CS @ Oregon State)</summary>
          <p>
            Education: B.A. in English at Georgetown University, then a B.S. in Computer Science
            at Oregon State University.
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
            Java · C/C++ · Python · Docker · Git/Bash · Jira · Figma · GitHub Copilot
          </p>
          <p className="subheading">Human languages</p>
          <p className="aside">
            English (native), Spanish (~B1 with weekly tutoring from a native speaker), Modern
            Standard Arabic (~A2), Egyptian Arabic (just started tutoring and currently
            accepting media recommendations).
          </p>
        </Section>

        <Section id="hobbies" kicker="Off the clock" title="Hobbies">
          <ul className="hobby-list">
            <li>
              <strong>Electronics</strong> — I love to geek out on sensors and circuits.
            </li>
            <li>
              <strong>Soccer</strong> — The Washington Spirit is the best team in the NWSL. Convince me otherwise.
            </li>
            <li>
              <strong>Backyard meteorology</strong> — I'm Kansas-born and raised, and tornadoes are a lifelong fixation. 
              Every spring I watch storm chasers' livestreams like other people watch baseball.
            </li>
            <li>
              <strong>Knife throwing</strong> —{" "}
              <a href={LINKS.throneOfGlass}>
                <em>Throne of Glass</em>
              </a>{" "} 
              introduced me to the sport — and I stayed for the thunk.
            </li>
            <li>
              <strong>Percussion</strong> — A former drumline percussionist, I treat every surface like a drum.
            </li>
            <li>
              <strong>Carpentry</strong> — One introductory workshop led to three more, a volunteer timber frame project, and an apprenticeship.
              Current project: a traveling carpentry shop. Future dream: the entire design/build process of a cabin.
            </li>
            <li>
              <strong>Nature</strong> — Most weekends, I'm on a trail near my home in the mountains of western North Carolina.
            </li>
            <li>
              <strong>Travel</strong> — Next stop, the Middle East!
            </li>
          </ul>
        </Section>

        <Section id="contact" kicker="Say hello" title="Let's talk">
        <p>
          I'm primarily looking for full-stack roles, particularly within
          distributed teams.
          Reach out on{" "}
          <a href={LINKS.linkedin}>LinkedIn</a> or see what I'm
          building on <a href={LINKS.github}>GitHub</a>.
        </p>
        </Section>
      </main>

      <footer>
        <p>© 2026 Katie Young</p>
      </footer>
    </>
  );
}