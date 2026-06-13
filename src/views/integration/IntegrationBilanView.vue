<template>
  <article class="content-card">
    <h2>Bilan & évaluation</h2>
    <p>
      Pendant mon stage, j’ai travaillé le savoir-faire général
      <span class="skill-blue">communiquer dans un contexte professionnel</span>. En plus du
      développement du site web, j’ai été en contact avec des clients de KNA Motors pour
      <span class="skill-green">répondre à leurs questions</span> sur certains véhicules et convenir
      de rendez-vous.
    </p>
    <p>
      Avant le stage, j’avais déjà eu quelques expériences de communication dans le cadre des projets
      de groupe en SAÉ, mais c’était surtout avec d’autres étudiants. Pendant le stage, les échanges
      étaient différents, car je devais répondre à de vrais clients et représenter l’entreprise.
    </p>
    <p>
      J’ai appris à formuler des réponses
      <span class="skill-yellow">professionelles</span>. Je devais aussi faire attention à ne pas donner de réponse incomplète ou
      incorrecte, surtout lorsque le client demandait des détails sur l’état d’un véhicule.
    </p>
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

p {
  margin: 0 0 16px;
  color: #465768;
  font-size: 1.08rem;
  line-height: 1.7;
}

p:last-child {
  margin-bottom: 0;
}
</style>
