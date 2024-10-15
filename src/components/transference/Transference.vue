<script setup lang="ts">
import { ref } from 'vue'
import TopBarDashboard from '../TopBarDashboard.vue'
import SideBar from '../SideBar.vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const transferOptions = ref([
  { title: 'CBU, CVU O ALIAS', color: 'grey-darken-2' },
  { title: 'CONTACTOS', color: 'grey-darken-2' },
  { title: 'CANCELAR', color: 'deep-purple' }
])

const transferHistory = ref([
  { name: 'Jose', amount: 10000, time: 'Ahora' },
  { name: 'Fran', amount: 8000, time: '3h' },
  { name: 'Miguel', amount: 3000, time: '6h' }
])

const frequentContacts = ref([
  { name: 'Jose', avatar: 'J' },
  { name: 'Martin', avatar: 'M', color: 'deep-purple' },
  { name: 'Miguel', avatar: 'M' },
  { name: 'Juan', avatar: 'J' }
])
</script>

<template>
  <v-app>
    <SideBar />
    <TopBarDashboard />
    <v-main class="bg-white">
      <v-container fluid class="pa-8">
        <h1 class="text-h4 font-weight-bold mb-6">Transferencias</h1>

        <v-row class="mb-6">
          <v-col v-for="option in transferOptions" :key="option.title" cols="12" sm="4">
            <v-btn
              :color="option.color"
              block
              height="64"
              class="text-none text-subtitle-1 font-weight-bold rounded-lg"
              elevation="2"
            >
              {{ option.title }}
              <v-icon end>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-card class="rounded-lg bg-grey-lighten-4">
              <v-card-title class="text-h6 font-weight-bold pa-4">Historial</v-card-title>
              <v-card-text class="pa-0">
                <v-list class="rounded-lg bg-grey-lighten-4">
                  <v-list-item v-for="transfer in transferHistory" :key="transfer.name" class="py-4">
                    <template v-slot:prepend>
                      <v-avatar color="grey-lighten-2" size="48">
                        <span class="text-h6">{{ transfer.name[0] }}</span>
                      </v-avatar>
                    </template>
                    <v-list-item-title class="font-weight-bold">{{ transfer.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      Te transfirió ${{ transfer.amount.toLocaleString() }}
                    </v-list-item-subtitle>
                    <template v-slot:append>
                      <v-chip color="deep-purple-lighten-4" size="small" class="font-weight-medium">{{ transfer.time }}</v-chip>
                      <v-btn color="deep-purple" variant="text" class="ml-2 text-none">Detalles</v-btn>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="rounded-lg bg-grey-lighten-4">
              <v-card-title class="text-h6 font-weight-bold pa-4">Frecuentes</v-card-title>
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
                  <v-list-item v-for="contact in frequentContacts" :key="contact.name" class="py-2">
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
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
.v-btn {
  text-transform: none;
  letter-spacing: 0.5px;
}

.v-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
}

:deep(.v-list-item__prepend) {
  padding-right: 16px;
}

:deep(.v-list-item__append) {
  padding-left: 16px;
}
</style>
