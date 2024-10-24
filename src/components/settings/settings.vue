<template>
  <div class="settings-page">
    <v-app-bar flat color="#F3F4F6" class="mb-4">
      <v-btn
        icon
        @click="goBack"
        color="#8B5CF6"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container fluid class="settings-container pa-4">
      <v-row>
        <v-col cols="12">
          <h1 class="text-h4 mb-6">Wallet Settings</h1>
          <v-tabs
            v-model="activeTab"
            background-color="transparent"
            color="#8B5CF6"
            grow
            slider-color="#8B5CF6"
          >
            <v-tab v-for="tab in tabs" :key="tab.value">
              <v-icon left>{{ tab.icon }}</v-icon>
              {{ tab.title }}
            </v-tab>
          </v-tabs>
          <v-card class="mt-4 settings-card" flat>
            <v-window v-model="activeTab">
              <v-window-item
                v-for="tab in tabs"
                :key="tab.value"
                :transition="isForward ? 'slide-x-transition' : 'slide-x-reverse-transition'"
                :reverse-transition="isForward ? 'slide-x-reverse-transition' : 'slide-x-transition'"
              >
                <component :is="tab.component" @save="showSnackbar" />
              </v-window-item>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      color="#8B5CF6"
      elevation="24"
      rounded="pill"
    >
      Settings saved successfully!
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import {ref, computed, watch} from 'vue'
import {useRouter} from 'vue-router'
import WalletSettings from '@/components/settings/walletSettings.vue'
import SecuritySettings from '@/components/settings/securitySettings.vue'
import NotificationSettings from '@/components/settings/notificationSettings.vue'
import PrivacySettings from '@/components/settings/privacySettings.vue'

const router = useRouter()
const activeTab = ref(0)
const prevTab = ref(0)
const snackbar = ref(false)

const tabs = [
  {title: 'Wallet', icon: 'mdi-wallet', value: 0, component: WalletSettings},
  {title: 'Security', icon: 'mdi-shield-lock', value: 1, component: SecuritySettings},
  {title: 'Notifications', icon: 'mdi-bell', value: 2, component: NotificationSettings},
  {title: 'Privacy', icon: 'mdi-eye-off', value: 3, component: PrivacySettings},
]

const isForward = computed(() => activeTab.value > prevTab.value)

const showSnackbar = () => {
  snackbar.value = true
}

const goBack = () => {
  router.push('/profile')
}

watch(activeTab, (newVal) => {
  prevTab.value = newVal
})
</script>

<style scoped>
.settings-page {
  min-height: 100vh;
  background-color: #F3F4F6;
}

.settings-container {
  max-width: 1000px;
  margin: 0 auto;
}

.settings-card {
  border-radius: 12px;
  background-color: white;
  transition: all 0.3s ease;
}

.v-tab {
  text-transform: none;
  font-weight: 500;
}
</style>
