<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      required
    />
    <button v-if="toggleVisibility" type="button" class="toggle-visibility" @click="toggleVisibility">
      {{ type === 'password' ? '👁️‍🗨️' : '👁️' }}
    </button>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  type: String,
  modelValue: String,
  placeholder: String,
  toggleVisibility: Function
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
  position: relative;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--secondary-color);
  border: none;
  border-radius: 0.25rem;
  color: var(--text-color);
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
