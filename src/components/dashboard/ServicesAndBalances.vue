<template>
  <v-card class="services-card">
    <v-card-title class="d-flex justify-space-between align-center text-grey-darken-3">
      Servicios y Saldos
      <v-btn dark class="add-btn text-black">
        <v-icon left>mdi-plus</v-icon>
        Agregar
      </v-btn>
    </v-card-title>
    <v-list class = "services-card">
      <v-list-item v-for="(service, i) in services" :key="i">
        <v-list-item-avatar>
          <v-icon :color="service.color">{{ service.icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="font-weight-medium text-black">{{ service.name }}</v-list-item-title>
          <v-list-item-subtitle class="text-caption text-black">{{ service.dueDate }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action flex col="2">
          <div class="text-right">
            <div class="text-subtitle-1 font-weight-medium text-black">${{ service.amount }}</div>
            <v-btn color="#8B5CF6" text small class="pay-btn">Pagar</v-btn>
          </div>
        </v-list-item-action>
      </v-list-item>
    </v-list>

  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const services = ref([
  { name: 'Electricidad', dueDate: 'Vence el 15 de Agosto', amount: '20.000', icon: 'mdi-flash', color: 'amber' },
  { name: 'Personal', dueDate: 'Vence el 15 de Septiembre', amount: '0.0001', icon: 'mdi-cellphone', color: 'blue' },
  { name: 'Nike Abasto (cuota 2/6)', dueDate: 'Vence hoy', amount: '15.000', icon: 'mdi-shoe-sneaker', color: 'orange' },
  { name: 'Impuesto PAIS', dueDate: 'De la compra #1356/7', amount: '15.000', icon: 'mdi-bank', color: 'green' },
  { name: 'Electricidad', dueDate: 'Vence el 21 de Agosto', amount: '20.000', icon: 'mdi-flash', color: 'amber' },
  { name: 'Electricidad', dueDate: 'Vence el 31 de Agosto', amount: '20.000', icon: 'mdi-flash', color: 'amber' },
])
</script>

<style scoped>
.services-card {
  background-color: #f3f4f6;
  border-radius: 12px;
  mso-border-shadow: yes;
}
.add-btn {
  text-transform: none;
  font-size: 14px;
  background-color: #f0f0f0
}
.v-list-item__avatar {
  background-color: #EDE9FE;
}
.v-list-item__avatar .v-icon {
  font-size: 20px;
}
.pay-btn {
  text-transform: none;
}
</style>
