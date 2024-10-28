<template>
  <v-container fluid class="main background-cards pa-4">
    <v-container class="ma-0 pa-0">
      <h1 class="text-h4 mb-6 mt-6 ml-2">Tarjetas</h1>
    </v-container>
    <v-container fluid class="pa-10 d-flex flex-column justify-center">
      <v-row class="d-flex flex-row mb-5" align="center">
        <v-col cols="12" sm="6" class="d-flex flex-row">
          <ActionButton v-if="cards.length !== 0" @click="toggleDialog" height="40" elevation="0" class="aux">
            AGREGAR TARJETA +
          </ActionButton>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog" max-width="500px">
        <v-card class="my-card">
          <v-card-title class="d-flex justify-space-between align-center pa-4">
            <span class="text-h5 font-weight-bold">Agrega una tarjeta</span>
            <v-btn icon @click="toggleDialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="addCard">
              <v-text-field
                v-model="newCard.number"
                label="Número"
                placeholder="**** **** **** 2534"
                required
              ></v-text-field>
              <errorMessageSignUpSignIn :visible="!!errorMessages.number" :message="errorMessages.number" />

              <v-text-field
                v-model="newCard.name"
                label="Nombre del titular"
                placeholder="Juan Perez"
                required
              ></v-text-field>
              <errorMessageSignUpSignIn :visible="!!errorMessages.name" :message="errorMessages.name" />

              <v-text-field
                v-model="newCard.expiry"
                label="Válido hasta"
                placeholder="02/27"
                maxlength="5"
                @input="formatDate"
                required
              ></v-text-field>
              <errorMessageSignUpSignIn :visible="!!errorMessages.expiry" :message="errorMessages.expiry" />

              <v-text-field
                v-model="newCard.cvv"
                label="CVV"
                placeholder="***"
                type="password"
                required
              ></v-text-field>
              <errorMessageSignUpSignIn :visible="!!errorMessages.cvv" :message="errorMessages.cvv" />

              <ActionButton class="white--text" block type="submit">
                Añadir +
              </ActionButton>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-row v-if="cards.length === 0" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-card class="text-center pa-6">
            <v-icon size="64" color="grey lighten-1" class="mb-4">mdi-credit-card-outline</v-icon>
            <h2 class="text-h5 font-weight-bold mb-2">No tienes tarjetas agregadas</h2>
            <p class="text-body-1 mb-4">Agrega una tarjeta para comenzar a gestionar tus pagos</p>
            <v-btn color="primary" @click="toggleDialog">
              Agregar Tarjeta
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-else class="horizontal-scroll">
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

<script>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import errorMessageSignUpSignIn from "@/components/SignUpAndSignIn/errorMessageSignUpSignIn.vue";
import { useCardsStore } from "@/store/cardsStore";
import { useUsersStore } from "@/store/usersStore";

export default {
  components: {
    ActionButton,
    errorMessageSignUpSignIn
  },
  setup() {
    const dialog = ref(false);
    const newCard = ref({
      number: '',
      name: '',
      expiry: '',
      cvv: ''
    });
    const errorMessages = ref({
      number: '',
      name: '',
      expiry: '',
      cvv: ''
    });
    const cardStore = useCardsStore();
    const userStore = useUsersStore();
    const cards = ref(cardStore.getCardsByUserId(userStore.userId));

    const toggleDialog = () => {
      dialog.value = !dialog.value;
    };

    const toggleViewInfo = (id) => {
      cardStore.toggleCardViewInfo(id);
    };

    const formatCardNumber = (number) => {
      return number.replace(/(\d{4})/g, '$1 ').trim();
    };

    const formatDate = () => {
      const value = newCard.value.expiry.replace(/\D/g, '');
      if(value.length <3){
        return;
      }
      if (value.length > 4) {
        return;
      }
      if (value.length > 2) {
        newCard.value.expiry = value.slice(0, 2) + '/' + value.slice(2, 4);
      } else {
        newCard.value.expiry = value;
      }
    };

    const maskCardNumber = (number) => {
      return '**** **** **** ' + number.slice(-4);
    };

    const removeCard = (id) => {
      cardStore.removeCard(id);
      cards.value = cardStore.getCardsByUserId(userStore.userId);
    };

    const isValidExpiryDate = (expiry) => {
      if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        return false;
      }
      const [month, year] = expiry.split('/').map(Number);
      if (month < 1 || month > 12) {
        return false;
      }
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        return false;
      }
      return true;
    };

    const addCard = () => {
      errorMessages.value = { number: '', name: '', expiry: '', cvv: '' };

      if (!newCard.value.number) {
        errorMessages.value.number = 'Número de tarjeta es requerido.';
      } else if (!/^\d{16}$/.test(newCard.value.number)) {
        errorMessages.value.number = 'El número de tarjeta debe tener 16 dígitos.';
      }

      if (!newCard.value.name) {
        errorMessages.value.name = 'Nombre del titular es requerido.';
      }

      if (!newCard.value.expiry) {
        errorMessages.value.expiry = 'Fecha de expiración es requerida.';
      } else if (!isValidExpiryDate(newCard.value.expiry)) {
        errorMessages.value.expiry = 'Fecha de expiración no es válida.';
      }

      if (!newCard.value.cvv) {
        errorMessages.value.cvv = 'CVV es requerido.';
      }

      if (Object.values(errorMessages.value).some(msg => msg)) {
        return;
      }

      const newCardData = {
        id: Date.now(),
        bank: 'New Bank',
        number: newCard.value.number,
        expiry: newCard.value.expiry,
        name: newCard.value.name,
        color: 'purple',
        cvv: newCard.value.cvv,
        viewInfo: false,
        icon: 'mdi-eye-closed'
      };
      cardStore.addCard(userStore.userId, newCardData);
      dialog.value = false;
      newCard.value = { number: '', name: '', expiry: '', cvv: '' };
      cards.value = cardStore.getCardsByUserId(userStore.userId);
    };

    return {
      dialog,
      newCard,
      cards,
      errorMessages,
      toggleDialog,
      toggleViewInfo,
      formatCardNumber,
      formatDate,
      maskCardNumber,
      removeCard,
      addCard
    };
  }
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

.background-cards {
  background-color: var(--background);
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
  background-color: var(--on-surface-light);
}
.v-card:hover {
  transform: translateY(-5px);
}
</style>
