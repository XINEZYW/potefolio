export default function SectionCTA() {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta-inner">
          <h2 className="heading-lg">
            Prêt à passer du junior au professionnel ?
          </h2>
          <p className="body-lg">
            Rejoins la communauté Potefolio via Discord. C&apos;est gratuit, et
            ton premier brief t&apos;attend déjà.
          </p>
          <a href="/login" className="btn-cta">
            Rejoindre via Discord
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3.5 9h11M10 4.5L14.5 9 10 13.5"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <p className="cta-note">Aucune carte bancaire requise · Gratuit pour toujours</p>
        </div>
      </div>
    </section>
  );
}
