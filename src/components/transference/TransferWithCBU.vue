<template>
  <v-container fluid class="pa-6 w-100">
    <h1 class="text-h4 mb-6">Transferencias</h1>
    <v-row>
      <v-col cols="12" lg="8" md="8" sm="12">
        <TransferForm :cbu-alias="cbu" :amount="amount" class="transfer-form" />
      </v-col>
      <v-col cols="12" lg="4" md="4" sm="12">
        <ContactsList class="contacts-list" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TransferForm from './TransferForm.vue'
import ContactsList from './ContactsList.vue'

const route = useRoute()
const router = useRouter()

const cbu = ref('')
const amount = ref('')

onMounted(() => {
  cbu.value = route.query.cbu || ''
  amount.value = route.query.amount || ''
})

const goToTransference = () => {
  router.push({ path: '/transference' })
}
</script>

<style scoped>
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
}

.transfer-form {
  max-width: 100%;
  margin: 0 auto;
}

.contacts-list {
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

@media (max-width: 959px) {
  .contacts-list {
    max-height: 400px;
  }
}
</style>
