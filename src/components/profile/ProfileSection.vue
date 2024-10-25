<template>
  <v-container class="profile-container">
    <v-card class="mb-6 profile-card elevation-2">
      <v-card-text class="d-flex align-center">
        <v-avatar color="var(--primary)" size="48" class="mr-4">
          <span class="text-h5 text-white">{{ initials }}</span>
        </v-avatar>
        <div>
          <div class="text-h6">{{ user.name }} {{ user.surname }}</div>
          <div class="text-subtitle-1 grey--text">{{ user.email }}</div>
        </div>
        <v-spacer></v-spacer>
        <v-btn
          icon
          color="var(--primary)"
          @click="goToSettings"
          class="settings-btn"
        >
          <v-icon class="text-white">mdi-cog</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>

    <ItemList :items="profileItems" @itemClick="handleItemClick" />
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ItemList from "@/components/generalComponents/SectionList.vue";
import { useUsersStore } from "@/store/usersStore";

const router = useRouter()

const userStore = useUsersStore();
const user = userStore.getUserById(userStore.userId);

const initials = computed(() => {
  const nameInitial = user.name ? user.name.charAt(0).toUpperCase() : '';
  const surnameInitial = user.surname ? user.surname.charAt(0).toUpperCase() : '';
  return nameInitial + surnameInitial;
});

const profileItems = ref([
  { icon: 'mdi-account-check', title: 'Accesibilidad', subtitle: 'Accede a las funciones de accesibilidad de la app', route: '/accessibility' },
  { icon: 'mdi-account-details', title: 'Datos de tu cuenta', subtitle: 'Valida y consulta los datos de tu cuenta', route: '/account-data' },
  { icon: 'mdi-card-account-details', title: 'Información personal', subtitle: 'Información de tu documento de identidad y de tu actividad fiscal', route: '/personal-info' },
  { icon: 'mdi-shield-lock', title: 'Privacidad', subtitle: 'Preferencias y control sobre el uso de tus datos', route: '/privacy' },
  { icon: 'mdi-help-circle', title: 'Ayuda', subtitle: 'Obtenga ayuda sobre su cuenta', route: 'profile/help' },
])

const goToSettings = () => {
  router.push('/settings')
}

const handleItemClick = (item) => {
  router.push(item.route)
}
</script>

<style scoped>
.profile-container {
  //max-width: 600px;
  margin: 0 auto;
  padding: 16px;
}
.profile-card {
  border-radius: 8px;
}
.settings-btn {
  transition: transform 0.2s ease-in-out;
}
.settings-btn:hover {
  transform: rotate(45deg);
}
</style>
