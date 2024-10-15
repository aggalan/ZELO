<template>
  <div id="app">
    <ResetPasswordPage />
  </div>
</template>

<script setup>
import ResetPasswordPage from './components/SignUpAndSignIn/PasswordReset/PasswordResetPage.vue'
</script>

<style>
:root {
  --primary-color: #8B5CF6;
  --secondary-color: #4B5563;
  --background-color: #19181e;
  --text-color: #F3F4F6;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
