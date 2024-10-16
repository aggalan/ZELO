<template>
  <v-card class="my-card ma-3">
    <v-card-title class="ma-3">Operar</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <ActionButton block color="#49475A" class="oper-button">
            <v-icon left>mdi-cash-plus</v-icon>
            Invertir
          </ActionButton>

        </v-col>

        <v-col cols="6">
          <ActionButton block color="#49475A" class="oper-button">
            <v-icon left>mdi-cash-minus</v-icon>
            Rescatar
          </ActionButton>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineComponent } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

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
.oper-button {
  margin-top: 10px;
}
</style>
