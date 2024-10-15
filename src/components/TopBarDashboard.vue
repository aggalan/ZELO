<template>
  <v-app-bar app color="#8B5CF6" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-avatar size="32" class="mr-2">
        <v-img src="../assets/logo.png" alt="Logo"></v-img>
      </v-avatar>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
    <v-btn text>Juan Rodriguez</v-btn>
    <v-text-field
      hide-details
      prepend-icon="mdi-magnify"
      single-line
      placeholder="Buscar en la página"
      class="ml-4 search-field"
    ></v-text-field>
  </v-app-bar>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'TopBar',
})
</script>

<style scoped>
.search-field {
  max-width: 300px;
}
.search-field ::v-deep .v-input__slot {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-radius: 20px;
}
.search-field ::v-deep .v-input__prepend-inner {
  margin-top: 11px;
}
.v-btn {
  text-transform: none;
}
</style>
