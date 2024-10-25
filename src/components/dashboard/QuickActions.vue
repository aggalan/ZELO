<template>
  <v-card class="quick-actions-card my-card">
    <v-card-text>
      <h2 class="text-h6 font-weight-bold mb-4">Acciones rápidas</h2>
      <v-row dense>
        <v-col v-for="(action, i) in quickActions" :key="i" cols="4">
          <ActionButton
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
          </ActionButton>
        </v-col>
      </v-row>
    </v-card-text>
    <v-dialog v-model="dialogLink" max-width="500">
      <PaymentLinkSection v-model="dialogLink" />
    </v-dialog>
    <v-dialog v-model="dialogContact" max-width="500">
      <AddContactForm v-model="dialogContact" :showCloseButton="true" />
    </v-dialog>
    <my-info-popup :user-data="user" v-model="dialogData" />
  </v-card>


</template>

<script setup>
import { ref } from 'vue'
import PaymentLinkSection from "@/components/dashboard/enterMoney/PaymentLinkSection.vue";
import AddContactForm from "@/components/transference/AddContactForm.vue";
import MyInformation from "@/components/dashboard/MyInformation.vue";
import {useUsersStore} from "@/store/usersStore";
import MyInfoPopup from "@/components/dashboard/MyInfoPopup.vue";
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const quickActions = ref([
  { text: 'Link de cobro', icon: 'mdi-link', color: 'purple' },
  { text: 'Tus datos', icon: 'mdi-account', color: 'purple' },
  { text: 'Añadir contacto', icon: 'mdi-account-plus', color: 'purple' },
])
const dialogLink = ref(false)
const dialogData = ref(false)
const dialogContact = ref(false)

const userStore = useUsersStore()
const user = userStore.getUser()
const toggleDialogData= ()=>{
  dialogData.value = !dialogData.value
}
const handleAction = (actionText) => {
  if (actionText === 'Link de cobro') {
    dialogLink.value = true
  } else if (actionText === 'Tus datos') {
    dialogData.value = true
  } else if (actionText === 'Añadir contacto') {
    dialogContact.value = true
  }
}
</script>

<style scoped>
.quick-actions-card {
  height: 194px;
  padding-bottom: 40px;
}

.quick-action-btn {
  height: 70px;
}
</style>
