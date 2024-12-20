import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useBalanceStore } from "@/store/balanceStore";
import {useInvestmentsStore} from "@/store/investmentStore";
import {useTransactionsStore} from "@/store/transactionStore";
import router from "@/router/router";

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    { id: 1, alias: Math.random().toString(36).substring(2, 10), email: 'nicolaskoron@gmail.com', passwordHash: 'MTIzNA==', name: 'Nicolas', surname: "Koron", cbu: 10, dni: 45238451, contacts: [{ name: 'Santiago', email: 'smaffeo@itba.edu.ar', cbu: 20 }, { name: 'Juan', email: 'juan@itba.edu.ar', cbu: 30 }] },
    { id: 2, alias: Math.random().toString(36).substring(2, 10), email: 'smaffeo@itba.edu.ar', passwordHash: 'MTIzNA==', name: 'Santiago', cbu: 20, contacts: [{ name: 'Nicolas', email: 'nicolaskoron@gmail.com', cbu: 10 }, { name: 'Juan', email: 'juan@itba.edu.ar', cbu: 30 }] },
    { id: 3, alias: Math.random().toString(36).substring(2, 10), email: 'jbenegaslynch@itba.edu.ar', passwordHash: 'MTIzNA==', name: 'Juan', cbu: 30, contacts: [] },
    { id: 4, alias: Math.random().toString(36).substring(2, 10), email: 'aggalan@itba.edu.ar', passwordHash: 'MTIzNA==', name: 'Agustin', cbu: 40, contacts: [] },
  ]);

  const balances = useBalanceStore();
  const isAuthenticated = computed(() => userId.value !== null);
  const userId = ref(null);
  const errorMessage = ref('');

  const getContacts = () => {
    return computed(() => users.value.find(user => user.id === userId.value).contacts);
  };

  const editAlias = (alias) => {
    users.value.find(user => user.id === userId.value).alias = alias;
  };

  const editName = (name) => {
    users.value.find(user => user.id === userId.value).name = name;
  };

  const editSurname = (surname) => {
    users.value.find(user => user.id === userId.value).surname = surname;
  };

  const updateUser = (newUserData) => {
    const user = users.value.find(user => user.id === userId.value);
    if (user) {
      Object.assign(user, newUserData);
    }
  };

  const updateAlias = (id, newAlias) => {
    const user = users.value.find(user => user.id === id);
    if (user) {
      user.alias = newAlias;
    }
  };

  const addContact = (contact) => {
    if (!contact.email || !contact.name || !contact.cbu) {
      errorMessage.value = 'Email, nombre y cbu son requeridos';
      return false;
    }
    users.value.find(user => user.id === userId.value).contacts.push(contact);
  };

  const addUser = (user) => {
    if (!user.email || !user.passwordHash) {
      errorMessage.value = 'Email y contraseña son requeridos';
    }
    users.value.push(user);
    userId.value = user.id;
    balances.setBalance(0);
  };

  const getUserById = (userId) => {
    return users.value.find(user => user.id === userId);
  };

  const hashPassword = (password) => {
    return btoa(password);
  };

  const getUser = () => {
    return users.value.find(user => user.id === userId.value);
  };

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

  const logout = () => {
    userId.value = null;
    useInvestmentsStore().clearCurrentInvestment();

    useTransactionsStore().clearSelectedTransaction();
    router.push('/');
  };

  const register = (email, password, name, surname, dni) => {
    const userExists = users.value.some(user => user.email === email);
    if (userExists) {
      errorMessage.value = 'El usuario ya existe';
      return;
    }

    const newUser = {
      id: users.value.length + 1,
      email,
      passwordHash: hashPassword(password),
      name,
      surname,
      dni,
      cbu: Math.floor(Math.random() * 1e21).toString().padStart(22, '0'),
      alias: Math.random().toString(36).substring(2, 10)
    };
    console.log(newUser);
    addUser(newUser);
    login(email, password);
  };

  const updatePassword = (email, newPassword) => {
    const user = users.value.find(user => user.email === email);
    if (user) {
      user.passwordHash = btoa(newPassword);
      return true;
    } else {
      return false;
    }
  };

  const emailForReset = ref('');

  const setEmailForReset = (email) => {
    emailForReset.value = email;
  };

  const printAllUserEmails = () => {
    users.value.forEach(user => {
      console.log(user.email);
      console.log(user.id);
    });
  };

  return {
    users,
    register,
    getUserById,
    login,
    logout,
    userId,
    isAuthenticated,
    getContacts,
    addContact,
    getUser,
    editAlias,
    editName,
    updatePassword,
    emailForReset,
    setEmailForReset,
    printAllUserEmails,
    editSurname,
    updateUser,
    updateAlias,
  };
});
