<template>
  <div class="profile-container">
    <div class="d-flex justify-space-between align-center mb-6">
      <h1 class="text-h4">Perfil</h1>
      <v-btn
        icon
        color="#8B5CF6"
        @click="goToSettings"
        class="settings-btn"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </div>
    <v-card class="mb-6 profile-card" elevation="2">
      <v-card-text class="d-flex align-center">
        <v-avatar color="grey" size="48" class="mr-4">
          <span class="text-h5 white--text">JR</span>
        </v-avatar>
        <div>
          <div class="text-h6">Juan Rodriguez</div>
          <div class="text-subtitle-1 grey--text">juanrodriguez@gmail.com</div>
        </div>
        <v-spacer></v-spacer>
        <v-btn icon class="btn-primary" href="/">
          <v-icon>mdi-export</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>

    <ProfileList :items="profileItems"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ProfileList from "@/components/profile/ProfileList.vue";

const router = useRouter()

const profileItems = ref([
  { icon: 'mdi-account-check', title: 'Accesibilidad', subtitle: 'Accede a las funciones de accesibilidad de la app' },
  { icon: 'mdi-account-details', title: 'Datos de tu cuenta', subtitle: 'Valida y consulta los datos de tu cuenta' },
  { icon: 'mdi-card-account-details', title: 'Información personal', subtitle: 'Información de tu documento de identidad y de tu actividad fiscal' },
  { icon: 'mdi-shield-lock', title: 'Privacidad', subtitle: 'Preferencias y control sobre el uso de tus datos' },
  { icon: 'mdi-help-circle', title: 'Ayuda', subtitle: 'Obtenga ayuda sobre su cuenta' },
])

const goToSettings = () => {
  router.push('/settings')
}
</script>

<style scoped>
.profile-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 16px;
}
.profile-card {
  border-radius: 8px;
}
.settings-btn {
  position: absolute;
  right: 16px;
  top: 90px;
  transition: transform 0.2s ease-in-out;
}
.settings-btn:hover {
  transform: rotate(45deg);
}
</style>
