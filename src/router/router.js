import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/src/components/Landing/Home/landingComponent.vue';
import SignUp from '/src/components/SignUpAndSignIn/SignUp/SignUpPage.vue';
import SignIn from '/src/components/SignUpAndSignIn/SignIn/SignInPage.vue';
import Dashboard from '/src/components/dashboard/Dashboard.vue';
import Transference from "@/components/transference/Transference.vue";
import InvestmentDashboard from "@/components/Investment/InvestmentDashboard.vue";
import Cards from "@/components/Cards/cardsPage.vue";
import MovementsDashboard from "@/components/movements/MovementsDashboard.vue";
import ProfileDashboard from "@/components/profile/ProfileDashboard.vue";
import PasswordReset from "@/components/SignUpAndSignIn/PasswordReset/PasswordResetPage.vue";
import Help from "@/components/help/HelpPage.vue";

const routes = [
  { path: '/', component: HomePage, meta: { showNavbar: true, showSidebar: false,applyBackground: true  } },
  { path: '/signup', component: SignUp, meta: { showNavbar: true, showSidebar: false, applyBackground: true  } },
  { path: '/login', component: SignIn, meta: { showNavbar: true, showSidebar: false, applyBackground: true  } },
  { path: '/dashboard', component: Dashboard, meta: { showNavbar: false, showSidebar: true, applyBackground: false } },
  { path: '/transference', component: Transference, meta: { showNavbar: false, showSidebar: true , applyBackground: false} },
  { path: '/investment', component: InvestmentDashboard, meta: { showNavbar: false, showSidebar: true , applyBackground: false} },
  { path: '/cards', component: Cards, meta: { showNavbar: false, showSidebar: true , applyBackground: false} },
  { path: '/movements', component: MovementsDashboard, meta: { showNavbar: false, showSidebar: true, applyBackground: false } },
  { path: '/profile', component: ProfileDashboard, meta: { showNavbar: false, showSidebar: true, applyBackground: false } },
  { path: '/reset-password', component: PasswordReset, meta: { showNavbar: true, showSidebar: false, applyBackground: true } },
  { path: '/help', component: Help, meta: { showNavbar: false, showSidebar: true, applyBackground: false } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
