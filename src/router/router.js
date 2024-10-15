import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/src/components/Landing/Home/landingComponent.vue';
import SignUp from '/src/components/SignUpAndSignIn/SignUp/SignUpPage.vue';
import SignIn from '/src/components/SignUpAndSignIn/SignIn/SignInPage.vue';
import Dashboard from '/src/components/dashboard/Dashboard.vue'
import Transference from "@/components/transference/Transference.vue";

const routes = [
  { path: '/', component: HomePage, meta: { showNavbar: true } },
  { path: '/signup', component: SignUp, meta: { showNavbar: true } },
  { path: '/login', component: SignIn, meta: { showNavbar: true } },
  { path: '/dashboard', component: Dashboard, meta: { showNavbar: false }},
  {path: '/transference', component: Transference, meta: { showNavbar: false } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
