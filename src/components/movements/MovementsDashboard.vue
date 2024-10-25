<template>
  <v-container fluid class="bg-white">
    <h1 class="text-h4 mb-6 mt-6 ml-2">Movimientos</h1>
    <v-row>
      <v-col cols="12" md="8">
        <RecentTransactions class = "mt-4" title="Tu actividad" >
          <template v-slot:search>
            <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              label="Buscar"
              single-line
              hide-details
              filled
              rounded
              dense
              class="custom-text-field"
            ></v-text-field>
          </template>
        </RecentTransactions>
      </v-col>
      <v-col cols="12" md="4" class="mb-600000">
        <RecentFoodExpenses />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import RecentFoodExpenses from '@/components/movements/RecentExpenses.vue'
import RecentTransactions from "@/components/dashboard/RecentTransactions.vue";
import { ref } from "vue";

const search = ref('');
</script>

<style scoped>
.custom-text-field :deep(.v-field__outline) {
  display: none;
}
</style>
