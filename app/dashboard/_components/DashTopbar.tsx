"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ROUTE_TITLES: Record<string, string> = {
  "/dashboard": "Accueil",
  "/dashboard/briefs/individuel": "Briefs — Individuel",
  "/dashboard/briefs/groupe": "Briefs — Groupé",
  "/dashboard/quetes": "Quêtes",
  "/dashboard/ressources": "Ressources",
  "/dashboard/parametres": "Paramètres",
};

interface DashTopbarProps {
  avatarUrl: string | null;
  username: string;
  initials: string;
}

export default function DashTopbar({ avatarUrl, username, initials }: DashTopbarProps) {
  const pathname = usePathname();

  const title = ROUTE_TITLES[pathname] ?? "Dashboard";

  return (
    <div className="dash-topbar">
      <div className="dash-topbar-left">
        <Link href="/dashboard" className="dash-topbar-logo dash-logo">
          <span className="dash-logo-dot" />
          Potefolio
        </Link>
        <span className="dash-topbar-title">{title}</span>
      </div>

      <div className="dash-topbar-right">
        <button type="button" className="dash-notif-btn" aria-label="Notifications">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        <div className="dash-topbar-avatar" title={username}>
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={username}
              width={32}
              height={32}
              unoptimized
            />
          ) : (
            <span className="dash-topbar-initials">{initials}</span>
          )}
        </div>

        <form action="/api/auth/logout" method="POST" className="dash-mobile-logout-form">
          <button type="submit" className="dash-mobile-logout-btn" aria-label="Déconnexion">
            <svg
              width="18"
              height="18"
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
    </div>
  );
}
