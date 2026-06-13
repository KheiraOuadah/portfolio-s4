<template>
  <section class="page-section">
    <h1>Présentation et évaluation de savoir-faire techniques</h1>
    <p class="intro">
      Cette partie présente les compétences techniques que j’ai utilisées pendant mon stage pour
      créer le site web de KNA Motors, avec Vue.js, Node.js/Express et MySQL.
    </p>

    <nav class="subnav" aria-label="Sous-pages techniques">
      <RouterLink to="/technique" class="subnav-link">Développement du site</RouterLink>
      <RouterLink to="/technique/interface" class="subnav-link">Interface Vue.js</RouterLink>
      <RouterLink to="/technique/base-de-donnees" class="subnav-link">
        Base de données
      </RouterLink>
      <RouterLink to="/technique/bilan-evaluation" class="subnav-link">
        Bilan & évaluation
      </RouterLink>
    </nav>

    <RouterView />
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

.intro {
  max-width: 820px;
  margin: 0 auto 24px;
  color: #465768;
  font-size: 1.08rem;
  line-height: 1.7;
  text-align: center;
}

.subnav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
}

.subnav-link {
  padding: 10px 14px;
  border: 1px solid #dde4ec;
  border-radius: 8px;
  color: #243447;
  background-color: white;
  font-weight: 700;
  text-decoration: none;
}

.subnav-link:hover,
.router-link-exact-active {
  color: white;
  background-color: #243447;
  border-color: #243447;
}
</style>
