<template>
  <ItemList :items="recentItems" class="my-card pa-2">
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
import { ref, computed, onMounted, watch } from 'vue'
import ItemList from "@/components/generalComponents/ItemList.vue";
import { useTransactionsStore } from "@/store/transactionStore";
import { useInvestmentsStore } from "@/store/investmentStore";
import { useUsersStore } from "@/store/usersStore";

const transactionsStore = useTransactionsStore()
const investmentsStore = useInvestmentsStore()
const userStore = useUsersStore()

const expenses = computed(() => transactionsStore.getTransactionsByUserId)
const investments = ref([])

const categories = ref([])
const selectedCategory = ref({ name: 'Todas', icon: 'mdi-view-list' })

const updateCategories = () => {
  const transactionCategories = [...new Set(expenses.value.map(expense => expense.category))]
    .map(category => ({ name: category, icon: getCategoryIcon(category) }))

  categories.value = [
    {name: 'Todas', icon: 'mdi-view-list'},
    ...transactionCategories,
    {name: 'Inversiones', icon: 'mdi-cash'}
  ]
}

onMounted(() => {
  const userInvestments = investmentsStore.getInvestmentsByUserId(userStore.userId)
  investments.value = Array.isArray(userInvestments) ? userInvestments : (userInvestments.value || [])
  updateCategories()
})

watch(expenses, () => {
  updateCategories()
})

const getCategoryIcon = (category) => {
  const icons = {
    'Comida': 'mdi-food',
    'Transporte': 'mdi-car',
    'Ocio': 'mdi-gamepad-variant',
    'Servicios': 'mdi-lightning-bolt',
    'Alquiler': 'mdi-home',
    'Ropa': 'mdi-hanger'
  }
  return icons[category] || 'mdi-cash'
}

const filteredItems = computed(() => {
  if (selectedCategory.value.name === 'Inversiones') {
    return investments.value.map(investment => ({
      ...investment,
      category: 'Inversiones',
      name: investment.name,
      amount: investment.amount,
      type: 'inversión',
      date: new Date(investment.id),
      description: `Inversión: ${investment.description}`,
      time: 'N/A'
    }))
  } else if (selectedCategory.value.name === 'Todas') {
    return [
      ...expenses.value,
      ...investments.value.map(investment => ({
        ...investment,
        category: 'Inversiones',
        name: investment.name,
        amount: investment.amount,
        type: 'inversión',
        date: new Date(investment.id),
        description: `Inversión: ${investment.description}`,
        time: 'N/A'
      }))
    ]
  } else {
    return expenses.value.filter(expense => expense.category === selectedCategory.value.name)
  }
})

const recentItems = computed(() => {
  return filteredItems.value
    .sort((a, b) => new Date(b.creationTime || b.date) - new Date(a.creationTime || a.date))
    .slice(0, 5)
})

watch(categories, (newCategories) => {
  console.log("All categories:", newCategories.map(cat => cat.name))
})
</script>

<style scoped>
.custom-text-field :deep(.v-field__outline) {
  display: none;
}
</style>
