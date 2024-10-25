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
    <SuccessMessage :visible="showSuccess" :message="successMessage" />
    <SubmitButton text="Restablecer" class="submit-button"/>
  </form>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useUsersStore } from '@/store/usersStore'
import PasswordInput from './PasswordInput.vue'
import SubmitButton from '../SubmitButton.vue'
import ErrorMessageSignUpSignIn from "@/components/SignUpAndSignIn/errorMessageSignUpSignIn.vue"
import SuccessMessage from "@/components/SignUpAndSignIn/successMessage.vue"

const newPassword = ref('')
const confirmPassword = ref('')
const showError = ref(false)
const errorMessage = ref('')
const showSuccess = ref(false)
const successMessage = ref('')

const usersStore = useUsersStore()

const passwordsMatch = computed(() => newPassword.value === confirmPassword.value)

const handleSubmit = () => {
  if (passwordsMatch.value) {
    const email = usersStore.emailForReset

    const success = usersStore.updatePassword(email, newPassword.value)
    usersStore.printAllUserEmails()
    if (success) {
      successMessage.value = 'Contraseña actualizada con éxito'
      showSuccess.value = true
      showError.value = false
    } else {
      errorMessage.value = "Hubo un error al restablecer la contraseña. Por favor, inténtelo de nuevo."
      showError.value = true
      showSuccess.value = false
    }
  } else {
    errorMessage.value = 'Las contraseñas no coinciden'
    showError.value = true
    showSuccess.value = false
  }
}
</script>

<style scoped>
.submit-button {
  margin-top: 2.5rem; /* Adjust the value as needed */
}
</style>
