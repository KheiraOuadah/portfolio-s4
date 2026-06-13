<script setup lang="ts">
import { ref } from 'vue'

const menuOuvert = ref(true)
</script>

<template>
  <div class="page">
    <aside v-if="menuOuvert" class="menu">
      <nav>
        <RouterLink to="/" class="lien">Accueil</RouterLink>
        <RouterLink to="/technique" class="lien">Technique</RouterLink>
        <RouterLink to="/suivi-projet" class="lien">Suivi de projet</RouterLink>
        <RouterLink to="/integration-entreprise" class="lien">
          Intégration en entreprise
        </RouterLink>
      </nav>
    </aside>

    <div class="contenu">
      <header class="entete">
        <button class="bouton-menu" type="button" @click="menuOuvert = !menuOuvert">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <p>Kheira Ouadah (kheira.ouadah@edu.univ-fcomte.fr)</p>
      </header>

      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
  background-color: #f5f7fa;
  color: #263238;
  font-family: Arial, sans-serif;
}

.page {
  display: flex;
  min-height: 100vh;
}

.menu {
  width: 240px;
  padding: 24px 18px;
  background-color: #243447;
}

.menu nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lien {
  padding: 12px;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.lien:hover,
.router-link-active {
  color: #243447;
  background-color: white;
}

.contenu {
  flex: 1;
}

.entete {
  display: flex;
  align-items: center;
  gap: 15px;
  min-height: 68px;
  padding: 0 28px;
  border-bottom: 1px solid #dde4ec;
  background-color: white;
}

.entete p {
  margin: 0;
  font-weight: bold;
}

.bouton-menu {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 32px;
  border: none;
  background: none;
  cursor: pointer;
}

.bouton-menu span {
  display: block;
  height: 3px;
  width: 24px;
  border-radius: 3px;
  background-color: #243447;
}

main {
  padding: 40px 32px;
}

@media (max-width: 700px) {
  .page {
    flex-direction: column;
  }

  .menu {
    width: auto;
  }

  main {
    padding: 28px 18px;
  }
}
</style>
