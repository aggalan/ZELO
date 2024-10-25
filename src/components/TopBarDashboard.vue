<template>
  <v-app-bar app color="#8B5CF6">
    <v-container class="search-container d-flex align-center">
      <!-- Icono de búsqueda que actúa como trigger -->
      <v-btn
        icon
        @click="toggleSearch"
        class="ml-0"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <!-- Campo de búsqueda con animación -->
      <v-slide-x-transition>
        <v-text-field
          v-if="isSearchVisible"
          hide-details
          placeholder="Buscar en la página"
          v-model="searchQuery"
          class="no-underline custom-text-field"
          clearable
          rounded
          @blur="handleBlur"
          ref="searchInput"
          @keyup.esc="toggleSearch"
        ></v-text-field>
      </v-slide-x-transition>
    </v-container>

    <v-container class="d-flex flex-row justify-end">
      <v-btn icon to="/profile">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <div class="d-flex flex-column">
        <span>{{user.name}} {{user.surname}}</span>
        <span class="text-caption grey--text">{{user.email}}</span>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import {useUsersStore} from "@/store/usersStore";

const searchQuery = ref('');
const isSearchVisible = ref(false);
const searchInput = ref(null);
const userStore = useUsersStore();
const user = userStore.getUserById(userStore.userId);

const toggleSearch = async () => {
  isSearchVisible.value = !isSearchVisible.value;

  if (isSearchVisible.value) {
    await nextTick();
    searchInput.value.focus();
  } else {
    searchQuery.value = '';
  }
};

const handleBlur = (event) => {
  if (!searchQuery.value) {
    isSearchVisible.value = false;
  }
};
</script>

<style scoped>
.custom-search-field {
  width: 100%;
  max-width: 800px;
  transition: all 0.3s ease;
}

.v-btn {
  text-transform: none;
}

.search-container {
  transition: all 0.3s ease;
}


.custom-text-field :deep(.v-field__outline) {
  display: none;
}



.v-app-bar .v-container {
  padding-left: 16px;
}
</style>
