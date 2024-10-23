<template>
  <v-card class="rounded-lg bg-grey-lighten-4">
    <slot/>
    <v-card-text class="pa-4">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
        class="mb-4 rounded-pill"
        bg-color="white"
        density="comfortable"
      ></v-text-field>
      <v-list class="rounded-lg bg-grey-lighten-4">
        <v-list-item v-for="contact in contacts" :key="contact.name" class="py-2">
          <template v-slot:prepend>
            <v-avatar :color="contact.color || 'grey-lighten-2'" size="40">
              <span class="text-h6 white--text">{{ contact.avatar }}</span>
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-medium">{{ contact.name }}</v-list-item-title>
          <template v-slot:append>
            <ActionButton  customClass="text-none px-6">Transferir</ActionButton>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
const props = defineProps({
  contacts: { type: Array, default: [] }
})

const search = ref('')


const filteredContacts = computed(() => {
  return contacts.value.filter(contact =>
    contact.name.toLowerCase().includes(search.value.toLowerCase())
  )
})

const completeTransfer = (contact) => {
  // Handle completing transfer with contact
  console.log('Completing transfer for:', contact.name)
}
</script>
