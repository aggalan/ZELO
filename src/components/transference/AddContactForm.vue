<template>
  <v-card class="my-card">
    <v-card-title>Agregar nuevo contacto</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="addContact">
        <v-text-field
          v-model="newContact.name"
          label="Nombre"
          required
        ></v-text-field>
        <v-text-field
          v-model="newContact.email"
          label="Email"
          type="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="newContact.phone"
          label="Teléfono"
          type="tel"
        ></v-text-field>
        <v-text-field
          v-model="newContact.cbu"
          label="CBU/Alias"
          required
        ></v-text-field>
        <ActionButton
          dark
          type="submit"
          block
        >
          Agregar contacto
        </ActionButton>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import {useUsersStore} from "@/store/usersStore";

const newContact = ref({
  name: '',
  email: '',
  phone: '',
  cbu: ''
})

const addContact = () => {
  // Handle adding new contact
  useUsersStore().addContact(newContact.value)
  // Reset form after submission
  newContact.value = { name: '', email: '', phone: '', cbu: '' }

}
</script>
