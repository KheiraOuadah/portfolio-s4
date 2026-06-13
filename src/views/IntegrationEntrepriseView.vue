<template>
  <section class="page-section">
    <h1>Page intégration en entreprise</h1>

    <nav class="subnav" aria-label="Sous-pages de l'intégration en entreprise">
      <RouterLink to="/integration-entreprise" class="subnav-link">Rôle dans l'entreprise</RouterLink>
      <RouterLink to="/integration-entreprise/bilan-evaluation" class="subnav-link">
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
  margin: 0 0 20px;
  color: #1e2c3a;
  font-size: clamp(2rem, 5vw, 3.2rem);
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
