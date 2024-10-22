<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <div class="input-wrapper">
      <input
        :id="id"
        :type="inputType"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        required
      />
      <button
        v-if="type === 'password'"
        type="button"
        class="toggle-visibility"
        @click="toggleVisibility"
      >
        {{ showPassword ? '👁️' : '👁️‍🗨️' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  id: String,
  label: String,
  type: {
    type: String,
    default: 'text'
  },
  modelValue: String,
  placeholder: String,
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

const toggleVisibility = () => {
  showPassword.value = !showPassword.value
}

const inputType = computed(() => {
  return props.type === 'password' && showPassword.value ? 'text' : props.type
})
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.input-wrapper {
  position: relative;
  border-radius: 0.25rem;
  background-color: var(--input-background);
}

input {
  width: 100%;
  padding: 0.75rem;
  background-color: transparent;
  border-radius: 1rem;
  border: 1px solid var(--input-border, #ccc);
  color: var(--text-color);
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
