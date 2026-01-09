import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login-page.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/register/register-page.vue'),
    },
    {
      path: '/system',
      name: 'system',
      redirect: '/system/home',
      component: () => import('@/views/system/root-page.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/system/home/home-page.vue'),
        },
        {
          path: 'assessment',
          name: 'assessment',
          component: () => import('@/views/system/assessment/assessment-page.vue'),
        },
        {
          path: 'target',
          name: 'target',
          component: () => import('@/views/system/target/target-page.vue'),
        },
        {
          path: 'learn',
          name: 'learn',
          component: () => import('@/views/system/learn/learn-page.vue'),
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/system/user/index-page.vue'),
        },
      ],
    },
  ],
})
export const topRouter = [
  {
    path: '/system/home',
    name: '首页',
    icon: '',
  },
  {
    path: '/system/assessment',
    name: '职业测评',
    icon: '',
  },
  {
    path: '/system/target',
    name: '职业目标',
    icon: '',
  },
  {
    path: '/system/learn',
    name: '学习资源',
    icon: '',
  },
]
export const userRouter = [
  {
    path: '/system/user',
    name: '个人信息',
  },
]
export default router
