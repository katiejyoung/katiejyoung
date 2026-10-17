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
            TypeScript, React, and Next.js features at Storyblocks. I'm the teammate people go to for support, the one who volunteers for opportunities 
            to fine-tune my craft, and per my{" "}
            <a href="https://www.linkedin.com/in/katiejanelle/details/recommendations/">
            LinkedIn recommendations</a> — someone people genuinely enjoy working with.
          </p>
        </Section>

        <Section id="lately" kicker="Life lately" title="What I've been up to">
          <p>
            I've spent the past two years working on a long list of personal goals. Here are some accomplishments I'm especially proud of:
          </p>
          <ul>
            <li>
              <strong>Tangible</strong> — the app I wanted and couldn't find.{" "}
              <a href="#tangible">Details below ↓</a>
            </li>
            <li>
              <strong>Home infrastructure</strong> — I configured a Synology NAS running
              Jellyfin and Synology Photos for family media sharing. I also digitized bins of family
              photos, paperwork, and DVDs, migrated to more secure digital 
              practices, and started dabbling in home automation.
            </li>
            <li>
              <strong>Carpentry</strong> — I apprenticed with a natural builder, during which time 
              our team framed the interior walls of a three-bedroom house, completed a tiny-house build from 
              foundation to roofing, revitalized a previously condemned historic house, installed an earthen floor 
              and built two decks. I also took on solo handywork clients for tasks ranging from painting to cabinet installation.
            </li>
            <li>
              <strong>College Coursework, Workshops & Tutoring</strong> — I took four college
              classes and attended three workshops during this time, covering everything from
              home electric to automotive basics, along with drawing and CAD. I also started
              working with a Spanish tutor (more than 30 lessons in now!) and learned how to stay upright 
              on a skateboard. For the first time in my life, I aired a tire, repaired
              a melted wire, uninstalled and reinstalled a furnace, changed the oil in my car,
              and learned how to troubleshoot unwanted appliance behavior.
            </li>
         </ul>
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
            <TimelineItem role="Founder | Full-Stack Software Engineer & Builder" org="Starfall Studio, LLC — Asheville, NC" period="2025 — Now">
              <p>
                I formed a business entity to tackle projects of my own design. Tangible falls under this entity, as does a 
                building-specific DBA, Starfall Residential Services.
              </p>
            </TimelineItem>
            <TimelineItem role="Intentional Sabbatical" org="Independent — Richmond, VA" period="2024 — 2025">
              <p>
                A deliberate year of personal projects, volunteering, and being human. I dreamed up and
                started Tangible (and later re-wrote it from scratch) and completed more than 800 tasks, which — naturally — I tracked 
                with the system that inspired the app.
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
            Education: B.A. in English at Georgetow University, then a B.S. in Computer Science
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