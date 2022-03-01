import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchResult from '../views/SearchResults.vue'
import Favorites from '../views/Favorites.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      search: true,
    }
  },
  {
    path: '/search/:path',
    component: SearchResult,
    meta: {
      search: true,
      searchDone: true
    }
  },
  {
    path: '/favorites',
    component: Favorites
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
