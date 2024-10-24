<template>
  <v-card class="balance-card">
    <v-card-text>
      <div class="d-flex justify-space-between align-center mb-4">
        <h2 class="text-h6 font-weight-bold">Balance</h2>
        <v-btn icon @click="toggleViewInfo">
          <v-icon>{{ icon }}</v-icon>
        </v-btn>
      </div>
      <div class="text-h3 font-weight-bold mb-6">
        {{ formattedBalance }}
      </div>
      <v-row>
        <v-col cols="6">
          <v-btn
            color="primary"
            block
            @click="goToTransference"
            class="action-btn"
            prepend-icon="mdi-bank-transfer"
          >
            Transferir
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            color="secondary"
            block
            @click="goToEnter"
            class="action-btn"
            prepend-icon="mdi-cash-plus"
          >
            Ingresar
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { computed, ref } from "vue";
import { useBalanceStore } from "@/store/balanceStore";
import { useUsersStore } from "@/store/usersStore";
import { useRouter } from 'vue-router';

const balanceStore = useBalanceStore();
const userStore = useUsersStore();
const router = useRouter();

const goToTransference = () => router.push("/transference");
const goToEnter = () => router.push("/dashboard/enter");

const balance = balanceStore.getBalanceByUserId(userStore.userId);

const viewInfo = ref(true);
const toggleViewInfo = () => viewInfo.value = !viewInfo.value;

const maskBalance = "$****";
const icon = computed(() => viewInfo.value ? "mdi-eye-off" : "mdi-eye");

const formattedBalance = computed(() =>
  viewInfo.value ? `$${balance.value.toLocaleString()}` : maskBalance
);
</script>

<style scoped>
.balance-card {
  background: white;
  border-radius: 16px;
}

.action-btn {
  text-transform: none;
  height: 48px;
  font-size: 16px;
  border-radius: 8px;
}
</style>
