<template>
  <div class="pa-15">
    <v-card class="d-flex flex-column pa-5">
      <div class="d-flex justify-space-around">
        <div class="d-flex flex-column mr-3">
          <p class="title-input">Start Date </p>
          <v-menu
            ref="startMenuDate"
            v-model="startMenuDate"
            :close-on-content-click="false"
            :return-value.sync="startDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startDate"
                readonly
                v-bind="attrs"
                v-on="on"
                prepend-icon="mdi-calendar"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="startDate"
              no-title
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="startMenuDate = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.startMenuDate.save(startDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </div>
        <div class="d-flex flex-column mr-3">
          <p class="title-input">Start Time </p>
          <v-menu
            ref="startTime"
            v-model="menuStartTime"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="startTime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
            
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="startTime"
                readonly
                v-bind="attrs"
                v-on="on"
                prepend-icon="mdi-clock-time-four-outline"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menuStartTime"
              v-model="startTime"
              full-width
              @click:minute="$refs.startTime.save(startTime)"
              format="24hr"
              no-title
            ></v-time-picker>
          </v-menu>
        </div>
        <div class="d-flex flex-row align-center mr-3 px-5">
          <p> - </p>
        </div>
        <div class="d-flex flex-column mr-3">
          <p class="title-input">End Date </p>
          <v-menu
            ref="endMenuDate"
            v-model="endMenuDate"
            :close-on-content-click="false"
            :return-value.sync="endDate"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endDate"
                readonly
                v-bind="attrs"
                v-on="on"
                prepend-icon="mdi-calendar"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="endDate"
              no-title
              scrollable
            >
              <v-spacer></v-spacer>
              <v-btn
                text
                color="primary"
                @click="endMenuDate = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.endMenuDate.save(endDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </div>
        <div class="d-flex flex-column mr-3">
          <p class="title-input">End Time </p>
          <v-menu
            ref="endTime"
            v-model="menuEndTime"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="endTime"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
            
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="endTime"
                readonly
                v-bind="attrs"
                v-on="on"
                prepend-icon="mdi-clock-time-four-outline"
              ></v-text-field>
            </template>
            <v-time-picker
              v-if="menuEndTime"
              v-model="endTime"
              full-width
              @click:minute="$refs.endTime.save(endTime)"
              format="24hr"
              no-title
            ></v-time-picker>
          </v-menu>
        </div>
      </div>
      <v-btn  width="100" dark block color="#8949F8" class="bold " >FILTER</v-btn>
    </v-card>

    <v-card class="pa-5 mt-10">
      <!-- <DoughnutChart style="width:40%"/> -->
    </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      startTime:null,
      menuStartTime:false,
      endTime:null,
      menuEndTime:false,
      startDate: null,
      startMenuDate: false,
      endDate: null,
      endMenuDate: false,
    }
  }
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