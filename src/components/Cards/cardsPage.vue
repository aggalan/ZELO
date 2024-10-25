<template>
  <v-container fluid class="main background-cards pa-4">
    <h1 class="text-h4 mb-6 mt-6 ml-2">Tarjetas</h1>
    <v-container fluid class="pa-10 ">
      <v-row class=" d-flex flex-row " align="center">
        <v-col cols="12" sm="6" class="d-flex flex-row ">
          <ActionButton @click="toggleDialog" height="40" elevation="0" class="aux">
            AGREGAR TARJETA +
          </ActionButton>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="500px" >
        <v-card class ="my-card">
          <v-card-title class="text-h5 grey lighten-2 d-flex justify-space-between">
            Agrega una tarjeta
            <v-icon @click="toggleDialog" class="bg-transparent" size="30">mdi-close</v-icon>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="addCard">
              <v-text-field
                v-model="newCard.number"
                label="Número"
                placeholder="**** **** **** 2534"
                required
              ></v-text-field>
              <v-text-field
                v-model="newCard.name"
                label="Nombre del titular"
                placeholder="Juan Perez"
                required
              ></v-text-field>
              <v-text-field
                v-model="newCard.expiry"
                label="Válido hasta"
                placeholder="02/27"
                maxlength="5"
                @input="formatDate"
                required
              ></v-text-field>
              <v-text-field
                v-model="newCard.cvv"
                label="CVV"
                placeholder="***"
                type="password"
                required
              ></v-text-field>
              <ActionButton
                class="white--text"
                block
                type="submit"
              >
                Añadir +
              </ActionButton>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-row class="horizontal-scroll">
        <div class="scroll-container w-100">
          <v-col
            v-for="card in cards"
            :key="card.id"
            :cols="12"
            class="d-flex flex-column cards"
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
                      {{ card.viewInfo ? formatCardNumber(card.number) : maskCardNumber(card.number) }}
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
                <ActionButton
                  height="50"
                  @click="removeCard(card.id)"
                  class="remove-card-btn text-white px-5"
                >
                  Remover Tarjeta
                </ActionButton>
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
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import {useCardsStore} from "@/store/cardsStore";
import {useUsersStore} from "@/store/usersStore";

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

const dialog = ref(false);
const newCard = ref({
  number: '',
  name: '',
  expiry: '',
  cvv: ''
});
const cardStore = useCardsStore();
const userStore = useUsersStore();
const cards = cardStore.getCardsByUserId(userStore.userId);

const toggleDialog = () => {
  dialog.value = !dialog.value;
};

const toggleViewInfo = (id: number) => {
  cardStore.toggleCardViewInfo(id)
};

const formatCardNumber = (number: string): string => {
  return number.replace(/(\d{4})/g, '$1 ').trim();
};

const formatDate = () => {
  // Obtener solo los dígitos del input
  const value = newCard.value.expiry.replace(/\D/g, '');

  // Verificar que el valor tenga un máximo de 6 caracteres (MMYYYY)
  if (value.length > 4) {
    return;
  }

  // Agregar el separador después de los dos primeros dígitos
  if (value.length > 2) {
    newCard.value.expiry = value.slice(0, 2) + '/' + value.slice(2, 4);
  } else {
    newCard.value.expiry = value; // Solo mostrar los dígitos ingresados
  }
};


const maskCardNumber = (number: string): string => {
  return '**** **** **** ' + number.slice(-4)
};

const removeCard = (id: number) => {
  cardStore.removeCard(id);
};

const addCard = () => {
  if (!newCard.value.number || !newCard.value.name || !newCard.value.expiry || !newCard.value.cvv) {
    alert('Todos los campos son obligatorios.');
    return;
  }

  const newCardData: CreditCard = {
    id: Date.now(),
    bank: 'New Bank', // You might want to add a field for bank in the form
    number: newCard.value.number,
    expiry: newCard.value.expiry,
    name: newCard.value.name,
    color: 'purple', // You might want to randomize this or let the user choose
    cvv: newCard.value.cvv,
    viewInfo: false,
    icon: 'mdi-eye-closed'
  };
  cardStore.addCard(userStore.userId, newCardData);
  dialog.value = false;
  // Reset the form
  newCard.value = { number: '', name: '', expiry: '', cvv: '' };
};
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
  background-color: #ffffff;
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

.cards {
  margin-right: calc(85vw - 100%);
}

.aux {
  margin-left: -30px;
}

.remove-card-btn {
  background-color: #49475A;
}
.v-card:hover {
  transform: translateY(-5px);
}
</style>
