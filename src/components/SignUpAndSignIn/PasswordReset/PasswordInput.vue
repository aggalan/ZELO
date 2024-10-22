<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :id="id"
        :type="showPassword ? 'text' : 'password'"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        required
      />
      <button type="button" class="toggle-visibility" @click="toggleVisibility">
        {{ showPassword ? '👁️' : '👁️‍🗨️' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  id: String,
  label: String,
  modelValue: String,
  placeholder: String,
})

defineEmits(['update:modelValue'])

const showPassword = ref(false)

const toggleVisibility = () => {
  showPassword.value = !showPassword.value
}
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
  //border: 1px solid var(--input-border);
  //border-radius: 1rem;
  //background-color: var(--input-background);
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

.toggle-visibility {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
}
</style>
