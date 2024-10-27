<template>
  <v-card class="transference-card pa-6">
    <h2 class="text-h5 font-weight-bold mb-6">Realizar Transferencia</h2>

    <v-form @submit.prevent="verifyAndShowConfirmationDialog" ref="form">
      <v-text-field
        v-model="cbuAlias"
        label="CBU / ALIAS"
        placeholder="Ingresar..."
        variant="outlined"
        class="mb-4"
        :rules="[v => !!v || 'CBU / ALIAS es requerido']"
      ></v-text-field>

      <v-text-field
        v-model="amount"
        label="Monto"
        placeholder="10,000"
        variant="outlined"
        type="number"
        prefix="$"
        class="mb-4"
        :rules="[
          v => !!v || 'Monto es requerido',
          v => (v && parseFloat(v) <= selectedPaymentMethod.balance || selectedPaymentMethod.id !== 'account') || 'Saldo insuficiente'
        ]"
      ></v-text-field>

      <v-text-field
        v-model="concept"
        label="Concepto"
        placeholder="Varios"
        variant="outlined"
        class="mb-6"
      ></v-text-field>

      <v-text-field
        v-model="category"
        label="Categoría"
        placeholder="Transferencia"
        variant="outlined"
        class="mb-6">
      </v-text-field>

      <div class="d-flex flex-wrap justify-space-between">
        <ActionButton
          class="flex-grow-1 mr-2 mb-2 py-6 d-flex align-center"
          type="submit"
          :disabled="!isFormValid"
        >
          Transferir
          <v-icon end icon="mdi-arrow-right"></v-icon>
        </ActionButton>

        <ActionButton
          color="var(--on-surface-light)"
          class="flex-grow-1 ml-2 mb-2 py-6 d-flex align-center text-white"
          @click="cancel"
        >
          Cancelar
        </ActionButton>
      </div>
    </v-form>

    <v-sheet class="mt-6">
      <h3 class="text-h6 font-weight-bold mb-4">Seleccionar método de pago</h3>
      <v-slide-group
        v-model:selected="selectedPaymentMethodId"
        class="pa-4 d-flex align-center"
        show-arrows
      >
        <v-slide-group-item
          v-for="method in paymentMethods"
          :key="method.id"
          :value="method.id"
        >
          <v-card
            :class="['payment-method-card', { 'selected': selectedPaymentMethodId === method.id }]"
            @click="selectedPaymentMethodId = method.id"
            :color="method.color"
          >
            <v-card-text :class="['d-flex flex-column justify-space-between h-100 pa-4', { 'white--text': method.id !== 'account' }]">
              <div class="d-flex justify-space-between align-center">
                <div class="text-h6 font-weight-bold">
                  {{ method.name }}
                </div>
                <v-icon :color="method.id === 'account' ? 'primary' : 'white'" size="24">
                  {{ method.icon }}
                </v-icon>
              </div>
              <div class="text-h5 mt-4">
                {{ method.id === 'account' ? `$${method.balance.toLocaleString()}` : formatCardNumber(method.number) }}
              </div>
              <div class="text-caption mt-2">
                {{ method.type }}
              </div>
            </v-card-text>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>

    <ConfirmationComponent
      v-model="showConfirmationDialog"
      :cbuAlias="cbuAlias"
      :amount="amount"
      :concept="concept"
      :category="category"
      :paymentMethod="selectedPaymentMethod.name"
      @confirm="confirmTransfer"
      @cancel="showConfirmationDialog = false"
    />
  </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBalanceStore } from "@/store/balanceStore"
import { useCardsStore } from "@/store/cardsStore"
import { useUsersStore } from "@/store/usersStore"
import ConfirmationComponent from "@/components/transference/ConfirmationComponent.vue"
import ActionButton from "@/components/generalComponents/ActionButton.vue"
import { grey } from "vuetify/util/colors"
import { useTransactionsStore } from "@/store/transactionStore"

const router = useRouter()
const balanceStore = useBalanceStore()
const cardsStore = useCardsStore()
const userStore = useUsersStore()

const cbuAlias = ref('')
const amount = ref('')
const concept = ref('')
const category = ref('')
const showConfirmationDialog = ref(false)
const form = ref(null)

const accountBalance = balanceStore.getBalanceByUserId(userStore.userId)
const userCards = cardsStore.getCardsByUserId(userStore.userId)

const paymentMethods = computed(() => [
  {
    id: 'account',
    name: 'Saldo en Cuenta',
    icon: 'mdi-bank',
    balance: accountBalance.value,
    type: 'Dinero Disponible',
    color: grey.lighten3
  },
  ...userCards.value.map(card => ({
    id: card.id,
    name: card.bank,
    icon: 'mdi-credit-card',
    balance: 500000,
    number: card.number,
    type: 'Tarjeta de Crédito',
    color: card.color
  }))
])

const selectedPaymentMethodId = ref(paymentMethods.value[0].id)

const selectedPaymentMethod = computed(() =>
  paymentMethods.value.find(method => method.id === selectedPaymentMethodId.value) || paymentMethods.value[0]
)

const isFormValid = computed(() => {
  if (!selectedPaymentMethod.value || !form.value || !cbuAlias.value) return false
  if (selectedPaymentMethod.value.id === 'account') {
    return form.value.validate() && balanceStore.canWithdraw(parseFloat(amount.value)) && amount.value > 0
  }
  return form.value.validate() && amount.value > 0
})

const props = defineProps({
  cbuAlias: {type: String},
  amount: {type: String},
  concept: {type: String},
})

onMounted(() => {
  if (props.cbuAlias) cbuAlias.value = props.cbuAlias
  if (props.amount) amount.value = props.amount
  if (props.concept) concept.value = props.concept
})

const cancel = () => router.back()
const transactions = useTransactionsStore()

const verifyAndShowConfirmationDialog = () => {
  if (isFormValid.value) {
    showConfirmationDialog.value = true
  }
}

const confirmTransfer = () => {
  if (!cbuAlias.value || !amount.value) return

  if (selectedPaymentMethod.value.id === 'account') {
    balanceStore.withdrawMoney(parseFloat(amount.value), {
      category: category.value || "transfer",
      concept: concept.value,
      cbu: cbuAlias.value,
      name: `Persona con CBU: ${cbuAlias.value}`},
    )
  } else {
    const parsedAmount = parseFloat(amount.value)
    transactions.addTransaction(userStore.userId, {
      type: 'pago',
      method: selectedPaymentMethod.value,
      amount: parsedAmount,
      creationTime: Date.now(),
      name: 'Persona con CBU: ' + cbuAlias.value,
      category: category.value || 'Tarjeta',
      cbu: cbuAlias.value,
      description: concept.value
    })

    console.log('Credit card payment:', {
      cardId: selectedPaymentMethod.value.id,
      amount: parsedAmount,
      to: {category: "transfer", concept: concept.value, cbu: cbuAlias.value}
    })
  }

  showConfirmationDialog.value = false
  cbuAlias.value = ''
  amount.value = ''
  concept.value = ''
  router.push('/transference')
}

const formatCardNumber = (number) => {
  return number ? `**** ${number.slice(-4)}` : ''
}
</script>

<style scoped>
.transference-card {
  max-width: 600px;
  margin: 0 auto;
  border-radius: 16px;
}

.payment-method-card {
  width: 280px;
  height: 160px;
  border-radius: 12px;
  transition: all 0.3s ease;
  margin: 0 8px;
}

.payment-method-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.payment-method-card.selected {
  border: 2px solid black;
  box-shadow: 0 0 0 2px;
}

@media (max-width: 600px) {
  .transference-card {
    padding: 16px;
  }

  .payment-method-card {
    width: 240px;
    height: 140px;
  }
}
</style>
