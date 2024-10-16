<template>
  <ItemListWithButton
    :items="investments"
    buttonColor="#8B5CF6"
    @onButtonClick="goToInvestmentPage"
    selectedText="Viendo"
    buttonText="Ver"
    selectedColor = "grey"
    selectedTextColor = "#8B5CF6"
    useSelectedText
  >    <v-card-title class="d-flex justify-space-between align-center text-grey-darken-3">
    {{ title }}
    <router-link :to="investment/all" class="link-text ">
      Ver todas mis inversiones
    </router-link>
    </v-card-title>
  </ItemListWithButton>
</template>

<script setup>
import { ref } from 'vue'
import ItemListWithButton from '@/components/generalComponents/ItemListWithButton.vue'
import router from "@/router/router";

const investments = ref([
  { name: 'Bitcoin', description: '0.45 BTC', amount: '20,000', icon: 'mdi-bitcoin', iconColor: '#F7931A', action: 'Ver', onActionClick: () => {} },
  { name: 'Fondo alfa', description: '-', amount: '15,000', icon: 'mdi-cash', iconColor: '#4CAF50', action: 'Ver', onActionClick: () => {} },
  { name: 'Fondo delta', description: '-', amount: '1,000,000.00', icon: 'mdi-cash-multiple', iconColor: '#2196F3', action: 'Ver', onActionClick: () => {} },
]);
const title="Tu posición";

const goToInvestmentPage = () => {
  router.push('/investment/all');
};
</script>
<style scoped>
.link-text {
  color: #8B5CF6;
  text-decoration: underline;
  cursor: pointer;
}
</style>
