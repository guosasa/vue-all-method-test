import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
const slot = ()=>import(/* webpackChunkName: "slot" */ '../views/slot.vue')
const mixin = ()=>import(/* webpackChunkName: "mixin" */ '../views/mixin.vue')
const plugin = ()=>import(/* webpackChunkName: "plugin" */ '../views/plugin.vue')
const store = ()=>import(/* webpackChunkName: "about" */ '../views/store.vue')
const directive = ()=>import(/* webpackChunkName: "about" */ '../views/directive.vue')

Vue.use(VueRouter)

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
  {
    path: '/slot',
    name: 'Slot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: slot
  },
  {
    path: '/mixin',
    name: 'Mixin',
    component: mixin
  },
  {
    path: '/plugin',
    name: 'plugin',
    component: plugin
  },
  {
    path: '/store',
    name: 'store',
    component: store
  },
  {
    path: '/directive',
    name: 'directive',
    component: directive
  }
]

const router = new VueRouter({
  routes
})

export default router
