<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <div class="input-wrapper">
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
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

:root {
  --input-border: #4B5563;
  --input-background: #374151;
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
