<template>
  <div class="sign-in-container h-100">
    <div class="sign-in-form">
      <Logo />
      <h1>Iniciar sesión</h1>
      <SignInForm />
      <RegisterLink />
    </div>
    <div class="decoration">
      <DecorationCard />
    </div>
  </div>
</template>

<script setup>
import Logo from '../Logo.vue'
import SignInForm from './SignInForm.vue'
import RegisterLink from './RegisterLink.vue'
import DecorationCard from '../DecorationCard.vue'
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
  color: var(--text-color);
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
