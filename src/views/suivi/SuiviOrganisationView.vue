<template>
  <article class="content-card">
    <h2>Organisation du travail</h2>

    <section class="skills" aria-label="Savoir-faire élémentaires">
      <p>
        <strong>Savoir-faire élémentaires :</strong>
        <span class="skill-blue">utiliser Trello pour suivre un projet</span>,
        <span class="skill-green">mettre en place un suivi agile</span> et
        <span class="skill-yellow">estimer la difficulté des tâches</span>.
      </p>
    </section>

    <div class="trace-layout">
      <figure>
        <img src="/images/trello_site.png" alt="Suivi du projet avec Trello" />
        <figcaption>Trace 4 — Suivi du projet avec Trello</figcaption>
      </figure>

      <div class="trace-text">
        <p>
          La Trace 4 ci-contre est une capture d’écran d'une partie de mon tableau Trello utilisé
          pendant le stage.
        </p>
        <p>
          On y voit les différentes tâches liées au développement du site KNA Motors que j'ai réalisé
          pendant les semaines 2, 3 et 4. Je n'ai pas mis la première semaine car ayant commencé mon
          stage jeudi je n'avais pas encore commencé à travailler sur le site.
        </p>
        <p>
          J'ai utilisé <span class="skill-blue">Trello</span>
          pour <span class="skill-green">appliquer un suivi agile</span> à mon projet et pouvoir
          finir le site dans les temps. J'ai décidé de découper les 9 semaines de stage que j'avais
          en sprint d'une semaine, je devais donc découper mon avancement en 9 sprint.
        </p>
        <p>
          Grâce à l'expérience que j'ai obtenu avec les travaux de groupes (SAÉ) en développement de
          site web, j'ai pu anticipé le fait que certaines tâches s'ajoutent au fil des semaines, et
          que les deux dernières semaines en seraient forcément impactées.
        </p>
        <p>
          Le <span class="skill-yellow">système de cotation des tâches</span> est très pratique
          puisqu'il permet de se rendre compte si une tâche est trop longue à faire et donc s'il vaut
          mieux la découper en plusieurs sous-tâches pour tenir sur un sprint d'une semaine.
        </p>
        <p>
          Trello m’a permis d’organiser mon travail en séparant les tâches à faire, les tâches en
          cours et les tâches terminées. Cela m’a aidée à mieux suivre l’avancement du projet et à
          savoir quelles fonctionnalités devaient encore être développées.
        </p>
        <p>
          Cette trace montre donc comment j’ai utilisé un outil de gestion de projet pour organiser
          mon travail pendant le stage.
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
