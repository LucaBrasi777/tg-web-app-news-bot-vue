// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
 import Crypto from "@/views/Crypto.vue";
 import Sport from "@/views/Sport.vue";
import Business from "@/views/Business.vue";
import Tech from "@/views/Tech.vue";
import Entertainment from "@/views/Entertainment.vue";
import Science from '@/views/Science.vue';
import Health from '@/views/Health.vue'
import About from '@/views/About.vue'
import Top from '@/views/Top.vue'
import Stocks from '@/views/Stocks.vue'
import General from '@/views/General.vue'
const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: { title: "HOME" },
    children: [
      {
        path: 'General',
        component: General,
        meta: { title: "GENERAL" },
      },
      {
        path: 'Business',
        component: Business,
        meta: { title: "BUSINESS" },
        children:[
          
        ]
      },
      {
        name:"Crypto",
        path: 'Crypto',
        component: Crypto,
        meta: { title: "CRYPTO" },
      },
      {
        path: 'Sport',
        component: Sport,
        meta: { title: "SPORT" },
      },
      {
        path: 'Tech',
        component: Tech,
        meta: { title: "TECHNOLOGY" },
      },
      {
        path: 'Health',
        component: Health,
        meta: { title: "HEALTH" },
      },
      {
        path: 'Science',
        component: Science,
        meta: { title: "SCINCE" },
      },
      {
        path: 'Entertainment',
        component: Entertainment,
        meta: { title: "ENTERTAINMENT" },
      },
      {
        path: "/About",
        component: About,
        name: "About",
        meta: { title: "ABOUT" },
      },
    ],
  },
  // {
  //   path: "/Crypto",
  //   component: Crypto,
  //   name: "Crypto",
  // },
  
  {
    path: "/Top",
    component: Top,
    name: "Top",
  },
  {
    path: "/Stocks",
    component: Stocks,
    name: "Stocks",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
