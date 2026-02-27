import { getSession } from "@/lib/auth";
import Image from "next/image";

export default async function ParametresPage() {
  const session = await getSession();

  const avatarUrl = session?.avatar
    ? `https://cdn.discordapp.com/avatars/${session.userId}/${session.avatar}.png?size=128`
    : null;

  const initials = session?.username.slice(0, 2).toUpperCase() ?? "?";

  return (
    <div className="dash-content">
      <div className="bento-grid">
        {/* Row 1 */}
        <div className="bento-card bento-2">
          <span className="bento-section-label">Infos du compte</span>
          <div className="param-section">
            <div className="param-row">
              <span className="param-label">Nom d&apos;utilisateur</span>
              <span className="param-value">{session?.username ?? "—"}</span>
            </div>
            <div className="param-row">
              <span className="param-label">Email</span>
              <span className="param-value">{session?.email ?? "Non renseigné"}</span>
            </div>
            <div className="param-row">
              <span className="param-label">ID Discord</span>
              <span className="param-value param-value-mono">{session?.userId ?? "—"}</span>
            </div>
          </div>
        </div>

        <div className="bento-card bento-avatar-card">
          <span className="bento-label">Profil Discord</span>
          <div className="bento-avatar-wrap">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={session?.username ?? "Avatar"}
                width={80}
                height={80}
                unoptimized
                className="bento-avatar-img"
              />
            ) : (
              <div className="bento-avatar-placeholder">{initials}</div>
            )}
          </div>
          <span className="bento-desc">{session?.username ?? "—"}</span>
        </div>

        {/* Row 2 — full width */}
        <div className="bento-card bento-3 bento-coming-soon">
          <div className="bento-coming-soon-icon">⚙️</div>
          <span className="bento-section-label">Préférences</span>
          <p className="bento-subtext">
            Les options de personnalisation seront disponibles prochainement.
          </p>
        </div>
      </div>
    </div>
  );
}
