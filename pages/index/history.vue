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
                <!-- <tr style="text-align:center">
                    <td colspan="12" v-if="(tableLoader && dataSK.length==0) || dataSK.length==0"> {{tableLoader?'Memuat data...' : 'Data kosong'}}</td>    
                </tr> -->
                <tr
                >
                  <td class="text-center">1</td>
                  <td>May, 10 2023</td>
                  <td>13:00</td>
                  <td>Diana Novita Sari</td>
                  <td>Good</td>
                  <td>99% </td>
                </tr>
              </tbody>
            </template>
            
        </v-simple-table>
    </v-card>
  </div>
</template>

<script>
export default {
    data(){
        return{
            filter:false,
        }
    },

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
</style>