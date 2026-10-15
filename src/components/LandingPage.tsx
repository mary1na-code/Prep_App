import { Link } from 'react-router-dom'

const topics = ['Biology', 'Computer science', 'Mathematics']

function LandingPage() {
  return (
    <main className="landing-page">
      <header className="landing-nav">
        <Link className="brand-mark" to="/" aria-label="Prepora home">
          <span className="brand-icon" aria-hidden="true">P</span>
          <span>prepora<span className="brand-period">.</span></span>
        </Link>
        <nav className="landing-nav-actions" aria-label="Account">
          <Link className="landing-login-link" to="/login">Log in</Link>
          <Link className="button button-primary button-small" to="/signup">Create account</Link>
        </nav>
      </header>

      <section className="landing-hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT STUDY SESSION STARTS HERE</p>
          <h1>Make every study session <span>count.</span></h1>
          <p className="hero-description">
            Practice with focused quizzes, track your progress, and build confidence one question at a time.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/signup">
              Get started <span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-secondary" to="/login">I already have an account</Link>
          </div>
          <div className="hero-note">
            <span className="avatar-stack" aria-hidden="true"><i>J</i><i>A</i><i>M</i></span>
            <span><strong>Small sessions. Big progress.</strong><br />Pick up where your curiosity takes you.</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Preview of a Prepora quiz question">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="quiz-preview-card">
            <div className="preview-topline">
              <span className="preview-subject"><span className="subject-icon">✳</span> QUICK PRACTICE</span>
              <span className="preview-counter">01 <span>/ 10</span></span>
            </div>
            <div className="preview-progress"><span /></div>
            <p className="preview-label">BIOLOGY · CELL STRUCTURE</p>
            <h2>Which part of the cell is known as its powerhouse?</h2>
            <div className="preview-answer"><span className="answer-letter">A</span> Ribosome</div>
            <div className="preview-answer preview-answer-selected"><span className="answer-letter">B</span> Mitochondrion <span className="answer-check">✓</span></div>
            <div className="preview-answer"><span className="answer-letter">C</span> Nucleus</div>
            <div className="preview-answer"><span className="answer-letter">D</span> Golgi apparatus</div>
            <div className="preview-footer"><span>Take it one question at a time.</span><span className="preview-sparkle">✦</span></div>
          </div>
          <div className="floating-chip chip-top"><span>✦</span> Focus mode</div>
          <div className="floating-chip chip-bottom"><span className="chip-check">✓</span> Progress, made visible</div>
        </div>
      </section>

      <section className="landing-bottom" aria-label="Study subjects">
        <p>EXPLORE YOUR NEXT TOPIC</p>
        <div className="topic-pills">
          {topics.map((topic) => <span key={topic}>{topic}</span>)}
          <span>And more to come</span>
        </div>
      </section>
    </main>
  )
}

export default LandingPage