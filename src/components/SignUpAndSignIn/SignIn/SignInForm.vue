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
    <ErrorMessageSignUpSignIn :visible="errorVisible" :message="errorMessage" />
    <SubmitButton text="Login" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import InputField from './InputField.vue'
import CheckboxField from './CheckboxField.vue'
import SubmitButton from '../SubmitButton.vue'
import ErrorMessageSignUpSignIn from "@/components/SignUpAndSignIn/errorMessageSignUpSignIn.vue";
import {useUsersStore} from "@/store/usersStore";
import router from "@/router/router";
import {useRoute} from "vue-router";

const email = ref('')
const password = ref('')
const keepLoggedIn = ref(false)
const showPassword = ref(false)
const errorVisible = ref(false)
const errorMessage = ref('')
const route = useRoute();
const users = useUsersStore();

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  router.push('/dashboard');
  // const loginSuccessful = users.login(email.value, password.value);
  // if (!loginSuccessful) {
  //   errorMessage.value = 'No se pudo iniciar sesión. Por favor, verifique sus credenciales.'
  //   errorVisible.value = true
  // } else {
  //   errorVisible.value = false
  //   const redirect = route.query.redirect || '/dashboard';
  //   console.log('Sign in with:', email.value, password.value, keepLoggedIn.value)
  //   router.push({ path:  redirect })
  // }
}
</script>
