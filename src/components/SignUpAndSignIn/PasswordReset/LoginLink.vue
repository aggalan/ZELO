<template>
  <p class="login-link">¿Recordaste tu contraseña? <RouterLink to="/login">Inicia Sesión</RouterLink></p>
</template>

<style scoped>
.login-link {
  margin-top: 1rem;
  text-align: center;
  color: white;
}

.login-link a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
