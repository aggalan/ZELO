<script setup lang="ts">
import {onBeforeMount, ref, watch} from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import router from "@/router/router";
import { useRoute } from "vue-router";
import { useUsersStore } from "@/store/usersStore";

const route = useRoute();
const users = useUsersStore();

const menuItems = ref([
  { title: 'Dashboard', icon: 'mdi-view-dashboard-outline', route: '/dashboard' },
  { title: 'Tarjetas', icon: 'mdi-credit-card-outline', route: '/cards' },
  { title: 'Movimientos', icon: 'mdi-swap-horizontal', route: '/movements' },
  { title: 'Inversiones', icon: 'mdi-chart-line', route: '/investment' },
]);

const bottomItems = ref([
  { title: 'Perfil', icon: 'mdi-account-outline', route: '/profile' },
  { title: 'Cerrar Sesión', icon: 'mdi-logout-variant', route: '/logout' },
]);

// Iniciar selectedItem según la ruta actual
const selectedItem = ref(menuItems.value.find(item => item.route === route.path)?.title || '');

const getFirstRouteSegment = (path: string) => {
  // Dividir el path por "/"
  const segments = path.split('/').filter(Boolean) // `filter(Boolean)` elimina los valores vacíos
  return segments.length > 0 ? segments[0] : ''
}

// Observar cambios en la ruta para actualizar la primera parte
const firstRouteSegment = ref(getFirstRouteSegment(route.path))

// Observar cambios en la ruta para actualizar selectedItem
watch(route, (newRoute) => {
  firstRouteSegment.value = getFirstRouteSegment(newRoute.path)
  console.log(firstRouteSegment.value)
  let foundItem = menuItems.value.find(item => getFirstRouteSegment( item.route) === firstRouteSegment.value);
  if(!foundItem){
    foundItem = bottomItems.value.find(item => getFirstRouteSegment( item.route) === firstRouteSegment.value);
  }
  selectedItem.value = foundItem ? foundItem.title : ''; // Actualizar selectedItem
});
onBeforeMount(() => {
  let foundItem = menuItems.value.find(item => getFirstRouteSegment( item.route) === firstRouteSegment.value);
  if(!foundItem){
    foundItem = bottomItems.value.find(item => getFirstRouteSegment( item.route) === firstRouteSegment.value);
  }
  selectedItem.value = foundItem ? foundItem.title : ''; // Actualizar selectedItem
});

const handleItemClick = (item) => {
  if (item.title === 'Cerrar Sesión') {
    users.logout();
    return;
  }
  selectedItem.value = item.title;
  router.push(item.route);
};

</script>

<template>
  <v-navigation-drawer permanent width="250" height="100vh" color="white">
    <div class="d-flex justify-center pa-4">
      <div class="d-flex justify-center pa-4">
        <v-avatar size="80" class="mb-4">
          <img src="@/assets/logo.png" alt="Logo" class="avatar-img" />
        </v-avatar>
      </div>
    </div>
    <v-list nav>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :class="{ 'selected-item': item.title === selectedItem }"
        @click="handleItemClick(item)"
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
          @click="handleItemClick(item)"
          :class="{ 'selected-item': item.title === selectedItem }"
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
  min-height: 50px;
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
