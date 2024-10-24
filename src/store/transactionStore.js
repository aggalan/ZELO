import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref([
    {id:1,cbu:10, to: 'Jose', type: 'ingreso', amount: 10000, time: Date.now(), icon: 'mdi-account', userId: 1, description: 'Pago de alquiler', category: 'Alquiler'},
    {id:2,cbu:10, to: 'Open 25', type: 'pago', amount: 20000, time: Date.now(), image: '/placeholder.svg', icon: 'mdi-account', userId: 2, description: 'Compra de ropa', category: 'Ropa'},
    {id:3,cbu:10, to: 'Miguel', type: 'ingreso', amount: 1000 ,time: Date.now(), icon: 'mdi-account', userId: 1,description: 'Pago de servicios', category: 'Servicios'},
    {id:4,cbu:10, to: 'Jose', type: 'ingreso', amount: 11400, time: Date.now(), icon: 'mdi-account', userId: 1, description: 'Pago de alquiler', category: 'Comida'},
    {id:5,cbu:10, to: 'Open 25', type: 'pago', amount: 10500, time: Date.now(), image: '/placeholder.svg', icon: 'mdi-account', userId: 2, description: 'Compra de ropa', category: 'Ropa'},
    {id:6,cbu:10, to: 'Miguel',type: 'ingreso', amount: 100000, time: Date.now(), icon: 'mdi-account', userId: 1, description: 'Pago de servicios', category: 'comida'},
    {id:7,cbu:10, to: 'Jose',type: 'pago', amount: 100, time: Date.now(), icon: 'mdi-account', userId: 1, description: 'Pago de alquiler', category: 'Comida'},
    {id:8,cbu:10, to: 'Open 25', type: 'ingreso', amount: 90000, time: Date.now(), image: '/placeholder.svg', icon: 'mdi-account', userId: 2, description: 'Compra de ropa', category: 'Ropa'},
    {id:9,cbu:10, to: 'Miguel',type: 'ingreso', amount: 1900,time: Date.now(), icon: 'mdi-account', userId: 1, description: 'Pago de servicios', category: 'Servicios'},
  ]);
  const selectedTransaction = ref(null);

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
      return seconds === 1 ? '1 segundo' : `Hace ${seconds} segundos`;
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
  const getTransactionsByUserId = (userId) => {
    return transactions.value
      .filter(transaction => transaction.userId === userId)
      .sort((a, b) => b.time - a.time) // Ordenar de más reciente a más antigua
      .map(transaction => ({
        ...transaction,
        timeSince: timeSinceEvent(transaction.time) // Agregar el tiempo transcurrido a cada transacción
      }));
  };

  return {
    transactions,
    addTransaction,
    getTransactionsByUserId,
    setSelectedTransaction,
    clearSelectedTransaction,
    getSelectedTransaction
  };
});
