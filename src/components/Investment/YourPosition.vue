<template>
  <ItemListWithButton
    title="Tu posición"
    :items="investments"
    buttonText="Ver todas mis inversiones"
    buttonIcon="mdi-eye"
    buttonColor="#8B5CF6"
    @onButtonClick="goToInvestmentPage"
  />
</template>

<script setup>
import { ref } from 'vue'
import ItemListWithButton from '@/components/generalComponents/ItemListWithButton.vue'
import router from "@/router/router";

const investments = ref([
  { name: 'Bitcoin', description: '0.45 BTC', amount: '20,000', icon: 'mdi-bitcoin', iconColor: '#F7931A', action: 'Viendo', onActionClick: () => {} },
  { name: 'Fondo alfa', description: '-', amount: '15,000', icon: 'mdi-cash', iconColor: '#4CAF50', action: 'Ver', onActionClick: () => {} },
  { name: 'Fondo delta', description: '-', amount: '1,000,000.00', icon: 'mdi-cash-multiple', iconColor: '#2196F3', action: 'Ver', onActionClick: () => {} },
]);

const goToInvestmentPage = () => {
  router.push('/investment/all');
};
</script>
