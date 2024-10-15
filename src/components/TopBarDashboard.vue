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
          single-line
          placeholder="Buscar en la página"
          class="ml-4 search-field text-grey-darken-3"
        ></v-text-field>

    </v-container>
  </v-app-bar>
</template>

<script setup>
// ...
</script>

<style scoped>
.search-container {
  flex-grow: 1; /* Permite que el contenedor ocupe el espacio disponible */
  justify-content: flex-end; /* Alinea el contenido a la derecha */
  background: transparent;
}

.search-field {
  max-width: 300px;
  border-radius: 30px;
  background-color: #F0F0F0;
}

.v-btn {
  text-transform: none;
}
</style>
