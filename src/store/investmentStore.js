import { defineStore } from 'pinia';
import {computed, ref} from 'vue';
import {useUsersStore} from "@/store/usersStore";

export const useInvestmentsStore = defineStore('investments', () => {
  const userStore = useUsersStore();
  const investments = ref([

      { id:1, name: 'Plazo fijo 19/3/24', description: '6 meses', amount: '20,000', icon: 'mdi-cash', iconColor: 'black', action: 'Ver', userId: 1, trend:[8,9,7,8,9,6,7,8,5,7,8,9,7,6,7], chartOption: {
          xAxis: {
            type: 'category',
            data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            axisLine: {show: true},
            axisTick: {show: false},
          },
          yAxis: {
            type: 'value',
            axisLine: {show: true},
            axisTick: {show: false},
            splitLine: {show: false},
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1450, 1600, 1800],
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: '#8B5CF6'
            },
            lineStyle: {
              color: '#8B5CF6'
            }
          }],
          tooltip: {
            trigger: 'axis'
          }
        } },
      { id:2, name: 'Plazo Fijo 04/06/24', description: '4 meses', amount: '15,000', icon: 'mdi-cash', iconColor: '#00000', action: 'Ver', userId: 1, trend: [7,8,9,7,8,9,6,7,8,5,9,7,6,2,1], chartOption: {
          xAxis: {
            type: 'category',
            data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            axisLine: {show: false},
            axisTick: {show: false},
          },
          yAxis: {
            type: 'value',
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
          },
          series: [{
            data: [320, 600, 901, 934, 1290, 1110, 1320, 1450, 1600, 1800],
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: '#8B5CF6'
            },
            lineStyle: {
              color: '#8B5CF6'
            }
          }],
          tooltip: {
            trigger: 'axis'
          }
        }},
      {id:3, name: 'Fondo delta', description: '-', amount: '1,000,000.00', icon: 'mdi-cash-multiple', iconColor: '#2196F3', action: 'Ver', userId: 2, trend: [8,9,7,4,1,6,7,8,5,7,8,9,7,6,7], chartOption: {
          xAxis: {
            type: 'category',
            data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            axisLine: {show: false},
            axisTick: {show: false},
          },
          yAxis: {
            type: 'value',
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1450, 1600, 1800],
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: '#8B5CF6'
            },
            lineStyle: {
              color: '#8B5CF6'
            }
          }],
          tooltip: {
            trigger: 'axis'
          }
        } },
  ]);
  // Agregar inversión para un usuario
  const addInvestment = (userId, investment) => {
    investments.value.push({ ...investment, userId });
  };

  // Obtener inversiones de un usuario
  const getInvestmentsByUserId = (userId) => {
    return computed( () => investments.value.filter(investment => investment.userId === userId));
  };
  const currentInvestment = ref(getInvestmentsByUserId(userStore.userId).value[0]);

  const setCurrentInvestment = (investmentId) => {
    const aux = investments.value.find(investment => investment.id === investmentId);
    console.log(aux);
    if(aux){
      currentInvestment.value = aux;
    }
  }

  return {
    investments,
    addInvestment,
    getInvestmentsByUserId,
    currentInvestment,
    setCurrentInvestment
  };
});
