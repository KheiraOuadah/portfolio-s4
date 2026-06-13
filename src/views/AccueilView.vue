<template>
  <section class="page-section">
    <h1>Accueil</h1>

    <article class="presentation-card">
      <h2>Présentation</h2>
      <p>
        Ce portfolio présente le travail réalisé pendant mon stage de deuxième année de BUT
        Informatique au sein de l’entreprise KNA Motors. Il a pour objectif de montrer les
        compétences que j'ai mobilisées pendant le développement d’un site web destiné à présenter
        les véhicules disponibles, faciliter la prise de rendez-vous et améliorer la gestion des
        demandes clients de l'entreprise.
      </p>
      <p>
        Le portfolio est organisé en quatre parties : une page d’accueil présentant le contexte
        général du stage, une page technique consacrée au développement du site, une page de suivi de
        projet présentant l’organisation du travail, et une page d’intégration en entreprise servant
        à mettre en avant mon rôle dans l’entreprise et mes échanges avec les clients.
      </p>
      <p>
        Pour avoir accès aux trois autres parties il suffit de cliquer sur l'icône du menu en haut à
        gauche du site.
      </p>
    </article>

    <article class="presentation-card">
      <h2>Contexte</h2>
      <p>
        <strong>KNA Motors</strong> est une entreprise spécialisée dans l'achat et la vente de
        véhicules d’occasion. C'est une équipe constituée de trois frères :
        <strong>Ben Abdallah Nawfel</strong> qui est le président de l'entreprise,
        <strong>Ben Adballah Adam</strong> et <strong>Ben Abdallah Kais</strong>.
      </p>
      <p>
        J’ai discuté avec eux afin d’identifier les besoins de l’entreprise et de proposer une
        solution adaptée à leur besoin. J’ai principalement travaillé sur la partie développement du
        site, mais j’ai aussi été en contact avec leurs clients. Je leur donnais des informations sur
        les voitures qui les intéressaient et je pouvais aussi convenir d’un rendez-vous avec eux.
      </p>
      <p>
        Le projet consistait à développer un site web complet avec une partie utilisateur et une
        partie administrateur. Les visiteurs peuvent consulter les informations de l’entreprise et
        les voitures disponibles. Les utilisateurs connectés peuvent demander un rendez-vous pour
        venir voir un véhicule. L’administrateur peut gérer les voitures (ajouter, supprimer une
        voiture), ajouter des créneaux disponibles au calendrier et accepter ou refuser les demandes
        de rendez-vous.
      </p>
    </article>

    <article class="presentation-card">
      <h2>Synthèse</h2>
      <div class="synthese-layout">
        <div class="synthese-text">
          <p>
            Pendant mon stage chez KNA Motors, j’ai pu utiliser plusieurs compétences liées au
            développement web et au travail en entreprise.
          </p>
          <p>
            J’ai appris à <strong>concevoir un site web</strong> en partant des besoins de
            l’entreprise et en réfléchissant aux différentes parties du site.
          </p>
          <p>
            J’ai travaillé sur l’interface du site sur l'éditeur de code Visual Studio Code avec <strong>Vue.js</strong>, notamment pour
            afficher les pages principales et les voitures disponibles.
          </p>
          <p>
            J’ai utilisé <strong>MySQL</strong> pour enregistrer les informations importantes du
            site, comme les utilisateurs, les voitures, les créneaux et les rendez-vous.
          </p>
          <p>
            J’ai organisé mon travail avec <strong>Trello</strong>, ce qui m’a aidée à suivre
            l’avancement du projet pendant le stage.
          </p>
          <p>
            J’ai aussi appris à mieux <strong>communiquer avec des clients</strong>, en leur donnant
            des informations sur les voitures et en fixant des rendez-vous avec eux dans des sites
            comme <strong>Leboncoin</strong> ou le <strong>marketplace</strong> de Facebook.
          </p>
        </div>

        <div class="synthese-images" aria-label="Illustrations des compétences">
          <img src="/images/vue_logo.png" alt="Logo Vue.js" />
          <img src="/images/trello_logo.webp" alt="Logo Trello" />
          <img src="/images/leboncoin_logo.png" alt="Logo Leboncoin" />
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.page-section {
  max-width: 1140px;
  margin: 0 auto;
}

h1 {
  margin: 0 0 16px;
  color: #1e2c3a;
  font-size: clamp(2rem, 5vw, 3.2rem);
  text-align: center;
}

.presentation-card {
  padding: 24px;
  border: 1px solid #dde4ec;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 10px 25px rgb(30 44 58 / 8%);
}

.presentation-card + .presentation-card {
  margin-top: 24px;
}

h2 {
  margin: 0 0 14px;
  color: #243447;
  font-size: 1.35rem;
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

.synthese-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 28px;
  align-items: start;
}

.synthese-images {
  display: grid;
  gap: 14px;
}

.synthese-images img {
  display: block;
  width: 100%;
  height: 150px;
  padding: 18px;
  border: 1px solid #dde4ec;
  border-radius: 8px;
  background-color: white;
  object-fit: contain;
}

@media (max-width: 850px) {
  .synthese-layout {
    grid-template-columns: 1fr;
  }

  .synthese-images {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .synthese-images {
    grid-template-columns: 1fr;
  }
}
</style>
