<template>
  <div>
     <div class="pb-10" style="background-color:white !important">
        <div  style="background-color:#6D55A3 !important;color:white">
            <v-card-title class="pl-8 pb-2 pt-5" style="font-size:2rem "> FILTER </v-card-title>
        </div>
        <div class="pb-4 pt-5 mx-11">
            <p style="text-align:justify"> Select Date</p>
        </div>
        <v-row style="width:100%" class="px-11">
            <v-col cols="7" style="border-right:solid 1px #B8D0DD;">
                <v-date-picker 
                            range
                            no-title
                            width="100%"
                            v-model="dateRange"
                            color="#6D55A3"
                            @click="cek()"
                ></v-date-picker>
            </v-col>
            <v-col cols="5" class="py-12">
                <v-col cols="12" class="pa-0 ">
                    <p> Start  </p>
                </v-col>
                 <v-col cols="12">
                    <v-row>
                        <p style="font-size:42px;font-weight:bold;color: #6D55A3">{{forDate(0)}}  </p>
                        <p style="font-size:18px;" class="mt-6 ml-2">{{forMonth(0)}} {{forYear(0)}}</p>
                    </v-row>
                </v-col>
                <v-col cols="12"  class="pa-0 ">
                    <p> End  </p>
                </v-col>
                 <v-col cols="12">
                    <v-row>
                        <p style="font-size:42px;font-weight:bold;color: #6D55A3">{{forDate(1)}}  </p>
                        <p style="font-size:18px;" class="mt-6 ml-2">{{forMonth(1)}} {{forYear(1)}}</p>
                    </v-row>
                </v-col>
            </v-col>
        </v-row>
        <div class="mt-5 mx-11" >
            <p v-if="validationisBigger" style="text-align:justify;color:red" class="font-italic"> *Waktu mulai tidak dapat lebih besar dari waktu selesai</p>
        
        </div>
        <div class="d-flex flex-row-reverse mt-5 mb-1 mx-11" >
            <v-btn @click="forSave()" width="20%" color="#FCD269"  class="  ml-3 btn-save font-weight-bold"> Filter </v-btn>
            <v-btn @click="forClose()" text width="20%" class="font-weight-bold" > Close </v-btn>
        </div>
        
     </div>
  </div>
</template>

<script>
export default {

    props:['filter'],
    data(){
        return {
            dateRange:[],
            month:[
                'Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'
            ],
            startDate:'',
            endDate:'',
            validationisBigger:false,
            data:[],
            generateDocument:false,
            valRangeDate:''
        }
    },
    methods:{
        forClose(){
            // document.documentElement.style.overflowY = 'scroll'
            this.$emit('update:filter', false);
        },
        forDate(kind){
            if (this.dateRange.length ==0){
                return '0'
            } else if (this.dateRange.length ==1){
                if (kind==0){
                    var date = new Date(this.dateRange[kind]);
                    let day = date.getDate()
                    return day
                } else {
                    return '0'
                }
            } else {
                var date = new Date(this.dateRange[kind]);
                let day = date.getDate()
                return day
            }
        },
        forMonth(kind){
            if (this.dateRange.length ==0){
                return ''
            } else if (this.dateRange.length ==1){
                if (kind==0){
                    var date = new Date(this.dateRange[kind]);
                    let month = date.getMonth()
                    return this.month[month]
                } else {
                    return ''
                }
            } else {
                var date = new Date(this.dateRange[kind]);
                let month = date.getMonth()
                return this.month[month]
            }
        },
        forYear(kind){
            if (this.dateRange.length ==0){
                return ''
            } else if (this.dateRange.length ==1){
                if (kind==0){
                    var date = new Date(this.dateRange[kind]);
                    let year = date.getFullYear()
                    return year
                } else {
                    return ''
                }
            } else {
                var date = new Date(this.dateRange[kind]);
                let year = date.getFullYear()
                return year
            }
        },
        forSave(){
            this.generateDocument=false
            let start = ''
            let end = ''
            var date1 = new Date(this.dateRange[0])
            var date2 = new Date(this.dateRange[1])
            this.valRangeDate = date1.getDate() + '/' + (date1.getMonth()+1) + '/' + date1.getFullYear() + ' - ' + date2.getDate() + '/' + (date2.getMonth()+1) + '/' + date2.getFullYear()
            if (new Date(this.dateRange[0]).getDate()<10){
                start = '0' + new Date(this.dateRange[0]).getDate()
            } else {
                start = new Date(this.dateRange[0]).getDate()

            }
            if (new Date(this.dateRange[1]).getDate()<10){
                end = '0' + new Date(this.dateRange[1]).getDate()
            } else {
                end =  new Date(this.dateRange[1]).getDate()

            }
            let startMonth=''
            let endMonth =''
            if (new Date(this.dateRange[0]).getMonth()+1<10){
                startMonth = '0' + (new Date(this.dateRange[0]).getMonth()+1)
            } else {
                startMonth =  new Date(this.dateRange[0]).getMonth()+1

            }
            if (new Date(this.dateRange[1]).getMonth()+1<10){
                endMonth = '0' + (new Date(this.dateRange[1]).getMonth()+1)
            } else {
                endMonth =  new Date(this.dateRange[1]).getMonth()+1

            }

            this.startDate = start+'%2F' + startMonth + '%2F' + new Date(this.dateRange[0]).getFullYear()
            this.endDate = end+'%2F' + endMonth + '%2F' + new Date(this.dateRange[1]).getFullYear()
            var totalTime = new Date(this.dateRange[1]).getTime() - new Date(this.dateRange[0]).getTime();
            let totalDay = totalTime / (1000 * 3600 * 24);
            if (totalDay <0){
                this.validationisBigger = true
            } else {
                console.log('this start date',this.startDate)
                console.log('this end date',this.endDate)
                //  axios({
                //     url: process.env.VUE_APP_API + 'api/v1/suitabilities/exported?dateOfIssueStartDate=' + this.startDate + '&dateOfIssueEndDate=' + this.endDate,
                //     method: "get",
                //     headers: {
                //         'accept': ' application/json',
                //         Authorization: 'Bearer ' + localStorage['auth._token.local']
                //     },
                // }).then((res) => {
                //     console.log(res)
                //     this.data=res.data.suitabilities
                // }).catch((error) => {
                //     console.log(error)
                //     if (error.response){
                //     if (error.response.status== 401){
                //     this.$store.commit('credential/setSessionEnd')
                //     // this.$auth.logout()
                //     }
                // }
                // }).finally((result) =>{
                //     this.generateDocument = true
                // }) 
            }
           
        },
        cek(){
        }
    },
    beforeMount(){
        // document.documentElement.style.overflowY = 'hidden'
    },
    watch:{
        dateRange(){
            let startDate = new Date(this.dateRange[0]);
            let finishDate = new Date(startDate.setDate(startDate.getDate() + 30))
            let outputDate = new Date(this.dateRange[1])
            // console.log('finish',finishDate)
            // console.log('output',outputDate)
            if (finishDate.getDate == outputDate.getDate && finishDate.getMonth == outputDate.getMonth+1 && finishDate.getFullYear == outputDate.getFullYear){
                // console.log('asd')
            }

            if (finishDate === outputDate){
                // console.log('cekmasuk')
            }
        }
    }
}
</script>

<style scoped>

</style>