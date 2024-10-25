<template>
  <form @submit.prevent="handleSubmit" class="email-reset-form">
    <div class="form-content">
      <div class="input-section">
        <EmailInput
          id="email"
          label="Correo Electrónico"
          v-model="email"
          placeholder="Ingrese su correo electrónico"
          :rules="emailRules"
        />
      </div>
    </div>

    <ErrorMessageSignUpSignIn :visible="showError" :message="errorMessage" />
    <SubmitButton text="Enviar Enlace de Restablecimiento" class="submit-button"/>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUsersStore } from '@/store/usersStore'
import { useRouter } from 'vue-router'
import EmailInput from './EmailInput.vue'
import SubmitButton from '../SubmitButton.vue'
import ErrorMessageSignUpSignIn from "@/components/SignUpAndSignIn/errorMessageSignUpSignIn.vue";

const email = ref('')
const showError = ref(false)
const errorMessage = ref('')

const usersStore = useUsersStore()
const router = useRouter()

const emailRules = [
  v => !!v || 'El correo electrónico es requerido',
  v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
]

const isFormValid = computed(() => {
  return email.value && emailRules.every(rule => rule(email.value) === true)
})

const handleSubmit = async () => {
  if (isFormValid.value) {
    console.log(email.value)

    const userExists = usersStore.users.some(user => user.email === email.value)
    console.log('User exists:', userExists)
    console.log(usersStore.users.some(user => user.email === email.value))
    usersStore.printAllUserEmails()
    if (userExists) {
      try {
        console.log('Sending reset link to:', email.value)
        usersStore.setEmailForReset(email.value)
        router.push('/reset-password-input')
      } catch (error) {
        errorMessage.value = 'Hubo un error al enviar el enlace de restablecimiento. Por favor, inténtelo de nuevo.'
        showError.value = true
      }
    } else {
      errorMessage.value = 'El correo electrónico no existe en nuestros registros.'
      showError.value = true
    }
  } else {
    errorMessage.value = 'Por favor, ingrese un correo electrónico válido.'
    showError.value = true
  }
}
</script>

<style scoped>
.submit-button {
  margin-top: 2.5rem; /* Adjust the value as needed */
}
</style>
