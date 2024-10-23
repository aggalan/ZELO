<template>
  <v-card class="mb-4 my-card pb-2">
    <v-card-title class="text-grey-darken-3">Acciones rápidas</v-card-title>
    <v-row>
      <v-col
        v-for="(action, i) in quickActions"
        :key="i"
        cols="4"
        class="d-flex justify-center align-center text-grey-darken-3  "
      >
        <div class="quick-action-comp d-flex flex-column text-center justify-center align-center text-grey-darken-4" >
          <ActionButton
            dark
            color="#8B5CF6"
            class="text-capitalize quick-action-btn"
            @click="handleAction(action.text)"
          >
            <v-icon class = "text-white" size="30">{{ action.icon }}</v-icon>
          </ActionButton>
          {{ action.text }}
        </div>
      </v-col>
    </v-row>
    <!-- Dialogo para Link de Cobro -->
    <v-dialog v-model="dialogLink" max-width="500">
      <template v-slot:default="dialogLink">
        <PaymentLinkSection />
      </template>
    </v-dialog>

    <v-dialog v-model="dialogContact" max-width="500">
      <template v-slot:default="dialogContact">
        <AddContactForm />
      </template>
    </v-dialog>

  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import PaymentLinkSection from "@/components/dashboard/enterMoney/PaymentLinkSection.vue";
import AddContactForm from "@/components/transference/AddContactForm.vue";

const quickActions = ref([
  { text: 'link de cobro', icon: 'mdi-link' },
  { text: 'Tus datos', icon: 'mdi-account' },
  { text: 'Añadir contacto', icon: 'mdi-account-plus' },
])
const dialogLink = ref(false)

const dialogContact = ref(false)

const handleAction = (actionText) => {
  if (actionText === 'link de cobro') {
    dialogLink.value = true
  } else if (actionText === 'Tus datos') {
    console.log('Tus datos')
  } else if (actionText === 'Añadir contacto') {
    dialogContact.value = true
  }
  // Agrega más lógica para otras acciones si es necesario
}


</script>

<style scoped>
.quick-action-btn{
  text-transform: none;
  font-size: 10px;
  border-radius: 12px;
  width: 75px;
  margin: 10px;
  height: 75px;
}

.quick-action-comp{
  width: 100%;
}

</style>
