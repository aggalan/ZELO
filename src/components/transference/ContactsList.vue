<template>
  <v-card class="my-card">
    <slot/>
    <v-card-text class="pa-4">
      <v-text-field
        v-model="search"
        prepend-inner-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
        class="mb-4 rounded-pill"
        bg-color="white"
        density="comfortable"
      ></v-text-field>
      <v-list class="rounded-lg bg-grey-lighten-4">
        <v-list-item v-for="contact in filteredContacts" :key="contact.name" class="py-2">
          <template v-slot:prepend>
            <v-avatar :color="contact.color || 'grey-lighten-2'" size="40">
              <span class="text-h6 white--text">{{ contact.avatar }}</span>
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-medium">{{ contact.name }}</v-list-item-title>
          <template v-slot:append>
            <ActionButton @click="completeTransfer(contact)" customClass="text-none px-6">Transferir</ActionButton>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
  <v-dialog v-model="showDialog" max-width="500">
    <TransferForm @cancel="showDialog=false" :cbu-alias="currentContactCbu"/>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue"
import TransferForm from "@/components/transference/TransferForm.vue";

const props = defineProps({
  contacts: { type: Array, default: () => [] }
})
const currentContactCbu = ref(null)
const showDialog = ref(false)

const completeTransfer = (contact) => {
  currentContactCbu.value = contact.cbu
  showDialog.value = true
}

const search = ref('')

const filteredContacts = computed(() => {
  return props.contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>
