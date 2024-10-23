<template>
  <v-card>
    <v-card-title>Contactos</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
        outlined
        dense
      ></v-text-field>
      <v-list two-line>
        <v-list-item v-for="contact in filteredContacts" :key="contact.id">
          <v-list-item-avatar :color="contact.color">
            <span class="white--text text-h6">{{ contact.initials }}</span>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ contact.name }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn
              color="#8B5CF6"
              text
              @click="completeTransfer(contact)"
            >
              Completar
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const search = ref('')
const contacts = ref([
  { id: 1, name: 'Jose', initials: 'J', color: '#8B5CF6' },
  { id: 2, name: 'Martin', initials: 'M', color: '#8B5CF6' },
  { id: 3, name: 'Miguel', initials: 'M', color: '#8B5CF6' },
  { id: 4, name: 'Juan', initials: 'J', color: '#8B5CF6' },
])

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
