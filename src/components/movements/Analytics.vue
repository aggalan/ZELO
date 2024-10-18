<template>
  <ItemList :items="categories"  class="ma-2 " >
    <v-card-title >Gastos el último mes</v-card-title>
    <v-card-text>
      <v-row class="justify-space-around ma-1">
        <v-progress-circular
          rotate="270"
          size="150"
          width="15"
          model-value="13"
          bg-color="#E5E7EB"
          color="#8B5CF6"
        >
          13%
        </v-progress-circular>
      </v-row>
      <v-row >
        <v-col>
          <div class="text-h8 mb-2">Total Gastado</div>
          <div class="text-h4 font-weight-bold">$50.000</div>
        </v-col>
      </v-row>
    </v-card-text></ItemList>

</template>

<script setup>
import { ref } from 'vue'
import ItemList from "@/components/generalComponents/ItemList.vue";

const categories = ref([
  { name: 'Comida', icon: 'mdi-food', color: '#F472B6' },
  { name: 'Transporte', icon: 'mdi-car', color: '#8B5CF6' },
  { name: 'Ocio', icon: 'mdi-gamepad-variant', color: '#60A5FA' },
  { name: 'Servicios', icon: 'mdi-lightning-bolt', color: '#34D399' },
])
</script>
<style scoped>

.my-list {
  background-color: #f3f4f6;
}
</style>
