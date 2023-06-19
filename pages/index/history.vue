<template>
  <div class="pa-15 d-flex-flex-column">
    <div class="d-flex justify-space-between  ">
        <div  class="mb-5 d-flex flex-row search-button ">
            <input
            style="border:none;outline:none;background-color:white;margin: 5px" placeholder="Search" v-model="inputSearch">
            <v-icon @click="filterBySearch()" size="24" color="#BDBDBD"> mdi-magnify </v-icon>
        </div>
        <div class="mb-5 d-flex flex-row filter-area  pa-0 ma-0">
          <v-dialog
            ref="dialog1"
            v-model="modal1"
            :return-value.sync="time1"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time1"
                hide-details
                readonly
                v-bind="attrs"
                v-on="on"
                class="pa-0 ma-0"
                placeholder="Start Time"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="modal1"
              v-model="time1"
              full-width
              header-color="#6D55A3"
              color="#6D55A3"
              format="24hr"
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="#6D55A3"
                @click="modal1 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="#6D55A3"
                @click="$refs.dialog1.save(time1)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </div>
        <p class="mx-1"> - </p>
        <div class="mb-5 d-flex flex-row filter-area  pa-0 ma-0">
          <v-dialog
            ref="dialog2"
            v-model="modal2"
            :return-value.sync="time2"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="time2"
                hide-details
                readonly
                v-bind="attrs"
                v-on="on"
                class="pa-0 ma-0"
                placeholder="End Time"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="modal2"
              v-model="time2"
              full-width
              header-color="#6D55A3"
              color="#6D55A3"
              format="24hr"
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="#6D55A3"
                @click="modal2 = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="#6D55A3"
                @click="$refs.dialog2.save(time2)"
              >
                OK
              </v-btn>
            </v-time-picker>
          </v-dialog>
        </div>
        <v-btn  width="100" dark color="#8949F8" class="bold " @click="filterByTime()">FILTER</v-btn>
          <download-excel
            class="btn btn-default"
            :data="items"
            :fields="json_fields"
            worksheet="History1"
            name="Data-History.xls"
          >
            <v-btn  width="100" outlined light color="#8949F8" class="for-export bold" >EXPORT</v-btn>
          </download-excel>
    </div>

    <v-card class="pa-5 mt-5">
        <v-simple-table 
          style=" border-bottom: thin solid rgba(0, 0, 0, 0.12) !important; "
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">
                    No
                  </th>
                  <th class="text-left">
                    Date
                  </th>
                  <th class="text-left">
                    Time
                  </th>
                  <th class="text-left">
                    PIC
                  </th>
                  <th class="text-left">
                    Classification
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,i) in forData()" :key="i"
                >
                  <td class="text-center">{{((selectedPage - 1) * 10)+ 1 + i}}</td>
                  <td>{{item.date}}</td>
                  <td>{{item.time}}</td>
                  <td>{{item.pic}}</td>
                  <td>{{item.classification}}</td>
                </tr>
              </tbody>
            </template>
        </v-simple-table>
        <div class="d-flex flex-row-reverse mt-5 mr-5">
          <div class="d-flex flex-row">
            <div class="d-flex flex-row ml-1 click-page" v-for="(page,i) in forPage()" :key="i" :style="i+1==selectedPage?'background-color:#EED2FF;color:#8949F8;border-radius:1.5em;width:1.5em;height:1.5em':''"> 
              <p @click="forData(i+1,'click')" style="margin:auto"> {{i+1}} </p>
            </div>
          </div>
          <p class="mr-5" style="font-size:0.8em"> Page </p>
        </div>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data(){
      return{
        json_fields: {
          Date: 'date',
          Time: 'time',
          PIC : 'pic',
          Classification: 'condition',
          Accuration: 'accuration',
        },
        json_meta: [
          [
            {
              key: 'charset',
              value: 'utf-8',
            },
          ],
        ],
        filter:false,
        time1: null,
        menu1: false,
        modal1: false,
        time2: null,
        menu2: false,
        modal2: false,
        items:[],
        selectedItems:[],
        selectedPage:1,
        inputSearch:'',
      }
    },
    methods:{
      forPage(){
        let totalData = this.items.length
        let totalPage = 0
        let sisaBagi = totalData % 10
        totalPage = (totalData - sisaBagi) / 10

        if (sisaBagi > 0 ){
          return totalPage + 1
        } else {
          return totalPage
        }
      },
      forData(val,kind){
        console.log('cek')
        if (kind == 'click'){
          this.selectedPage = val
        }
        let datas= []
        let start = 1
        start = ((this.selectedPage - 1) * 10)+ 1
        let end = this.selectedPage * 10 
        for (var i=0;i<this.items.length;i++){
          if (i+1 >= start && i+1 <= end){
            datas.push(this.items[i])
          }
        }
        this.selectedItems = datas
        return datas
      },
      getData(){
        axios({
          url: process.env.VUE_APP_BASE_URL_LARAVEL + 'api/history',
          method: "get",
          headers: {
            'accept': 'application/json',
            Authorization: 'Bearer ' + localStorage['auth._token.local'] 
          },
        }).then((res) => { 
          console.log('cek data',res)
          this.items = res.data
        }).catch((error) => {
          console.log(error)
        })
      },
      filterBySearch(){
        console.log(this.inputSearch)
        axios({
          url: process.env.VUE_APP_BASE_URL_LARAVEL + 'api/history_bysearch',
          method: "post",
          headers: {
            'accept': 'application/json',
            Authorization: 'Bearer ' + localStorage['auth._token.local'],
          },
          data: {input_search: this.inputSearch}
        }).then((res) => { 
          console.log('cek data',res)
          this.items = res.data
        }).catch((error) => {
          console.log(error)
        })
      },
      filterByTime(){
        console.log('time1',this.time1)
        console.log('time2',this.time2)
        axios({
          url: process.env.VUE_APP_BASE_URL_LARAVEL + 'api/history_bytime',
          method: "post",
          headers: {
            'accept': 'application/json',
            Authorization: 'Bearer ' + localStorage['auth._token.local'],
          },
          data: {start_time: this.time1 + ':00', end_time:this.time2 + ':00'}
        }).then((res) => { 
          console.log('cek data',res)
          this.items = res.data
        }).catch((error) => {
          console.log(error)
        })
      }
    },
    beforeMount(){
      this.getData()
    }

}
</script>

<style scoped>
.search-button{
    width:25%;
    border:solid 1px #BDBDBD;
    background-color:white;
    height:36px;
    border-radius:0.25rem
}
.filter-area{
  border:solid 1px #BDBDBD;
  background-color:white;
  height:36px;
  border-radius:0.25rem
}
.bold{
    font-weight: 700;
}
.for-export{
    background-color: #fff;
}
p{
  margin:0
}
.click-page:hover{
  cursor: pointer;
}

.click-page{
  font-size:0.8em
}
</style>