<template >
  <v-container fluid class="bg-background">
    <v-row>
      <v-col cols="12" md="8">
        <ProfileSection />
      </v-col>
      <v-col cols="12" md="4" class="d-flex">
        <!-- Botón para mostrar/ocultar la sección hacia la derecha -->
        <v-btn icon @click="toggleHelpSection" class="mr-2">
          <v-icon>{{ isHelpVisible ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
        </v-btn>

        <!-- Añadimos animación con transición para HelpSection hacia la derecha -->
        <transition name="slide-right">
          <HelpSection v-if="isHelpVisible" />
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import ProfileSection from './ProfileSection.vue'
import HelpSection from './HelpSection.vue'

const isHelpVisible = ref(true)

const toggleHelpSection = () => {
  isHelpVisible.value = !isHelpVisible.value
}
</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
}

/* Animación personalizada para colapsar hacia la derecha */
.slide-right-enter-active, .slide-right-leave-active {
  transition: all 0.5s ease;
}
.slide-right-enter-from, .slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
