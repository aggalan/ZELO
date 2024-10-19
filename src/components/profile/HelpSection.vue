<template>
  <div class="bg-surface">
    <div class="pa-4 ">
      <h2 class="text-h5 mb-6 ">Ayuda</h2>
      <div class="text-subtitle-1 mb-2">¿Con qué podemos ayudarte?</div>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        label="Buscar"
        filled
        flat
        rounded
        dense
      ></v-text-field>
    </div>

    <ProfileList :items="helpItems" />
    <div class="d-flex justify-space-between mt-6">
      <v-btn outlined rounded>
        <v-icon left>mdi-headphones</v-icon>
        Contactanos
      </v-btn>
      <v-btn outlined rounded>
        <v-icon left>mdi-close-circle</v-icon>
        Cancelar mi cuenta
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProfileList from "@/components/profile/ProfileList.vue";

const helpItems = ref([
  { icon: 'mdi-lock-reset', title: 'Reestablecer mi contraseña', subtitle: '¿Olvidaste tu contraseña? Reestablécela' },
  { icon: 'mdi-shield-account', title: 'Seguridad y acceso a la cuenta', subtitle: 'Problemas y configuración' },
  { icon: 'mdi-cash-multiple', title: 'Pagos', subtitle: 'Consultas, pagos de servicios, pagos con QR' },
  { icon: 'mdi-store', title: 'Ventas', subtitle: 'Tus cobros, tasas, herramientas para vender con QR y link de pago' },
  { icon: 'mdi-account-circle', title: 'Tu perfil', subtitle: 'Datos y problemas de ingreso a la cuenta' },
])
</script>
