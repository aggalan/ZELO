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
import PasswordResetMail from "@/components/SignUpAndSignIn/PasswordReset/PasswordResetMail.vue";
import Help from "@/components/help/HelpPage.vue";
import Legales from "@/components/Landing/Home/Legales.vue";
import faq  from "@/components/Landing/Home/faq.vue"
import SobreNosotros  from "@/components/Landing/Home/SobreNosotros.vue"
import contactanos  from "@/components/Landing/Home/contactanos.vue"
import features  from "@/components/Landing/Home/features.vue"
import {useUsersStore} from "@/store/usersStore";
import Settings from "@/components/settings/settings.vue";
import EnterMoneyPage from "@/components/dashboard/enterMoney/EnterMoneyPage.vue";
import TransferWithCBU from "@/components/transference/TransferWithCBU.vue";
import MyContactsPage from "@/components/transference/MyContactsPage.vue";
import TransactionDetailsPage from "@/components/transference/TransactionDetails/TransactionDetailsPage.vue";
import AccessibilityContent from "@/components/profile/AccessibilityContent.vue";
import AccountDataContent from "@/components/profile/AccountDataContent.vue";
import PersonalInfoContent from "@/components/profile/PersonalInfoContent.vue";
import PrivacyContent from "@/components/profile/PrivacyContent.vue";
import PasswordReset from "@/components/SignUpAndSignIn/PasswordReset/PasswordResetPage.vue";


const routes = [
  { path: '/', component: HomePage, meta: { showNavbar: true, showSidebar: false,applyBackground: true , authProtected: false  } },
  { path: '/signup', component: SignUp, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false  } },
  { path: '/login', component: SignIn, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false  } },
  { path: '/reset-password', component: PasswordResetMail, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false } },
  { path: '/reset-password-input', component: PasswordReset, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false } },
  {path : '/legales', component: Legales, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }}
  ,{path : '/faq', component: faq, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }}
  ,{path : '/sobre-nosotros', component: SobreNosotros, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }}
  ,{path : '/contactanos', component: contactanos, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }}
  ,{path : '/features', component: features, meta: { showNavbar: true, showSidebar: false, applyBackground: true, authProtected: false }},
  { path: '/dashboard', component: Dashboard, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/transference', component: Transference, meta: { showNavbar: false, showSidebar: true , applyBackground: false, authProtected: true} },
  {path: '/transference/cbu', component: TransferWithCBU, meta: { showNavbar: false, showSidebar: true , applyBackground: false, authProtected: true}},
  {path: '/transference/contacts', component: MyContactsPage, meta: { showNavbar: false, showSidebar: true , applyBackground: false, authProtected: true}},
  { path: '/investment', component: InvestmentDashboard, meta: { showNavbar: false, showSidebar: true , applyBackground: false, authProtected: true} },
  { path: '/cards', component: Cards, meta: { showNavbar: false, showSidebar: true , applyBackground: false, authProtected: true} },
  { path: '/movements', component: MovementsDashboard, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/movements/details', component: TransactionDetailsPage, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/profile', component: ProfileDashboard, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/profile/help', component: Help, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/profile/settings', component: Settings, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/profile/accessibility', component: AccessibilityContent, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/profile/account-data', component: AccountDataContent, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/profile/personal-info', component: PersonalInfoContent, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/profile/privacy', component: PrivacyContent, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },
  { path: '/dashboard/enter', component: EnterMoneyPage, meta: { showNavbar: false, showSidebar: true, applyBackground: false, authProtected: true } },


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
