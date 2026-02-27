const RESSOURCES = [
  {
    section: "Veille",
    items: [
      {
        icon: "🎨",
        title: "Dribbble",
        desc: "Inspiration design UI/UX",
        tag: "Inspiration",
        href: "#",
      },
      {
        icon: "🏆",
        title: "Awwwards",
        desc: "Sites web primés pour leur design",
        tag: "Inspiration",
        href: "#",
      },
      {
        icon: "📰",
        title: "Sidebar.io",
        desc: "Newsletter design quotidienne",
        tag: "Veille",
        href: "#",
      },
      {
        icon: "📱",
        title: "Mobbin",
        desc: "Patterns d'UI mobile et web",
        tag: "Références",
        href: "#",
      },
    ],
  },
  {
    section: "Tutos vidéo",
    items: [
      {
        icon: "▶️",
        title: "YouTube Design",
        desc: "Tutoriels design en français et anglais",
        tag: "Vidéo",
        href: "#",
      },
      {
        icon: "🎬",
        title: "Femke",
        desc: "Parcours designer chez Spotify",
        tag: "Vidéo",
        href: "#",
      },
      {
        icon: "⚡",
        title: "Flux Academy",
        desc: "Web design moderne et tendances",
        tag: "Vidéo",
        href: "#",
      },
      {
        icon: "🎓",
        title: "DesignCourse",
        desc: "UI/UX et développement front-end",
        tag: "Vidéo",
        href: "#",
      },
    ],
  },
  {
    section: "Autres",
    items: [
      {
        icon: "🖼️",
        title: "Figma Community",
        desc: "Templates et ressources Figma",
        tag: "Outils",
        href: "#",
      },
      {
        icon: "🔤",
        title: "Google Fonts",
        desc: "Bibliothèque de polices gratuites",
        tag: "Typographie",
        href: "#",
      },
      {
        icon: "⬡",
        title: "Heroicons",
        desc: "Icônes SVG open source",
        tag: "Icônes",
        href: "#",
      },
      {
        icon: "🖌️",
        title: "unDraw",
        desc: "Illustrations SVG personnalisables",
        tag: "Illustrations",
        href: "#",
      },
    ],
  },
];

export default function RessourcesPage() {
  return (
    <div className="dash-content">
      <div className="bento-grid">
        {RESSOURCES.map((group) => (
          <div key={group.section} className="bento-card bento-3">
            <span className="bento-section-label">{group.section}</span>
            <div className="ressources-grid">
              {group.items.map((item) => (
                <a key={item.title} href={item.href} className="ressource-card">
                  <span className="ressource-card-icon">{item.icon}</span>
                  <span className="ressource-card-title">{item.title}</span>
                  <span className="ressource-card-desc">{item.desc}</span>
                  <span className="ressource-card-tag">{item.tag}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
