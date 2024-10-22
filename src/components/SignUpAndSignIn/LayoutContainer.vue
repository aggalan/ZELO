<template>
  <div class="sign-in-container h-100">
    <div class="sign-in-form text-white">
      <slot name="logo"></slot>
      <slot name="title"></slot>
      <slot name="form"></slot>
      <slot name="additional-links"></slot>
    </div>
    <div class="decoration">
      <slot name="decoration"></slot>
    </div>
  </div>
</template>

<style scoped>
.sign-in-container {
  display: flex;
  height: 100vh;
  background-color: var(--background-color);
  color: var(--text-color);
  padding-left: 1.7rem;
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
