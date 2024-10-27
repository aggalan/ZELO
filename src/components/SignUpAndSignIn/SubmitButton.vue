<template>
  <ActionButton type="submit" class="submit-btn ">Confirmar</ActionButton>
</template>

<style scoped>
.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary);
  color: var(--text-color);
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  height: 50px;
}
</style>
<script setup lang="ts">
import ActionButton from "@/components/generalComponents/ActionButton.vue";
</script>
