<template>
  <div class="pa-5 d-flex flex-column">
    <v-card style="min-height:57vh" class="py-3">
      <EasyCamera  ref="cam" v-model="captured" />
      <!-- <vue-web-cam autoplay width="500" height="500"/> -->
    </v-card>
    <v-btn @click="checkCamera()"> {{detect == true? 'TAKE AGAIN' : 'TAKE A PICTURE'}} </v-btn>
    <div class="d-flex justify-space-around mt-5">
      
      <v-card class="d-flex  mr-5 align-center" style="width:50%;min-height:20vh">
        <div class="d-flex flex-column align-center" style="margin:auto">
          <p class="content"> {{currentCondition}} </p>
          <p class="title-card"> CONDITION </p>
        </div>
      </v-card>
      <v-card class="d-flex align-center" style="width:50%">
        <div class="d-flex flex-column align-center" style="margin:auto">
          <p class="content"> {{currentAccuration}}</p>
          <p class="title-card"> ACCURATION </p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      currentCondition: 'Bits On Dragee',
      currentAccuration: '99.99%',
      captured:null,
      selected:'',
      detect:false
    }
  },
  methods:{
    checkCamera(){
      console.log(this.detect)
      if (this.detect==false){
        this.getCaptured()
      } else {
        this.$refs.cam.start()
        this.detect=false
      }
    },
    async getCaptured(){
      // this.detect = true
      this.$refs.cam.snap()
      this.$refs.cam.stop()

      var base64Img = this.captured.replace('data:image/png;base64,','')
      let today = new Date(); 
      let date = today.getFullYear()+'.'+(today.getMonth()+1)+'.'+today.getDate();
      var time = today.getHours() + "." + today.getMinutes() + "." + today.getSeconds();
      this.selected = date + '-' + time

      //convert to blob
      const byteCharacters = atob(base64Img);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      try {
        let blob = new Blob([byteArray], { type: "image/jpeg" })
        let link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = this.selected + '.jpeg'
        link.click()
        console.log('1')
      }
      catch {
        console.log('error')
      }
      finally{
        console.log('2')
        setTimeout(this.deepLearning(), 5000);
        
        console.log('3')
      } 

    },
    deepLearning(){
      
      axios({
        url: process.env.VUE_APP_BASE_URL_DEEP_LEARNING ,
        method: "post",
        headers: {
          'accept': 'application/json',
          Authorization: 'Bearer ' + localStorage['auth._token.local'],
        },
        data: {name: 'C:/Users/alfia/Downloads/' + this.selected + '.jpeg'}
      }).then((res) => { 
        console.log('cek data',res)
        this.currentCondition = res.data
      }).catch((error) => {
         console.log(error)
      }).finally(() => {
        this.createHistory()
      })
    },
    createHistory(){
      let dataHistory = {
        classification  :this.currentCondition,
        accuration  :this.currentAccuration,
      }
       axios({
        url: process.env.VUE_APP_BASE_URL_LARAVEL + "api/insert_history" ,
        method: "post",
        headers: {
          'accept': 'application/json',
          Authorization: 'Bearer ' + localStorage['auth._token.local'],
        },
        data: dataHistory
      }).then((res) => { 
        console.log('cek data',res)
      }).catch((error) => {
         console.log(error)
      }).finally(() => {
      })
    }
  }
}
</script>

<style scoped>
p{
  margin:0
}
.title-card{
  font-weight: 400;
  color:#6D55A3
}

.content{
  font-weight: 600;
  color:#6D55A3;
  font-size:2.5em
}

.video-wrapper {
  /* width:50% !important; */
  width: 90% !important;
  height: 57vh !important;
  margin: auto;
}
</style>