export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-eyebrow">
          <span className="badge badge-dark">Nouveau</span>
          <span className="badge">Beta ouverte — Gratuit pour toujours</span>
        </div>

        <h1 className="heading-xl hero-title">
          Entraîne-toi comme un{" "}
          <span className="highlight">athlète du design</span>
        </h1>

        <p className="body-lg hero-description">
          Potefolio est la plateforme qui transforme ta pratique du design en
          progression mesurable. Briefs IA, feedback entre pairs, communauté
          Discord — tout pour passer du junior au pro.
        </p>

        <div className="hero-actions">
          <a href="/login" className="btn-primary">
            Commencer gratuitement
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#solution" className="btn-secondary">
            Voir comment ça marche
          </a>
        </div>

        <div className="hero-social-proof">
          <div className="hero-avatars">
            <div className="hero-avatar">AL</div>
            <div className="hero-avatar">MR</div>
            <div className="hero-avatar">JD</div>
            <div className="hero-avatar">SB</div>
            <div className="hero-avatar">+</div>
          </div>
          <p className="hero-social-text">
            Rejoins <strong>+340 designers</strong> déjà en progression
          </p>
        </div>

        <div className="hero-visual">
          <div className="hero-dashboard-preview">
            <div className="dashboard-mock">
              <div className="dashboard-mock-topbar">
                <div className="mock-dot" />
                <div className="mock-dot" />
                <div className="mock-dot" />
              </div>
              <div className="dashboard-mock-body">
                <div className="dashboard-mock-sidebar">
                  <div className="mock-nav-item active" />
                  <div className="mock-nav-item" />
                  <div className="mock-nav-item" />
                  <div className="mock-nav-item" />
                  <div className="mock-nav-item" />
                </div>
                <div className="dashboard-mock-content">
                  <div className="mock-card tall" />
                  <div className="mock-card" />
                  <div className="mock-card" />
                  <div className="mock-card" />
                  <div className="mock-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
