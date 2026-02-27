export default function BriefsGroupePage() {
  return (
    <div className="dash-content">
      <div className="bento-grid">
        {/* Row 1 */}
        <div className="bento-card bento-2">
          <div className="bento-discord-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028z"
                fill="#5865f2"
              />
            </svg>
            <span className="bento-section-label">Rejoins le Discord Potefolio</span>
          </div>
          <p className="bento-subtext">
            Les briefs groupés se déroulent sur le serveur Discord dans le canal{" "}
            <span className="dash-discord-channel">#briefs-groupés</span>. Une session vocale
            hebdomadaire est organisée pour travailler ensemble sur un brief commun.
          </p>
          <ol className="dash-info-steps">
            <li className="dash-info-step">
              <span className="dash-info-step-num">1</span>
              <span>Rejoins le serveur Discord Potefolio</span>
            </li>
            <li className="dash-info-step">
              <span className="dash-info-step-num">2</span>
              <span>
                Rends-toi dans{" "}
                <span className="dash-discord-channel">#briefs-groupés</span>
              </span>
            </li>
            <li className="dash-info-step">
              <span className="dash-info-step-num">3</span>
              <span>
                Rejoins la session vocale le jour J et rends ton travail dans le canal dédié
              </span>
            </li>
          </ol>
          <div>
            <a href="#" className="btn-primary">
              Rejoindre le Discord
            </a>
          </div>
        </div>

        <div className="bento-card">
          <span className="bento-label">Prochaine session</span>
          <span className="bento-big-value bento-value-soon">—</span>
          <span className="bento-desc">Aucune session planifiée</span>
          <p className="bento-subtext">
            Les dates de sessions seront annoncées sur Discord.
          </p>
        </div>

        {/* Row 2 — full width */}
        <div className="bento-card bento-3">
          <span className="bento-section-label">Mes rendus</span>
          <div className="dash-empty-state">
            <p>Aucun rendu pour le moment.</p>
            <span>Participe à ton premier brief groupé pour voir tes rendus ici.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
