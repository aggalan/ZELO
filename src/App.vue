<template>
  <v-app class="zelo-app">
    <Navbar v-if="showNavbar" />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {computed, provide} from 'vue'
import Navbar from './components/Landing/landingNavbar.vue'
import {useRoute} from "vue-router";

// You can provide global state or functions here if needed
provide('appName', 'Zelo')
const route = useRoute();

// Use a computed property to check if the Navbar should be shown
const showNavbar = computed(() => route.meta.showNavbar);
</script>

<style>
.zelo-app {
  background: linear-gradient(to bottom right, #19181e, #22202b) !important;
}
</style>
