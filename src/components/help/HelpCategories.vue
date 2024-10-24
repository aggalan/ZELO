<template>
  <v-list>
    <v-list-item
      v-for="category in categories"
      :key="category.title"
      class="mb-4 rounded-lg"
      style="background-color: white;"
    >
      <v-btn
        block
        outlined
        rounded
        class="category-button"
        @click="navigateToCategory(category)"
      >
        <v-list-item-icon class="left-icon">
          <v-icon :color="primaryColor" size="35px">{{ category.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium">{{ category.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ category.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="right-icon">
          <v-btn icon @click="navigateToCategory(category)">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-btn>
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const router = useRouter()
const primaryColor = 'primary'

const navigateToCategory = (category) => {
  console.log(`Navigating to ${category.title}`)
}
</script>
<style scoped>
.category-button {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 32px;
  margin-bottom: 0; /* Reduce the margin to decrease space between buttons */
  margin-top: 0;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  max-width: 400px; /* Set a smaller maximum width */
}

.left-icon {
  margin-right: 16px;
}

.right-icon {
  position: absolute; /* Position the chevron button absolutely */
  right: 16px; /* Adjust the value as needed */
}

.category-button .v-list-item-icon,
.category-button .v-list-item-content,
.category-button .v-list-item-action {
  margin: 0;
}
</style>
