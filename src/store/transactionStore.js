import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTransactionsStore = defineStore('transactions', () => {
  const transactions = ref([
    {to: 'Jose', type: 'ingreso', amount: 10000, time: Date.now(), icon: 'mdi-account', userId: 1},
    {t0: 'Open 25', type: 'pago', amount: 20000, time: Date.now(), image: '/placeholder.svg', icon: 'mdi-account', userId: 2},
    {to: 'Miguel', type: 'ingreso', amount: 1000 ,time: Date.now(), icon: 'mdi-account', userId: 1},
    {to: 'Jose', type: 'ingreso', amount: 11400, time: Date.now(), icon: 'mdi-account', userId: 1},
    {to: 'Open 25', type: 'pago', amount: 10500, time: Date.now(), image: '/placeholder.svg', icon: 'mdi-account', userId: 2},
    {to: 'Miguel',type: 'ingreso', amount: 100000, time: Date.now(), icon: 'mdi-account', userId: 1},
    {to: 'Jose',type: 'pago', amount: 100, time: Date.now(), icon: 'mdi-account', userId: 1},
    {to: 'Open 25', type: 'ingreso', amount: 90000, time: Date.now(), image: '/placeholder.svg', icon: 'mdi-account', userId: 2},
    {to: 'Miguel',type: 'ingreso', amount: 1900,time: Date.now(), icon: 'mdi-account', userId: 1},
  ]);

  // Agregar transacción
  const addTransaction = (userId, transaction) => {
    transactions.value.push({ ...transaction, userId });
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


  // Obtener transacciones por ID de usuario
  const getTransactionsByUserId = (userId) => {
    return transactions.value
      .filter(transaction => transaction.userId === userId)
      .map(transaction => ({
        ...transaction,
        timeSince: timeSinceEvent(transaction.time) // Agregar el tiempo transcurrido a cada transacción
      }));
  };

  return {
    transactions,
    addTransaction,
    getTransactionsByUserId
  };
});
