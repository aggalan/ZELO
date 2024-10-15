<template>
  <div class="password-reset-container">
    <div class="password-reset-form">
      <Logo />
      <h1>Restablecer Contraseña</h1>
      <PasswordResetForm />
      <LoginLink />
    </div>
    <div class="decoration">
      <DecorationCard />
    </div>
  </div>
</template>

<script setup>
import Logo from '../Logo.vue'
import PasswordResetForm from './PasswordResetForm.vue'
import LoginLink from './LoginLink.vue'
import DecorationCard from '../DecorationCard.vue'
</script>

<style scoped>
:root {
  --background-color: #1F2937;
  --text-color: #F3F4F6;
  --input-border: #4B5563;
  --input-background: #374151;
  --primary-color: #8B5CF6;
  --error-color: #EF4444;
  --success-color: #10B981;
}
.password-reset-container {
  display: flex;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
}

.password-reset-form {
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
  .password-reset-container {
    flex-direction: column;
  }

  .decoration {
    display: none;
  }
}
</style>
