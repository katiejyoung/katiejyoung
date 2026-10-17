import { useEffect, useRef, useState } from "react";

/* ---------------- Debris components (unchanged) ---------------- */

function Leaf({ size, tone }) {
  return (
    <svg className={`leaf ${tone}`} width={size} height={size * 1.1} viewBox="0 0 40 44" aria-hidden="true" focusable="false">
      <path d="M22 2C34 9 37 22 23 33 8 28 6 12 22 2Z" fill="currentColor" />
      <path d="M22 32q2 4-.5 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <path d="M22 5c-1 9-1 19 .5 27" stroke="currentColor" strokeWidth="1.1" opacity="0.4" fill="none" />
      <path d="M21 12l-6.5-3M21.5 18l-7-2.5M21.5 25l-6-2M22.5 14l5-3M23 20l4.5-2" stroke="currentColor" strokeWidth="0.9" opacity="0.3" fill="none" />
    </svg>
  );
}

function Twig({ size }) {
  return (
    <svg className="twig" width={size} height={size * 0.6} viewBox="0 0 50 30" aria-hidden="true" focusable="false">
      <path d="M3 22Q22 16 47 8" stroke="var(--sage-deep)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M20 16l-4-7M32 12l2-7" stroke="var(--sage-deep)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Samara({ size }) {
  return (
    <svg className="samara" width={size * 1.5} height={size} viewBox="0 0 46 24" aria-hidden="true" focusable="false">
      {/* seed pod — the heavy end */}
      <ellipse cx="7" cy="13" rx="5" ry="6" fill="var(--sage-deep)" />
      {/* wing — translucent, widening away from the seed */}
      <path
        d="M11 14 C14 21, 22 23, 31 20 C40 17.5, 45.5 11, 44.5 7 C43.8 4.4, 40.5 4.2, 37 6 C28 10.5, 18 12.5, 11 14 Z"
        fill="rgba(113,135,110,.4)"
        stroke="var(--sage-deep)"
        strokeWidth="1"
      />
      {/* wing vein, running seed-to-tip */}
      <path
        d="M12 13.5 C24 12.5, 34 10.5, 41 7"
        stroke="var(--sage-deep)"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
}

function Cow() {
  return (
    <svg className="cow" width="64" height="52" viewBox="0 0 64 52">
      <rect x="10" y="12" width="42" height="26" rx="12" fill="#fdfcf9" stroke="var(--ink)" strokeWidth="1.6" />
      <path d="M16 16c6-3 11 0 11 5s-6 7-10 4-3-7-1-9Z" fill="var(--ink)" />
      <path d="M38 26c5-2 9 1 8 5s-7 5-10 2-1-5 2-7Z" fill="var(--ink)" />
      <circle cx="52" cy="20" r="10" fill="#fdfcf9" stroke="var(--ink)" strokeWidth="1.6" />
      <path d="M46 12l-4-4 6 1Z M56 11l4-4-1 6Z" fill="var(--sage-deep)" />
      <ellipse cx="53" cy="24" rx="5.5" ry="4" fill="var(--sage)" />
      <circle cx="51.5" cy="23.5" r="0.9" fill="var(--ink)" />
      <circle cx="55" cy="24.5" r="0.9" fill="var(--ink)" />
      <circle cx="49.4" cy="18" r="1.4" fill="var(--ink)" />
      <circle cx="55.6" cy="17.2" r="1.4" fill="var(--ink)" />
      <path d="M18 38v7M27 38v7M37 38v7M45 38v6" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 43l-2 3h4zM27 43l-2 3h4zM37 43l-2 3h4z" fill="var(--sage-deep)" />
      <path d="M11 18q-5 6-2 12" stroke="var(--ink)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="9" cy="31" r="1.8" fill="var(--sage-deep)" />
    </svg>
  );
}

function Debris({ item }) {
  if (item.kind === "twig") return <Twig size={item.size} />;
  if (item.kind === "samara") return <Samara size={item.size} />;
  return <Leaf size={item.size} tone={item.tone} />;
}

/* Pressed-leaf mode: the site at rest. Two leaves, two more leaves,
   and one helicopter seed, museum placement, nothing moves. */
   function StaticDecor() {
    return (
      <div className="static-decor" aria-hidden="true">
        <Leaf size={24} tone="leaf--sage" />
        <Leaf size={17} tone="leaf--deep" />
        <Leaf size={20} tone="leaf--accent" />
        <Samara size={16} />
        <Leaf size={13} tone="leaf--sage" />
      </div>
    );
  }

/* ---------------- Configuration ---------------- */

/* THE TORNADO — now right-side, ~half the page tall (50vh–94vh).
   Radii shrink and speeds rise toward the ground, as physics demands. */
const FUNNEL = [
  { pos: { right: "8vw",    top: "50vh" }, size: 18, tone: "leaf--sage",   orbitD: "12s",  turn: 1,  r1: "-70px", r2: "-95px",  spinD: "4.2s", delay: "-2s", kind: "leaf" },
  { pos: { right: "10vw",   top: "60vh" }, size: 15, tone: "leaf--deep",   orbitD: "10s",  turn: -1, r1: "-52px", r2: "-72px",  spinD: "3.8s", delay: "-6s", kind: "leaf" },
  { pos: { right: "11vw",   top: "70vh" }, size: 13, tone: "leaf--accent", orbitD: "8s",   turn: 1,  r1: "-38px", r2: "-52px",  spinD: "3.5s", delay: "-4s", kind: "samara" },
  { pos: { right: "11.5vw", top: "80vh" }, size: 11, tone: "leaf--sage",   orbitD: "6.5s", turn: -1, r1: "-26px", r2: "-36px",  spinD: "3.1s", delay: "-1s", kind: "twig" },
  { pos: { right: "12vw",   top: "90vh" }, size: 10, tone: "leaf--deep",   orbitD: "5.5s", turn: 1,  r1: "-14px", r2: "-22px",  spinD: "2.8s", delay: "-3s", kind: "leaf" },
];

const REDNECKERY = [
  "A funnel cloud is a tornado that's still in staging.",
  "Why did the developer get promoted during the storm? Performs well under pressure.",
  "Why don't tornadoes use version control? They prefer to roll everything back themselves.",
  "What is a flash flood's favorite git command? Git reset --hard",
  "Why is debugging like storm chasing? You move toward what everyone else is avoiding.",
  "Updated documentation on a legacy system is like a lightning strike: statistically possible, rarely witnessed.",
  "What do tornadoes and software have in common? Hopefully, nothing.",
  "What did the raindrop say to the hailstone? You have too many hardcoded values.",
  "Why did the engineer ignore the tornado warning? It was low priority - it only affected one region.",
  "Why don't tornadoes need local storage? They send everything to the cloud.",
  "What's a tornado's favorite Git command? git pull.",
  "Tornado safety and database safety are identical: redundant systems, offsite backups, and never build your whole life on a single point of failure in Kansas.",
  "What is lightning's favorite GitHub feature? The fork.",
];

/* ---------------- The layer ---------------- */

export default function LeafAccents() {
  const [cowTalk, setCowTalk] = useState(false);
  const [jokeIdx, setJokeIdx] = useState(0);
  const [animate, setAnimate] = useState(() => {
    const saved = localStorage.getItem("weather-anim");
    return saved === "on"; // default: OFF
  });
  const mooTimer = useRef(null);
  const toastRef = useRef(null);
  const cowBtnRef = useRef(null);

  useEffect(() => () => clearTimeout(mooTimer.current), []);

  useEffect(() => {
    localStorage.setItem("weather-anim", animate ? "on" : "off");
  }, [animate]);

  /* Escape key AND click-outside, both while the toast is open */
  useEffect(() => {
    if (!cowTalk) return;

    const dismiss = () => {
      clearTimeout(mooTimer.current);
      setCowTalk(false);
    };

    const onKey = (e) => {
      if (e.key === "Escape") dismiss();
    };

    const onClickAway = (e) => {
      if (toastRef.current?.contains(e.target)) return; // clicked the toast
      if (cowBtnRef.current?.contains(e.target)) return; // clicking cow = new joke
      dismiss(); // clicked literally anywhere else
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClickAway);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClickAway);
    };
  }, [cowTalk]);

  function pokeTheCow() {
    clearTimeout(mooTimer.current);
    setCowTalk(true);
    setJokeIdx((i) => (i + 1) % REDNECKERY.length);
    mooTimer.current = setTimeout(() => setCowTalk(false), 12000);
  }

  return (
    <>
      {animate ? (
        <>
          <div className="leaf-layer" aria-hidden="true">
            <div className="dust-devil-haze" />
            {FUNNEL.map((d, i) => (
              <div
                key={i}
                className="vortex"
                style={{
                  ...d.pos,
                  "--orbit-d": d.orbitD,
                  "--turn": d.turn,
                  "--r1": d.r1,
                  "--r2": d.r2,
                  "--spin-d": d.spinD,
                  "--delay": d.delay,
                }}
              >
                <div className="orbit">
                  <div className="spiral">
                    <Debris item={d} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="cow-stage"
            style={{
              right: "10vw",
              top: "42vh",
              "--orbit-d": "20s",
              "--turn": 1,
              "--r1": "-45px",
              "--r2": "-72px",
              "--spin-d": "24s",
              "--delay": "-20s",
            }}
          >
            <div className="orbit">
              <div className="spiral">
                <button
                  ref={cowBtnRef}
                  className="cow-button"
                  onClick={pokeTheCow}
                  aria-label="Inquire about the flying cow"
                >
                  <Cow />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <StaticDecor />
      )}

      {cowTalk && (
        <div className="cow-toast" role="status" ref={toastRef}>
          <p>{REDNECKERY[jokeIdx]}</p>
        </div>
      )}

      <div className="env-toggle" role="group" aria-label="Site environment">
        <button
          className={`env-option${!animate ? " is-active" : ""}`}
          onClick={() => setAnimate(false)}
          aria-pressed={!animate}
        >
          production
        </button>
        <button
          className={`env-option${animate ? " is-active" : ""}`}
          onClick={() => setAnimate(true)}
          aria-pressed={animate}
        >
          local
        </button>
      </div>
    </>
  );
}