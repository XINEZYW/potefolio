function CheckIcon() {
  return (
    <svg viewBox="0 0 9 9" fill="none" aria-hidden="true">
      <path
        d="M1.5 4.5l2 2L7.5 2"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const freeFeatures = [
  "Briefs IA illimités (UX/UI, Logo, Motion)",
  "Feedback peer-to-peer de la communauté",
  "Accès aux briefs groupés Discord",
  "Tableau de bord de progression",
  "Badges et système de niveaux",
  "Historique de tous tes rendus",
];

const paidFeatures = [
  "Tout ce qui est inclus dans Gratuit",
  "Audit 1:1 avec un designer senior",
  "Review approfondie de ton portfolio",
  "Conseils personnalisés pour ta recherche d'emploi",
  "Accès prioritaire aux nouvelles fonctionnalités",
  "Badge \"Audité\" sur ton profil",
];

export default function SectionPricing() {
  return (
    <section className="section-pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="label">Tarifs</span>
          <h2 className="heading-lg">Simple et transparent</h2>
          <p className="body-lg">
            Le dashboard est et restera gratuit. Pour aller plus loin, un
            audit personnalisé avec un pro est disponible.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Plan gratuit */}
          <div className="pricing-card">
            <div className="pricing-header">
              <p className="pricing-name">Dashboard</p>
              <div className="pricing-price">
                <span className="pricing-amount">0€</span>
                <span className="pricing-period">/ pour toujours</span>
              </div>
              <p className="pricing-desc">
                Tout ce dont tu as besoin pour progresser au quotidien,
                sans jamais payer.
              </p>
            </div>

            <ul className="pricing-features">
              {freeFeatures.map((f) => (
                <li key={f} className="pricing-feature-item">
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <span className="pricing-feature-item-text">{f}</span>
                </li>
              ))}
            </ul>

            <a href="/login" className="pricing-btn-free">
              Commencer gratuitement
            </a>
          </div>

          {/* Plan payant */}
          <div className="pricing-card featured">
            <span className="pricing-featured-badge">Recommandé</span>

            <div className="pricing-header">
              <p className="pricing-name">Audit 1:1</p>
              <div className="pricing-price">
                <span className="pricing-amount">79€</span>
                <span className="pricing-period">/ session</span>
              </div>
              <p className="pricing-desc">
                Une session de 60 minutes avec un designer senior pour
                accélérer ta progression et affûter ton portfolio.
              </p>
            </div>

            <ul className="pricing-features">
              {paidFeatures.map((f) => (
                <li key={f} className="pricing-feature-item">
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <span className="pricing-feature-item-text">{f}</span>
                </li>
              ))}
            </ul>

            <a href="/login" className="pricing-btn-paid">
              Réserver mon audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
