import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref([]);

  // Agregar transacción
  const addTransaction = (userId, transaction) => {
    transactions.value.push({ ...transaction, userId });
  };

  // Obtener transacciones por ID de usuario
  const getTransactionsByUserId = (userId) => {
    return transactions.value.filter(transaction => transaction.userId === userId);
  };

  return {
    transactions,
    addTransaction,
    getTransactionsByUserId
  };
});
