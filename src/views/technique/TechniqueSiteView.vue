<template>
  <article class="content-card">
    <h2>Développement du site</h2>

    <section class="skills" aria-label="Savoir-faire élémentaires">
      <p>
        <strong>Savoir-faire élémentaires :</strong>
        <span class="skill-blue">organiser l’architecture d’un site web</span>,
        <span class="skill-green">séparer le front-end, le back-end et la base de données</span>,
        <span class="skill-yellow">développer une interface avec Vue.js</span>,
        <span class="skill-red">créer un serveur avec Node.js et Express</span> et
        <span class="skill-purple">utiliser une base de données MySQL</span>.
      </p>
    </section>

    <div class="trace-layout">
      <figure>
        <img src="/images/architecture_site.png" alt="Schéma de l’architecture du site KNA Motors" />
        <figcaption>Trace 1 — Schéma de l’architecture du site KNA Motors</figcaption>
      </figure>

      <div class="trace-text">
        <p>
          La Trace 1 ci-contre est un schéma qui montre
          <span class="skill-blue">l’organisation générale du site web</span> réalisé pour KNA
          Motors.
        </p>
        <p>
          Les zones encadrées représentent les
          <span class="skill-green">différentes parties du projet</span> : l’utilisateur, le
          <span class="skill-yellow">front-end avec Vue.js</span>, le back-end avec
          <span class="skill-red">Node.js et Express</span>, et la
          <span class="skill-purple">base de données MySQL</span>.
        </p>
        <p>
          Le front-end correspond à la partie visible du site. C’est ce que l’utilisateur voit quand
          il consulte les pages.
          Le back-end sert à recevoir les demandes envoyées par le site et à les traiter.
          La <span class="skill-purple">base de données MySQL</span> permet de stocker les
          informations importantes, comme les utilisateurs, les voitures et les rendez-vous.
        </p>
        <p>
          Pour réaliser cette organisation, j’ai
          séparé le projet en deux parties principales : le front-end et le back-end. J’ai ensuite
          relié le serveur
          <span class="skill-red">Node.js et Express</span>
          à la base de données MySQL pour pouvoir récupérer ou enregistrer les informations du site.
        </p>
        <p>
          Cette trace permet donc de comprendre simplement quelles sont les différentes parties qui constituent le site
          et comment elles fonctionnent ensemble.
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.content-card {
  padding: 24px;
  border: 1px solid #dde4ec;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 10px 25px rgb(30 44 58 / 8%);
}

h2 {
  margin: 0 0 14px;
  color: #243447;
  font-size: 1.35rem;
}

.skills {
  margin-bottom: 24px;
}

.skills p {
  margin: 0;
  color: #465768;
  font-size: 1.08rem;
  line-height: 1.7;
}

span[class^='skill-'] {
  display: inline-block;
  padding: 2px 7px;
  border-radius: 6px;
  font-weight: 700;
}

.skill-blue {
  color: #1d4f73;
  background-color: #d8ecfb;
}

.skill-green {
  color: #1f6b50;
  background-color: #d6f1e6;
}

.skill-yellow {
  color: #725515;
  background-color: #ffeb99;
}

.skill-red {
  color: #8a3a2d;
  background-color: #ffd7cc;
}

.skill-purple {
  color: #58417b;
  background-color: #e4d8fa;
}

.trace-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
}

figure {
  margin: 0;
}

img {
  display: block;
  width: 100%;
  max-height: 520px;
  border: 1px solid #dde4ec;
  border-radius: 8px;
  object-fit: contain;
}

figcaption {
  margin-top: 10px;
  color: #57708a;
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
}

p {
  margin: 0 0 14px;
  color: #465768;
  font-size: 1.08rem;
  line-height: 1.7;
}

p:last-child {
  margin-bottom: 0;
}

@media (max-width: 850px) {
  .trace-layout {
    grid-template-columns: 1fr;
  }
}
</style>
