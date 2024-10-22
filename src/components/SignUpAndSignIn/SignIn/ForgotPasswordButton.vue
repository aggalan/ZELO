<template>
  <div class="forgot-password-link">
    <router-link to="/reset-password">¿Olvidaste tu contraseña?</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.forgot-password-link {
  margin-top: 1rem;
  text-align: center;
}

.forgot-password-link a {
  color: var(--link-color);
  text-decoration: none;
}

.forgot-password-link a:hover {
  text-decoration: underline;
}
</style>
