<template>
  <v-card class="item-list-card">
    <slot>

    </slot>
    <v-list class="list-body">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        @click="selectItem(item,i)"
        :class="{ 'selected-item': useSelectedText && selectedItem === i }"
      >
        <v-row class="d-flex flex-row w-100 justify-space-around align-center pa-3" cols="12">
          <v-col md="1">
            <v-icon :color="item.iconColor || black">{{ item.icon }}</v-icon>
          </v-col>
          <v-col class="d-flex flex-column w-33" cols="12" md="3">
            <v-list-item-title class="font-weight-medium text-black">{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption text-black">{{ item.description }}</v-list-item-subtitle>
          </v-col>
          <v-col class="text-subtitle-1 w-25 font-weight-medium text-black" md="4">${{ item.amount }}</v-col>
          <v-col class="d-flex justify-end w-25" md="4">
            <router-link v-if="useLink" :to="investment/all" class="link-text ">
              {{buttonText}}
            </router-link>
            <ActionButton v-else
              v-if="buttonText"
              @click="selectItem(item, i)"
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
  selectedTextColor:{type: String, default: 'white'},
  useLink: { type: Boolean, default: false },
});

// Estado reactivo para manejar el ítem seleccionado
const selectedItem = ref(null);

// Función para seleccionar un ítem de la lista
const selectItem = (item, index) => {
  selectedItem.value = index;
  props.onButtonClick(item);
};
</script>

<style scoped>
.item-list-card {
  background-color: #f3f4f6;
  border-radius: 12px;
}
.link-text {
  color: #9664FF;
  text-decoration: underline;
  cursor: pointer;
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
