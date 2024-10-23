import { defineStore } from 'pinia';
import {computed, ref} from 'vue';
import {useUsersStore} from "@/store/usersStore";

export const useBalanceStore = defineStore('balance', () => {
  const balances = ref([]);
  const userStore = useUsersStore();

  // Establecer saldo para un usuario
  const setBalance = ( amount) => {
    const userBalance = balances.value.find(balance => balance.userId === userStore.userId);
    if (userBalance) {
      userBalance.amount = amount;
    } else {
      balances.value.push({ userId: userStore.userId, amount });
    }
  };
  const enterMoney = ( amount) => {
    const parsedAmount = Number(amount);
    // Si parsedAmount no es un número, devuelve o maneja el error
    if (isNaN(parsedAmount)) {
      console.error("El monto proporcionado no es un número válido.");
      return;
    }
    const userBalance = balances.value.find(balance => balance.userId === userStore.userId);
    if (userBalance) {
      userBalance.amount += parsedAmount;
    } else {
      balances.value.push({ userId: userStore.userId, amount: parsedAmount });
    }
  };
  const withdrawMoney = ( amount) => {
    const userBalance = balances.value.find(balance => balance.userId === userStore.userId);
    if (userBalance && userBalance.amount >= amount) {
      userBalance.amount -= amount;
      return true
    } else {
      console.log('No tienes suficiente saldo');
      return false;
    }
  }


  // Obtener saldo de un usuario
  const getBalanceByUserId = (userId) => {
    return computed(() => balances.value.find(balance => balance.userId === userId)?.amount || 0);
  };

  return {
    balances,
    setBalance,
    getBalanceByUserId,
    enterMoney,
    withdrawMoney
  };
});
