<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <!-- Sidebar content -->
      <v-list>
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :to="item.to"
          :active-class="'primary--text'"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mi Aplicación</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const drawer = ref(false)
const route = useRoute()

const menuItems = ref([
  { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
  { title: 'Perfil', icon: 'mdi-account', to: '/profile' },
  { title: 'Ayuda', icon: 'mdi-help-circle', to: '/help' },
])

const isProfileActive = computed(() => route.path === '/profile')
</script>

<style>
:root {
  --primary-color: #6200EA;
  --secondary-color: #03DAC6;
}
</style>
