import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/src/components/Landing/Home/landingComponent.vue';
import SignUp from '/src/components/SignUpAndSignIn/SignUp/SignUpPage.vue';
import SignIn from '/src/components/SignUpAndSignIn/SignIn/SignInPage.vue';
import Dashboard from '/src/components/dashboard/Dashboard.vue'
import Transference from "@/components/transference/Transference.vue";
import InvestmentDashboard from "@/components/Investment/InvestmentDashboard.vue";
import Cards from "@/components/dashboard/Cards/cardsPage.vue";
import MovementsDashboard from "@/components/movements/MovementsDashboard.vue";

const routes = [
  { path: '/', component: HomePage, meta: { showNavbar: true, showSidebar:false } },
  { path: '/signup', component: SignUp, meta: { showNavbar: true, showSidebar:false } },
  { path: '/login', component: SignIn, meta: { showNavbar: true, showSidebar:false } },
  { path: '/dashboard', component: Dashboard, meta: { showNavbar: false, showSidebar:true }},
  {path: '/transference', component: Transference, meta: { showNavbar: false, showSidebar:true } },
  {path: '/investment', component: InvestmentDashboard, meta: { showNavbar: false, showSidebar:true  } },
  {path: '/cards',component: Cards, meta: { showNavbar: false, showSidebar:true  } },
  {path:'/movements', component: MovementsDashboard, meta: { showNavbar: false, showSidebar:true  } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
