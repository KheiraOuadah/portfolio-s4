<template>
  <article class="content-card">
    <h2>Rôle dans l'entreprise</h2>

    <section class="skills" aria-label="Savoir-faire élémentaires">
      <p>
        <strong>Savoir-faire élémentaires :</strong>
        <span class="skill-blue">communiquer avec un client</span>,
        <span class="skill-green">répondre à une demande d’information</span> et
        <span class="skill-yellow">adapter un langage professionnel</span>.
      </p>
    </section>

    <div class="trace-layout">
      <figure>
        <img src="/images/leboncoin.PNG" alt="Échange avec un client concernant un véhicule" />
        <figcaption>Trace 5 — Échange avec un client concernant un véhicule</figcaption>
      </figure>

      <div class="trace-text">
        <p>
          La Trace 5 ci-contre est une capture anonymisée d’un échange avec un client intéressé par
          un véhicule de KNA Motors sur Leboncoin.
        </p>
        <p>
          On y voit qu’un client demande des informations sur une voiture, notamment sur son état et
          sur certains éléments comme les pneus ou la batterie. Mon rôle était de
          <span class="skill-green">répondre aux questions du client</span> avec les informations
          demandées et de convenir d’un rendez-vous en accord avec l’emploi du temps de mes
          employeurs de <span class="skill-yellow">manière professionnelle</span>.
        </p>
        <p>
          Cette trace montre une partie de mon intégration dans l’entreprise, car mes missions ne se
          limitaient pas au développement du site web. J’ai également participé aux
          <span class="skill-blue">échanges avec les clients</span>, ce qui m’a permis de développer
          mes compétences en communication.
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
