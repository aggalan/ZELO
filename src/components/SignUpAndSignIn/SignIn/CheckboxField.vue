<template>
  <div class="checkbox-group">
    <input
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  modelValue: Boolean
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.checkbox-group {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff; /* White border */
  border-radius: 4px;
  margin-right: 0.5rem;
  cursor: pointer;
  position: relative;
}

input[type="checkbox"]:checked {
  background-color: var(--primary-color);
}

input[type="checkbox"]:checked::after {
  content: '✓';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--checkbox-color);
  font-size: 14px;
}

label {
  color: var(--text-color);
  cursor: pointer;
}
</style>
