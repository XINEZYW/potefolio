import { getSession } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getSession();

  return (
    <div className="dash-content">
      <div className="bento-grid">
        {/* Row 1 */}
        <div className="bento-card bento-2">
          <span className="bento-label">Bienvenue</span>
          <span className="bento-big-value">
            {session ? session.username : "Designer"}
          </span>
          <p className="bento-subtext">
            Prêt à progresser aujourd&apos;hui ? Commence un brief ou consulte tes quêtes.
          </p>
        </div>

        <div className="bento-card">
          <span className="bento-label">Niveau</span>
          <span className="bento-big-value">1</span>
          <span className="bento-desc">Designer débutant</span>
        </div>

        {/* Row 2 */}
        <div className="bento-card">
          <span className="bento-label">Briefs complétés</span>
          <span className="bento-big-value">0</span>
          <span className="bento-desc">Commence ton premier brief</span>
        </div>

        <div className="bento-card">
          <span className="bento-label">XP total</span>
          <span className="bento-big-value">0</span>
          <span className="bento-desc">Gagne de l&apos;XP en rendant des briefs</span>
        </div>

        <div className="bento-card">
          <span className="bento-label">Streak</span>
          <span className="bento-big-value">0</span>
          <span className="bento-desc">Jours consécutifs actifs</span>
        </div>

        {/* Row 3 — full width */}
        <div className="bento-card bento-3 bento-coming-soon">
          <div className="bento-coming-soon-icon">🚀</div>
          <span className="bento-section-label">Fonctionnalités à venir</span>
          <p className="bento-subtext">
            Des briefs générés par IA, des sessions vocales Discord et un système de notation
            peer-to-peer sont en cours de développement.
          </p>
        </div>
      </div>
    </div>
  );
}
