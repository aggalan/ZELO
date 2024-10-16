<template>
      <v-container fluid class="bg-white">
        <h1 class="text-h4 mb-6">Movimientos</h1>
        <v-row>
          <v-col cols="12" md="8">

            <RecentTransactions>
              <v-text-field
                hide-details
                prepend-icon="mdi-magnify"
                placeholder="Buscar"
                v-model="searchQuery"
                class="custom-search-field text-black rounded-xl"
                clearable
              ></v-text-field>
              <v-card-title class="text-grey-darken-3">Tu actividad reciente</v-card-title>
            </RecentTransactions>
          </v-col>
          <v-col cols="12" md="4">
            <Analytics />
            <RecentFoodExpenses />
          </v-col>
        </v-row>
      </v-container>
</template>

<script setup>
import Analytics from '@/components/movements/Analytics.vue'
import RecentFoodExpenses from '@/components/movements/RecentExpenses.vue'
import RecentTransactions from "@/components/dashboard/RecentTransactions.vue";
import {ref} from "vue";

const searchQuery = ref('');
</script>

<style>

</style>
