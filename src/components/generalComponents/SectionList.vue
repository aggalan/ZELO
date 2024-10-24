<template>
  <v-list class="pa-0">
    <v-card
      v-for="(item, index) in items"
      :key="index"
      class="mb-4 rounded-lg elevation-1 item-card aux"
      @click="handleItemClick(item)"
    >
      <v-list-item>
        <template v-slot:prepend>
          <v-icon class="mr-10" :color="iconColor" size="35">{{ item.icon }}</v-icon>
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium text-body-1">{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="text-caption">{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
        </template>
        <template v-slot:append>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-list-item>
    </v-card>
  </v-list>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  iconColor: {
    type: String,
    default: `var(--primary)`
  }
});

const emit = defineEmits(['itemClick']);

const handleItemClick = (item) => {
  emit('itemClick', item);
};
</script>

<style scoped>
.item-card {
  transition: background-color 0.3s ease;
}

.aux {
  height: 80px;
}

.item-card:hover {
  background-color: #f5f5f5;
}

.v-list-item-title {
  font-size: 16px;
  line-height: 1.2;
}

.v-list-item-subtitle {
  font-size: 14px;
  line-height: 1.2;
}

.v-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.v-list-item__content {
  flex: 1;
  margin-right: 16px;
}

.v-list-item__append {
  margin-left: auto;
}
</style>
