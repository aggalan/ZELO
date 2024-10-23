<template>
  <v-container fluid class="pa-0 main mt-15">
    <v-main class="d-flex flex-column align-center justify-center pa-8 text-white">
      <h1 class="text-h2 font-weight-bold mb-8">Preguntas Frecuentes</h1>

      <v-card max-width="800" width="100%" class="bg-grey-darken-3">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(item, i) in faqItems"
            :key="i"
            class="bg-grey-darken-3"
          >
            <v-expansion-panel-title class="text-white">
              {{ item.question }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              {{ item.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>

      <v-card max-width="800" width="100%" class="bg-grey-darken-3 mt-8">
        <v-card-title class="text-h5 font-weight-bold">
          ¿No encontraste lo que buscabas?
        </v-card-title>
        <v-card-text>
          <p class="mb-4">Contáctanos y te responderemos lo antes posible.</p>
          <v-btn
            color="purple-darken-2"
            @click="scrollToContact"
          >
            Contáctanos
          </v-btn>
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

const faqItems = ref([
  {
    question: "¿Qué es Zelo?",
    answer: "Zelo es una billetera digital diseñada centrada en el diseño y la interacción con el usuario, ofreciendo una forma intuitiva y segura de manejar sus finanzas."
  },
  {
    question: "¿Cómo puedo crear una cuenta en Zelo?",
    answer: "Para crear una cuenta en Zelo, simplemente descarga la aplicación desde la App Store o Google Play, y sigue las instrucciones de registro. Necesitarás proporcionar algunos datos básicos y verificar tu identidad."
  },
  {
    question: "¿Es seguro usar Zelo?",
    answer: "Sí, la seguridad es nuestra prioridad. Utilizamos encriptación de grado bancario y autenticación de dos factores para proteger tu información y tu dinero."
  },
  {
    question: "¿Zelo es  un banco?",
    answer: "Zelo ofrece servicios de pago y no está autorizado por el Banco Central a operar como entidad financiera. Los fondos acreditados en cuentas de pago no constituyen depósitos en una entidad financiera ni están garantizados conforme legislación aplicable a depósitos en entidades financieras."
  },
  {
    question: "¿Hay algún costo por usar Zelo?",
    answer: "Zelo es gratuito para las operaciones básicas. Algunas funciones premium pueden tener un costo adicional, pero siempre te informaremos claramente sobre cualquier cargo."
  }
])

const currentYear = computed(() => new Date().getFullYear())

const scrollToContact = () => {
  // Implementar la lógica de desplazamiento a la sección de contacto
  console.log('Desplazarse a la sección de contacto')
}
</script>

<style scoped>
.main {
  background: transparent;
  height: 100vh;
  padding: 0;
}
.v-card {
  border-radius: 8px;
}
.v-expansion-panel {
  background-color: transparent !important;
}
.v-expansion-panel-title {
  color: white !important;
}
.v-expansion-panel-text {
  color: #E0E0E0 !important;
}
</style>
