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
import Tags from '@/views/Tags.vue'
import Stocks from '@/views/Stocks.vue'
import General from '@/views/General.vue'
import Cosmos from '@/views/Cosmos.vue'
import Login from '@/views/Login.vue'
import en from '@/views/articles/articlesEnter.vue'
import hl from '@/views/articles/articlesHealth.vue'
import sp from '@/views/articles/articlesSport.vue'
import  t from '@/views/articles/articlesTech.vue'
import bus from '@/views/articles/articlesBus.vue'
import sc from '@/views/articles/articlesScience.vue'

const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: { title: "HOME" },
    children: [
      {
        path: '/Science',
        component: Science,
        meta: { title: "SCIENCE" },
        children:[
          {
            path: "Cosmos",
            component: Cosmos,
            name: "Cosmos",
            meta: { title: "COSMOS" },
          },
        ]
      },
      {
        path: '/General',
        component: General,
        meta: { title: "GENERAL" },
      },
      {
        path: '/Business',
        component: Business,
        meta: { title: "BUSINESS" },
        children:[
          {
            name:"Crypto",
            path: 'Crypto',
            component: Crypto,
            meta: { title: "CRYPTO" },
            children:[
              {
                name:"Top",
                path: 'Top',
                component: Top,
                meta: { title: "TOP" },
              },
              
            ]
          },
          
        ]
      },
      
      {
        path: '/Sport',
        component: Sport,
        meta: { title: "SPORT" },
      },
      {
        path: '/Tech',
        component: Tech,
        meta: { title: "TECHNOLOGY" },
      },
      {
        path: '/Health',
        component: Health,
        meta: { title: "HEALTH" },
      },
      
      {
        path: '/Entertainment',
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
    path: "/Tags",
    component: Tags,
    name: "Tags",
    meta: { title: "ARTICLES" },
    children:[
      {
        path: "t",
        component: t,
        name: "t",
        meta: { title: "TECHNOLOGY" },
      },
      {
        path: "sp",
        component: sp,
        name: "sp",
        meta: { title: "SPORT" },
      },
      {
        path: "en",
        component: en,
        name: "en",
        meta: { title: "ENTERTAINMENT" },
      },
      {
        path: "hl",
        component: hl,
        name: "hl",
        meta: { title: "HEALTH" },
      },
      {
        path: "sc",
        component: sc,
        name: "sc",
        meta: { title: "SCIENCE" },
      },
      {
        path: "bus",
        component: bus,
        name: "bus",
        meta: { title: "BUSINESS" },
      },

    ]
  },
  {
    path: "/Stocks",
    component: Stocks,
    name: "Stocks",
  },
  {
    path: "/Signin",
    component: Login,
    name: "Login",
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
