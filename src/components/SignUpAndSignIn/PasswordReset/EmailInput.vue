<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :id="id"
        type="email"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        required
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: String,
  label: String,
  modelValue: String,
  placeholder: String,
  rules: Array,
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: white;
}

.input-wrapper {
  position: relative;
}

input {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--input-background, #1F1F29);
  border-radius: 1rem;
  border: 1px solid var(--input-border, #ccc);
  color: var(--text-color, #fff);
}

input:focus {
  outline: none;
}
</style>
