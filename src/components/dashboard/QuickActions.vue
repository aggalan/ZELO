<template>
  <v-card class="mb-4 my-card">
    <v-row>
      <v-col
        v-for="(action, i) in quickActions"
        :key="i"
        cols="4"
        class="d-flex justify-center align-center"
      >
        <div class="d-flex flex-column justify-center align-center" style="height: 100%;">
          <v-btn
            block
            dark
            height="80"
            class="text-capitalize quick-action-btn"
          >
            <v-icon>{{ action.icon }}</v-icon>
            {{ action.text }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const quickActions = ref([
  { text: 'link de cobro', icon: 'mdi-link' },
  { text: 'Tus datos', icon: 'mdi-account' },
  { text: 'Añadir contacto', icon: 'mdi-account-plus' },
])
</script>

<style scoped>
.quick-action-btn {
  text-transform: none;
  font-size: 10px;
  border-radius: 12px;
  background-color: #8B5CF6;
  margin: 10px;
}

.quick-action-btn .v-icon {
  margin: 0 auto;
}

.my-card {
  margin-top: 20px;
  margin-bottom: 20px;
  background: #f3f4f6;
  border-radius: 12px;
  mso-border-shadow: yes;
  padding: 20px;
}
</style>
