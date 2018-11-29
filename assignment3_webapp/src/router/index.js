import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home', meta: { requiresAuth: true } },
  { path: '/Member', component: 'Member', meta: { requiresAuth: true } },
  { path: '/Member2', component: 'Member2', meta: { requiresAuth: true } },
  { path: '/Cartoon', component: 'Cartoon', meta: { requiresAuth: true } },
  { path: '/Read1', component: 'Read1', meta: { requiresAuth: true } },
  { path: '/Read2', component: 'Read2', meta: { requiresAuth: true } },
  { path: '/Read3', component: 'Read3', meta: { requiresAuth: true } },
  { path: '/Read4', component: 'Read4', meta: { requiresAuth: true } },
  { path: '/Read5', component: 'Read5', meta: { requiresAuth: true } },
  { path: '/Read6', component: 'Read6', meta: { requiresAuth: true } },
  { path: '*', component: 'NotFound' }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const isAuthenticated = firebase.auth().currentUser
  if (requiresAuth && !isAuthenticated) {
    next('/signin')
  } else {
    next()
  }
})

export default router
