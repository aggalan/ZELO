<template>
  <v-dialog v-model="dialog" max-width="400px">
    <v-card class="rounded-lg">
      <v-card-title class="d-flex justify-space-between align-center pa-4">
        <span class="text-h5 font-weight-bold">Tus Datos</span>
        <v-btn icon @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pa-4">
        <v-form>
          <div class="field-container mb-4">
            <span class="field-title">Nombre y Apellido</span>
            <div class="field-content">
              <v-text-field
                v-model="userData.name"
                readonly
                class="rounded-input"
              />
              <v-btn class = "mb-5 ml-2" icon @click="copyToClipboard(userData.name)">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="field-container mb-4">
            <span class="field-title">Alias</span>
            <div class="field-content">
              <v-text-field
                v-model="userData.alias"
                readonly
                class="rounded-input"
              />
              <v-btn class = "mb-5 ml-2" icon @click="copyToClipboard(userData.alias)">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="field-container mb-4">
            <span class="field-title">CBU</span>
            <div class="field-content">
              <v-text-field
                v-model="userData.cbu"
                readonly
                class="rounded-input"
              />
              <v-btn class = "mb-5 ml-2" icon @click="copyToClipboard(userData.cbu)">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </div>
          </div>
          <div class="field-container mb-4">
            <span class="field-title">DNI</span>
            <div class="field-content">
              <v-text-field
                v-model="userData.dni"
                readonly
                class="rounded-input"
              />
              <v-btn icon class = "mb-5 ml-2" @click="copyToClipboard(userData.dni)">
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </div>
          </div>
        </v-form>
      </v-card-text>
      <ActionButton
        color="#8B5CF6"
        class="text-capitalize font-weight-bold ma-3"
        height="48"
        @click="shareData"
      >
        COMPARTIR
      </ActionButton>
    </v-card>
  </v-dialog>
</template>

<script setup>
import {ref, watch} from 'vue';
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import {useUsersStore} from "@/store/usersStore";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  userData: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const dialog = ref(props.modelValue);

const closeDialog = () => {
  emit('update:modelValue', false);
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text);
};

const shareData = () => {
  console.log('Sharing data:', props.userData);
};

watch(() => props.modelValue, (newValue) => {
  dialog.value = newValue;
});

watch(dialog, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style scoped>
.v-card {
  border-radius: 16px;
}

.field-container {
  margin-bottom: var(--spacing-4);
}

.field-title {
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
}

.field-content {
  display: flex;
  align-items: center;
}

.rounded-input .v-input__control {
  border-radius: var(--border-radius);
  flex-grow: 1;
}
</style>
