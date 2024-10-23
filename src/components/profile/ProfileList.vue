<template>
  <v-card v-for="(item, index) in items" :key="index" class="category-button">
    <v-row class="d-flex justify-space-between py-2">
      <v-col class="d-flex align-center no-padding">
        <v-icon size="35px">{{ item.icon }}</v-icon>
        <v-list-item-content class="text-left ml-2">
          <v-list-item-title class="font-weight-medium ml-2">{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="ml-2">{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-col>
      <v-col class="d-flex align-center justify-end" cols="auto">
        <v-btn icon href="/help">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.category-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  width: 100%;
  padding: 16px; /* Reduced padding */
  margin-bottom: 12px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}


.v-list-item-title {
  font-size: 19px; /* Smaller font size */
}

.v-list-item-subtitle {
  font-size: 12px; /* Smaller font size */
}



.ml-2 {
  margin-left: 8px; /* Add some space between the icon and the text */
}
</style>
