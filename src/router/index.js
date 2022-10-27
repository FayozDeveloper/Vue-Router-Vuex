import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () =>import('../App.vue'),
    children: [
      {
        path: '/',
        name: 'MainPage',
        component: () => import('../components/test/MainPage.vue')
      },
      {
        path:'/about',
        name: 'About',
        component: () => import('../components/test/About.vue')
      },
      {
        path: '/projects',
        name: 'ProjectsPage',
        component: () => import('@/components/test/ProjectsPage.vue')
      },
      {
        path: '/service',
        name: 'Services',
        component: () => import('@/components/test/Services.vue')
      },
      {
        path: '/contact',
        name: 'Form',
        component: () => import('@/components/test/Fom.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
