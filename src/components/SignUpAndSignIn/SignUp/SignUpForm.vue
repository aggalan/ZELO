<template>
  <form @submit.prevent="handleSubmit">
    <InputField
      id="email"
      label="Correo Electronico*"
      type="email"
      v-model="email"
      placeholder="Ingrese su correo electronico"
    />
    <InputField
      id="password"
      label="Contraseña"
      :type="showPassword ? 'text' : 'password'"
      v-model="password"
      placeholder="Ingrese su contraseña"
      :toggle-visibility="togglePassword"
    />
    <InputField
      id="confirmPassword"
      label="Repetir Contraseña"
      :type="showConfirmPassword ? 'text' : 'password'"
      v-model="confirmPassword"
      placeholder="Ingrese su contraseña"
      :toggle-visibility="toggleConfirmPassword"
    />
    <SubmitButton />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import InputField from './InputField.vue'
import SubmitButton from '../SubmitButton.vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const passwordsMatch = computed(() => password.value === confirmPassword.value)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const handleSubmit = () => {
  if (passwordsMatch.value) {
    console.log('Sign up with:', email.value, password.value)
  } else {
    alert('Passwords do not match')
  }
}
</script>
