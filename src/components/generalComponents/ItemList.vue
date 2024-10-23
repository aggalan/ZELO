<template>
  <v-card class="mt-4 reusable-card">
    <slot>
    </slot>
    <v-list two-line class ="list-body">
      <v-list-item v-for="(item, i) in items" :key="i">
        <v-row class="d-flex flex-row w-100 justify-end align-center pa-3" cols="12">
          <v-col cols="12" md="2">
            <v-icon v-if="item.icon" :color="item.color || black">{{ item.icon }}</v-icon>
            <v-img v-else :src="item.image" alt="Item image"></v-img>
          </v-col>
          <v-col md="5">
            <v-list-item-title class="text-black">{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle class="text-grey">{{ item.description }}</v-list-item-subtitle>
            <router-link :to="item.link" class="link-text linkColor" v-if="item.link">
              {{ linkText }}
            </router-link>
          </v-col>
          <v-col md="5" class="d-flex justify-end">
            <v-list-item-action class="text-grey">{{ item.time }}</v-list-item-action>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import {computed} from 'vue'


const props = defineProps({
  title: String,
  items: Array,
  linkText: String,
})

const black = 'black'

</script>

<style scoped>
.reusable-card {
  background: #f3f4f6;
  border-radius: 12px;
  color: black;
}
.list-body {
  background: #f3f4f6;
}

.v-list-item__action-text {
  color: rgba(0, 0, 0, 0.6);
}

.link-text {
  text-decoration: underline;
  cursor: pointer;
}
</style>
