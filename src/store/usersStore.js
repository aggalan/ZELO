
import { defineStore } from 'pinia';
import {computed, ref} from 'vue';
import {useBalanceStore} from "@/store/balanceStore";
import {useTransactionsStore} from "@/store/transactionStore";
import {useInvestmentsStore} from "@/store/investmentStore";
import router from "@/router/router";


export const useUsersStore = defineStore('users', () => {
  const users = ref([]);
  const balances = useBalanceStore();
  const isAuthenticated = computed(() =>userId.value !== null);
  const userId = ref(null);
  const errorMessage = ref('');


  // Agregar usuario
  const addUser = (user) => {
    if(!user.email || !user.passwordHash) {
      errorMessage.value = 'Email y contraseña son requeridos';
    }
    users.value.push(user);
    console.log(users.value)
    balances.setBalance(user.id, 0);
  };

  // Obtener un usuario por ID
  const getUserById = (userId) => {
    return users.value.find(user => user.id === userId);
  };
  // Simulación de un hash de contraseña para propósitos demostrativos
  const hashPassword = (password) => {
    // Idealmente, esto debería hacerse en el backend, aquí es solo una simulación
    return btoa(password); // Esta es una forma muy débil de "hash", solo un ejemplo.
  };

  // Lógica para iniciar sesión
  const login = (email, password) => {
    const user = users.value.find(user => user.email === email);
    if (user) {
      if (user.passwordHash === hashPassword(password)) {
        userId.value = user.id;
        return true;
      } else {
        errorMessage.value = 'Contraseña incorrecta';
        return false;
      }
    } else {
      errorMessage.value = 'Usuario no encontrado';
      return false;
    }
  };

  // Cerrar sesión
  const logout = () => {
    userId.value = null;
    router.push('/');
  };

  // Registrar un nuevo usuario
  const register = (email,name, password) => {
    const userExists = users.value.some(user => user.email === email);
    if (userExists) {
      errorMessage.value = 'El usuario ya existe';
      return;
    }

    const newUser = {
      id: users.value.length + 1,
      email,
      passwordHash: hashPassword(password), // Guardar el hash de la contraseña
      name
    };

    addUser(newUser);
    console.log(newUser)
    login(email, password); // Iniciar sesión automáticamente tras registro
  };


  return {
    users,
    register,
    getUserById,
    login,
    logout,
    userId,
    isAuthenticated,
  };
});

