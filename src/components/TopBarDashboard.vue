<template>
  <v-app-bar app color="#8B5CF6" dark>
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
        class="custom-search-field text-black"
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
.custom-search-field {
  border-radius: 25px; /* Rounded edges */
  background-color: #f5f5f5; /* Light background */
  padding-left: 15px; /* Padding to align text and icon */
  padding-right: 15px;
  box-shadow: none; /* Remove default shadow */
  border: 1px solid transparent; /* Border on focus */
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
}

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
  color: #9e9e9e; /* Lighter gray for placeholder text */
}

/* Focus and hover effects */
.custom-search-field:focus-within {
  border-color: #1976d2; /* Blue border when focused */
  box-shadow: 0 0 10px rgba(25, 118, 210, 0.2); /* Subtle shadow on focus */
}

.custom-search-field:hover {
  border-color: #ddd; /* Light gray border on hover */
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
