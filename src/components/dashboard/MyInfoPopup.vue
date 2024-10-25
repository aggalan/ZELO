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
          <span>Nombre y Apellido</span>
          <data-field
            can-edit
            @edit="editName"
            :value="userData.name + ' ' +  userData.surname"
            @copy="copyToClipboard(userData.name, 'name')"
          />
          <span>Alias</span>
          <data-field
            can-edit
            @edit="editAlias"
            :value="userData.alias"
            @copy="copyToClipboard(userData.alias, 'alias')"
            :has-red-dot="true"
          />
          <span>CBU</span>
          <data-field
            :value="userData.cbu"
            @copy="copyToClipboard(userData.cbu, 'cbu')"
          />
          <span>DNI</span>
          <data-field
            :value="userData.dni"
            @copy="copyToClipboard(userData.dni, 'dni')"
          />
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
import {ref, watch,} from 'vue';
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

const copyToClipboard = (text, field) => {
  navigator.clipboard.writeText(text);
};

const editAlias = (alias) => {
  useUsersStore().editAlias(alias);
};

const editName = (name) => {
  useUsersStore().editName(name);
}

const shareData = () => {
  // Implement share functionality
  console.log('Sharing data:', props.userData);
};

// Watch for changes in the modelValue prop
watch(() => props.modelValue, (newValue) => {
  dialog.value = newValue;
});

// Emit changes in the dialog value
watch(dialog, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<script>
import DataField from './DataField.vue';

export default {
  components: {
    DataField,
  },
};
</script>

<style scoped>
.v-card {
  border-radius: 16px;
}
</style>
