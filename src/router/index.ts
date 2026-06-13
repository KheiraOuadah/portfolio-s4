import { createRouter, createWebHistory } from 'vue-router'

import AccueilView from '@/views/AccueilView.vue'
import IntegrationEntrepriseView from '@/views/IntegrationEntrepriseView.vue'
import SuiviProjetView from '@/views/SuiviProjetView.vue'
import IntegrationBilanView from '@/views/integration/IntegrationBilanView.vue'
import IntegrationRoleView from '@/views/integration/IntegrationRoleView.vue'
import SuiviBilanView from '@/views/suivi/SuiviBilanView.vue'
import SuiviOrganisationView from '@/views/suivi/SuiviOrganisationView.vue'
import TechniqueBilanView from '@/views/technique/TechniqueBilanView.vue'
import TechniqueBaseDonneesView from '@/views/technique/TechniqueBaseDonneesView.vue'
import TechniqueInterfaceView from '@/views/technique/TechniqueInterfaceView.vue'
import TechniqueSiteView from '@/views/technique/TechniqueSiteView.vue'
import TechniqueView from '@/views/TechniqueView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: AccueilView,
    },
    {
      path: '/technique',
      name: 'technique',
      component: TechniqueView,
      children: [
        {
          path: '',
          name: 'technique-site',
          component: TechniqueSiteView,
        },
        {
          path: 'interface',
          name: 'technique-interface',
          component: TechniqueInterfaceView,
        },
        {
          path: 'base-de-donnees',
          name: 'technique-base-de-donnees',
          component: TechniqueBaseDonneesView,
        },
        {
          path: 'bilan-evaluation',
          name: 'technique-bilan-evaluation',
          component: TechniqueBilanView,
        },
      ],
    },
    {
      path: '/suivi-projet',
      name: 'suivi-projet',
      component: SuiviProjetView,
      children: [
        {
          path: '',
          name: 'suivi-organisation',
          component: SuiviOrganisationView,
        },
        {
          path: 'bilan-evaluation',
          name: 'suivi-bilan-evaluation',
          component: SuiviBilanView,
        },
      ],
    },
    {
      path: '/integration-entreprise',
      name: 'integration-entreprise',
      component: IntegrationEntrepriseView,
      children: [
        {
          path: '',
          name: 'integration-role',
          component: IntegrationRoleView,
        },
        {
          path: 'bilan-evaluation',
          name: 'integration-bilan-evaluation',
          component: IntegrationBilanView,
        },
      ],
    },
  ],
})

export default router
