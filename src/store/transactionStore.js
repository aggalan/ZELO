import { defineStore } from 'pinia';
import { ref } from 'vue';
import {useUsersStore} from "@/store/usersStore";

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref([
    {id:1,cbu:10, to: 'Jose', type: 'ingreso', amount: 10000, creationTime: Date.now(), icon: 'mdi-account', userId: 1, description: 'Pago de alquiler', category: 'Alquiler', color: 'primary'},
    {id:2,cbu:10, to: 'Open 25', type: 'pago', amount: 20000, creationTime: Date.now(), image: '/placeholder.svg', icon: 'mdi-account', userId: 2, description: 'Compra de ropa', category: 'Ropa',color: 'primary'},
    {id:3,cbu:10, to: 'Miguel', type: 'ingreso', amount: 1000 ,creationTime: Date.now(), icon: 'mdi-account', userId: 1,description: 'Pago de servicios', category: 'Servicios',color: 'secondary'},
    {id:4,cbu:10, to: 'McDonalds', type: 'ingreso', amount: 11400, creationTime: Date.now(), icon: 'mdi-account', userId: 1, description: 'McDonalds', category: 'Comida',color: 'primary'},
    {id:5,cbu:10, to: 'Open 25', type: 'pago', amount: 10500, creationTime: Date.now(), image: '/placeholder.svg', icon: 'mdi-account', userId: 2, description: 'Compra de ropa', category: 'Ropa',color: 'tertiary'},
    {id:6,cbu:10, to: 'KFC',type: 'ingreso', amount: 100000, creationTime: Date.now(), icon: 'mdi-account', userId: 1, description: 'KFC', category: 'Comida', color: "tertiary"},
    {id:7,cbu:10, to: 'SushiPop',type: 'pago', amount: 100, creationTime: Date.now(), icon: 'mdi-account', userId: 1, description: 'SushiPop', category: 'Comida'},
    {id:8,cbu:10, to: 'Open 25', type: 'ingreso', amount: 90000, creationTime: Date.now(), image: '/placeholder.svg', icon: 'mdi-account', userId: 2, description: 'Compra de ropa', category: 'Ropa'},
    {id:9,cbu:10, to: 'Miguel',type: 'ingreso', amount: 1900,creationTime: Date.now(), icon: 'mdi-account', userId: 1, description: 'Pago de servicios', category: 'Servicios'},
  ]);
  const selectedTransaction = ref(null);
  const useUserStore = useUsersStore()
  // Agregar transacción
  const addTransaction = (userId, transaction) => {
    transactions.value.push({ ...transaction, userId, id: transactions.value.length + 1 });
  };
  const  timeSinceEvent = ( eventTimestamp) => {
    const now = Date.now(); // Tiempo actual en milisegundos
    const diff = now - eventTimestamp; // Diferencia en milisegundos

    // Convertir a segundos, minutos, horas y días
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Lógica para elegir la unidad de tiempo más adecuada
    if (days > 0) {
      return days === 1 ? '1 día' : `Hace ${days} días`;
    } else if (hours > 0) {
      return hours === 1 ? '1 hora' : `Hace ${hours} horas`;
    } else if (minutes > 0) {
      return minutes === 1 ? '1 minuto' : `Hace ${minutes} minutos`;
    } else {
      return 'Menos de 1 minuto'
    }
  }

  const setSelectedTransaction = (transactionId) => {
    selectedTransaction.value = transactions.value.find(transaction => transaction.id === transactionId);
  };
  const clearSelectedTransaction = () => {
    selectedTransaction.value = null;
  }
  const getSelectedTransaction = () => {
    return selectedTransaction.value;
  }

  // Obtener transacciones por ID de usuario
  const getTransactionsByUserId = (userId= useUserStore.userId) => {
    return transactions.value
      .filter(transaction => transaction.userId === userId)
      .sort((a, b) => b.time - a.time) // Ordenar de más reciente a más antigua
      .map(transaction => ({
        ...transaction,
        time: timeSinceEvent(transaction.creationTime)//gregar el tiempo transcurrido a cada transacción
      }));
  };
  const getPaymentsByUserId = (userId= useUserStore.userId) => {
    return transactions.value
      .filter(transaction => transaction.userId === userId && transaction.type === 'pago')
      .sort((a, b) => b.time - a.time) // Ordenar de más reciente a más antigua
      .map(transaction => ({
        ...transaction,
        time: timeSinceEvent(transaction.creationTime)//gregar el tiempo transcurrido a cada transacción
      }));
  };

  const getIncomesByUserId = (userId= useUserStore.userId) => {
    return transactions.value
      .filter(transaction => transaction.userId === userId && transaction.type === 'ingreso')
      .sort((a, b) => b.time - a.time) // Ordenar de más reciente a más antigua
      .map(transaction => ({
        ...transaction,
        time: timeSinceEvent(transaction.creationTime)//gregar el tiempo transcurrido a cada transacción
      }));
  }

  return {
    transactions,
    addTransaction,
    getTransactionsByUserId,
    setSelectedTransaction,
    clearSelectedTransaction,
    getSelectedTransaction,
    getPaymentsByUserId,
    getIncomesByUserId
  };
});
