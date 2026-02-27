export default function BriefsIndividuelPage() {
  return (
    <div className="dash-content">
      <div className="bento-grid">
        {/* Row 1 + 2 : brief card spans 2 rows */}
        <div className="bento-card bento-2 bento-row-2">
          <div className="bento-brief-top">
            <span className="brief-card-badge">UI Design</span>
            <span className="brief-card-deadline">⏱ 7 jours restants</span>
          </div>
          <p className="bento-brief-phrase">
            Redesigne le site web d&apos;Airbus dans le style de Miyazaki
          </p>
          <p className="bento-subtext">
            Crée une interface Web complète en fusionnant l&apos;esthétique du Studio Ghibli
            avec l&apos;identité corporate d&apos;Airbus. Livrables : moodboard + 3 écrans Figma.
          </p>
          <div className="bento-brief-footer">
            <span className="brief-card-xp">+250 XP</span>
            <button type="button" className="btn-brief-submit">
              Rendre ce brief
            </button>
          </div>
        </div>

        <div className="bento-card">
          <span className="bento-label">XP disponible</span>
          <span className="bento-big-value">250</span>
          <span className="bento-desc">Points gagnable sur ce brief</span>
        </div>

        <div className="bento-card">
          <span className="bento-label">Difficulté</span>
          <span className="bento-big-value bento-value-medium">Moyen</span>
          <span className="bento-desc">Recommandé niveau 1–3</span>
        </div>

        {/* Row 3 — full width */}
        <div className="bento-card bento-3">
          <span className="bento-section-label">Prochains briefs</span>
          <div className="dash-empty-state">
            <p>Aucun brief à venir pour l&apos;instant.</p>
            <span>De nouveaux briefs générés par IA arrivent bientôt.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
