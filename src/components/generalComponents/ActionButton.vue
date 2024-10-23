<template>
  <v-btn
      :color="color"
      text
      class="pay-btn rounded-lg"
      @click="handleClick"
      :class = "customClass"
  >
    <slot></slot> <!-- Esto permitirá pasar texto u otros elementos dentro del botón -->
  </v-btn>
</template>

<script setup>

const props = defineProps({
  color: {
    type: String,
    default: '#8B5CF6' // Color por defecto
  },
  action: {
    type: Function,
    default: null // La acción es obligatoria
  },
  customClass: {
    type: String, // Puede ser una cadena de clases CSS
    default: ''
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
  text-transform: none;
  font-size: 12px;
}
</style>
