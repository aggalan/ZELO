<script setup lang="ts">
import { ref } from 'vue'
import '@mdi/font/css/materialdesignicons.css'

const menuItems = ref([
  { title: 'Dashboard', icon: 'mdi-view-dashboard-outline' },
  { title: 'Tarjetas', icon: 'mdi-credit-card-outline' },
  { title: 'Movimientos', icon: 'mdi-swap-horizontal' },
  { title: 'Inversiones', icon: 'mdi-chart-line' },
  { title: 'Perfil', icon: 'mdi-account-outline' },
])

const bottomItems = ref([
  { title: 'Configuración', icon: 'mdi-cog-outline' },
  { title: 'Cerrar Sesión', icon: 'mdi-logout-variant' },
])

const selectedItem = ref('Movimientos')
</script>

<template>
  <v-navigation-drawer permanent width="250" height="100vh" color="white">
    <div class="d-flex justify-center pa-4">
      <div class="d-flex justify-center pa-4">
        <v-avatar size="80" class="mb-4">
          <img src="@/assets/logo.png" alt="Logo" class="avatar-img"/>
        </v-avatar>
      </div>
    </div>
    <v-list nav>
      <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :value="item.title"
          :class="{ 'selected-item': item.title === selectedItem }"
          @click="selectedItem = item.title"
          class="mb-2"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon" size="24" class="mr-3"></v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-list nav>
        <v-list-item
            v-for="item in bottomItems"
            :key="item.title"
            :value="item.title"
            class="mb-2"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" size="24" class="mr-3"></v-icon>
          </template>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>
.v-list-item {
  min-height: 100px;
  margin-bottom: 40px;
}

 .avatar-img {
   width: 100%;
   height: 100%;
   object-fit: cover;
 }

.v-list-item__prepend {
  margin-right: 16px;
}

.selected-item {
  background-color: rgba(232, 195, 255, 0.71);
  border-radius: 8px;
}

.selected-item .v-list-item__content,
.selected-item .v-icon {
  color: #9c27b0;
}

.v-navigation-drawer :deep(.v-list) {
  padding: 16px;
}

.v-navigation-drawer :deep(.v-list-item__content) {
  font-size: 14px;
  font-weight: 500;
}

.v-navigation-drawer :deep(.v-icon) {
  font-size: 24px;
}
</style>
