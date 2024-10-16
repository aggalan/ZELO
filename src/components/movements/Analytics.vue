<template>
  <v-card class="mb-4">
    <v-card-title>Analíticas</v-card-title>
    <v-card-text>
      <v-row align="center" justify="center">
        <v-col cols="6">
          <v-progress-circular
            :rotate="360"
            :size="150"
            :width="15"
            :value="13"
            color="#8B5CF6"
          >
            13%
          </v-progress-circular>
        </v-col>
        <v-col cols="6">
          <div class="text-h6 mb-2">Total Gastado</div>
          <div class="text-h4 font-weight-bold">$50.000</div>
          <v-list dense>
            <v-list-item v-for="(category, index) in categories" :key="index">
              <v-list-item-icon>
                <v-icon :color="category.color">{{ category.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ category.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
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
