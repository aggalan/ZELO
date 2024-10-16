<template>
  <v-card>
    <v-card-title>Operar</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-btn block color="#4B5563" dark class="text-none">
            <v-icon left>mdi-cash-plus</v-icon>
            Invertir
          </v-btn>
        </v-col>

        <v-col cols="6">
          <v-btn block outlined color="#4B5563" class="text-none">
            <v-icon left>mdi-cash-minus</v-icon>
            Rescatar
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineComponent } from 'vue'

defineComponent({
  name: 'OperateButtons',
})
</script>

<style scoped>
.v-btn {
  text-transform: none;
  height: 48px;
  font-size: 16px;
}
</style>
