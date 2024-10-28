<template>
  <v-card-text>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Notificaciones de transacciones</v-list-item-title>
          <v-list-item-subtitle>Recibir notificaciones por todas las transacciones</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="transactionNotifications" color="primary"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Alertas de balance</v-list-item-title>
          <v-list-item-subtitle>Recibir alertas cuando mi balance esta bajo</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="balanceAlerts" color="var(--primary)"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Alertas de seguridad</v-list-item-title>
          <v-list-item-subtitle>Recibir notificaciones de eventos relacionados a mi seguridad</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="securityAlerts" color="var(--primary)"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Notificaciones Promocionales</v-list-item-title>
          <v-list-item-subtitle>Recibir actualizaciones sobre nuevas funciones y ofertas</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="promotionalNotifications" color="var(--primary)"></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <ActionButton
      class="mt-4 text-white"
      dark
      @click="saveSettings"
      :loading="loading"
    >
     Actualizar Configuracion de Seguridad
    </ActionButton>
  </v-card-text>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const transactionNotifications = ref(true)
const balanceAlerts = ref(true)
const securityAlerts = ref(true)
const promotionalNotifications = ref(false)
const loading = ref(false)

const saveSettings = async () => {
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false
  emit('save')
}

const emit = defineEmits(['save'])
</script>
