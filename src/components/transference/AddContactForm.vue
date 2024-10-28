<template>
  <v-card class="rounded-lg">
    <div class="header">
      <v-card-title>Agregar nuevo contacto</v-card-title>
      <v-btn v-if="showCloseButton" icon @click="closeDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-card-text>
      <v-form @submit.prevent="addContact">
        <v-text-field
          v-model="newContact.name"
          label="Nombre"
          required
          class="mb-4 rounded-input"
        ></v-text-field>
        <v-text-field
          v-model="newContact.email"
          label="Email"
          type="email"
          required
          class="mb-4 rounded-input"
        ></v-text-field>
        <v-text-field
          v-model="newContact.phone"
          label="Teléfono"
          type="tel"
          class="mb-4 rounded-input"
        ></v-text-field>
        <v-text-field
          v-model="newContact.cbu"
          label="CBU/Alias"
          required
          class="mb-4 rounded-input"
        ></v-text-field>
        <ActionButton
          dark
          type="submit"
          block
          class="text-white"
        >
          Agregar contacto
        </ActionButton>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import { useUsersStore } from "@/store/usersStore";

const props = defineProps({
  showCloseButton: {
    type: Boolean,
    default: false,
  },
});

const newContact = ref({
  name: '',
  email: '',
  phone: '',
  cbu: ''
})

const addContact = () => {
  useUsersStore().addContact(newContact.value)
  newContact.value = { name: '', email: '', phone: '', cbu: '' }
}

const emit = defineEmits(['update:modelValue']);

const closeDialog = () => {
  emit('update:modelValue', false);
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.mb-4 {
  margin-bottom: var(--spacing-4);
}

.rounded-input .v-input__control {
  border-radius: var(--border-radius);
}
</style>
