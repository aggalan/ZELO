<template>
  <v-container fluid class="main mx-16 h-100">
    <v-row no-gutters class="fill-height">
      <v-col cols="12" md="7" class="d-flex flex-column justify-center pa-16">
        <h1 class="text-h2 font-weight-bold mb-4 text-white zelo-title">
          Maneja tu<br>
          dinero con<br>
          <span class="zelo-gradient-text">Zelo</span>
        </h1>
        <p class="text-body-1 text-grey-lighten-1 mb-12" style="max-width: 600px;">
          {{ description }}
        </p>
        <div class="d-flex align-center flex-wrap">
          <ActionButton
            color="primary"
            x-large
            class="text-capitalize font-weight-bold mr-4 px-8 d-flex align-center justify-center py-6 mb-2"
            elevation="0"
            rounded
            to="/signup"
            @click="openAccount"
          >
            Abrir una cuenta
          </ActionButton>
          <ActionButton
            class="text-body-2 bg-transparent text-white mb-2"
            @click="downloadApp"
            elevation="0"
            to="/dashboard"
          >
            Descarga la app
          </ActionButton>
        </div>
      </v-col>
      <v-col cols="12" md="5" class="d-flex justify-center align-center">
        <div class="zelo-logo-wrapper">
          <v-img
            :src="logoUrl"
            width="200"
            height="200"
            :class="{ 'zelo-logo-animate': isLogoAnimated }"
            @mouseover="animateLogo"
            @mouseleave="stopLogoAnimation"
          />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const description = ref('Zelo es la revolución de las billeteras virtuales, con su impecable y sencilla interfaz gráfica y la seguridad en tus operación la hacen la mejor billetera vitual del mercado.')
const logoUrl = ref('./src/assets/logo.png')
const isLogoAnimated = ref(false)

const animateLogo = () => {
  isLogoAnimated.value = true
}

const stopLogoAnimation = () => {
  isLogoAnimated.value = false
}

const openAccount = () => {
  console.log('Opening account...')
  // Implement account opening logic here
}

const downloadApp = () => {
  console.log('Downloading app...')
  // Implement app download logic here
}
</script>

<style scoped>

.main {
  //background: linear-gradient(to bottom right, #bc3ed8, #7b61ff);
  //background: #19181E;
  height: 100vh;
  padding: 0;
}


.zelo-title {
  font-size: 4rem;
  line-height: 1.2;
}

.zelo-gradient-text {
  background: linear-gradient(to right, #8B5CF6, #3B82F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.zelo-logo-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.zelo-logo-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(139, 92, 246, 0.2);
  filter: blur(40px);
  border-radius: 50%;
}

.zelo-logo-animate {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 960px) {
  .zelo-title {
    font-size: 3rem;
  }
}

@media (max-width: 600px) {
  .zelo-title {
    font-size: 2.5rem;
  }

  .v-col-md-7 {
    padding: 2rem !important;
  }
}
</style>
