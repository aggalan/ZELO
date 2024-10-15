<template>
  <v-app-bar app color="transparent" elevation="0">
    <v-app-bar-title class="text-h5 font-weight-bold white--text">Zelo</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="item in menuItems"
      :key="item"
      text="true"
      class="text-body-2 text-grey-lighten-1 hidden-sm-and-down"
    >
      {{ item }}
    </v-btn>
    <v-btn
      color="white"
      class="black--text text-body-2 font-weight-medium"
      rounded
    >
      Iniciar Sesion
    </v-btn>
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
</style>
