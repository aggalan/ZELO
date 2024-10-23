<template class="d-flex">
  <v-card class="mb-4 my-card ml-0">
    <v-card-title class="ma-3 d-flex justify-space-between align-center text-grey-darken-3">
      {{ title }}
      <router-link :to="'/investment/all'" class="link-text">
        Ver todas mis inversiones
      </router-link>
    </v-card-title>
    <v-card-text>
      <ItemListWithButton
        :items="investments"
        buttonColor="#8B5CF6"
        :onButtonClick="setAsCurrentInvestment"
        selectedText="Viendo"
        buttonText="Ver"
        selectedColor="grey"
        selectedTextColor="#8B5CF6"
        useSelectedText
      />
    </v-card-text>
  </v-card>
</template>

<script setup>
import ItemListWithButton from '@/components/generalComponents/ItemListWithButton.vue'
import router from "@/router/router";
import {useInvestmentsStore} from "@/store/investmentStore";
import {useUsersStore} from "@/store/usersStore";

const investments = useInvestmentsStore().getInvestmentsByUserId(useUsersStore().userId);
const title = "Tu posición";
const setAsCurrentInvestment = (investment) => {
  useInvestmentsStore().setCurrentInvestment(investment.id);
};
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

.my-card {
  width: 100%; /* Ensure the card takes the full width */
  max-width: 1320px; /* Optional: set a max-width similar to InvestmentChart.vue */
  margin: 0 auto; /* Center the card */
}
</style>
