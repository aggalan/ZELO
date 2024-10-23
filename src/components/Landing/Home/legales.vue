<template>
  <v-container fluid class="pa-0 main mt-15">
    <v-main class="d-flex flex-column align-center justify-center pa-8 text-white">
      <h1 class="text-h2 font-weight-bold mb-8">Legales y Seguridad</h1>

      <v-row>
        <v-col cols="12" md="6">
          <v-card max-width="100%" class="bg-grey-darken-3 mb-12 mb-md-0">
            <v-card-title class="text-h5 font-weight-bold">
              Información Legal
            </v-card-title>
            <v-card-text>
              <v-expansion-panels>
                <v-expansion-panel
                  v-for="(item, i) in legalItems"
                  :key="i"
                  class="bg-grey-darken-3"
                >
                  <v-expansion-panel-title class="text-white">
                    {{ item.title }}
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    {{ item.content }}
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card max-width="100%" class="bg-grey-darken-3">
            <v-card-title class="text-h5 font-weight-bold">
              Seguridad
            </v-card-title>
            <v-card-text>
              <v-list class="bg-transparent">
                <v-list-item
                  v-for="(item, index) in securityItems"
                  :key="index"
                  :prepend-icon="item.icon"
                  :title="item.title"
                  :subtitle="item.description"
                ></v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-main>

    <v-footer app color="grey-darken-3" class="justify-center">
      <span>&copy; {{ currentYear }} Zelo. Todos los derechos reservados.</span>
    </v-footer>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const legalItems = ref([
  {
    title: 'Términos y Condiciones',
    content: 'Al utilizar Zelo, aceptas nuestros términos y condiciones. Estos incluyen el uso responsable de la aplicación, la protección de tu cuenta y el cumplimiento de las leyes aplicables.'
  },
  {
    title: 'Política de Privacidad',
    content: 'Zelo se compromete a proteger tu privacidad. Recopilamos y utilizamos tu información personal de acuerdo con nuestra política de privacidad, que cumple con las leyes de protección de datos aplicables.'
  },
  {
    title: 'Licencias y Permisos',
    content: 'Zelo opera bajo las licencias y permisos necesarios otorgados por las autoridades financieras correspondientes. Nos adherimos estrictamente a las regulaciones bancarias y financieras aplicables.'
  },
  {
    title: 'Resolución de Disputas',
    content: 'En caso de disputas, nos comprometemos a resolverlas de manera justa y transparente. Si no podemos resolver un problema directamente, acordamos utilizar métodos de resolución alternativa de disputas.'
  }
])

const securityItems = ref([
  {
    icon: 'mdi-shield-lock',
    title: 'Encriptación de Datos',
    description: 'Utilizamos encriptación de grado bancario para proteger tus datos personales y financieros.'
  },
  {
    icon: 'mdi-fingerprint',
    title: 'Autenticación Biométrica',
    description: 'Ofrecemos autenticación biométrica para un acceso seguro y conveniente a tu cuenta.'
  },
  {
    icon: 'mdi-alert-circle',
    title: 'Monitoreo de Fraudes',
    description: 'Nuestros sistemas monitorean constantemente las actividades sospechosas para prevenir fraudes.'
  },
  {
    icon: 'mdi-update',
    title: 'Actualizaciones Regulares',
    description: 'Realizamos actualizaciones regulares de seguridad para mantenernos al día con las últimas amenazas.'
  }
])

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.main {
  background: transparent;
  min-height: 100vh;
  padding: 0;
}
.v-card {
  border-radius: 8px;
  height: 100%;
}
.v-list-item {
  min-height: 64px;
}
.v-expansion-panel {
  background-color: transparent !important;
}
.v-expansion-panel-title {
  color: white !important;
}
.v-expansion-panel-text {
  color: #E0E0E0 !important;
}
</style>
