<template>
  <v-container fluid class="pa-0 main mt-15">
    <v-main class="d-flex flex-column align-center justify-center pa-8">
      <h1 class="text-h2 font-weight-bold mb-8 text-white">Sobre Nosotros</h1>

      <v-card max-width="800" width="100%" class="bg-custom shadow-card text-white">
        <v-tabs
          v-model="activeTab"
          color="purple-darken-2"
          align-tabs="center"
        >
          <v-tab value="mission">MISIÓN</v-tab>
          <v-tab value="vision">VISIÓN</v-tab>
          <v-tab value="story">NUESTRA HISTORIA</v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="activeTab">
            <v-window-item class = " text-grey-lighten-1 " v-for="(content, key) in tabContent" :key="key" :value="key">
              <p>{{ content }}</p>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>

      <v-container class="mt-8">
        <h2 class="text-h4 font-weight-bold mb-4 text-white">Nuestro Equipo</h2>
        <v-row>
          <v-col
            v-for="member in teamMembers"
            :key="member.name"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="bg-custom shadow-card  text-grey-lighten-1  text-center pa-4 ">
              <v-card-title class="justify-center">{{ member.name }}</v-card-title>
              <v-card-subtitle>{{ member.role }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app color="grey-darken-3" class="justify-center">
      <span>&copy; {{ currentYear }} Zelo. Todos los derechos reservados.</span>
    </v-footer>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('mission')

const tabContent = {
  mission: "Nuestra misión es revolucionar la forma en que los estudiantes manejan sus finanzas, proporcionando una billetera digital intuitiva y segura.",
  vision: "Aspiramos a ser la aplicación financiera preferida por los estudiantes universitarios en toda Latinoamérica.",
  story: "Zelo nació como un proyecto para la materia de HCI (Interacción Hombre-Computadora) en el ITBA. Lo que comenzó como un trabajo práctico se convirtió en nuestra pasión por crear una solución financiera innovadora para estudiantes."
}

const teamMembers = [
  { name: 'Santiago Maffeo', role: 'Frontend Developer' },
  { name: 'Jose Benegas Lynch', role: 'Frontend Developer' },
  { name: 'Agustin Galan', role: 'Frontend Developer' },
  { name: 'Nicolas Koron', role: 'Frontend Developer' }
]

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.main {
  background: transparent;
  height: 100vh;
  padding: 0;
}

.v-card {
  border-radius: 8px;
}
.v-tab {
  text-transform: uppercase;
  font-weight: bold;
}
.text-custom {
  color: var(--text-color);
}
.bg-custom {
  background-color: var(--background-color);
}
.shadow-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
