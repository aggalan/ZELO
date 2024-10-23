<template>
  <v-card-text>
    <v-form @submit.prevent="saveSettings" ref="form">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="currentPin"
            label="Current PIN"
            type="password"
            outlined
            dense
            :rules="[v => !!v || 'Current PIN is required']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="newPin"
            label="New PIN"
            type="password"
            outlined
            dense
            :rules="[v => !!v || 'New PIN is required', v => v.length === 4 || 'PIN must be 4 digits']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="confirmPin"
            label="Confirm New PIN"
            type="password"
            outlined
            dense
            :rules="[v => !!v || 'Please confirm your PIN', v => v === newPin || 'PINs do not match']"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="twoFactor"
            label="Enable Two-Factor Authentication"
            color="#8B5CF6"
          ></v-switch>
        </v-col>
        <v-col cols="12" md="6">
          <v-switch
            v-model="biometricAuth"
            label="Enable Biometric Authentication"
            color="#8B5CF6"
          ></v-switch>
        </v-col>
      </v-row>
      <v-btn
        color="#8B5CF6"
        class="mt-4"
        dark
        type="submit"
        :loading="loading"
      >
        Update Security Settings
      </v-btn>
    </v-form>
  </v-card-text>
</template>

<script setup>
import { ref } from 'vue'

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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    loading.value = false
    emit('save')
  }
}

const emit = defineEmits(['save'])
</script>
