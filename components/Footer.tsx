export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="header-logo-dot" />
              Potefolio
            </div>
            <p className="footer-brand-desc">
              La plateforme gamifiée pour designers qui veulent progresser
              vite et entrer dans le monde professionnel.
            </p>
            <div className="footer-socials">
              <a
                href="https://discord.gg"
                className="footer-social-link"
                aria-label="Discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬
              </a>
              <a
                href="https://twitter.com"
                className="footer-social-link"
                aria-label="Twitter / X"
                target="_blank"
                rel="noopener noreferrer"
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com"
                className="footer-social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                in
              </a>
            </div>
          </div>

          <div>
            <p className="footer-col-title">Produit</p>
            <ul className="footer-links">
              <li>
                <a href="#solution" className="footer-link">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#pricing" className="footer-link">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#testimonials" className="footer-link">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="/login" className="footer-link">
                  Se connecter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Communauté</p>
            <ul className="footer-links">
              <li>
                <a
                  href="https://discord.gg"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Serveur Discord
                </a>
              </li>
              <li>
                <a href="/login" className="footer-link">
                  Rejoindre la beta
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Briefs du mois
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Légal</p>
            <ul className="footer-links">
              <li>
                <a href="/mentions-legales" className="footer-link">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/confidentialite" className="footer-link">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/cgu" className="footer-link">
                  CGU
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Potefolio. Tous droits réservés.
          </p>
          <div className="footer-legal">
            <a href="/mentions-legales" className="footer-legal-link">
              Mentions légales
            </a>
            <a href="/confidentialite" className="footer-legal-link">
              Confidentialité
            </a>
            <a href="/cgu" className="footer-legal-link">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
