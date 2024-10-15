<template>
  <v-card class="mb-4 balance-card">
    <v-card-text>
      <div class="text-h6 text-grey balance-text">Balance</div>
      <div class="text-h4 text-black align-center balance-text">$81,910.00</div>
      <v-img block src="../assets/logo.png"  alt="Logo" class="custom-logo align-center justify-center"></v-img>
      <v-row class="mt-4">
        <v-col>
          <ActionButton color="#49475A" :action="goToTransference" block customClass="transfer-btn">Transferir</ActionButton>
        </v-col>
        <v-col>
          <ActionButton color="#49475A" block customClass="transfer-btn">Ingresar</ActionButton>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
//
import ActionButton from "@/components/generalComponents/ActionButton.vue";
import router from "@/router/router";

const goToTransference = ()=>{
router.push("/transference");
}
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
