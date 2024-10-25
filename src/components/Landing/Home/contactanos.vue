<template>
  <v-container fluid class="pa-0 main mt-15">
    <v-main class="d-flex flex-column align-center justify-center pa-8 text-white">
      <h1 class="text-h2 font-weight-bold mb-8">Contáctanos</h1>

      <v-card max-width="600" width="100%" class="bg-grey-darken-3 mb-8">
        <v-card-text>
          <v-form @submit.prevent="submitForm" ref="form">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Nombre"
              required
              variant="outlined"
              color="purple-darken-2"
              class="mb-4"
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Correo electrónico"
              required
              variant="outlined"
              color="purple-darken-2"
              class="mb-4"
            ></v-text-field>

            <v-textarea
              v-model="message"
              :rules="messageRules"
              label="Mensaje"
              required
              variant="outlined"
              color="purple-darken-2"
              class="mb-4"
              rows="3"
            ></v-textarea>

            <ActionButton
              type="submit"
              color="purple-darken-2"
              class="mt-4"
              :loading="loading"
              block
            >
              Enviar mensaje
            </ActionButton>
          </v-form>
        </v-card-text>
      </v-card>

      <v-card max-width="600" width="100%" class="bg-grey-darken-3 mb-8">
        <v-card-title class="text-h5 font-weight-bold text-white">Información de contacto</v-card-title>
        <v-card-text>
          <v-list class="bg-transparent">
            <v-list-item prepend-icon="mdi-map-marker" title="Dirección" subtitle="Av. Eduardo Madero 399, C1106 CABA, Argentina"></v-list-item>
            <v-list-item prepend-icon="mdi-phone" title="Teléfono" subtitle="+54 11 6841-4200"></v-list-item>
            <v-list-item prepend-icon="mdi-email" title="Correo electrónico" subtitle="contacto@zelo.com"></v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-main>

    <v-footer app color="grey-darken-3" class="justify-center">
      <span>&copy; {{ currentYear }} Zelo. Todos los derechos reservados.</span>
    </v-footer>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const form = ref(null)
const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')
const loading = ref(false)

const nameRules = [
  v => !!v || 'El nombre es requerido',
  v => v.length <= 50 || 'El nombre debe tener menos de 50 caracteres'
]

const emailRules = [
  v => !!v || 'El correo electrónico es requerido',
  v => /.+@.+\..+/.test(v) || 'El correo electrónico debe ser válido'
]

const messageRules = [
  v => !!v || 'El mensaje es requerido',
  v => v.length >= 10 || 'El mensaje debe tener al menos 10 caracteres'
]

const subjectItems = [
  'Consulta general',
  'Soporte técnico',
  'Sugerencia',
  'Reporte de error',
  'Otro'
]

const currentYear = computed(() => new Date().getFullYear())

const submitForm = async () => {
  const { valid } = await form.value.validate()

  if (valid) {
    loading.value = true
    // Lógica para enviar formulario
    console.log('Formulario enviado', { name: name.value, email: email.value, subject: subject.value, message: message.value })

    // Simulamos una espera de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000))

    loading.value = false
    // Mostrar mensaje de éxito o limpiar el formulario
    alert('Mensaje enviado con éxito')
    form.value.reset()
  }
}
</script>

<style scoped>
.main {
  background: transparent;
  padding: 0;
}

.v-card {
  border-radius: 8px;
}

.v-list-item {
  min-height: 64px;
}
</style>
