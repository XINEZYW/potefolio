const problems = [
  {
    icon: "🎯",
    title: "Pas de pratique régulière",
    desc: "Une fois la formation terminée, il n'y a plus de structure. Sans projets réguliers, les compétences stagnent et le portfolio reste vide.",
  },
  {
    icon: "🔇",
    title: "Zéro feedback constructif",
    desc: "Tu travailles seul. Pas de retour critique, pas d'œil extérieur. Impossible de savoir si tu progresses vraiment ou si tu fais les mêmes erreurs.",
  },
  {
    icon: "🏝️",
    title: "L'isolement du junior",
    desc: "Se construire un réseau professionnel en partant de zéro est épuisant. La plupart abandonnent faute de communauté qui les tire vers le haut.",
  },
];

export default function SectionProblem() {
  return (
    <section className="section-problem" id="problem">
      <div className="container">
        <div className="section-header">
          <span className="label">Le problème</span>
          <h2 className="heading-lg">
            Formé, mais pas encore prêt
          </h2>
          <p className="body-lg">
            La formation t&apos;a donné les bases. Mais entre la théorie et le marché
            du travail, il y a un fossé que personne ne t&apos;aide à traverser.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem) => (
            <div key={problem.title} className="problem-card">
              <div className="problem-card-icon">{problem.icon}</div>
              <p className="problem-card-title">{problem.title}</p>
              <p className="problem-card-desc">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
