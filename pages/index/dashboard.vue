<template>
  <div class="pa-15">
    <v-card class="d-flex justify-space-around pa-5">
      <div class="d-flex flex-column">
        <p class="title-input">Start Date </p>
        <v-input dense> </v-input>
      </div>
      <div class="d-flex flex-column">
        <p class="title-input">Start Time </p>
      </div>
      <div class="d-flex flex-column">
        <p> - </p>
      </div>
      <div class="d-flex flex-column">
        <p class="title-input">End Date </p>
      </div>
      <div class="d-flex flex-column">
        <p class="title-input">End Time </p>
      </div>
    </v-card>

    <v-card class="pa-5 mt-10">
      <!-- <DoughnutChart style="width:40%"/> -->
    </v-card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

p{
  margin:0
}

.title-input{
  color:#00000099;
  font-weight:400
}

</style>