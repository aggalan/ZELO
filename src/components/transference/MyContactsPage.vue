<template>
      <v-container fluid class=" pa-6">
        <h1 class="text-h4 mb-6">Mis contactos</h1>
        <v-row>
          <v-col cols="12" md="8">
            <ContactsList :contacts="myContacts">
              <v-card-title >Mis contactos</v-card-title>
            </ContactsList>
          </v-col>
          <v-col cols="12" md="4">
            <AddContactForm />
          </v-col>
        </v-row>
      </v-container>

</template>

<script setup>

import ContactsList from './ContactsList.vue'
import AddContactForm from './AddContactForm.vue'
import {ref} from "vue";
const myContacts = ref([
  { id: 1, name: 'Jose', initials: 'J', color: '#8B5CF6' },
  { id: 2, name: 'Martin', initials: 'M', color: '#8B5CF6' },
  { id: 3, name: 'Miguel', initials: 'M', color: '#8B5CF6' },
  { id: 4, name: 'Juan', initials: 'J', color: '#8B5CF6' },
])

</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
}
</style>
