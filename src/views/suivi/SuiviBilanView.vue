<template>
  <article class="content-card">
    <h2>Bilan & évaluation</h2>
    <p>
      Pendant mon stage, j’ai travaillé le savoir-faire général
      <span class="skill-green">organiser et suivre un projet informatique</span>. Pour cela, j’ai
      utilisé <span class="skill-blue">Trello</span> afin de découper mon projet en tâches, de les
      répartir sur plusieurs semaines et de suivre leur avancement.
    </p>
    <p>
      Avant le stage, j’avais déjà utilisé des méthodes d’organisation pendant les projets de groupe
      en SAÉ. Cela m’a aidée à mieux comprendre l’intérêt de
      <span class="skill-green">planifier le travail</span> afin de ne pas me retrouver surchargée
      au dernier moment.
    </p>
    <p>
      Pendant le stage, j’ai appris à organiser seule un projet plus long, sur plusieurs semaines.
      J’ai découpé mon travail en <span class="skill-green">sprints d’une semaine</span> et j’ai
      <span class="skill-yellow">estimé la difficulté des tâches</span> pour mieux gérer mon temps.
    </p>
    <p>
      La principale difficulté a été d’anticiper toutes les tâches dès le début, car certaines
      fonctionnalités ou corrections se sont ajoutées pendant le développement. J’ai donc dû adapter
      mon Trello au fur et à mesure de l’avancement du site.
    </p>
    <p>
      J’ai réussi à <span class="skill-blue">suivre l’avancement du projet</span> et à garder une
      organisation claire pendant le stage. Cependant, je pense que je peux encore progresser sur
      <span class="skill-yellow">l’estimation du temps nécessaire</span> pour certaines tâches
      complexes.
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
