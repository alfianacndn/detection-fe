<template>
  <div class="pa-5 d-flex flex-column">
    <v-card style="min-height:57vh" class="py-3">
      <EasyCamera  />
    </v-card>
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
export default {
  data(){
    return {
      currentCondition: 'Bits On Dragee',
      currentAccuration: '99.99%'
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