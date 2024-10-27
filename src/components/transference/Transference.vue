<template>
  <v-container fluid class="bg-white pa-4">
    <v-container color="#Ffffff" fluid class="d-flex flex-column">
      <v-btn
        icon
        @click="goBack"
      >
        <v-icon color="#8B5CF6">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
    </v-container>

    <v-container fluid class="d-flex align-center justify-center w-100">
      <v-row justify="center" class="d-flex flex-column justify-center align-center w-100">
        <v-col cols="12" md="10" lg="8" class="w-100">
          <v-container class="center-modal ma-0 pa-0">
            <h1 class=" text-h4 mb-6 mt-6">Transferencias</h1>
          </v-container>
          <v-card class="pa-4 center-modal">
            <v-card class="mb-6 rounded-lg" flat>
              <v-card-text class="pa-0">
                <v-row justify="center" class="mb-4">
                  <v-col class ="text-white" v-for="option in transferOptions" :key="option.title" cols="12" sm="4">
                    <ActionButton
                      :color="option.color"
                      block
                      height="48"
                      class="text-body-1 font-weight-medium"
                      variant="flat"
                      rounded
                      @click="selectTransferOption(option)"
                    >
                      {{ option.title }}
                    </ActionButton>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <v-card class="mb-6 rounded-0" flat>
              <v-card-title class="text-h6 font-weight-medium pa-4">
                Repetir transferencias
              </v-card-title>
              <v-card-text class="pa-0">
                <v-list>
                  <v-list-item v-for="transfer in recentTransfers" :key="transfer.id" class="py-2">
                    <template v-slot:prepend>
                      <v-avatar :color="transfer.color" size="40">
                        <v-icon class="text-subtitle-2 white--text">{{ transfer.icon }}</v-icon>
                      </v-avatar>
                    </template>
                    <v-list-item-title class="text-body-1">{{ transfer.to }}</v-list-item-title>
                    <v-list-item-subtitle class="text-body-2">${{ transfer.amount }} - {{ transfer.time }}</v-list-item-subtitle>
                    <template v-slot:append>
                      <ActionButton
                        icon
                        @click.stop="repeatTransfer(transfer)"
                      >
                        <v-icon>mdi-repeat</v-icon>
                      </ActionButton>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>

            <v-card class="rounded-0" flat>
              <v-card-text class="pa-0">
                <ContactsList :contacts="frequentContacts">
                  <v-card-title class="text-h6 font-weight-bold pa-4">Frecuentes</v-card-title>
                </ContactsList>
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref,computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from '@/store/usersStore'
import ContactsList from "@/components/transference/ContactsList.vue";
import { useTransactionsStore } from "@/store/transactionStore";
import TransferForm from "@/components/transference/TransferForm.vue";
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const router = useRouter()
const usersStore = useUsersStore()

const transferOptions = ref([
  { title: 'CBU, CVU O ALIAS', color: "var(--primary)" },
  { title: 'CONTACTOS', color: "var(--primary)" },
  { title: 'CANCELAR', color: "var(--on-surface-light)" }
])

const recentTransfers = useTransactionsStore().getPaymentsByUserId

const frequentContacts = useUsersStore().getContacts()

const repeatedTransfer = ref(null)

const selectTransferOption = (option) => {
  switch (option.title) {
    case 'CONTACTOS':
      router.push({ path: '/transference/contacts' })
      break
    case 'CBU, CVU O ALIAS':
      router.push({ path: '/transference/cbu' })
      break
    default:
      console.log('Cancelling transfer')
      router.push({ path: '/dashboard' })
  }
}

const repeatTransfer = (transfer) => {
  repeatedTransfer.value = transfer

  router.push({path: '/transference/cbu', query: { cbu: transfer.cbu, amount: transfer.amount }})
}

const selectContact = (contact) => {
  console.log('Selected contact:', contact.name)

}

const goBack = () => {
  router.back();
}
</script>

<style scoped>
.v-btn {
  text-transform: none !important;
  letter-spacing: normal !important;
}

.center-modal {
  max-width: 900px;
}

.content-container {
  margin-top: 50px; /* Adjust this value to move the content lower */
}
</style>
