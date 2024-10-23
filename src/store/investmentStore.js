import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useInvestmentsStore = defineStore('investments', () => {
  const investments = ref([]);

  // Agregar inversión para un usuario
  const addInvestment = (userId, investment) => {
    investments.value.push({ ...investment, userId });
  };

  // Obtener inversiones de un usuario
  const getInvestmentsByUserId = (userId) => {
    return investments.value.filter(investment => investment.userId === userId);
  };

  return {
    investments,
    addInvestment,
    getInvestmentsByUserId
  };
});
