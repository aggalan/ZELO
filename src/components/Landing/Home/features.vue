<template>
  <v-container fluid class="pa-0 main mt-15">
    <v-main class="d-flex flex-column align-center justify-center pa-8 text-white">
      <h1 class="text-h2 font-weight-bold mb-8">Caracteristicas destacadas</h1>
      <h2 class="text-h4 mb-12">Con Zelo puedes:</h2>

      <v-row>
        <v-col v-for="feature in features" :key="feature.title" cols="12" md="6" lg="4">
          <v-card class="bg-grey-darken-3 h-100">
            <v-card-title class="text-h5 font-weight-bold d-flex align-center">
              <v-icon :icon="feature.icon" size="large" class="mr-4" color="purple-darken-2"></v-icon>
              {{ feature.title }}
            </v-card-title>
            <v-card-text>
              <p>{{ feature.description }}</p>
            </v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </v-main>

    <v-footer app color="grey-darken-3" class="justify-center">
      <span>&copy; {{ currentYear }} Zelo. Todos los derechos reservados.</span>
    </v-footer>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const features = ref([
  {
    icon: 'mdi-chart-bar',
    title: 'Ver analíticas de gastos',
    description: 'Obtén una visión clara de tus hábitos de gasto con gráficos detallados y categorización automática de transacciones.'
  },
  {
    icon: 'mdi-bank-transfer',
    title: 'Transferir rápidamente',
    description: 'Realiza transferencias instantáneas a cualquier cuenta, sin complicaciones y con la máxima seguridad.'
  },
  {
    icon: 'mdi-history' ,
    title: 'Revisar gastos y movimientos',
    description: 'Mantente al tanto de tus transacciones y gastos con notificaciones en tiempo real y un historial detallado.'
  },
  {
    icon: 'mdi-cash-multiple',
    title: 'Cobrar con link de pago',
    description: 'Genera links de pago personalizados para cobrar fácilmente por tus productos o servicios.'
  },
  {
    icon: 'mdi-chart-line',
    title: 'Invertir',
    description: 'Accede a diversas opciones de inversión como plazos fijos, fondos y criptomonedas, todo desde una sola aplicación.'
  },
  {
    icon: 'mdi-credit-card-multiple',
    title: 'Guardar tarjetas',
    description: 'Almacena de forma segura todas tus tarjetas para realizar pagos rápidos y gestionar tus finanzas eficientemente.'
  }
])

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.main {
  background: transparent;
  min-height: 100vh;
  padding: 0;
}
.v-card {
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}
.v-card:hover {
  transform: translateY(-5px);
}
.v-card-title {
  word-break: break-word;
}
</style>
