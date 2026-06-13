<template>
  <article class="content-card">
    <h2>Bilan & évaluation</h2>
    <p>
      Pendant mon stage, j’ai travaillé le savoir-faire général
      <span class="skill-blue">développer un site web dynamique</span>. Ce savoir-faire regroupe
      plusieurs compétences comme <span class="skill-yellow">créer une interface avec Vue.js</span>,
      organiser les pages du site, <span class="skill-red">créer un serveur avec Node.js et Express</span>,
      <span class="skill-purple">utiliser une base de données MySQL</span> et
      <span class="skill-green">faire communiquer les différentes parties du projet</span>.
    </p>
    <p>
      Avant mon stage, j’avais déjà vu <span class="skill-yellow">Vue.js</span>,
      <span class="skill-red">Node.js, Express</span> et <span class="skill-purple">MySQL</span> en
      cours, mais surtout sur des exercices ou des petits projets. Pendant le stage, j’ai pu les
      utiliser dans un projet plus complet, avec un vrai besoin d’entreprise.
    </p>
    <p>
      Au début, j’étais assez à l’aise avec la création des pages et l’utilisation de MySQL, car je
      les avais déjà travaillés en BUT. En revanche, j’ai eu plus de difficultés à relier toutes les
      parties du site entre elles, notamment entre <span class="skill-yellow">Vue.js</span>,
      <span class="skill-red">Express</span> et la
      <span class="skill-purple">base de données</span>.
    </p>
    <p>
      Grâce au stage, j’ai progressé dans
      <span class="skill-blue">l’organisation d’un projet web complet</span>. Je comprends mieux
      comment structurer une application, comment
      <span class="skill-purple">gérer les données</span> et comment
      <span class="skill-yellow">créer une interface utile pour les utilisateurs</span>.
    </p>
    <p>
      Je suis donc maintenant capable de <span class="skill-blue">créer un site web</span> avec une
      <span class="skill-yellow">interface</span>, un <span class="skill-red">serveur</span> et une
      <span class="skill-purple">base de données</span>, même si j’ai besoin de pratiquer pour être
      plus autonome sur certaines parties plus complexes.
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

.skill-red {
  color: #8a3a2d;
  background-color: #ffd7cc;
}

.skill-purple {
  color: #58417b;
  background-color: #e4d8fa;
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
