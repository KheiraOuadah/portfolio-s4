<template>
  <article class="content-card">
    <h2>Base de données</h2>

    <section class="skills" aria-label="Savoir-faire élémentaires">
      <p>
        <strong>Savoir-faire élémentaires :</strong>
        <span class="skill-purple">utiliser MySQL</span>,
        <span class="skill-green">gérer une base de données</span> et
        <span class="skill-blue">organiser les données dans plusieurs tables</span>.
      </p>
    </section>

    <div class="trace-layout">
      <figure>
        <img src="/images/BDD_site.png" alt="Liste des tables de la base de données MySQL" />
        <figcaption>Trace 3 — Liste des tables de la base de données MySQL</figcaption>
      </figure>

      <div class="trace-text">
        <p>
          La Trace 3 ci-contre est une capture du terminal
          <span class="skill-purple">MySQL</span> affichant les tables de la base de données du site
          KNA Motors.
        </p>
        <p>
          Cette base de données permet de
          <span class="skill-green">stocker les informations importantes du site</span>. Ici, elle enregistre les comptes utilisateurs, les véhicules disponibles, les photos
          des véhicules, les créneaux proposés par l’administrateur et les demandes de rendez-vous
          faites par les clients.
        </p>
        <p>
          J’ai choisi d’utiliser <span class="skill-purple">MySQL</span> car c’est un langage que
          j’ai étudié pendant mon BUT et que je maîtrise bien. Cela m’a permis de concevoir plus
          facilement la structure de la base de données et de gérer efficacement les informations du
          site.
        </p>
        <p>
          Pour créer cette base, j’ai dû
          <span class="skill-blue">organiser les données dans plusieurs tables</span> afin que
          chaque information soit rangée au bon endroit et puisse être récupérée plus facilement par
          le serveur.
        </p>
        <p>
          Cette trace montre donc comment <span class="skill-purple">MySQL</span> est utilisé pour
          structurer et conserver les données nécessaires au fonctionnement du site.
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
