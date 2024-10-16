<template>
  <ItemListWithButton
  title="Servicios y saldos"
  :items="services"
  buttonText="agregar"
  buttonColor="#8B5CF6"
  first-button-color="white"
  @onButtonClick="goToMovementPage"
  />
</template>

<script setup>
import { ref } from 'vue'
import router from "@/router/router";
import ItemListWithButton from "@/components/generalComponents/ItemListWithButton.vue";
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const services = ref([
  { name: 'Electricidad', dueDate: 'Vence el 15 de Agosto', amount: '20.000', icon: 'mdi-flash', iconColor: 'amber', action: 'Pagar', onActionClick: () => {} },
  { name: 'Personal', dueDate: 'Vence el 15 de Septiembre', amount: '0.0001', icon: 'mdi-cellphone', iconColor: 'blue', action: 'Pagar', onActionClick: () => {} },
  { name: 'Nike Abasto (cuota 2/6)', dueDate: 'Vence hoy', amount: '15.000', icon: 'mdi-shoe-sneaker', iconColor: 'orange', action: 'Pagar', onActionClick: () => {} },
  { name: 'Impuesto PAIS', dueDate: 'De la compra #1356/7', amount: '15.000', icon: 'mdi-bank', iconColor: 'green', action: 'Pagar', onActionClick: () => {} },
  { name: 'Electricidad', dueDate: 'Vence el 21 de Agosto', amount: '20.000', icon: 'mdi-flash', iconColor: 'amber', action: 'Pagar', onActionClick: () => {} },
  { name: 'Electricidad', dueDate: 'Vence el 31 de Agosto', amount: '20.000', icon: 'mdi-flash', iconColor: 'amber', action: 'Pagar', onActionClick: () => {} },
])
const goToMovementPage = () => {
  // Lógica para navegar a otra página
  router.push('/movement'); // Requiere importar useRouter si usas Vue Router
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
