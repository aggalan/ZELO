<template>
  <ItemList
    :items="transactions"
    linkText="Detalles"
  >  <slot><v-card-title class="text-grey-darken-3">{{ title }}</v-card-title></slot>
  </ItemList>
</template>

<script setup>
import ItemList from '@/components/generalComponents/ItemList.vue'
import { ref, defineProps } from 'vue'

defineProps({
title: {type: String, default: 'Movimientos'}
})

const transactions = ref([
  { name: 'Jose', description: 'Te transfirió $10.000', time: 'Ahora', icon: 'mdi-account', color: '#8B5CF6' },
  { name: 'Open 25', description: 'Pagaste $3000', time: '15m', image: '/placeholder.svg', icon: 'mdi-account' },
  { name: 'Miguel', description: 'Enviaste $3.000', time: '6h', icon: 'mdi-account', color: '#8B5CF6' },
])
</script>

<style scoped>
.transactions-card {
  background: #fAfBfC;
  border-radius: 12px;
}
.v-list-item__action-text {
  color: rgba(0, 0, 0, 0.6);
}
.v-list-item__avatar {
  background-color: #EDE9FE;
}
.v-list-item__avatar .v-icon {
  font-size: 20px;
}

</style>
