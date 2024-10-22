<template>
  <form @submit.prevent="handleSubmit" class="password-reset-form">
    <div class="form-content">
      <div class="input-section">
        <PasswordInput
          id="newPassword"
          label="Nueva Contraseña"
          v-model="newPassword"
          placeholder="Ingrese su contraseña"
        />
        <PasswordInput
          id="confirmPassword"
          label="Repetir Contraseña"
          v-model="confirmPassword"
          placeholder="Ingrese su contraseña"
        />
      </div>
    </div>

    <ErrorMessageSignUpSignIn :visible="!passwordsMatch" message="Las contraseñas no coinciden" />
    <SubmitButton text="Restablecer" class="submit-button"/>
  </form>
</template>

<script setup>
import {computed, ref, watch} from 'vue'
import PasswordInput from './PasswordInput.vue'
import SubmitButton from '../SubmitButton.vue'
import ErrorMessageSignUpSignIn from "@/components/SignUpAndSignIn/errorMessageSignUpSignIn.vue";

const newPassword = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')

const passwordsMatch = computed(() => newPassword.value === confirmPassword.value)


const handleSubmit = () => {
  if (newPassword.value === confirmPassword.value) {
    console.log('Password reset with:', newPassword.value)
    errorMessage.value = ''
  } else {
    errorMessage.value = 'las contraseñas no coinciden'
  }
}

watch(newPassword, (newValue) => {
  console.log('Password changed:', newValue)
})
</script>

<style scoped>
.submit-button {
  margin-top: 2.5rem; /* Adjust the value as needed */
}

</style>
