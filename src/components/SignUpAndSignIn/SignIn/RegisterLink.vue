<template>
  <p class="register-link">
    ¿No tienes una cuenta? <RouterLink to='/signup'>Registrarse</RouterLink>
  </p>
</template>

<style scoped>
.register-link {
  margin-top: 1rem;
  text-align: center;
  color: var(--text-color);
}

.register-link a {
  color: var(--primary);
  text-decoration: none;
  font-weight: bold;
}

.register-link a:hover {
  text-decoration: underline;
}
</style>
