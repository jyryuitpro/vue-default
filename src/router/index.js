import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: Contact
  // },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "contact", webpackPrefetch: true */ '../views/Contact.vue')
  },
  {
    path: '/basic',
    name: 'Basic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Basic.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBinding.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/example01',
    name: 'Example01',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example01.vue')
  },
  {
    path: '/example02',
    name: 'Example02',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example02.vue')
  },
  {
    path: '/example03',
    name: 'Example03',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example03.vue')
  },
  {
    path: '/example04',
    name: 'Example04',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example04.vue')
  },
  {
    path: '/example05',
    name: 'Example05',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example05.vue')
  },
  {
    path: '/example06',
    name: 'Example06',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example06.vue')
  },
  {
    path: '/example07',
    name: 'Example07',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example07.vue')
  },
  {
    path: '/example08',
    name: 'Example08',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example08.vue')
  },
  {
    path: '/example09',
    name: 'Example09',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example09.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  },
  {
    path: '/save',
    name: 'Save',
    component: () => import(/* webpackChunkName: "about" */ '../views/Save.vue')
  },
  {
    path: '/serverdata',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServerData.vue')
  },
  {
    path: '/example10',
    name: 'Example10',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example10.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
