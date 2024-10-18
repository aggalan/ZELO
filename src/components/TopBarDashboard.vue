<template>
  <v-app-bar app color="#8B5CF6" >
    <!-- Contenedor para centrar el botón y la barra de búsqueda -->
    <v-container class="search-container d-flex align-center justify-end ">

      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        placeholder="Buscar en la página"
        v-model="searchQuery"
        class="custom-search-field text-black rounded-xl"
        clearable
      ></v-text-field>

    </v-container>


    <v-container class="d-flex flex-row justify-end">
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <div class="d-flex flex-column">
        <span>Juan Rodriguez</span>
        <span class="text-caption grey--text">juanRodriguez@gmail.com</span>
      </div>
    </v-container>

  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
</script>

<style scoped>

/* Responsive width */
.custom-search-field {
  width: 100%;
  max-width: 800px; /* Max width for larger screens */
  margin: 0 auto; /* Center on small screens */
}

.v-btn {
  text-transform: none;
}
</style>
