import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import JoinUs from "../views/NousRejoindre.vue"
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
// import Test from "../views/Test.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: '/join-us',
    name: 'Join Us',
    component:JoinUs
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/register',
    name: 'Register',
    component:Register
  },
  // {
  //   path: '/global/test',
  //   name: 'Test',
  //   component:Test
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
