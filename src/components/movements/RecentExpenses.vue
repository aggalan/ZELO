<template>
  <ItemList :items="foodExpenses" class="ma-2">
    <v-card-title>Comida</v-card-title>
  </ItemList>
</template>

<script setup>
import { ref } from 'vue'
import ItemList from "@/components/generalComponents/ItemList.vue";

const foodExpenses = ref([
  { name: 'McDonalds', description: '10,000', time: 'Hoy',icon: 'mdi-food' },
  { name: 'Atuel Cafe', description: '5,000', time: 'Ayer',icon: 'mdi-food' },
])
</script>

<style scoped>
.v-list-item__avatar {
  background-color: #EDE9FE;
}
.v-btn {
  text-transform: none;
}
</style>
