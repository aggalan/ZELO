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
import Legales from "@/components/Landing/Home/Legales.vue";
import faq  from "@/components/Landing/Home/faq.vue"
import SobreNosotros  from "@/components/Landing/Home/SobreNosotros.vue"
import contactanos  from "@/components/Landing/Home/contactanos.vue"
import features  from "@/components/Landing/Home/features.vue"
import {useUsersStore} from "@/store/usersStore";

const routes = [
  { path: '/', component: HomePage, meta: { showNavbar: true, showSidebar: false,applyBackground: true , authProtected: false  } },
  { path: '/signup', component: SignUp, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false  } },
  { path: '/login', component: SignIn, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false  } },
  { path: '/reset-password', component: PasswordReset, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false } },
  {path : '/legales', component: Legales, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }}
  ,{path : '/faq', component: faq, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }}
  ,{path : '/sobre-nosotros', component: SobreNosotros, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }}
  ,{path : '/contactanos', component: contactanos, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }}
  ,{path : '/features', component: features, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }},
  { path: '/dashboard', component: Dashboard, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/transference', component: Transference, meta: { showNavbar: false, showSidebar: true , applyBackground: false, authProtected: true} },
  { path: '/investment', component: InvestmentDashboard, meta: { showNavbar: false, showSidebar: true , applyBackground: false, authProtected: true} },
  { path: '/cards', component: Cards, meta: { showNavbar: false, showSidebar: true , applyBackground: false, authProtected: true} },
  { path: '/movements', component: MovementsDashboard, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/profile', component: ProfileDashboard, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/help', component: Help, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },


];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


// router.beforeEach((to,from) => {
//   const user = useUsersStore()
//   if(to.matched.some(route => route.meta.authProtected) && !user.isAuthenticated) {
//     return {
//       path: '/login',
//       query: { redirect: to.fullPath },
//     }
//   }
// })

export default router;
