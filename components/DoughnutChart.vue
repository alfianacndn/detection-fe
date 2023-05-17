<template>
  <Doughnut
  :chart-data="chartData"
  :chart-options="options"
  />
</template>

<script>
  import { Doughnut } from 'vue-chartjs'
  import {Chart , ArcElement, Title, Tooltip, Legend,DoughnutController} from 'chart.js'
  Chart.register(ArcElement, Title, Tooltip, Legend,DoughnutController);

  export default {
    components: {Doughnut },
    props: ['forLabel','forData','forColor'],
    data() {
      return {
        dataChart:[],
        chartData: {
          labels: this.forLabel,
          borderColor:'black',
          datasets: [ 
            { 
              backgroundColor: this.forColor,
              data: this.forData
            }
          ]
        },
        options: {
          plugins: {
            legend: {
              display:false
            }
          }
        }
      }
    },
    mounted(){
      this.dataChart = this.forData
      // console.log('doughnut',this.forData)
      
    },
    crated(){
      this.dataChart = this.forData

    },
    watch:{
      forData(){
        this.chartData= {
          labels: this.forLabel,
          borderColor:'black',
          datasets: [ 
            { 
              backgroundColor: this.forColor,
              data: this.forData
            }
          ]
        },
        this.options= {
          plugins: {
            legend: {
              display:false
            }
          }
        }
      },
      
    }
  }
 </script>

<style scoped>

</style>