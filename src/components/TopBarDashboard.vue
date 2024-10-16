<template>
  <v-app-bar app color="primary" dark>
    <v-container class="d-flex flex-row">
      <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <div class="d-flex flex-column">
      <span>Juan Rodriguez</span>
      <span class="text-caption grey--text">juanRodriguez@gmail.com</span>
    </div>
    </v-container>

    <v-spacer></v-spacer>

    <!-- Contenedor para centrar el botón y la barra de búsqueda -->
    <v-container class="search-container d-flex align-center ">

      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        placeholder="Buscar en la página"
        v-model="searchQuery"
        class="custom-search-field text-black rounded-xl"
        clearable
      ></v-text-field>

    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
</script>

<style scoped>


/* Remove underline */
.custom-search-field .v-field__outline {
  display: none; /* Hide the outline (underline) */
  outline: none; /* Remove default focus outline */
}

/* Style the input field */
.custom-search-field .v-field__input {
  min-height: 45px; /* Control the height */
}

/* Placeholder styling */
.custom-search-field .v-field__input::placeholder {
  color: #ffffff; /* Lighter gray for placeholder text */
}

/* Focus and hover effects */
.custom-search-field:focus-within {
  border-color: #1976d2; /* Blue border when focused */
  box-shadow: 0 0 0 rgba(0, 118, 210, 0.2); /* Subtle shadow on focus */
}

.custom-search-field:hover {
  border-color: #ffffff; /* Light gray border on hover */
}

/* Responsive width */
.custom-search-field {
  width: 100%;
  max-width: 400px; /* Max width for larger screens */
  margin: 0 auto; /* Center on small screens */
}

.v-btn {
  text-transform: none;
}
</style>
