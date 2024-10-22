<template>
  <v-app :class="appClass">
    <SideBar v-if="showSidebar"/>
    <Navbar v-if="showNavbar" />
    <TopBarDashboard v-else class="pa-1"/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from './components/Landing/landingNavbar.vue'
import SideBar from '@/components/SideBar.vue'
import TopBarDashboard from '@/components/TopBarDashboard.vue'

provide('appName', 'Zelo')
const route = useRoute()

const showNavbar = computed(() => route.meta.showNavbar)
const showSidebar = computed(() => route.meta.showSidebar)
const applyBackground = computed(() => route.meta.applyBackground)

const appClass = computed(() => applyBackground.value ? 'zelo-app' : 'white-background')
</script>

<style>
.zelo-app {
  background: linear-gradient(to bottom right, #19181e, #22202b) !important;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

.white-background {
  background: white !important;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
}

.custom-search-field {
  border-radius: 30px;
  background-color: #ffffff;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: none;
  border: 0 solid transparent;
  min-height: 45px;
  //transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
}

:root {
  --checkbox-color: #ffffff;
  --error-color: #ff0000;
  --link-color: #92bad6; /* modificar */
}


</style>
