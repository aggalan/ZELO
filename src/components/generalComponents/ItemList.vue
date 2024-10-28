<template>
  <v-card class="mt-4 my-card">
    <v-card-title v-if="title" class="text-h6 font-weight-bold pa-4">
      {{ title }}
    </v-card-title>
    <slot></slot>
    <v-list class="list-body pa-0">
      <v-list-item v-for="(item, i) in items" :key="i" class="py-4">
        <v-row align="center" no-gutters>
          <v-col cols="auto" class="mr-4">
            <v-icon v-if="item.icon" :color="item.color || 'black'" size="32">
              {{ item.icon }}
            </v-icon>
            <v-img v-else :src="item.image" alt="Item image" width="32" height="32"></v-img>
          </v-col>
          <v-col class="content-col">
            <div class="d-flex justify-space-between align-center">
              <v-list-item-title class="text-body-1 font-weight-medium text-black mb-1 text-truncate">
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-action-text class="text-caption text-grey ml-2 timestamp">
                {{ item.time }}
              </v-list-item-action-text>
            </div>
            <v-list-item-subtitle class="text-caption text-grey text-truncate">
              {{ item.description }}
            </v-list-item-subtitle>
            <router-link
              v-if="item.link"
              :to="item.link"
              class="link-text linkColor text-caption d-inline-block mt-1"
            >
              {{ linkText }}
            </router-link>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  items: Array,
  linkText: String,
})
</script>

<style scoped>
.my-card {
  overflow: hidden;
}

.list-body {
  max-height: 400px;
  overflow-y: auto;
}

.v-list-item__action-text {
  color: rgba(0, 0, 0, 0.6);
}

.link-text {
  text-decoration: underline;
  cursor: pointer;
}

.content-col {
  min-width: 0; /* This ensures that text truncation works properly */
}

.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

/* Custom scrollbar styles */
.list-body::-webkit-scrollbar {
  width: 8px;
}

.list-body::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.list-body::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.list-body::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Hide timestamp on smaller screens */
@media (max-width: 600px) {
  .timestamp {
    display: none;
  }
}
</style>
