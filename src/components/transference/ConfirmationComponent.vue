<template>
  <v-dialog persistent max-width="500px">
    <v-card class="my-card">
      <v-card-title class="text-h5">Confirmar Transferencia</v-card-title>
      <v-card-text>
        <div >CBU / ALIAS: {{ cbuAlias }}</div>
        <div>Monto: ${{ amount }}</div>
        <div>Concepto: {{ concept }}</div>
      </v-card-text>
      <v-col>
        <v-row class="d-flex align-center justify-center ma-2 mr-8 ml-8"><ActionButton block @click="confirm">Confirmar</ActionButton></v-row>
        <v-row class="d-flex align-center justify-center ma-2 mr-8 ml-8"><ActionButton block color="amber" @click="cancel">Cancelar</ActionButton></v-row>
      </v-col>

    </v-card>
  </v-dialog>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const props = defineProps({
  cbuAlias: String,
  amount: [String, Number],
  concept: String,
})

const emit = defineEmits(['confirm', 'cancel'])

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
}
</script>
