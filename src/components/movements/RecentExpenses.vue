<template>
    <ItemList :items="filteredExpenses" class="my-card pa-2">
      <v-select
        v-model="selectedCategory"
        :items="categories"
        item-title="name"
        item-value="name"
        return-object
        class="ma-2 custom-text-field"
        rounded
      ></v-select>
      <v-card-title>{{ selectedCategory.name }}</v-card-title>
    </ItemList>
</template>

<script setup>
import { ref, computed } from 'vue'
import ItemList from "@/components/generalComponents/ItemList.vue";
import {useTransactionsStore} from "@/store/transactionStore";

const categories = ref([
  {name: 'Comida', icon: 'mdi-food'},
  {name: 'Transporte', icon: 'mdi-car'},
  {name: 'Ocio', icon: 'mdi-gamepad-variant'},
  {name: 'Servicios', icon: 'mdi-lightning-bolt'},
])
const transactionsStore = useTransactionsStore()
const foodExpenses = transactionsStore.getTransactionsByUserId()

const selectedCategory = ref(categories.value[0])

const filteredExpenses = computed(() => {
  return foodExpenses.filter(expense => expense.category === selectedCategory.value.name)
})

</script>

<style scoped>
.v-list-item__avatar {
  background-color: #EDE9FE;
}

.custom-text-field :deep(.v-field__outline) {
  display: none;
}

.v-btn {
  text-transform: none;
}
</style>
