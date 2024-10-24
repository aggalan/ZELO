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
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import PaymentLinkSection from "@/components/dashboard/enterMoney/PaymentLinkSection.vue";
import AddContactForm from "@/components/transference/AddContactForm.vue";

const quickActions = ref([
  { text: 'Link de cobro', icon: 'mdi-link', color: 'primary' },
  { text: 'Tus datos', icon: 'mdi-account', color: 'secondary' },
  { text: 'Añadir contacto', icon: 'mdi-account-plus', color: 'success' },
])
const dialogLink = ref(false)
const dialogContact = ref(false)

const handleAction = (actionText) => {
  if (actionText === 'Link de cobro') {
    dialogLink.value = true
  } else if (actionText === 'Tus datos') {
    console.log('Tus datos')
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
