const QUETES = [
  { icon: "📄", title: "Premier brief rendu", xp: 50, locked: false },
  { icon: "🔥", title: "3 briefs d'affilée", xp: 150, locked: true },
  { icon: "🎙️", title: "Premier brief groupé", xp: 200, locked: true },
  { icon: "⭐", title: "Niveau 5 atteint", xp: 500, locked: true },
  { icon: "💬", title: "10 appréciations reçues", xp: 300, locked: true },
];

const XP_TOTAL = QUETES.reduce((sum, q) => sum + q.xp, 0);

export default function QuetesPage() {
  return (
    <div className="dash-content">
      <div className="bento-grid">
        {/* Row 1 */}
        <div className="bento-card">
          <span className="bento-label">Quêtes complétées</span>
          <span className="bento-big-value">0</span>
          <span className="bento-desc">sur {QUETES.length} quêtes disponibles</span>
        </div>

        <div className="bento-card">
          <span className="bento-label">XP quêtes</span>
          <span className="bento-big-value">0</span>
          <span className="bento-desc">{XP_TOTAL} XP potentiels</span>
        </div>

        <div className="bento-card">
          <span className="bento-label">Prochaine récompense</span>
          <span className="bento-big-value">🏅</span>
          <span className="bento-desc">Rends ton premier brief</span>
        </div>

        {/* Row 2 — full width */}
        <div className="bento-card bento-3">
          <span className="bento-section-label">Quêtes disponibles</span>
          <ul className="quete-list">
            {QUETES.map((quete) => (
              <li
                key={quete.title}
                className={`quete-card${quete.locked ? " locked" : ""}`}
              >
                <div className="quete-icon">{quete.icon}</div>
                <div className="quete-info">
                  <span className="quete-title">{quete.title}</span>
                  <span className="quete-xp">+{quete.xp} XP</span>
                </div>
                <span className="quete-locked-badge">
                  {quete.locked ? "🔒 Verrouillée" : "En cours"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
