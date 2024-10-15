<template>
  <v-app-bar app elevation="0" color="transparent">
    <div class="d-flex align-center justify-space-between w-100 mx-10">
      <v-btn class="text-h5 font-weight-bold white--text pl-0" to="/" >Zelo</v-btn>

      <div class="d-none d-md-flex justify-center flex-grow-1">
        <v-btn
          v-for="item in menuItems"
          :key="item"
          text="true"
          class="text-body-2 text-grey-lighten-1 mx-2"
        >
          {{ item }}
        </v-btn>
      </div>

      <v-btn
        color="white"
        class="black--text text-body-2 font-weight-medium"
        rounded
        to="/login"
      >
        Iniciar Sesión
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuItems = ref(['Legales', 'Features', 'Tarjetas', 'Seguridad', 'Sobre nosotros'])
</script>

<style scoped>
.v-btn {
  text-transform: none;
}


.v-app-bar {
  padding: 0 16px;

}

.active-btn {
  background-color: #ff5722; /* Example: Change background color */
  color: #000000; /* Example: Change text color */
  font-weight: bold; /* Example: Bold font */
  border-bottom: 2px solid #970000; /* Example: Add a bottom border */
}


@media (max-width: 959px) {
  .v-app-bar-title {
    flex-grow: 1;
  }
}
</style>
