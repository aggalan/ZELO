<template>

    <ItemListWithButton :items="investments" useLink buttonColor="primary" buttonText="Mas informacion">
      <v-card-title class="bg-white">
      <v-text-field
        v-model="search"
        prepend-icon="mdi-magnify"
        label="Busca tu siguiente inversión"
        single-line
        hide-details
        filled
        rounded
        dense
      ></v-text-field>
    </v-card-title>
    </ItemListWithButton>
</template>

<script setup>
import { ref } from 'vue'
import ItemListWithButton from "@/components/generalComponents/ItemListWithButton.vue";

const search = ref('')
const investments = ref([
  { name: 'Ripple', amount: '503.12', icon: 'mdi-currency-xrp', iconColor: '#23292F' },
  { name: 'Litecoin', amount: '503.12', icon: 'mdi-litecoin', iconColor: '#345D9D' },
  { name: 'Amazon', amount: '503.12', icon: 'mdi-amazon', iconColor: '#FF9900' },
  { name: 'Bitcoin', amount: '503.12', icon: 'mdi-bitcoin', iconColor: '#F7931A' },
  { name: 'Ethereum', amount: '503.12', icon: 'mdi-ethereum', iconColor: '#627EEA' },
])
</script>

<style scoped>
.v-list-item__avatar {
  background-color: #EDE9FE;
}
.v-list-item__avatar .v-icon {
  font-size: 24px;
}
</style>
