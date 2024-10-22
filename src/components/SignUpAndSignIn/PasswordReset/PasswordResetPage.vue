<template>
  <SignInLayout class="password-reset-layout">
    <template #logo>
      <Logo />
    </template>
    <template #title>
      <h1>Restablecer Contraseña</h1>
    </template>
    <template #form>
      <PasswordResetForm />
    </template>
    <template #additional-links>
      <separator />
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
import PasswordResetForm from './PasswordResetForm.vue'
import LoginLink from './LoginLink.vue'
import DecorationCard from '../DecorationCard.vue'
import Separator from "@/components/SignUpAndSignIn/separator.vue";
</script>

<style scoped>
.password-reset-layout {
  margin-top: -1.8rem; /* Adjust the value as needed */
}

.decoration-card {
  margin-top: 3.7rem; /* Adjust the value as needed */
}

</style>
