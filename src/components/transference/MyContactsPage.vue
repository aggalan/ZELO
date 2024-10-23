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
import {useUsersStore} from "@/store/usersStore";
import {ref} from "vue";
const myContacts = useUsersStore().getContacts()

</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
}
</style>
