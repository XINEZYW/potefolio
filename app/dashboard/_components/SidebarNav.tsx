"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const OTHER_ITEMS = [
  {
    href: "/dashboard/quetes",
    label: "Quêtes",
    icon: (
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
        <polyline points="6 9 6 2 18 2 18 9" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="18" width="12" height="4" rx="1" />
      </svg>
    ),
  },
  {
    href: "/dashboard/ressources",
    label: "Ressources",
    icon: (
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
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    href: "/dashboard/parametres",
    label: "Paramètres",
    icon: (
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
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const BRIEFS_ICON = (
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
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const BRIEFS_SUB = [
  { href: "/dashboard/briefs/individuel", label: "Individuel" },
  { href: "/dashboard/briefs/groupe", label: "Groupé" },
];

export default function SidebarNav() {
  const pathname = usePathname();
  const isBriefsActive = pathname.startsWith("/dashboard/briefs");
  const [briefsOpen, setBriefsOpen] = useState(isBriefsActive);

  useEffect(() => {
    if (isBriefsActive) setBriefsOpen(true);
  }, [isBriefsActive]);

  return (
    <>
      <div className="dash-nav-group">
        <button
          type="button"
          className={`dash-nav-group-btn${isBriefsActive ? " active" : ""}`}
          onClick={() => setBriefsOpen((o) => !o)}
          aria-expanded={briefsOpen}
        >
          <span className="dash-nav-link-icon">{BRIEFS_ICON}</span>
          Briefs
          <span className={`dash-nav-chevron${briefsOpen ? " open" : ""}`}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </button>

        {briefsOpen && (
          <div className="dash-nav-subitems">
            {BRIEFS_SUB.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                className={`dash-nav-sublink${pathname === sub.href ? " active" : ""}`}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      {OTHER_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`dash-nav-link${pathname.startsWith(item.href) ? " active" : ""}`}
        >
          <span className="dash-nav-link-icon">{item.icon}</span>
          {item.label}
        </Link>
      ))}
    </>
  );
}
