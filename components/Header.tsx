export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a href="/" className="header-logo">
            <span className="header-logo-dot" />
            Potefolio
          </a>

          <nav className="header-nav">
            <ul className="header-nav-links">
              <li>
                <a href="#solution" className="btn-ghost">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#testimonials" className="btn-ghost">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#pricing" className="btn-ghost">
                  Tarifs
                </a>
              </li>
            </ul>

            <div className="header-cta">
              <a href="/login" className="btn-primary">
                Rejoindre via Discord
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
