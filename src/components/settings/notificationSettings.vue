<template>
  <v-card-text>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Transaction Notifications</v-list-item-title>
          <v-list-item-subtitle>Receive notifications for all transactions</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="transactionNotifications" color="#8B5CF6"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Balance Alerts</v-list-item-title>
          <v-list-item-subtitle>Receive alerts when your balance is low</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="balanceAlerts" color="#8B5CF6"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Security Alerts</v-list-item-title>
          <v-list-item-subtitle>Receive notifications about security-related events</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="securityAlerts" color="#8B5CF6"></v-switch>
        </v-list-item-action>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Promotional Notifications</v-list-item-title>
          <v-list-item-subtitle>Receive updates about new features and offers</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-switch v-model="promotionalNotifications" color="#8B5CF6"></v-switch>
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
      Save Notification Preferences
    </v-btn>
  </v-card-text>
</template>

<script setup>
import { ref } from 'vue'

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
