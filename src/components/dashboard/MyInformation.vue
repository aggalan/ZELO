<template>

  <v-alert
    border="left"
    colored-border
    type="info"
    elevation="2"
    class="mb-4"
    color="grey-lighten-3"
  >
    <strong>Cuenta de la cual transferir:</strong><br>
    CBU: {{ accountDetails.cbu }}<br>
    Alias: {{ accountDetails.alias }}
  </v-alert>

</template>

<script setup>

const props = defineProps({
  accountDetails: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.v-alert {
  margin-bottom: 16px;
}
</style>
