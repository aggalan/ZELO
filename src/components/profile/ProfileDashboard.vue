<template>
  <v-container fluid class="bg-background d-flex justify-center align-center profile-container">
    <v-row class="d-flex justify-center align-center">
      <v-col cols="12" md="8">
        <ProfileSection />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import ProfileSection from './ProfileSection.vue'
import HelpSection from '@/components/help/HelpPage.vue'

const isHelpVisible = ref(false)

const toggleHelpSection = () => {
  isHelpVisible.value = !isHelpVisible.value
}
</script>

<style>

.profile-container {
  margin-top: 50px; /* Ajusta este valor según tus necesidades */
}
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
}

.fill-height {
  height: 100vh; /* Full viewport height */
}
</style>
