<template>
  <v-card class="quick-actions-card">
    <v-card-text>
      <h2 class="text-h6 font-weight-bold mb-4">Acciones rápidas</h2>
      <v-row dense>
        <v-col v-for="(action, i) in quickActions" :key="i" cols="4">
          <v-btn
            @click="handleAction(action.text)"
            :color="action.color"
            class="quick-action-btn"
            block
            variant="tonal"
          >
            <div class="d-flex flex-column align-center">
              <v-icon size="24" class="mb-1">{{ action.icon }}</v-icon>
              <span class="text-caption text-center">{{ action.text }}</span>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <v-dialog v-model="dialogLink" max-width="500">
      <PaymentLinkSection />
    </v-dialog>
    <v-dialog v-model="dialogContact" max-width="500">
      <AddContactForm />
    </v-dialog>
    <v-dialog v-model="dialogData" max-width="500">
      <template v-slot:default="dialogData">
        <v-card class="my-card">
          <v-card-title>
            <span class="text-h5"> Mis datos </span>
          </v-card-title>
          <v-card-text>
              CBU: {{ user.cbu }}
              <br>
              Alias: {{ user.alias }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="deep-purple" @click="toggleDialogData">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-card>


</template>

<script setup>
import { ref } from 'vue'
import PaymentLinkSection from "@/components/dashboard/enterMoney/PaymentLinkSection.vue";
import AddContactForm from "@/components/transference/AddContactForm.vue";
import MyInformation from "@/components/dashboard/MyInformation.vue";
import {useUsersStore} from "@/store/usersStore";

const quickActions = ref([
  { text: 'Link de cobro', icon: 'mdi-link', color: 'primary' },
  { text: 'Tus datos', icon: 'mdi-account', color: 'secondary' },
  { text: 'Añadir contacto', icon: 'mdi-account-plus', color: 'success' },
])
const dialogLink = ref(false)
const dialogData = ref(false)
const dialogContact = ref(false)

const userStore = useUsersStore()
const user = userStore.getUserById(userStore.userId)
const toggleDialogData= ()=>{
  dialogData.value = !dialogData.value
}
const handleAction = (actionText) => {
  if (actionText === 'Link de cobro') {
    dialogLink.value = true
  } else if (actionText === 'Tus datos') {
    toggleDialogData()
  } else if (actionText === 'Añadir contacto') {
    dialogContact.value = true
  }
}
</script>

<style scoped>
.quick-actions-card {
  background: white;
  border-radius: 16px;
  height: 194px;
  padding-bottom: 40px;
}

.quick-action-btn {
  border-radius: 12px;
  height: 70px;
  font-size: 12px;
}
</style>
