<template>
  <v-card class="my-card balance-card">
    <v-card-text>
      <div class="d-flex justify-space-between align-center mb-2">
        <h2 class="text-h6 font-weight-bold text-black">Balance</h2>
        <v-btn icon @click="toggleViewInfo" size="small">
          <v-icon class="text-black">{{ icon }}</v-icon>
        </v-btn>
      </div>
      <div class="text-h3 font-weight-bold mb-4 text-black">
        {{ formattedBalance }}
      </div>
      <v-row dense>
        <v-col cols="6">
          <ActionButton
            block
            @click="goToTransference"
            class="action-btn"
            prepend-icon="mdi-bank-transfer"
          >
            Transferir
          </ActionButton>
        </v-col>
        <v-col cols="6">
          <ActionButton
            block
            @click="goToEnter"
            class="action-btn"
            prepend-icon="mdi-cash-plus"
          >
            Ingresar
          </ActionButton>
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
import ActionButton from "@/components/generalComponents/ActionButton.vue";

const balanceStore = useBalanceStore();
const userStore = useUsersStore();
const router = useRouter();

const goToTransference = () => router.push("/transference");
const goToEnter = () => router.push("/dashboard/enter");

const balance = balanceStore.getBalanceByUserId(userStore.userId);

const viewInfo = ref(true);
const toggleViewInfo = () => viewInfo.value = !viewInfo.value;

const maskBalance = "$****";
const icon = computed(() => !viewInfo.value ? "mdi-eye-off" : "mdi-eye");

const formattedBalance = computed(() =>
  viewInfo.value ? `$${balance.value.toLocaleString()}` : maskBalance
);
</script>

<style scoped>
.balance-card {
  //background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  height: auto;
}
.action-btn {
  height: 40px;
}
</style>
