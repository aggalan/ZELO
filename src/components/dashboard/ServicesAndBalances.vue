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
      <v-list-item v-for="(service, i) in services" :key="i" >
        <v-container class="d-flex flex-row w-100 justify-space-between align-center">
          <v-icon :color="service.color" class="align-center">{{ service.icon }}</v-icon>
          <v-container class="d-flex flex-column w-33">
            <v-list-item-title class="font-weight-medium text-black">{{ service.name }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption text-black">{{ service.dueDate }}</v-list-item-subtitle>
          </v-container>
          <v-container class="text-subtitle-1 w-25 font-weight-medium text-black">${{ service.amount }}</v-container>
          <v-container class="w-25">
            <v-btn color="#8B5CF6" text="true" small class="pay-btn">Pagar</v-btn>
          </v-container>
        </v-container>
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
