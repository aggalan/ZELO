<template>
  <v-container fluid class="help-page">
    <v-container color="var(--background)" fluid class="d-flex flex-column">
      <v-btn
        icon
        @click="goBack"
      >
        <v-icon color="var(--primary)">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-container>
    <v-container class="god">
      <h1 class="text-h4 mt-6 mb-2">Ayuda</h1>
      <h3 class="mb-4 font-weight-regular text-grey-darken-4 mt-0">¿Con qué podemos ayudarte?</h3>

      <ItemList :items="helpCategories" @itemClick="handleCategoryClick" />

      <v-row class="mt-6">
        <v-col cols="12" sm="6" class="pb-2">
          <v-btn
            block
            color="white"
            variant="outlined"
            class="action-button bg-primary"
            @click="contactSupport"
          >
            <v-icon start>mdi-headphones</v-icon>
            Contáctanos
          </v-btn>
        </v-col>
        <v-col cols="12" sm="6" class="pb-2">
          <v-btn
            block
            color="white"
            variant="outlined"
            class="action-button bg-error"
            @click="cancelAccount"
          >
            <v-icon start>mdi-close-circle</v-icon>
            Cancelar mi cuenta
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ItemList from "@/components/generalComponents/SectionList.vue";

const router = useRouter()

const helpCategories = ref([
  { icon: 'mdi-lock-reset', title: 'Reestablecer mi contraseña', subtitle: '¿Olvidaste tu contraseña? Reestablécela', route: '/reset-password' },
  { icon: 'mdi-shield-account', title: 'Seguridad y acceso a la cuenta', subtitle: 'Problemas y configuración', route: '/security' },
  { icon: 'mdi-cash-multiple', title: 'Pagos', subtitle: 'Consultas, pagos de servicios, pagos con QR', route: '/payments' },
  { icon: 'mdi-store', title: 'Ventas', subtitle: 'Tus cobros, tasas, herramientas para vender con QR y link de pago', route: '/sales' },
  { icon: 'mdi-account-circle', title: 'Tu perfil', subtitle: 'Datos y problemas de ingreso a la cuenta', route: '/profile-help' },
])

const handleCategoryClick = (category) => {
  if(category.route === '/reset-password') {
    router.push(category.route)
  }
}

const contactSupport = () => {
  console.log('Contacting support...')
  // Implement contact support logic here
}

const cancelAccount = () => {
  console.log('Cancelling account...')
  // Implement account cancellation logic here
}

const goBack = () => {
  router.back();
}
</script>

<style scoped>
.help-page {
  margin: 0 auto;
  padding: 16px;
}

.god {
  max-width: 1000px;
}

.action-button {
  height: 48px;
}
</style>
