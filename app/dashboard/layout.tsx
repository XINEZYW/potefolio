import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import Link from "next/link";
import Image from "next/image";
import SidebarNav from "./_components/SidebarNav";
import DashTopbar from "./_components/DashTopbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const avatarUrl = session.avatar
    ? `https://cdn.discordapp.com/avatars/${session.userId}/${session.avatar}.png?size=128`
    : null;

  const initials = session.username.slice(0, 2).toUpperCase();

  return (
    <div className="dash-shell">
      <aside className="dash-sidebar">
        <div className="dash-sidebar-header">
          <Link href="/dashboard" className="dash-logo">
            <span className="dash-logo-dot" />
            Potefolio
          </Link>
        </div>

        <nav className="dash-sidebar-nav">
          <SidebarNav />
        </nav>

        <div className="dash-sidebar-footer">
          <div className="dash-sidebar-user">
            <div className="dash-sidebar-avatar">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={session.username}
                  width={32}
                  height={32}
                  unoptimized
                />
              ) : (
                initials
              )}
            </div>
            <span className="dash-sidebar-username">{session.username}</span>
          </div>
          <form action="/api/auth/logout" method="POST">
            <button type="submit" className="dash-logout-btn" title="Déconnexion">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </form>
        </div>
      </aside>

      <div className="dash-main-area">
        <DashTopbar
          avatarUrl={avatarUrl}
          username={session.username}
          initials={initials}
        />
        <main className="dash-body">{children}</main>
      </div>
    </div>
  );
}
