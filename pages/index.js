import { useMemo, useState } from 'react';
import Head from 'next/head';

const steps = [
  {
    title: 'Set Your Foundation',
    detail:
      'Lie on your back with knees bent and feet hip-width apart. Ground through all four corners of your feet and let the arms rest long beside you.'
  },
  {
    title: 'Align and Activate',
    detail:
      'Walk your heels closer to your sitting bones. Press the back of your head and upper arms into the mat to create length through the neck and spine.'
  },
  {
    title: 'Lift the Hips',
    detail:
      'Root through the feet and squeeze the glutes as you peel the spine off the mat one vertebra at a time until thighs are nearly parallel with the floor.'
  },
  {
    title: 'Engage and Hold',
    detail:
      'Interlace your fingers beneath you or keep palms flat, then draw the tailbone toward the knees. Hold and breathe steadily, keeping the knees tracking forward.'
  },
  {
    title: 'Controlled Descent',
    detail:
      'Release the hands, soften through the chest, and articulate the spine back to the mat, lowering from the upper back to the tailbone.'
  }
];

const benefits = [
  'Strengthens the posterior chain, especially the glutes and hamstrings.',
  'Opens the chest and hip flexors after prolonged sitting.',
  'Improves spinal mobility and posture awareness.',
  'Stimulates circulation and energizes the nervous system.'
];

const safetyTips = [
  'Keep the neck relaxed and gaze straight up to avoid compressing the cervical spine.',
  'If your lower back pinches, reduce the height of the lift or place a block beneath the sacrum for support.',
  'Engage the inner thighs to prevent the knees from flaring outward.',
  'Avoid turning the head side to side while in the pose.'
];

const breathing = [
  {
    title: 'Inhale: Prepare',
    text: 'Fill the ribs laterally, feeling the back of the body expand along the mat as you ground the feet.'
  },
  {
    title: 'Exhale: Lift',
    text: 'Press the feet down, knit the rib cage inward, and float the hips up while keeping the breath smooth.'
  },
  {
    title: 'Sustain',
    text: 'Maintain even, rhythmic breaths—inhale to lengthen the spine, exhale to firm the core and glutes.'
  },
  {
    title: 'Release',
    text: 'Exhale slowly as you articulate down, keeping the breath fluid until the tailbone lands.'
  }
];

export default function Home() {
  const [selectedStep, setSelectedStep] = useState(steps[0].title);

  const activeStep = useMemo(
    () => steps.find((step) => step.title === selectedStep) ?? steps[0],
    [selectedStep]
  );

  return (
    <>
      <Head>
        <title>Bridge Pose • Guided Alignment</title>
        <meta
          name="description"
          content="Guided walkthrough of Bridge Pose (Setu Bandhasana) with alignment tips, breath cues, and safety guidance."
        />
      </Head>
      <main className="page">
        <header className="hero">
          <div className="hero__badge">Featured Asana</div>
          <h1>Bridge Pose</h1>
          <p>
            Explore an immersive, step-by-step guide to Setu Bandhasana—helping you align, breathe, and
            move with intention while you elevate the hips toward the sky.
          </p>
          <div className="pose-card">
            <div className="pose-card__figure">
              <span className="figure__head" />
              <span className="figure__torso" />
              <span className="figure__arm figure__arm--left" />
              <span className="figure__arm figure__arm--right" />
              <span className="figure__leg figure__leg--left" />
              <span className="figure__leg figure__leg--right" />
              <span className="figure__mat" />
            </div>
            <div className="pose-card__detail">
              <strong>Bridge Pose (Setu Bandhasana)</strong>
              <p>
                Lie on your back, knees bent and feet grounded, then lift the hips upward while arms rest
                alongside the body.
              </p>
              <ul>
                <li>Difficulty: Gentle backbend</li>
                <li>Duration: 3–5 breaths per round</li>
                <li>Focus: Posterior chain activation & heart opening</li>
              </ul>
            </div>
          </div>
        </header>

        <section className="section section--timeline">
          <div className="section__header">
            <h2>Guided Breakdown</h2>
            <p>Select each phase to learn precise cues for alignment and activation.</p>
          </div>
          <div className="timeline">
            <aside className="timeline__nav">
              {steps.map((step) => (
                <button
                  key={step.title}
                  className={`timeline__btn${selectedStep === step.title ? ' timeline__btn--active' : ''}`}
                  type="button"
                  onClick={() => setSelectedStep(step.title)}
                >
                  {step.title}
                </button>
              ))}
            </aside>
            <article className="timeline__content">
              <h3>{activeStep.title}</h3>
              <p>{activeStep.detail}</p>
            </article>
          </div>
        </section>

        <section className="section section--grid">
          <div className="card">
            <h2>Benefits</h2>
            <ul>
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <h2>Safety & Alignment</h2>
            <ul>
              {safetyTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section--breath">
          <h2>Breath Pattern</h2>
          <div className="breath-grid">
            {breathing.map((phase) => (
              <div key={phase.title} className="breath-card">
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--closing">
          <h2>Cool Down</h2>
          <p>
            After lowering the hips, draw both knees into the chest and rock gently from side to side.
            Follow with a supine twist or rest in Constructive Rest to neutralize the spine before your next
            posture.
          </p>
        </section>
      </main>
      <style jsx>{`
        .page {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          padding: 4rem 6vw 6rem;
          background: radial-gradient(120% 120% at 80% 10%, #ffe6d9 0%, rgba(255, 230, 217, 0) 45%),
            radial-gradient(100% 100% at 10% 30%, #c8e4ff 0%, rgba(200, 228, 255, 0) 50%),
            var(--background, #f8f9fb);
        }

        .hero {
          display: grid;
          gap: 1.5rem;
          max-width: 1100px;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          background: #181b25;
          color: #f9f9fb;
          width: max-content;
          font-size: 0.875rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 3.75rem);
          margin: 0;
        }

        .hero p {
          font-size: 1.1rem;
          max-width: 65ch;
          line-height: 1.7;
        }

        .pose-card {
          display: grid;
          grid-template-columns: minmax(240px, 320px) 1fr;
          gap: 2rem;
          padding: 1.75rem;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(27, 29, 35, 0.08);
        }

        .pose-card__figure {
          position: relative;
          min-height: 220px;
          background: linear-gradient(180deg, rgba(85, 125, 255, 0.15), rgba(85, 125, 255, 0) 80%);
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .figure__head,
        .figure__torso,
        .figure__arm,
        .figure__leg,
        .figure__mat {
          position: absolute;
          background: #1b1d23;
          border-radius: 999px;
        }

        .figure__head {
          width: 32px;
          height: 32px;
          top: 46%;
          left: 32%;
          background: #25326e;
        }

        .figure__torso {
          width: 140px;
          height: 24px;
          top: 50%;
          left: 35%;
          transform: translateY(-50%) rotate(-4deg);
          background: linear-gradient(90deg, #2a3d86, #5b75ff);
        }

        .figure__arm {
          width: 120px;
          height: 14px;
          top: 58%;
          background: linear-gradient(90deg, #5b75ff, #9db4ff);
        }

        .figure__arm--left {
          left: 22%;
        }

        .figure__arm--right {
          left: 55%;
        }

        .figure__leg {
          width: 120px;
          height: 18px;
          top: 64%;
          background: linear-gradient(90deg, #2b2f3b, #5563aa);
        }

        .figure__leg--left {
          transform: rotate(-35deg);
          transform-origin: left center;
          left: 35%;
        }

        .figure__leg--right {
          transform: rotate(-5deg);
          transform-origin: left center;
          left: 45%;
        }

        .figure__mat {
          width: 90%;
          height: 12px;
          bottom: 18%;
          background: linear-gradient(90deg, #5360d4, #81a1f8);
          border-radius: 12px;
        }

        .pose-card__detail {
          display: grid;
          gap: 1rem;
        }

        .pose-card__detail p {
          margin: 0;
          line-height: 1.6;
        }

        .pose-card__detail ul {
          margin: 0;
          padding-left: 1.1rem;
          line-height: 1.6;
        }

        .section {
          display: grid;
          gap: 1.5rem;
          max-width: 1100px;
        }

        .section--timeline {
          gap: 2rem;
        }

        .section__header h2 {
          margin: 0 0 0.35rem 0;
        }

        .timeline {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: minmax(220px, 260px) 1fr;
        }

        .timeline__nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .timeline__btn {
          all: unset;
          cursor: pointer;
          padding: 0.85rem 1rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid transparent;
          transition: transform 150ms ease, border-color 150ms ease, box-shadow 150ms ease;
        }

        .timeline__btn:hover {
          transform: translateY(-2px);
        }

        .timeline__btn--active {
          border-color: rgba(59, 78, 172, 0.5);
          box-shadow: 0 12px 28px rgba(59, 78, 172, 0.18);
          background: rgba(83, 96, 212, 0.12);
        }

        .timeline__content {
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(27, 29, 35, 0.06);
          border-radius: 18px;
          padding: 2rem;
          display: grid;
          gap: 1rem;
        }

        .timeline__content h3 {
          margin: 0;
        }

        .section--grid {
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .card {
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(27, 29, 35, 0.06);
          padding: 2rem;
          display: grid;
          gap: 1rem;
        }

        .card ul {
          margin: 0;
          padding-left: 1.1rem;
          line-height: 1.6;
        }

        .section--breath {
          gap: 2rem;
        }

        .breath-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        }

        .breath-card {
          padding: 1.5rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.75);
          border: 1px solid rgba(27, 29, 35, 0.06);
          display: grid;
          gap: 0.8rem;
        }

        .section--closing p {
          max-width: 60ch;
          margin: 0;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .pose-card {
            grid-template-columns: 1fr;
          }

          .timeline {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .page {
            padding: 3rem 5vw 4rem;
            gap: 3rem;
          }

          .hero__badge {
            font-size: 0.75rem;
          }

          .hero p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
