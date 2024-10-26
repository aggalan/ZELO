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
      <v-list class="rounded-lg">
        <v-list-item v-for="contact in filteredContacts" :key="contact.name" class="py-2">
          <template v-slot:prepend>
            <v-avatar :color="contact.color || 'grey-lighten-2'" size="40">
              <span class="text-h6 white--text">{{ contact.avatar }}</span>
            </v-avatar>
          </template>
          <v-list-item-title class="font-weight-medium">{{ contact.name }}</v-list-item-title>
          <template v-slot:append>
            <ActionButton @click="completeTransfer(contact)" customClass=" px-6">Transferir</ActionButton>
          </template>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue"
import TransferForm from "@/components/transference/TransferForm.vue";
import router from "@/router/router";

const props = defineProps({
  contacts: { type: Array, default: () => [] }
})

const completeTransfer = (contact) => {
  router.push({ path: '/transference/cbu', query: { cbu: contact.cbu } })
}

const search = ref('')

const filteredContacts = computed(() => {
  return props.contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>
