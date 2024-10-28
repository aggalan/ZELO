import { defineStore } from 'pinia';
import {computed, ref} from 'vue';
import {useUsersStore} from "@/store/usersStore";


export const useCardsStore = defineStore('cards', () => {
  const users = useUsersStore();
  const cards = ref([
    {
      userId: 1,
      id: 1,
      bank: 'Brubank',
      number: '1234567890123456',
      expiry: '09/25',
      name: 'Jose Benegas',
      color: 'deep-purple',
      cvv: 123,
      viewInfo: false,
      icon: 'mdi-eye-closed'
    },
    {
      userId: 1,
      id: 2,
      bank: 'Galicia',
      number: '9876543210987654',
      expiry: '12/24',
      name: 'Jose Benegas',
      color: 'red darken-1',
      cvv: 234,
      viewInfo: false,
      icon: 'mdi-eye-closed'
    },
    {
      userId: 2,
      id: 4,
      bank: 'Galicia',
      number: '9876543210987654',
      expiry: '12/24',
      name: 'Jose Benegas',
      color: 'green darken-1',
      cvv: 345,
      viewInfo: false,
      icon: 'mdi-eye-closed'
    },
    {
      userId: 1,
      id: 6,
      bank: 'Galicia',
      number: '9876543210987654',
      expiry: '12/24',
      name: 'Jose Benegas',
      color: 'red darken-1',
      cvv: 456,
      viewInfo: false,
      icon: 'mdi-eye-closed'
    },
    {
      userId: 1,
      id: 3,
      bank: 'Galicia',
      number: '9876543210987654',
      expiry: '12/24',
      name: 'Jose Benegas',
      color: 'red darken-1',
      cvv: 567,
      viewInfo: false,
      icon: 'mdi-eye-closed'
    }
  ]);

  const addCard = (userId, card) => {
    if(!card.number || !card.expiry || !card.cvv) {
      throw new Error('Número de tarjeta, fecha de expiración y CVV son requeridos');
    }
    card.name = card.name || users.getUserById(userId).name;
    cards.value.push({ ...card, userId });
  };

  const removeCard = (cardId) => {
    cards.value = cards.value.filter(card => card.id !== cardId || (card.userId != users.userId));
    console.log(getCardsByUserId(users.userId));
  };

  const toggleCardViewInfo = (id) => {
    cards.value = cards.value.map(card => {
      if (card.id === id) {
        const newViewInfo = !card.viewInfo;
        return {
          ...card,
          viewInfo: newViewInfo,
          icon: newViewInfo ? 'mdi-eye' : 'mdi-eye-closed'
        };
      }
      return card;
    });
  };

  // Obtener tarjetas por ID de usuario
  const getCardsByUserId = (userId) => {
    return computed(() => cards.value.filter(card => card.userId === userId));
  };

  return {
    cards,
    addCard,
    getCardsByUserId,
    removeCard,
    toggleCardViewInfo
  };
});
