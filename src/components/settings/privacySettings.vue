<template>
  <v-card-text>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Visibilidad de historial de transacciones</v-list-item-title>
          <v-list-item-subtitle>Controla quién puede ver tu historial de transacciones</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-select
            v-model="transactionVisibility"
            :items="visibilityOptions"
            outlined
            dense
            style="max-width: 200px;"
          ></v-select>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Visibilidad de balance</v-list-item-title>
          <v-list-item-subtitle>Controla quien puede ver tu balance de cuenta</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-select
            v-model="balanceVisibility"
            :items="visibilityOptions"
            outlined
            dense
            style="max-width: 200px;"
          ></v-select>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Compartir datos para mejoras</v-list-item-title>
          <v-list-item-subtitle>Permítenos usar tus datos para mejorar nuestros servicios</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="dataSharing" color="#8B5CF6"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Integraciones de Terceros</v-list-item-title>
          <v-list-item-subtitle>Permitir que aplicaciones de terceros accedan a los datos de tu billetera</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="thirdPartyAccess" color="#8B5CF6"></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <ActionButton
      color="#8B5CF6"
      class="mt-4"
      dark
      @click="saveSettings"
      :loading="loading"
    >
      Actualizar Configuracion de Privacidad
    </ActionButton>
  </v-card-text>

</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const transactionVisibility = ref('Solo yo')
const balanceVisibility = ref('Solo yo')
const visibilityOptions = ['Solo yo', 'Contactos', 'Publico']
const dataSharing = ref(false)
const thirdPartyAccess = ref(false)
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
