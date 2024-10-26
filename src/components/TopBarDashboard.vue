<template>
  <v-app-bar app color="#8B5CF6">
    <v-container class="search-container d-flex align-center">
      <v-btn
        icon
        @click="toggleSearch"
        class="ml-0"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-slide-x-transition>
        <v-autocomplete
          v-if="isSearchVisible"
          v-model="searchQuery"
          :items="filteredRoutes"
          item-title="name"
          item-value="path"
          hide-details
          placeholder="Buscar en la página"
          class="no-underline custom-text-field"
          clearable
          rounded
          @blur="handleBlur"
          ref="searchInput"
          @keyup.esc="toggleSearch"
          @update:model-value="handleSearch"
        >
          <template v-slot:item="{ props, item }">
            <v-list-item v-bind="props" :title="item.raw.name" :subtitle="item.raw.path">
              <template v-slot:prepend>
                <v-icon :icon="item.raw.icon"></v-icon>
              </template>
            </v-list-item>
          </template>
        </v-autocomplete>
      </v-slide-x-transition>
    </v-container>

    <v-container class="d-flex flex-row justify-end">
      <v-btn icon to="/profile">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <div class="d-flex flex-column">
        <span>{{user.name}} {{user.surname}}</span>
        <span class="text-caption grey--text">{{user.email}}</span>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import { useUsersStore } from "@/store/usersStore";
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const isSearchVisible = ref(false);
const searchInput = ref(null);
const userStore = useUsersStore();
const user = userStore.getUserById(userStore.userId);
const router = useRouter();

const routes = [
  { path: '/dashboard', name: 'Inicio', icon: 'mdi-home' },
  { path: '/transference', name: 'Transferencias', icon: 'mdi-bank-transfer' },
  { path: '/investment', name: 'Inversiones', icon: 'mdi-chart-line' },
  { path: '/cards', name: 'Tarjetas', icon: 'mdi-credit-card' },
  { path: '/movements', name: 'Movimientos', icon: 'mdi-swap-horizontal' },
  { path: '/profile', name: 'Perfil', icon: 'mdi-account' },
  { path: '/profile/help', name: 'Ayuda', icon: 'mdi-help-circle' },
  { path: '/profile/settings', name: 'Configuración', icon: 'mdi-cog' },
  { path: '/dashboard/enter', name: 'Ingresar Dinero', icon: 'mdi-cash-plus' },
];

const filteredRoutes = computed(() => {
  if (!searchQuery.value) return routes;
  const query = searchQuery.value.toLowerCase();
  return routes.filter(route =>
    route.name.toLowerCase().includes(query) ||
    route.path.toLowerCase().includes(query) ||
    similarTerms(route.name).some(term => term.includes(query))
  );
});

const similarTerms = (term) => {
  const terms = {
    'Inicio': ['dashboard', 'principal', 'home'],
    'Transferencias': ['enviar dinero', 'pagar', 'transferir'],
    'Inversiones': ['invertir', 'fondos', 'plazo fijo'],
    'Tarjetas': ['credito', 'debito', 'plastico'],
    'Movimientos': ['transacciones', 'historial', 'actividad'],
    'Perfil': ['cuenta', 'usuario', 'datos personales'],
    'Ayuda': ['soporte', 'asistencia', 'faq'],
    'Configuración': ['ajustes', 'preferencias', 'opciones'],
    'Ingresar Dinero': ['depositar', 'cargar saldo', 'agregar fondos'],
  };
  return [term.toLowerCase(), ...(terms[term] || [])];
};

const toggleSearch = async () => {
  isSearchVisible.value = !isSearchVisible.value;
  if (isSearchVisible.value) {
    await nextTick();
    searchInput.value.focus();
  } else {
    searchQuery.value = '';
  }
};

const handleBlur = (event) => {
  if (!searchQuery.value) {
    isSearchVisible.value = false;
  }
};

const handleSearch = (value) => {
  const selectedRoute = routes.find(route => route.path === value);
  if (selectedRoute) {
    router.push(selectedRoute.path);
    searchQuery.value = '';
    isSearchVisible.value = false;
  }
};
</script>

<style scoped>
.custom-search-field {
  width: 100%;
  max-width: 800px;
  transition: all 0.3s ease;
}

.v-btn {
  text-transform: none;
}

.search-container {
  transition: all 0.3s ease;
}

.custom-text-field :deep(.v-field__outline) {
  display: none;
}

.v-app-bar .v-container {
  padding-left: 16px;
}
</style>
