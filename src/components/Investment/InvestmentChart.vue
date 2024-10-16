<template>
  <v-card class="mb-4">
    <v-card-text>
      <div class="d-flex align-center mb-2">
        <v-icon left color="#F7931A">mdi-bitcoin</v-icon>
        <span class="text-h6 mr-2">Bitcoin</span>
        <span class="text-subtitle-1 grey--text">0.45 BTC</span>
        <v-spacer></v-spacer>
        <span class="text-h6">${{ bitcoinPrice }}</span>
      </div>
      <v-sparkline
        :value="bitcoinTrend"
        :gradient="['#FF5252']"
        :smooth="10"
        stroke-linecap="round"
        padding="8"
        line-width="2"
        auto-draw
      ></v-sparkline>
      <div class="text-right red--text">-1%</div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const bitcoinPrice = ref('26927')
const bitcoinTrend = ref([8,9,7,8,9,6,7,8,5,7,8,9,7,6,7,8,9,8,7])
</script>
