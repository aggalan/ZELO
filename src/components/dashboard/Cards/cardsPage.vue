<template>
  <v-container fluid class="main background-cards h-100">
    <v-container fluid class="pa-10">
      <v-row class="mb-6 d-flex flex-row" align="center">
        <v-col cols="12" sm="6" class="d-flex flex-row">
          <h1 class="text-h4 text-black mr-4">Tarjetas</h1>
          <v-btn color="transparent" height="40" class="text-black" elevation="0" style="border: 1px darkgrey solid; border-radius: 16px;">
            Agregar tarjeta +
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="horizontal-scroll">
        <div class="scroll-container w-100">
          <v-col
            v-for="card in cards"
            :key="card.id"
            :cols="12"
            class="d-flex flex-column mx-3"
            sm="6"
            md="4"
          >
            <v-sheet class="d-inline-block w-100 background-cards">
              <div class="background-cards py-4">
                <v-card
                  width="420"
                  class="flex-shrink-0 rounded-xl"
                  height="250"
                  :color="card.color"
                  elevation="2"
                >
                  <v-card-text class="h-100 d-flex flex-column justify-space-between pa-6">
                    <div class="d-flex justify-space-between align-center">
                      <div class="text-h5 font-weight-bold white--text">
                        {{ card.bank }}
                      </div>
                      <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                        max-width="70"
                        contain
                      ></v-img>
                    </div>
                    <div class="text-h6 white--text">
                      {{  card.viewInfo ? formatCardNumber(card.number) :  maskCardNumber(card.number) }}
                    </div>
                    <div class="d-flex justify-space-between align-center">
                      <div>
                        <div class="text-caption white--text mb-1">NOMBRE EN TARJETA</div>
                        <div class="text-body-2 white--text">{{ card.name }}</div>
                      </div>
                      <div>
                        <div class="text-caption white--text mb-1">VENCIMIENTO</div>
                        <div class="text-body-2 white--text">{{ card.expiry }}</div>
                      </div>
                      <div>
                        <div class="text-caption white--text mb-1">CVV</div>
                        <div class="text-body-2 white--text">{{ card.viewInfo ? card.cvv : '***' }}</div>
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-sheet>

            <v-sheet class="d-inline-block background-cards" width="420">
              <v-card-title class="d-flex text-black justify-center align-center my-2">
                <v-icon @click="toggleViewInfo(card.id)">{{ card.icon }}</v-icon>
              </v-card-title>
              <v-card-actions class="justify-center">
                <v-btn
                  height="50"
                  @click="removeCard(card.id)"
                  class="remove-card-btn text-white px-5"
                >
                  Remover Tarjeta
                </v-btn>
              </v-card-actions>
            </v-sheet>
          </v-col>
        </div>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const toggleViewInfo = (id: number) => {
  cards.value = cards.value.map(c => {
    if (c.id === id) {
      return { ...c, viewInfo: !c.viewInfo, icon: c.viewInfo ? 'mdi-eye-closed' : 'mdi-eye' };
    }
    return c;
  });
};

interface CreditCard {
  id: number
  bank: string
  number: string
  expiry: string
  cvv: number
  name: string
  color: string
  icon: string
  viewInfo: boolean
}
const formatCardNumber = (number: string): string => {
  return number.replace(/(\d{4})/g, '$1 ').trim();
};

const cards = ref<CreditCard[]>([
  {
    id: 1,
    bank: 'Brubank',
    number: '1234567890123456',
    expiry: '09/25',
    name: 'Jose Benegas',
    color: 'deep-purple',
    cvv: 123,
    viewInfo: false,
    icon: 'mdi-eye-closed'
  },
  {
    id: 2,
    bank: 'Galicia',
    number: '9876543210987654',
    expiry: '12/24',
    name: 'Jose Benegas',
    color: 'red darken-1',
    cvv: 234,
    viewInfo: false,
    icon: 'mdi-eye-closed'
  },
  {
    id: 4,
    bank: 'Galicia',
    number: '9876543210987654',
    expiry: '12/24',
    name: 'Jose Benegas',
    color: 'green darken-1',
    cvv: 345,
    viewInfo: false,
    icon: 'mdi-eye-closed'
  },
  {
    id: 6,
    bank: 'Galicia',
    number: '9876543210987654',
    expiry: '12/24',
    name: 'Jose Benegas',
    color: 'red darken-1',
    cvv: 456,
    viewInfo: false,
    icon: 'mdi-eye-closed'
  },
  {
    id: 3,
    bank: 'Galicia',
    number: '9876543210987654',
    expiry: '12/24',
    name: 'Jose Benegas',
    color: 'red darken-1',
    cvv: 567,
    viewInfo: false,
    icon: 'mdi-eye-closed'
  }
])

const maskCardNumber = (number: string): string => {
  return '**** **** **** ' + number.slice(-4)
}

const removeCard = (id: number) => {
  cards.value = cards.value.filter(card => card.id !== id)
}
</script>

<style scoped>
.v-card {
  transition: transform 0.3s;
}
.card-info {
  background-color: white;
  display: inline-block;
}

.main-cards {
  background-color: #f9f9f9;
}

.background-cards {
  background-color: #f9f9f9;
}

.horizontal-scroll {
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;
  scrollbar-color: transparent transparent;
}

.scroll-container {
  display: inline-flex;
  gap: 16px;
}

.remove-card-btn {
  border-radius: 20px;
  background-color: #49475A;
}

.v-card:hover {
  transform: translateY(-5px);
}
</style>
