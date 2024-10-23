<template>
  <p class="login-link">
    ¿Ya tienes una cuenta? <RouterLink to="/login">Inicia sesión</RouterLink>
  </p>
</template>

<style scoped>
.login-link {
  margin-top: 1rem;
  text-align: center;
}

.login-link a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
}

.login-link a:hover {
  text-decoration: underline;
}

.login-link a {
  color: var(--primary-color);
  text-decoration: none;
}
</style>
