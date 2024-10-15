import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '/src/components/Landing/Home/landingComponent.vue';
import SignUp from '/src/components/SignUpAndSignIn/SignUp/SignUpPage.vue';
import SignIn from '/src/components/SignUpAndSignIn/SignIn/SignInPage.vue';
import Dashboard from '/src/components/dashboard/Dashboard.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/signup', component: SignUp },
  { path: '/login', component: SignIn },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
