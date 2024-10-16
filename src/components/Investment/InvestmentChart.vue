<template class="d-flex">
  <v-card class="mb-4 my-card align-center">
    <v-card-text class="align-center">
      <v-row class="d-flex align-center mb-2">
        <v-col cols="12" md="1"><v-icon left color="#F7931A">mdi-bitcoin</v-icon>
        </v-col>
        <v-col cols="12" md="2">
          <span class="text-h6 mr-2">Bitcoin</span>
        </v-col>
        <v-col md="4">
          <v-sparkline
          :model-value="bitcoinTrend"
          :gradient="['#FF5252']"
          :smooth="true"
          stroke-linecap="round"
          padding="8"
          line-width="3"
          auto-draw
        ></v-sparkline></v-col>
        <v-col md="2">  <span class="text-subtitle-1 grey--text">0.45 BTC</span>
        </v-col>
        <v-col md="2">
          <span class="text-h6">${{ bitcoinPrice }}</span>
        </v-col>

      </v-row>

    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const bitcoinPrice = ref('26927')
const bitcoinTrend = ref([8,9,7,8,9,6,7,8,5,7,8,9,7,6,7])
</script>

<style scoped>
</style>
