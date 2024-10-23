<template>
  <v-card class="analytics-card pa-4 mx-auto">
    <v-card-title class="text-h5 font-weight-bold mb-2">Analiticas</v-card-title>
    <v-card-text>
      <v-row justify="center" align="center" class="mb-4">
        <v-progress-circular
          :rotate="270"
          :size="150"
          :width="15"
          :model-value="13"
          color="#8B5CF6"
        >
          13%
        </v-progress-circular>
      </v-row>
      <v-row class="mb-4">
        <v-col cols="12">
          <div class="text-subtitle-1 mb-1">Total Gastado</div>
          <div class="text-h4 font-weight-bold">$50.000</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-chip
            v-for="category in categories"
            :key="category.name"
            :color="category.color"
            class="mr-2 mb-2"
            label
            text-color="white"
          >
            <v-icon start :icon="category.icon"></v-icon>
            {{ category.name }}
          </v-chip>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const categories = ref([
  { name: 'Comida', icon: 'mdi-food', color: '#F472B6' },
  { name: 'Transporte', icon: 'mdi-car', color: '#8B5CF6' },
  { name: 'Ocio', icon: 'mdi-gamepad-variant', color: '#60A5FA' },
  { name: 'Servicios', icon: 'mdi-lightning-bolt', color: '#34D399' },
])
</script>

<style scoped>
.analytics-card {
  max-width: 800px;
  margin: auto;
  background-color: #f3f4f6;
  border-radius: 8px;
}

.v-progress-circular {
  font-weight: bold;
}

.v-chip {
  font-weight: 500;
}
</style>
