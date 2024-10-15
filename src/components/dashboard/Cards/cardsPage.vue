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
            class="  d-flex flex-column  "
            sm="6"
            md="4"
          >
            <v-sheet class="overflow-x-auto  d-inline-block w-100">
              <div class=" background-cards py-4">
                <v-card
                  width="420"
                  class="flex-shrink-0 rounded-xl"
                  height="250"
                  :color="card.color"
                  elevation="2"
                >
                  <v-card-text class="h-100 d-flex flex-column justify-space-around">
                    <div class="d-flex justify-space-between align-center mb-6">
                      <div class="text-h4 font-weight-bold white--text">
                        {{ card.bank }}
                      </div>
                      <v-img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
                        max-width="70"
                        contain
                      ></v-img>
                    </div>
                    <div class="d-flex flex-row justify-space-between">
                      <div class="text-subtitle-1 white--text mb-2">
                        {{ maskCardNumber(card.number) }}
                      </div>
                      <div class="text-caption white--text">
                        {{ card.expiry }}
                      </div>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </v-sheet>

            <v-sheet class="d-inline-block background-cards" width="420">
              <v-card-title class="d-flex text-black justify-space-between align-center my-2">
                Información
                <v-icon>mdi-pencil</v-icon>
              </v-card-title>
              <v-card-text>
                <v-container class="bg-grey-lighten-4 d-flex flex-column p-0 rounded-lg">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <div class="static-text">
                        <strong>Nombre en tarjeta</strong><br>
                        {{ card.name }}
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <div class="static-text">
                        <strong>Número de tarjeta</strong><br> {{ card.number }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <div class="static-text">
                        <strong>CVV</strong><br>***
                      </div>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <div class="static-text">
                        <strong>Válido hasta</strong><br> {{ card.expiry }}
                      </div>
                    </v-col>
                  </v-row>



                </v-container>
              </v-card-text>
              <v-card-actions class=" justify-center">
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

interface CreditCard {
  id: number
  bank: string
  number: string
  expiry: string
  name: string
  color: string
}

const cards = ref<CreditCard[]>([
  {
    id: 1,
    bank: 'Brubank',
    number: '1234567890123456',
    expiry: '09/25',
    name: 'Jose Benegas',
    color: 'deep-purple'
  },
  {
    id: 2,
    bank: 'Galicia',
    number: '9876543210987654',
    expiry: '12/24',
    name: 'Jose Benegas',
    color: 'red darken-1'
  },
  {
    id: 4,
    bank: 'Galicia',
    number: '9876543210987654',
    expiry: '12/24',
    name: 'Jose Benegas',
    color: 'red darken-1'
  },
{
    id: 6,
    bank: 'Galicia',
    number: '9876543210987654',
    expiry: '12/24',
    name: 'Jose Benegas',
    color: 'red darken-1'
  },

  {
    id: 3,
    bank: 'Galicia',
    number: '9876543210987654',
    expiry: '12/24',
    name: 'Jose Benegas',
    color: 'red darken-1'
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
  overflow-x: auto; /* Allow horizontal scrolling */
  white-space: nowrap; /* Prevent wrapping of cards */
  padding-bottom: 10px; /* Optional: Add padding for better visibility */
  scrollbar-color: transparent transparent; /* Hide scrollbar */
}

.scroll-container {
  display: inline-flex; /* Align items horizontally */
  gap: 16px; /* Space between cards */
}


.remove-card-btn {
  border-radius: 20px;
  background-color: #49475A;
}

.v-card:hover {
  transform: translateY(-5px);
}
</style>
