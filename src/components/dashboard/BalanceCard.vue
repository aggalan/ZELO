<template>
  <v-card class="mb-4 balance-card">
    <v-card-title class="text-grey-darken-3"> Balance
      <div class="text-h2 text-black align-center balance-text">
        {{viewInfo ? balance: maskBalance}}
        <v-icon @click="toggleViewInfo()" color="black" size="40">{{ icon }}</v-icon>
      </div>

    </v-card-title>
    <v-card-text>
      <v-row class="mt-4">
        <v-col>
          <ActionButton color="#49475A" :action="goToTransference" block customClass="transfer-btn">Transferir</ActionButton>
        </v-col>
        <v-col>
          <ActionButton color="#49475A" :action="goToEnter" block customClass="transfer-btn">Ingresar</ActionButton>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
//
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import router from "@/router/router";
import {computed, ref} from "vue";
import {useBalanceStore} from "@/store/balanceStore";
import {useUsersStore} from "@/store/usersStore";

const balanceStore = useBalanceStore();
const userStore = useUsersStore();
const goToTransference = ()=>{
router.push("/transference");
}
const goToEnter = ()=>{
router.push("/dashboard/enter");
}

const balance = balanceStore.getBalanceByUserId(userStore.userId) ;
const viewInfo = ref(true);

const toggleViewInfo =() => {
  viewInfo.value = !viewInfo.value;
};

const maskBalance= '$****'
const icon = computed(() => viewInfo.value ? 'mdi-eye' : 'mdi-eye-off');

</script>

<style scoped>
.balance-card {
  background: #f3f4f6;
  border-radius: 12px;
  mso-border-shadow: yes;
}
.transfer-btn, .deposit-btn {
  text-transform: none;
  height: 48px;
  font-size: 16px;
  border-color: #f3f4f6;
  border-radius: 12px;
  background: #49475A;
}
.balance-text {
  font-weight: 500;
  text-align: center;
}
.custom-logo {
  width: 60px; /* Ajusta el tamaño deseado */
  height: auto; /* Mantiene la proporción de la imagen */
  display: block;
}
</style>
