<template>
  <v-card class="item-list-card">
    <v-card-title class="d-flex justify-space-between align-center text-grey-darken-3">
      {{ title }}
      <ActionButton v-if="buttonText" @click="onButtonClick" :color="firstButtonColor || buttonColor">
        {{ buttonText }}
        <v-icon right>{{ buttonIcon }}</v-icon>
      </ActionButton>
    </v-card-title>
    <v-list class ="list-body">
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-row class="d-flex flex-row w-100 justify-space-around align-center pa-3" cols="12">
          <v-icon :color="item.iconColor || black">{{ item.icon }}</v-icon>
          <v-col class="d-flex flex-column w-33" cols="12" md="5">
            <v-list-item-title class="font-weight-medium text-black">{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption text-black">{{ item.description }}</v-list-item-subtitle>
          </v-col>
          <v-col class="text-subtitle-1 w-25 font-weight-medium text-black" md="3">${{ item.amount }}</v-col>
          <v-col class="w-25" md="2">
            <ActionButton v-if="item.action" :action="item.onActionClick">{{ item.action }}</ActionButton>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
const black = '#000000';
// Props
const props = defineProps({
  title: { type: String, required: true },
  buttonText: { type: String, default: '' },
  buttonIcon: { type: String, default: 'mdi-plus' },
  buttonColor: { type: String, default: 'white' },
  firstButtonColor: { type: String, default: null },
  items: { type: Array, required: true },
  onButtonClick: { type: Function, default: () => {} },
});
</script>

<style scoped>
.item-list-card {
  background-color: #f3f4f6;
  border-radius: 12px;
}
.list-body{
  background: #f3f4f6;
}
</style>
