<template>
  <article class="content-card">
    <h2>Interface Vue.js</h2>

    <section class="skills" aria-label="Savoir-faire élémentaires">
      <p>
        <strong>Savoir-faire élémentaires :</strong>
        <span class="skill-yellow">créer une interface avec Vue.js</span>,
        <span class="skill-blue">structurer une page web</span>,
        <span class="skill-green">créer une navigation claire</span> et
        <span class="skill-red">rendre des éléments interactifs</span>.
      </p>
    </section>

    <div class="trace-layout">
      <figure>
        <img src="/images/interface_site.png" alt="Interface Vue.js de la page d’accueil" />
        <figcaption>Trace 2 — Interface Vue.js de la page d’accueil</figcaption>
      </figure>

      <div class="trace-text">
        <p>
          La Trace 2 ci-contre est une capture d’écran de la page d’accueil du site KNA Motors.
        </p>
        <p>
          On y retrouve plusieurs éléments importants de l’interface :
          <span class="skill-green">la barre de navigation</span>, le bandeau principal avec une
          image de voiture, un texte de présentation de l’entreprise,
          <span class="skill-red">trois cartes interactives</span> et les informations de contact en
          bas de page (footer).
        </p>
        <p>
          <span class="skill-yellow">Cette page a été réalisée avec Vue.js</span>.
          <span class="skill-blue"
            >Elle permet de présenter rapidement l’entreprise et de guider l’utilisateur vers les
            fonctionnalités principales du site</span
          >, comme consulter les véhicules disponibles, prendre rendez-vous ou contacter l’équipe.
        </p>
        <p>
          Les cartes au centre de la page sont cliquables, comme on peut le voir sur la capture avec
          le curseur, et permettent d’accéder directement à la page concernée.
        </p>
        <p>
          Cette trace montre donc comment j’ai créé une page d’accueil esthétique, claire,
          interactive et adaptée aux besoins du site.
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

.skill-yellow {
  color: #725515;
  background-color: #ffeb99;
}

.skill-red {
  color: #8a3a2d;
  background-color: #ffd7cc;
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
