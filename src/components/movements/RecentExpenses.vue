<template>
  <ItemList :items="limitedItems" class="my-card pa-2">
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
import {ref, computed} from 'vue'
import ItemList from "@/components/generalComponents/ItemList.vue";
import {useTransactionsStore} from "@/store/transactionStore";
import {useInvestmentsStore} from "@/store/investmentStore";
import {useUsersStore} from "@/store/usersStore";

const categories = ref([
  {name: 'Comida', icon: 'mdi-food'},
  {name: 'Transporte', icon: 'mdi-car'},
  {name: 'Ocio', icon: 'mdi-gamepad-variant'},
  {name: 'Servicios', icon: 'mdi-lightning-bolt'},
  {name: 'Inversiones', icon: 'mdi-cash'},
])

const transactionsStore = useTransactionsStore()
const investmentsStore = useInvestmentsStore()
const userStore = useUsersStore()

const expenses = computed(() => transactionsStore.getTransactionsByUserId)
const investments = investmentsStore.getInvestmentsByUserId(userStore.userId)

const selectedCategory = ref(categories.value[0])

const filteredItems = computed(() => {
  if (selectedCategory.value.name === 'Inversiones') {
    return investments.value.map(investment => ({
      ...investment,
      category: 'Inversiones',
      to: investment.name,
      amount: investment.amount,
      type: 'inversión'
    }))
  } else {
    return expenses.value.filter(expense => expense.category === selectedCategory.value.name)
  }
})

const limitedItems = computed(() => {
  return filteredItems.value.slice(0, 5)
})

</script>

<style scoped>
.v-list-item__avatar {
  background-color: #EDE9FE;
}

.custom-text-field :deep(.v-field__outline) {
  display: none;
}
</style>
