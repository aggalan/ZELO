import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBalanceStore = defineStore('balance', () => {
  const balances = ref([]);

  // Establecer saldo para un usuario
  const setBalance = (userId, amount) => {
    const userBalance = balances.value.find(balance => balance.userId === userId);
    if (userBalance) {
      userBalance.amount = amount;
    } else {
      balances.value.push({ userId, amount });
    }
  };


  // Obtener saldo de un usuario
  const getBalanceByUserId = (userId) => {
    return balances.value.find(balance => balance.userId === userId)?.amount || 0;
  };

  return {
    balances,
    setBalance,
    getBalanceByUserId
  };
});
