<template>
    <SignInLayout class="email-reset-layout">
      <template #logo>
        <Logo />
      </template>
      <template #title>
        <h1 class="text-h4 font-weight-bold mb-6">Restablecer Contraseña</h1>
      </template>
      <template #form>
        <EmailResetForm />
      </template>
      <template #additional-links>
        <v-divider class="my-4"></v-divider>
        <LoginLink />
      </template>
      <template #decoration>
        <DecorationCard class="decoration-card"/>
      </template>
    </SignInLayout>
</template>

<script setup>
import SignInLayout from '../LayoutContainer.vue'
import Logo from '../Logo.vue'
import EmailResetForm from './EmailRestForm.vue'
import LoginLink from './LoginLink.vue'
import DecorationCard from '../DecorationCard.vue'
</script>

<style scoped>
.email-reset-layout {
  margin-top: -5.2rem;
}

.decoration-card {
  margin-top: 10.5rem;
}
</style>
