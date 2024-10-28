<template>
  <v-card-text>
    <v-form @submit.prevent="saveSettings" ref="form">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="currentPin"
            label="PIN actual"
            type="password"
            outlined
            dense
            :rules="[v => !!v || 'PIN es requerido']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="newPin"
            label="Nuevo PIN"
            type="password"
            outlined
            dense
            :rules="[v => !!v || 'Nuevo PIN es requerido', v => v.length === 4 || 'El PIN debe tener 4 digitos']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="confirmPin"
            label="Confirmar nuevo PIN"
            type="password"
            outlined
            dense
            :rules="[v => !!v || 'Por favor confirme su nuevo PIN', v => v === newPin || 'Los PIN no coinciden']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="twoFactor"
            label="Habilitar autenticacion en 2 pasos"
            color="#8B5CF6"
          ></v-switch>
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="biometricAuth"
            label="Habilitar autenticacion biometrica"
            color="#8B5CF6"
          ></v-switch>
        </v-col>
      </v-row>
      <ActionButton
        class="mt-4"
        dark
        type="submit"
        :loading="loading"
      >
        Actualizar Configuracion de Seguridad
      </ActionButton>
    </v-form>
  </v-card-text>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const currentPin = ref('')
const newPin = ref('')
const confirmPin = ref('')
const twoFactor = ref(false)
const biometricAuth = ref(false)
const loading = ref(false)
const form = ref(null)

const saveSettings = async () => {
  const isValid = await form.value.validate()
  if (isValid) {
    loading.value = true
    await new Promise(resolve => setTimeout(resolve, 1000))
    loading.value = false
    emit('save')
  }
}

const emit = defineEmits(['save'])
</script>
