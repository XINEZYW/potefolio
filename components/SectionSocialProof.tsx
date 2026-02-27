const stats = [
  { number: "340+", label: "Designers actifs" },
  { number: "1 200+", label: "Briefs complétés" },
  { number: "4.8/5", label: "Satisfaction moyenne" },
  { number: "78%", label: "Ont décroché un poste" },
];

const testimonials = [
  {
    quote:
      "En 3 mois sur Potefolio, j'ai monté un portfolio de 8 projets solides et reçu des feedbacks ultra-pertinents. J'ai signé mon premier contrat freelance en UI deux semaines après.",
    name: "Alexia R.",
    role: "UI Designer Freelance",
    initials: "AR",
  },
  {
    quote:
      "Ce qui m'a bloquée après ma formation, c'était le syndrome de la page blanche. Les briefs IA m'ont redonné une cadence. C'est le Duolingo du design, vraiment.",
    name: "Camille D.",
    role: "Product Designer @ Startup",
    initials: "CD",
  },
  {
    quote:
      "Les sessions Discord groupées m'ont appris à défendre mes choix face à une équipe. Ça m'a préparé aux design reviews mieux que n'importe quelle formation.",
    name: "Marcus T.",
    role: "UX Designer @ Agence",
    initials: "MT",
  },
];

export default function SectionSocialProof() {
  return (
    <section className="section-social-proof" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="label">Ils progressent</span>
          <h2 className="heading-lg">Des résultats concrets</h2>
          <p className="body-lg">
            Potefolio, c&apos;est des designers qui passent à l&apos;action et
            qui en parlent.
          </p>
        </div>

        <div className="stats-row">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonial-card">
              <div className="testimonial-stars">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
