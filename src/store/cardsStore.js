import { defineStore } from 'pinia';
import { ref } from 'vue';
import {useUsersStore} from "@/store/usersStore";

const users = useUsersStore();

export const useCardsStore = defineStore('cards', () => {
  const cards = ref([]);

  // Agregar tarjeta a un usuario
  const addCard = (userId, card) => {
    if(!card.number || !card.expirationDate || !card.cvv) {
      throw new Error('Número de tarjeta, fecha de expiración y CVV son requeridos');
    }
    card.name = card.name || users.getUserById(userId).name;
    cards.value.push({ ...card, userId });
  };

  const removeCard = (cardId) => {
    const cardIndex = cards.value.findIndex(card => card.id === cardId);
    if (cardIndex !== -1 && cards.value[cardIndex].userId === users.userId) {
      cards.value.splice(cardIndex, 1);
    }
  };

  // Obtener tarjetas por ID de usuario
  const getCardsByUserId = (userId) => {
    return cards.value.filter(card => card.userId === userId);
  };

  return {
    cards,
    addCard,
    getCardsByUserId
  };
});
