<template>
  <div class="sign-in-container h-100">
    <div class="sign-in-form text-white mt-8">
      <Logo />
      <h1>Registrarse</h1>
      <SignInForm />
      <separator />
      <LoginLink />
    </div>
    <div class="decoration">
      <DecorationCard />
    </div>
  </div>
</template>

<script setup>
import Logo from '../Logo.vue'
import SignInForm from './SignUpForm.vue'
import LoginLink from './SignUpLoginLink.vue'
import DecorationCard from '../DecorationCard.vue'
import Separator from "@/components/SignUpAndSignIn/separator.vue";
</script>

<style scoped>

.sign-in-container {
  display: flex;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
}

.sign-in-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.decoration {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .sign-in-container {
    flex-direction: column;
  }

  .decoration {
    display: none;
  }
}
</style>
