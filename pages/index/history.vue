<template>
  <div class="pa-15 d-flex-flex-column">
    <div class="d-flex flex-row ">
        <div  class="mb-5 d-flex flex-row search-button mr-3">
            <input
            style="width:85%;border:none;outline:none;background-color:white;margin: 5px" placeholder="Search">
            <v-icon  style="margin:5px" size="24" color="#BDBDBD"> mdi-magnify </v-icon>
        </div>
            <v-dialog
                v-model="filter"
                persistent
                width="40%"
            >
                <template  v-slot:activator="{ on, attrs }" >
                    <div style="width:10%" class="mr-3">
                        <v-btn  v-bind="attrs" v-on="on" width="100" dark color="#8949F8" class="bold " @click="filter">FILTER</v-btn>
                    </div>
                </template>
                <SelectDate v-if="filter == true" :filter.sync="filter"/>       
             </v-dialog>
        <v-btn  width="100" light color="#8949F8" outlined class="for-export bold" >EXPORT</v-btn>
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
                  <th class="text-left">
                    Accuration
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
                  <td>{{item.condition}}</td>
                  <td>{{item.accuration}}</td>
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
  export default {
    data(){
      return{
        filter:false,
        items:[
          {date:'May, 1 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 2 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 3 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 4 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 5 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 6 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 7 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 8 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 9 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 10 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 11 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 12  2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 13 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 14 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 15 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 16 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 17 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 18  2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 19 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 20 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
          {date:'May, 21 2023',time:'13:00',pic:'Diana Novita Sari',condition:'Good',accuration:'99%'},
        ],
        selectedItem:[],
        selectedPage:1,
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
        return datas
      }
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