<template>
  <div v-if="visible" class="success-message">
    {{ message }}
  </div>
</template>

<script setup>

const props = defineProps({
  visible: Boolean,
  message: String
})
</script>

<style scoped>
.success-message {
  color: green;
  margin-top: 1rem;
}
</style>
