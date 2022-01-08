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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
