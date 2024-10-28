import { defineStore } from 'pinia';
import {computed, ref} from 'vue';
import {useUsersStore} from "@/store/usersStore";
import {useBalanceStore} from "@/store/balanceStore";

export const useInvestmentsStore = defineStore('investments', () => {
  const userStore = useUsersStore();
  const balanceStore = useBalanceStore();
  let lastId = 6;
  const investments = ref([

      { id:1, name: 'Plazo fijo 19/3/24', description: '6 meses', amount: 20000, icon: 'mdi-cash', iconColor: 'black', action: 'Ver', userId: 1, trend:[8,9,7,8,9,6,7,8,5,7,8,9,7,6,7], interest: 0.2,
        chartOption: {
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
              opacity: 0.5,
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
      { id:2, name: 'Plazo Fijo 04/06/24', description: '4 meses', amount: 15000, icon: 'mdi-cash', iconColor: '#00000', action: 'Ver', userId: 1, trend: [7,8,9,7,8,9,6,7,8,5,9,7,6,2,1], interest: 0.1,
        chartOption: {
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
            data: [320, 600, 901, 934, 1290, 1110, 1320, 1450, 1600, 1800],
            type: 'line',
            smooth: true,
            showSymbol: false,
            areaStyle: {
              opacity: 0.5,
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
      {id:3, name: 'Plazo Fijo 30/08/24', description: '2 meses', amount: 1000000.00, icon: 'mdi-cash', iconColor: '#00000', action: 'Ver', userId: 1, trend: [8,9,7,4,1,6,7,8,5,7,8,9,7,6,7], interest: 0.3,
        chartOption: {
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
              opacity: 0.5,
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
    { id:4, name: 'Plazo Fijo 04/06/24', description: '4 meses', amount: 15000, icon: 'mdi-cash',
      iconColor: '#00000', action: 'Ver', userId: 1, trend: [7,8,9,7,8,9,6,7,8,5,9,7,6,2,1], interest: 0.15,
      chartOption: {
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
          data: [320, 600, 901, 934, 1290, 1110, 1320, 1450, 1600, 1800],
          type: 'line',
          smooth: true,
          showSymbol: false,
          areaStyle: {
            opacity: 0.5,
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
    {id:5, name: 'Plazo Fijo 30/08/24', description: '2 meses', amount: 1000000.00,
      icon: 'mdi-cash', iconColor: '#00000', action: 'Ver', interest: 0.3,
      userId: 1, trend: [8,9,7,4,1,6,7,8,5,7,8,9,7,6,7], chartOption: {
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
            opacity: 0.5,
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
    { id:6, interest:0.22, name: 'Plazo Fijo 04/06/24', description: '4 meses', amount: 15000, icon: 'mdi-cash', iconColor: '#00000', action: 'Ver', userId: 1, trend: [7,8,9,7,8,9,6,7,8,5,9,7,6,2,1], chartOption: {
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
          data: [320, 600, 901, 934, 1290, 1110, 1320, 1450, 1600, 1800],
          type: 'line',
          smooth: true,
          showSymbol: false,
          areaStyle: {
            opacity: 0.5,
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
  ]);
  const addInvestment = ( investment, userId = userStore.userId) => {
    if(investment.amount > balanceStore.getBalanceByUserId(userId)){
      return;
    }
    const fechaActual = new Date(Date.now());
    const fechaFormateada = fechaActual.toLocaleDateString('es-ES'); // Formato dd/mm/yyyy

    investments.value.push({
      ...investment, userId, id: lastId +1,  icon: 'mdi-cash', name: 'Plazo fijo ' + fechaFormateada,
      chartOption: {
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
          data: [320, 600, Math.random() * 100, 934, Math.random() * 100, 1110, Math.random() * 100 + 500, 1450, 1600, 1800],
          type: 'line',
          smooth: true,
          showSymbol: false,
          areaStyle: {
            opacity: 0.5,
            color: '#8B5CF6'
          },
          lineStyle: {
            color: '#8B5CF6'
          }
        }],
        tooltip: {
          trigger: 'axis'
        }
      }
    });
    lastId++;
    balanceStore.withdrawMoney( investment.amount, {name: 'Inversión', category: 'Inversión', cbu: '0000', concept: 'Inversión en plazo fijo'});
  }

  const getInvestmentsByUserId = (userId) => {
    return computed( () => investments.value.filter(investment => investment.userId === userId));
  };
  const hasInvestments = computed(() => investments.value.filter(investment => investment.userId === userStore.userId).length > 0);
  const currentInvestment = ref(null);
  const removeInvestment = ( amount,investmentId= currentInvestment.value.id) => {
    if(amount > currentInvestment.value.amount){
      return;
    }
    if(amount === currentInvestment.value.amount){
      investments.value = investments.value.filter(investment => investment.id !== investmentId);
      currentInvestment.value = investments.value[0];
    } else{
      const aux = investments.value.find(investment => investment.id === investmentId);
      aux.amount -= amount;
    }
    balanceStore.enterMoney( amount, {name: 'Inversión', category: 'Inversión', cbu: '0000', concept: 'Retiro de inversión'});
  }
  const getCurrentInvestment = () => {
    return currentInvestment.value
  }
  const clearCurrentInvestment = () => {
    currentInvestment.value = null;
  }

  const setCurrentInvestment = (investmentId) => {
    const aux = investments.value.find(investment => investment.id === investmentId);
    if(aux){
      currentInvestment.value = aux;
    }
  }

  return {
    investments,
    addInvestment,
    getInvestmentsByUserId,
    getCurrentInvestment,
    currentInvestment,
    setCurrentInvestment,
    removeInvestment,
    hasInvestments,
    clearCurrentInvestment
  };
});
