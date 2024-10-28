<template>
  <v-app-bar app elevation="0" color="transparent" height="90px" class="d-flex">
    <div class="d-flex align-center justify-space-between w-100 mx-10">
      <router-link class="text-h4 font-weight-bold text-white zelo-btn no-underline" to="/" @click.native="resetSlider">Zelo</router-link>

      <div class="d-none d-md-flex justify-start flex-grow-1 position-relative options-container">
        <div class="slider" :style="sliderStyle"></div>
        <router-link
          v-for="(item, index) in menuItems"
          :key="item.name"
          :to="item.route"
          class="text-body-1 text-grey-lighten-1 mx-3 no-underline"
          @click.native="moveSlider(index, $event)"
        >
          {{ item.name }}
        </router-link>
      </div>

      <router-link
        class="text-white text-body-1 font-weight-medium no-underline custom-margin"
        to="/login"
        @click.native="resetSlider"
      >
        Iniciar Sesión
      </router-link>
      <router-link
        class="text-white text-body-1 font-weight-medium no-underline custom-margin"
        to="/signup"
        @click.native="resetSlider"
      >
        Registrarse
      </router-link>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const menuItems = ref([
  { name: 'Legales', route: '/legales' },
  { name: 'Caracteristicas', route: '/features' },
  { name: 'Contáctanos', route: '/contactanos' },
  { name: 'FAQ', route: '/faq' },
  { name: 'Sobre nosotros', route: '/sobre-nosotros' }
])
const sliderPosition = ref(0)
const sliderWidth = ref(0)

const moveSlider = (index: number, event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  sliderPosition.value = target.offsetLeft
  sliderWidth.value = target.offsetWidth
}

const resetSlider = () => {
  sliderPosition.value = 0
  sliderWidth.value = 0
}

const sliderStyle = computed(() => ({
  transform: `translateX(${sliderPosition.value}px)`,
  width: `${sliderWidth.value}px`
}))
</script>

<style scoped>
.v-btn {
  text-transform: none;
  position: relative;
  z-index: 1;
}

.custom-margin {
  margin-left: 1rem;
}

.v-app-bar {
  padding: 30px;
  height: 90px;
}

.options-container {
  padding-left: 60px;
}

.slider {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: var(--primary);
  transition: transform 0.3s ease, width 0.3s ease;
  z-index: 0;
}

.zelo-btn {
  background-color: transparent !important;
  box-shadow: none !important;
}

.no-underline {
  text-decoration: none;
}

.text-h4 {
  font-size: 4rem;
}

.text-body-1 {
  font-size: 3rem;
}

.mx-3 {
  margin-left: 1rem;
  margin-right: 1rem;
}

@media (max-width: 959px) {
  .v-app-bar-title {
    flex-grow: 1;
  }
}
</style>
