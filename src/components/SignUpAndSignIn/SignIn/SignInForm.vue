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
    <CheckboxField
      id="keepLoggedIn"
      label="Mantener Sesion Iniciada"
      v-model="keepLoggedIn"
    />
    <SubmitButton text="Login" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import InputField from './InputField.vue'
import CheckboxField from './CheckboxField.vue'
import SubmitButton from '../SubmitButton.vue'

const email = ref('')
const password = ref('')
const keepLoggedIn = ref(false)
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  console.log('Sign in with:', email.value, password.value, keepLoggedIn.value)
}
</script>
