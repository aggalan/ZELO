<template>
  <div class="help-page">
    <v-container>

      <h1 class="text-h4 mb-6">Ayuda</h1>
      <p class="text-subtitle-1 mb-4">¿Con qué podemos ayudarte?</p>

      <div>
        <HelpCategories :categories="helpCategories" />
      </div>

      <v-row class="mt-6 d-flex justify-center">
        <v-col cols="6" class="d-flex justify-center">
          <v-card class="category-button-extra" @click="contactSupport">
            <v-row class="d-flex justify-center align-center py-2">
              <v-col class="d-flex align-center no-padding justify-center">
                <v-icon class="contact-support-icon">mdi-headphones</v-icon>
                <v-list-item-content class="text-center ml-2">
                  <v-list-item-title>Contáctanos</v-list-item-title>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <v-card class="category-button-extra" @click="cancelAccount">
            <v-row class="d-flex justify-center align-center py-2">
              <v-col class="d-flex align-center no-padding justify-center">
                <v-icon class="cancel-account-icon">mdi-close-circle</v-icon>
                <v-list-item-content class="text-center ml-2">
                  <v-list-item-title>Cancelar mi cuenta</v-list-item-title>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HelpCategories from './HelpCategories.vue'

const helpCategories = ref([
  { icon: 'mdi-lock-reset', title: 'Reestablecer mi contraseña', subtitle: '¿Olvidaste tu contraseña? Reestablécela' },
  { icon: 'mdi-shield-account', title: 'Seguridad y acceso a la cuenta', subtitle: 'Problemas y configuración' },
  { icon: 'mdi-cash-multiple', title: 'Pagos', subtitle: 'Consultas, pagos de servicios, pagos con QR' },
  { icon: 'mdi-store', title: 'Ventas', subtitle: 'Tus cobros, tasas, herramientas para vender con QR y link de pago' },
  { icon: 'mdi-account-circle', title: 'Tu perfil', subtitle: 'Datos y problemas de ingreso a la cuenta' },
])

const contactSupport = () => {
  console.log('Contacting support...')
}

const cancelAccount = () => {
  console.log('Cancelling account...')
}
</script>
<style scoped>
.help-page {
  background-color: #ffffff;
  min-height: 100vh;
  max-width: 900px; /* Set a maximum width */
  margin: 0 auto; /* Center the container */
}

.category-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 16px; /* Reduce the padding */
  margin: 8px auto;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  max-width: 400px;
}

.left-icon {
  margin-right: 8px; /* Decrease the margin */
}

.right-icon {
  position: absolute;
  right: 12px; /* Adjust the value as needed */
}

.v-list-item-title {
  font-size: 12px; /* Reduce font size */
}

.v-list-item-subtitle {
  font-size: 10px; /* Reduce font size */
}

.v-icon {
  font-size: 18px; /* Make the icon smaller */
}

.ml-2 {
  margin-left: 4px; /* Reduce left margin */
}

/* Extra buttons for contact support and cancel account */
.category-button-extra {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 93%;
  padding: 12px; /* Reduce padding */
  margin-bottom: 2px; /* Adjust margin for more compact look */
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.contact-support-icon,
.cancel-account-icon {
  font-size: 20px; /* Reduce icon size */
}
</style>
