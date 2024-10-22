<template>
  <p v-if="visible" class="error-message">{{ message }}</p>
</template>

<script setup>
defineProps({
  visible: Boolean,
  message: String
})
</script>

<style scoped>
.error-message {
  color: var(--error-color);
  margin-top: 0.5rem;
}
</style>
