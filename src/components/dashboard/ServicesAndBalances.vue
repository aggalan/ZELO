<template>
  <v-card class="services-card">
    <v-card-title class="d-flex justify-space-between align-center text-grey-darken-3">
      Servicios y Saldos
      <ActionButton color = "white" class="ma-3">
        Agregar
        <v-icon right>mdi-plus</v-icon>
      </ActionButton>
    </v-card-title>
    <v-list class = "services-card">
      <v-list-item v-for="(service, i) in services" :key="i"  >
        <v-row class="d-flex flex-row w-100 justify-space-around align-center pa-3" cols="12">
          <v-icon :color="service.color" class="align-center">{{ service.icon }}</v-icon>
          <v-col class="d-flex flex-column w-33" cols="12" md="5">
            <v-list-item-title class="font-weight-medium text-black">{{ service.name }}</v-list-item-title>
            <v-list-item-subtitle class="text-caption text-black">{{ service.dueDate }}</v-list-item-subtitle>
          </v-col>
          <v-col class="text-subtitle-1 w-25 font-weight-medium text-black" md="3">${{ service.amount }}</v-col>
          <v-col class="w-25" md="2">
            <ActionButton :action="goToLanding">Pagar</ActionButton>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>

  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import router from "@/router/router";

const services = ref([
  { name: 'Electricidad', dueDate: 'Vence el 15 de Agosto', amount: '20.000', icon: 'mdi-flash', color: 'amber' },
  { name: 'Personal', dueDate: 'Vence el 15 de Septiembre', amount: '0.0001', icon: 'mdi-cellphone', color: 'blue' },
  { name: 'Nike Abasto (cuota 2/6)', dueDate: 'Vence hoy', amount: '15.000', icon: 'mdi-shoe-sneaker', color: 'orange' },
  { name: 'Impuesto PAIS', dueDate: 'De la compra #1356/7', amount: '15.000', icon: 'mdi-bank', color: 'green' },
  { name: 'Electricidad', dueDate: 'Vence el 21 de Agosto', amount: '20.000', icon: 'mdi-flash', color: 'amber' },
  { name: 'Electricidad', dueDate: 'Vence el 31 de Agosto', amount: '20.000', icon: 'mdi-flash', color: 'amber' },
])
const goToLanding = () => {
  // Lógica para navegar a otra página
  router.push('/'); // Requiere importar useRouter si usas Vue Router
};
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
  background-color: #f0f0f0;
  border-radius: 12px;
  margin: 10px;
}
.v-list-item__avatar {
  background-color: #EDE9FE;
}

.v-list-item__avatar .v-icon {
  font-size: 20px;
}

</style>
