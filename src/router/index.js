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
        component: () => import('../components/MainPage.vue')
      },
      {
        path:'/about',
        name: 'About',
        component: () => import('../components/About.vue')
      },
      {
        path: '/projects',
        name: 'ProjectsPage',
        component: () => import('@/components/ProjectsPage.vue'),
      },
      {
        path: '/service',
        name: 'Services',
        component: () => import('@/components/Services.vue')
      },
      {
        path: '/contact',
        name: 'Form',
        component: () => import('@/components/Fom.vue')
      },
      {
        path: '/admin',
        component: () => import('@/components/admin/layout/admin.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
