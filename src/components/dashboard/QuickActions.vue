<template>
  <v-card class="mb-4 my-card ma-2 pa-2">
    <v-row>
      <v-col
        v-for="(action, i) in quickActions"
        :key="i"
        cols="4"
        class="d-flex justify-center align-center text-grey-darken-3  "
      >
        <div class="quick-action-comp d-flex flex-column text-center justify-center align-center text-grey-darken-4" >
          <v-btn
            dark
            color="#8B5CF6"
            class="text-capitalize quick-action-btn"
          >
            <v-icon class = "text-white" size="30">{{ action.icon }}</v-icon>
          </v-btn>
          {{ action.text }}
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const quickActions = ref([
  { text: 'link de cobro', icon: 'mdi-link' },
  { text: 'Tus datos', icon: 'mdi-account' },
  { text: 'Añadir contacto', icon: 'mdi-account-plus' },
])
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
