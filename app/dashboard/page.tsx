import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const avatarUrl = session.avatar
    ? `https://cdn.discordapp.com/avatars/${session.userId}/${session.avatar}.png?size=128`
    : null;

  const initials = session.username.slice(0, 2).toUpperCase();

  return (
    <div className="dashboard-page">
      <header className="dashboard-topbar">
        <div className="dashboard-topbar-inner">
          <Link href="/dashboard" className="dashboard-logo">
            <span className="dashboard-logo-dot" />
            Potefolio
          </Link>

          <div className="dashboard-user">
            <div className="dashboard-avatar">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={session.username}
                  width={36}
                  height={36}
                  unoptimized
                />
              ) : (
                initials
              )}
            </div>
            <span className="dashboard-username">{session.username}</span>

            <form action="/api/auth/logout" method="POST">
              <button type="submit" className="btn-logout">
                Déconnexion
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-welcome">
          <h1 className="dashboard-welcome-title">
            Bienvenue, {session.username} 👋
          </h1>
          <p className="dashboard-welcome-sub">
            Voici ton tableau de bord. Commence à progresser dès aujourd&apos;hui.
          </p>
        </div>

        <div className="dashboard-stats">
          <div className="dashboard-stat-card">
            <span className="dashboard-stat-label">Briefs complétés</span>
            <span className="dashboard-stat-value">0</span>
            <span className="dashboard-stat-desc">Commence ton premier brief</span>
          </div>
          <div className="dashboard-stat-card">
            <span className="dashboard-stat-label">XP total</span>
            <span className="dashboard-stat-value">0</span>
            <span className="dashboard-stat-desc">Gagne de l&apos;XP en rendant des briefs</span>
          </div>
          <div className="dashboard-stat-card">
            <span className="dashboard-stat-label">Niveau</span>
            <span className="dashboard-stat-value">1</span>
            <span className="dashboard-stat-desc">Designer débutant</span>
          </div>
          <div className="dashboard-stat-card">
            <span className="dashboard-stat-label">Streak</span>
            <span className="dashboard-stat-value">0</span>
            <span className="dashboard-stat-desc">Jours consécutifs actifs</span>
          </div>
        </div>

        <div className="dashboard-coming-soon">
          <div className="dashboard-coming-soon-icon">🚀</div>
          <h2 className="dashboard-coming-soon-title">Les briefs arrivent bientôt</h2>
          <p className="dashboard-coming-soon-text">
            Des briefs générés par IA, des sessions vocales Discord et un système de notation
            peer-to-peer sont en cours de développement.
          </p>
        </div>
      </main>
    </div>
  );
}
