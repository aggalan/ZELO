<template>
  <form @submit.prevent="handleSubmit" class >
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
    <div class="d-flex">
      <InputField
        id="firstName"
        label="Nombre"
        type="text"
        v-model="firstName"
        placeholder="Ingrese su nombre"
        class="mr-2"
      />
      <InputField
        id="lastName"
        label="Apellido"
        type="text"
        v-model="lastName"
        placeholder="Ingrese su apellido"
      />
    </div>
    <InputField
      id="DNI"
      label="DNI*"
      type="text"
      v-model="DNI"
      placeholder="Ingrese su DNI"
    />
    <ErrorMessageSignUpSignIn :visible="!passwordsMatch" message="Las contraseñas no coinciden" />
    <SubmitButton />
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import InputField from './SignUpInputField.vue'
import SubmitButton from '../SubmitButton.vue'
import ErrorMessageSignUpSignIn from "@/components/SignUpAndSignIn/errorMessageSignUpSignIn.vue";
import { useUsersStore } from "@/store/usersStore";
import router from "@/router/router";

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const users = useUsersStore()
const passwordsMatch = computed(() => password.value === confirmPassword.value)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

const handleSubmit = () => {
  const dniPattern = /^\d+$/;
  if (!dniPattern.test(DNI.value)) {
    alert('El DNI debe contener solo números');
    return;
  }

  if (passwordsMatch.value) {
    console.log('Sign up with:', email.value, password.value);
    users.register(email.value, password.value, firstName.value || '', lastName.value || '', DNI.value);
    if (users.isAuthenticated) {
      router.push('/dashboard');
    }
  }
};
</script>

<style scoped>
.mr-2 {
  margin-right: 0.5rem;
}
</style>
