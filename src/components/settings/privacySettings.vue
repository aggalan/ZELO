<template>
  <v-card-text>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Transaction History Visibility</v-list-item-title>
          <v-list-item-subtitle>Control who can see your transaction history</v-list-item-subtitle>
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
          <v-list-item-title>Balance Visibility</v-list-item-title>
          <v-list-item-subtitle>Control who can see your wallet balance</v-list-item-subtitle>
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
          <v-list-item-title>Data Sharing for Improvements</v-list-item-title>
          <v-list-item-subtitle>Allow us to use your data to improve our services</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="dataSharing" color="#8B5CF6"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Third-Party Integrations</v-list-item-title>
          <v-list-item-subtitle>Allow third-party apps to access your wallet data</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="thirdPartyAccess" color="#8B5CF6"></v-switch>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-btn
      color="#8B5CF6"
      class="mt-4"
      dark
      @click="saveSettings"
      :loading="loading"
    >
      Update Privacy Settings
    </v-btn>
  </v-card-text>

</template>

<script setup>
import { ref } from 'vue'

const transactionVisibility = ref('Only Me')
const balanceVisibility = ref('Only Me')
const visibilityOptions = ['Only Me', 'Friends', 'Public']
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
