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
      <PasswordRequirements :password="newPassword" />
    </div>
    <SubmitButton text="Restablecer" />
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'
import PasswordInput from './PasswordInput.vue'
import SubmitButton from '../SubmitButton.vue'

const newPassword = ref('')
const confirmPassword = ref('')

const handleSubmit = () => {
  if (newPassword.value === confirmPassword.value) {
    console.log('Password reset with:', newPassword.value)
    // Implement your password reset logic here
  } else {
    alert('Passwords do not match')
  }
}

watch(newPassword, (newValue) => {
  // You can add additional password validation logic here
  console.log('Password changed:', newValue)
})
</script>

<style scoped>
  .password-reset-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

.form-content {
  display: flex;
  gap: 2rem;
}

.input-section {
  flex: 1;
}

@media (max-width: 768px) {
  .form-content {
    flex-direction: column;
  }
}
</style>
