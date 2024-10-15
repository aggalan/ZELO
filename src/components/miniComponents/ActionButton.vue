<template>
  <v-btn
      :color="color"
      text
      rounded
      class="pay-btn"
      @click="handleClick"
  >
    <slot></slot> <!-- Esto permitirá pasar texto u otros elementos dentro del botón -->
  </v-btn>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: '#8B5CF6' // Color por defecto
  },
  action: {
    type: Function,
    required: true // La acción es obligatoria
  }
});

const handleClick = () => {
  if(props.action)
    props.action();
  // Ejecuta la acción pasada como prop
};
</script>

<style scoped>
.pay-btn {
  
}
</style>
