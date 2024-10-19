<script setup>
import {defineProps}  from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <v-card v-for="(item, index) in items" :key="index" class="mb-4" elevation="2">
    <v-row class="d-flex justify-space-between py-4">
      <v-col cols="3"  class="align-center">
        <v-list-item class="align-center">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item>
      </v-col>
      <v-col cols="8" class="d-flex align-center">
        <v-list-item>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item>
      </v-col>
      <v-col class="d-flex align-center" cols="1">
        <v-icon>mdi-chevron-right</v-icon>
      </v-col>
    </v-row>

  </v-card>
</template>

<style scoped>


</style>
