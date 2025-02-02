import { createRouter, createWebHashHistory } from "vue-router";
let route = [
  {
    path: '/',
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import('@/views/Login.vue'),
  }
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes:route,
})

export default router;