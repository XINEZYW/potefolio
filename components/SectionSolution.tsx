function CheckIcon() {
  return (
    <svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M2 5l2.5 2.5L8 3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BriefMock() {
  return (
    <div className="brief-mock">
      <div className="brief-mock-header">
        <span className="brief-mock-tag">UI Design</span>
        <span className="brief-mock-deadline">⏱ 5 jours restants</span>
      </div>
      <p className="brief-mock-title">
        Redesigner l&apos;onboarding d&apos;une app fintech mobile
      </p>
      <div className="brief-mock-desc-lines">
        <div className="brief-mock-line" />
        <div className="brief-mock-line" />
        <div className="brief-mock-line short" />
      </div>
      <div className="brief-mock-footer">
        <span className="brief-mock-xp">+120 XP</span>
        <span className="brief-mock-btn">Voir le brief</span>
      </div>
    </div>
  );
}

function DiscordMock() {
  return (
    <div className="discord-mock">
      <div className="discord-sidebar">
        <div className="discord-server-icon" />
        <div className="discord-server-icon grey" />
        <div className="discord-server-icon grey" />
      </div>
      <div className="discord-main">
        <p className="discord-channel-name"># brief-groupé-s3</p>
        <div className="discord-message">
          <div className="discord-avatar" />
          <div className="discord-message-content">
            <span className="discord-username">Alexia</span>
            <p className="discord-text">
              Bonne idée pour le header ! Le contraste est nickel 🔥
            </p>
          </div>
        </div>
        <div className="discord-message">
          <div className="discord-avatar purple" />
          <div className="discord-message-content">
            <span className="discord-username">Marco</span>
            <p className="discord-text">
              Je pense qu&apos;on devrait simplifier la nav mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectionSolution() {
  return (
    <section className="section-solution" id="solution">
      <div className="container">
        <div className="section-header">
          <span className="label">La solution</span>
          <h2 className="heading-lg">
            Pratique quotidienne + communauté
          </h2>
          <p className="body-lg">
            Potefolio combine des briefs générés par IA avec une communauté
            Discord active pour te faire progresser comme jamais.
          </p>
        </div>

        {/* Bloc 1 — Briefs IA */}
        <div className="solution-layout">
          <div className="solution-text">
            <span className="label">Briefs individuels</span>
            <h3 className="heading-md">
              Un brief IA personnalisé chaque semaine
            </h3>
            <p className="body-md">
              Choisis ta spécialité (UX/UI, logo, motion…) et reçois des briefs
              adaptés à ton niveau. Date de rendu, contexte client fictif,
              contraintes créatives — exactement comme en agence.
            </p>
            <ul className="solution-features">
              {[
                "Filtrables par discipline : UX/UI, Logo, Motion, Brand",
                "Niveau progressif : Junior → Mid → Senior",
                "Date de rendu avec rappels automatiques",
                "Notation et feedback de la communauté",
              ].map((f) => (
                <li key={f} className="solution-feature">
                  <span className="solution-feature-check">
                    <CheckIcon />
                  </span>
                  <span className="solution-feature-text">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="solution-visual">
            <BriefMock />
          </div>
        </div>

        {/* Bloc 2 — Communauté Discord */}
        <div className="solution-layout reverse">
          <div className="solution-text">
            <span className="label">Briefs groupés</span>
            <h3 className="heading-md">
              Collabore en temps réel sur Discord
            </h3>
            <p className="body-md">
              Les briefs groupés se font en vocal sur notre serveur Discord.
              Une session, une équipe, un rendu. Retrouve ici tous tes projets
              collectifs et les appréciations reçues.
            </p>
            <ul className="solution-features">
              {[
                "Sessions en vocal organisées par les mentors",
                "Interface projet : tes rendus + appréciations",
                "Feedback audio enregistré et transcrit",
                "Communauté d'entraide active 24/7",
              ].map((f) => (
                <li key={f} className="solution-feature">
                  <span className="solution-feature-check">
                    <CheckIcon />
                  </span>
                  <span className="solution-feature-text">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="solution-visual">
            <DiscordMock />
          </div>
        </div>
      </div>
    </section>
  );
}
