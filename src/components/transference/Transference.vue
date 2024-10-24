<script setup lang="ts">
import { ref } from 'vue'

import ActionButton from "@/components/generalComponents/ActionButton.vue";
import RecentTransactions from "@/components/dashboard/RecentTransactions.vue";
import { useRouter } from 'vue-router'
import ContactsList from "@/components/transference/ContactsList.vue";
import { useUsersStore } from "@/store/usersStore";

const router = useRouter()

const transferOptions = ref([
  { title: 'CBU, CVU O ALIAS', color: 'grey-darken-2' },
  { title: 'CONTACTOS', color: 'grey-darken-2' },
  { title: 'CANCELAR', color: 'deep-purple' }
])



const frequentContacts = useUsersStore().getContacts()

const selectTransferOption = (option) => {
  if(option.title === 'CONTACTOS') {
    router.push({path: '/transference/contacts'});
  } else if(option.title === 'CBU, CVU O ALIAS') {
    router.push({path: '/transference/cbu'});
  } else {
    console.log('Cancelling transfer')
    router.push({path: '/dashboard'});
  }
}
</script>

<template>

  <v-container fluid class="bg-white pa-4">
    <h1 class="text-h4 mb-6 mt-6 ml-2">Transferencias</h1>

        <v-row class="mb-6">
          <v-col v-for="option in transferOptions" :key="option.title" cols="12" sm="4">
            <v-btn
              :color="option.color"
              block
              height="64"
              class="text-none text-subtitle-1 font-weight-bold rounded-lg"
              elevation="2"
              @click="selectTransferOption(option)"
            >
              {{ option.title }}
              <v-icon end>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <ContactsList :contacts="frequentContacts">
              <v-card-title class="text-h6 font-weight-bold pa-4">Frecuentes</v-card-title>
            </ContactsList>
          </v-col>
        </v-row>
      </v-container>
    </template>
