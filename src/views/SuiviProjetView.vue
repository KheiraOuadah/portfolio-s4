<template>
  <section class="page-section">
    <h1>Page suivi de projet</h1>
    <p class="intro">
      Cette partie présente la manière dont j’ai organisé et suivi l’avancement de mon projet
      pendant le stage, notamment avec Trello.
    </p>

    <nav class="subnav" aria-label="Sous-pages du suivi de projet">
      <RouterLink to="/suivi-projet" class="subnav-link">Organisation du travail</RouterLink>
      <RouterLink to="/suivi-projet/bilan-evaluation" class="subnav-link">
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
