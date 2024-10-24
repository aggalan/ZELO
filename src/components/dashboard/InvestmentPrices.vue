<template>
  <v-card class="investment-prices-card">
    <v-card-title class="text-grey-darken-3">Precios de Inversiones</v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="(inv, i) in investments" :key="i" cols="12" sm="6">
          <v-card flat class="pa-2">
            <div class="d-flex align-center">
              <v-icon :color="inv.iconColor" size="36" class="mr-3">{{ inv.icon }}</v-icon>
              <div>
                <div class="text-subtitle-1 font-weight-medium">{{ inv.name }}</div>
                <div class="text-caption text-grey">{{ inv.symbol }}</div>
              </div>
              <v-spacer></v-spacer>
              <div class="text-right">
                <div class="text-subtitle-1 font-weight-medium">${{ inv.price }}</div>
                <v-sparkline
                  :value="inv.trend"
                  :color="inv.trendColor"
                  height="20"
                  width="60"
                  stroke-linecap="round"
                ></v-sparkline>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const investments = ref([
  { name: 'Ethereum', symbol: 'ETH', price: '503.12', trend: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0], trendColor: '#4CAF50', icon: 'mdi-ethereum', iconColor: '#627EEA' },
  { name: 'Bitcoin', symbol: 'BTC', price: '26927', trend: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0], trendColor: '#F44336', icon: 'mdi-bitcoin', iconColor: '#F7931A' },
  { name: 'Ripple', symbol: 'XRP', price: '4637', trend: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0], trendColor: '#4CAF50', icon: 'mdi-currency-xrp', iconColor: '#23292F' },
  { name: 'Litecoin', symbol: 'LTC', price: '6927', trend: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0], trendColor: '#4CAF50', icon: 'mdi-litecoin', iconColor: '#345D9D' },
])
</script>

<style scoped>
.investment-prices-card {
  background-color: #f3f4f6;
}
.v-sparkline {
  margin-top: -10px;
}
</style>
