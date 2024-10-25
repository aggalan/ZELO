<template>
  <v-text-field
    :value="myValue"
    readonly
    filled
    rounded
    dense
    class="mb-4"
    hide-details
  >
    <template v-slot:append>
      <div class="d-flex align-center">
        <v-btn icon small @click="$emit('copy')">
          <v-icon small>mdi-content-copy</v-icon>
        </v-btn>
      </div>
    </template>
  </v-text-field>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  canEdit: {
    type: Boolean,
    default: false,
  },
});
const myValue = ref(props.value);

defineEmits(['edit', 'copy']);
</script>
