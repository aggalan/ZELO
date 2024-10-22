<template>
  <v-app class="zelo-app">
    <SideBar v-if="showSidebar"/>
    <Navbar v-if="showNavbar" />
    <TopBarDashboard v-else class="pa-1"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {computed, provide} from 'vue'
import Navbar from './components/Landing/landingNavbar.vue'
import {useRoute} from "vue-router";
import SideBar from "@/components/SideBar.vue";
import TopBarDashboard from "@/components/TopBarDashboard.vue";

// You can provide global state or functions here if needed
provide('appName', 'Zelo')
const route = useRoute();

// Use a computed property to check if the Navbar should be shown
const showNavbar = computed(() => route.meta.showNavbar);
const showSidebar = computed(() => route.meta.showSidebar);
</script>

<style>
.zelo-app {
  background: linear-gradient(to bottom right, #19181e, #22202b) !important;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}
.custom-search-field {
  border-radius: 30px; /* Rounded edges */
  background-color: #ffffff; /* Light background */
  padding-left: 15px; /* Padding to align text and icon */
  padding-right: 15px;
  box-shadow: none; /* Remove default shadow */
  border: 0 solid transparent; /* Border on focus */
  min-height: 45px; /* Control the height */
  //transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
}

:root {
  --checkbox-color: #ffffff; /* Define the checkbox color */
  --error-color: #ff0000; /* Define the error color */
  --link-color: #92bad6; /* modificar */
}


</style>
