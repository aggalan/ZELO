<template>
  <v-card class="item-list-card">
    <slot>

    </slot>
    <v-list class="list-body">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        @click="selectItem(i)"
        :class="{ 'selected-item': useSelectedText && selectedItem === i }"
      >
        <v-row class="d-flex flex-row w-100 justify-space-around align-center pa-3" cols="12">
          <v-icon :color="item.iconColor || black">{{ item.icon }}</v-icon>
          <v-col class="d-flex flex-column w-33" cols="12" md="5">
            <v-list-item-title class="font-weight-medium text-black">{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption text-black">{{ item.description }}</v-list-item-subtitle>
          </v-col>
          <v-col class="text-subtitle-1 w-25 font-weight-medium text-black" md="3">${{ item.amount }}</v-col>
          <v-col class="w-25" md="2">
            <ActionButton
              v-if="buttonText"
              @click="selectItem(i)"
              :color="useSelectedText && selectedItem === i ? selectedColor : buttonColor"
            >
              {{ useSelectedText && selectedItem === i ? selectedText : buttonText }}
            </ActionButton>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>

  </v-card>
</template>

<script setup>
import { ref } from 'vue';
import ActionButton from "@/components/generalComponents/ActionButton.vue";

// Props
const props = defineProps({
  buttonText: { type: String, default: '' },
  buttonIcon: { type: String, default: 'mdi-plus' },
  buttonColor: { type: String, default: 'white' },
  firstButtonColor: { type: String, default: null },
  items: { type: Array, required: true },
  onButtonClick: { type: Function, default: () => {} },
  selectedText: { type: String, default: null },
  useSelectedText: { type: Boolean, default: false },
  selectedColor:{type: String, default: 'grey'},
  selectedTextColor:{type: String, default: 'white'}
});

// Estado reactivo para manejar el ítem seleccionado
const selectedItem = ref(null);

// Función para seleccionar un ítem de la lista
const selectItem = (index) => {
  selectedItem.value = index;
};
</script>

<style scoped>
.item-list-card {
  background-color: #f3f4f6;
  border-radius: 12px;
}

.list-body {
  background: #f3f4f6;
}


.additional-content {
  padding: 10px;
  background-color: #e0f2f1;
  border-radius: 8px;
  margin-top: 10px;
}
</style>
