<template>
  <div>
    <h1 class="text-h4 mb-6">Perfil</h1>
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
import ProfileList from "@/components/profile/ProfileList.vue";

const profileItems = ref([
  { icon: 'mdi-account-check', title: 'Accesibilidad', subtitle: 'Accede a las funciones de accesibilidad de la app' },
  { icon: 'mdi-account-details', title: 'Datos de tu cuenta', subtitle: 'Valida y consulta los datos de tu cuenta' },
  { icon: 'mdi-card-account-details', title: 'Información personal', subtitle: 'Información de tu documento de identidad y de tu actividad fiscal' },
  { icon: 'mdi-shield-lock', title: 'Privacidad', subtitle: 'Preferencias y control sobre el uso de tus datos' },
  { icon: 'mdi-help-circle', title: 'Ayuda', subtitle: 'Obtenga ayuda sobre su cuenta' },
])
</script>

<style scoped>
.profile-card {
  border-radius: 8px;
}
</style>
