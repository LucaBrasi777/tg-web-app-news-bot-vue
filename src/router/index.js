// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Crypto from "@/views/Crypto.vue";
import Sport from "@/views/Sport.vue";
import Exchange from "@/views/Exchange.vue";
import Defi from "@/views/Defi.vue";
import News from "@/views/News.vue";
import Top from "@/views/TopCrypto.vue";
import Nft from "@/views/Nft.vue";
import Business from "@/views/Business.vue";
import Ico from "@/views/Ico.vue";
import Ai from "@/views/Ai.vue";
import Tech from "@/views/Tech.vue";
import Entertainment from "@/views/Entertainment.vue";
import Stocks from "@/views/Stocks.vue";
import Sceince from '@/views/Sceince.vue';
import Health from '@/views/Health.vue'
import Select from '@/views/Select.vue'
const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/Crypto",
    component: Crypto,
    name: "Crypto",
  },
  {
    path: "/Sport",
    component: Sport,
    name: "Sport",
  },

  {
    path: "/Exchange",
    component: Exchange,
    name: "Exchange",
  },
  {
    path: "/News",
    component: News,
    name: News,
  },
  {
    path: "/Defi",
    component: Defi,
    name: "Defi",
  },
  {
    path: "/Top",
    component: Top,
    name: "Top",
  },
  {
    path: "/Nft",
    component: Nft,
    name: "Nft",
  },
  {
    path: "/Business",
    component: Business,
    name: "Business",
  },
  {
    path: "/Ico",
    component: Ico,
    name: "Ico",
  },
  {
    path: "/Ai",
    component: Ai,
    name: "Ai",
  },
  {
    path: "/Tech",
    component: Tech,
    name: "Tech",
  },
  {
    path: "/Stocks",
    component: Stocks,
    name: "Stocks",
  },
  {
    path: "/Entertainment",
    component: Entertainment,
    name: "Entertainment",
  },
  {
    path: "/Sceince",
    component: Sceince,
    name: "Sceince",
  },
  {
    path: "/Health",
    component: Health,
    name: "Health",
  },
  {
    path: "/Select",
    component: Select,
    name: "Select",
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
