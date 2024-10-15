<template>
  <div class="sign-in-container h-100">
    <div class="sign-in-form">
      <Logo />
      <h1>Sign Up</h1>
      <SignInForm />
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
</script>

<style scoped>
:root {
  --primary-color: #8B5CF6;
  --secondary-color: #4B5563;
  --background-color: #19181E;
  --text-color: #F3F4F6;
}

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
