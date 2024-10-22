<template>
  <SignInLayout>
    <template #logo>
      <Logo />
    </template>
    <template #title>
      <h1>Iniciar sesión</h1>
    </template>
    <template #form>
      <SignInForm />
    </template>
    <template #additional-links>
      <separator />
      <RegisterLink />
      <ForgotPasswordButton />
    </template>
    <template #decoration>
      <DecorationCard />
    </template>
  </SignInLayout>
</template>

<script setup>
import SignInLayout from '../LayoutContainer.vue'
import Logo from '../Logo.vue'
import SignInForm from './SignInForm.vue'
import RegisterLink from './RegisterLink.vue'
import DecorationCard from '../DecorationCard.vue'
import ForgotPasswordButton from './ForgotPasswordButton.vue'
</script>
