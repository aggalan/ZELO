<template>
  <v-app class="zelo-app">
    <Navbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { provide } from 'vue'
import Navbar from './components/Landing/landingNavbar.vue'
import ZeloLanding from './components/Landing/Home/landingComponent.vue'

// You can provide global state or functions here if needed
provide('appName', 'Zelo')
</script>

<style>
.zelo-app {
  background: linear-gradient(to bottom right, #19181e, #22202b) !important;
}
</style>
