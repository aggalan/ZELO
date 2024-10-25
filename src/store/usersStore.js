
import { defineStore } from 'pinia';
import {computed, ref} from 'vue';
import {useBalanceStore} from "@/store/balanceStore";
import router from "@/router/router";


export const useUsersStore = defineStore('users', () => {
  const users = ref([
    {id: 1, alias: Math.random().toString(36).substring(2, 10), email: 'nicolaskoron@gmail.com', passwordHash: 'bmNvZGFkb3M=', name: 'Nicolas', surname:"Koron", cbu: 10 , dni:45238451, contacts: [{name: 'Santiago',email: 'smaffeo@itba.edu.ar',  cbu: 20}, {name: 'Juan', email: 'juan@itba.edu.ar', cbu: 30}]},
    {id: 2,alias: Math.random().toString(36).substring(2, 10), email: 'smaffeo@itba.edu.ar', passwordHash: 'c21hZmZlbw==', name: 'Santiago', cbu: 20, contacts: [{name: 'Nicolas',email: 'nicolaskoron@gmail.com',  cbu: 10}, {name: 'Juan', email: 'juan@itba.edu.ar', cbu: 30}]},
    {id: 3, alias: Math.random().toString(36).substring(2, 10),email: 'jbenegaslynch@itba.edu.ar', passwordHash: 'amJlbmVnYXNseW5jaA==', name: 'Juan', cbu: 30, contacts: []},
    {id: 4, alias: Math.random().toString(36).substring(2, 10),email: 'aggalan@itba.edu.ar', passwordHash: 'YWdnYWxhbg==', name: 'Agustin', cbu: 40, contacts: []},
  ]);

  const balances = useBalanceStore();
  const isAuthenticated = computed(() =>userId.value !== null);
  const userId = ref(1);
  const errorMessage = ref('');

  const getContacts = () => {
    return computed(()=> users.value.find(user => user.id === userId.value).contacts);
  }
  const editAlias = (alias) => {
    users.value.find(user => user.id === userId.value).alias = alias;
  }
  const editName = (name) => {
    users.value.find(user => user.id === userId.value).name = name;
  }

  const editSurname = (surname) => {
    users.value.find(user => user.id === userId.value).surname = surname;
  }

  const updateUser = (newUserData) => {
    user.value = { ...user.value, ...newUserData };
  };

  const addContact = (contact) => {
    if(!contact.email || !contact.name || !contact.cbu) {
      errorMessage.value = 'Email, nombre y cbu son requeridos'
      return false;
    }
    users.value.find(user => user.id === userId.value).contacts.push(contact);
  }
  // Agregar usuario
  const addUser = (user) => {
    if(!user.email || !user.passwordHash) {
      errorMessage.value = 'Email y contraseña son requeridos';
    }
    users.value.push(user);
    console.log(users.value)
    userId.value = user.id;
    balances.setBalance(0);
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
  const getUser = () => {
    return users.value.find(user => user.id === userId.value);
  }

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
  const register = (email, password, name, surname, dni) => {
    const userExists = users.value.some(user => user.email === email);
    if (userExists) {
      errorMessage.value = 'El usuario ya existe';
      return;
    }

    const newUser = {
      id: users.value.length + 1,
      email,
      passwordHash: hashPassword(password), // Guardar el hash de la contraseña
      name,
      surname,
      dni,
      cbu: Math.floor(Math.random() * 1e22).toString().padStart(22, '0'), // Generar un CBU aleatorio,
      alias: Math.random().toString(36).substring(2, 10) // Generar un alias aleatorio    };
    }
    addUser(newUser);
    console.log(newUser)
    login(email, password); // Iniciar sesión automáticamente tras registro
  };


  const updatePassword = (email, newPassword) => {
    const user = users.value.find(user => user.email === email);
    if (user) {
      user.passwordHash = btoa(newPassword); // Simple hash for demonstration
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
  };
});

