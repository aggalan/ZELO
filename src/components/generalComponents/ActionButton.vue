<template>
  <v-btn
      :color="color"
      text
      class="pay-btn rounded-lg"
      @click="handleClick"
      :class = "customClass"
  >
    <slot></slot>
  </v-btn>
</template>

<script setup>

const props = defineProps({
  color: {
    type: String,
    default: 'var(--primary)'
  },
  action: {
    type: Function,
    default: null
  },
  customClass: {
    type: String,
    default: ''
  }
});

const handleClick = () => {
  if(props.action)
    props.action();
};
</script>

<style scoped>
.pay-btn {
  font-size: 12px;
}
</style>
