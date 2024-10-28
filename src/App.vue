<template>
  <v-app :class="appClass">
    <SideBar v-if="showSidebar"/>
    <Navbar v-if="showNavbar" />
    <TopBarDashboard v-else class="pa-1"/>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
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
  background-color: white;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: none;
  border: 0 solid transparent;
  min-height: 45px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}


.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
