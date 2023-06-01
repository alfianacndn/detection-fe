<template>
  <div>
    <v-app-bar
      color="white"
      fixed 
      class=""
    >
    <img src="/img/DCD.png" />
        <v-spacer></v-spacer>
        <div class="d-flex justify-space-around ">
          <v-btn text class="mr-4" @click="$router.push('/landing-page')">
            <a style="text-decoration:none;color:black"  >Home</a>
          </v-btn>
          <v-btn text class="mr-4" @click="$router.push('/landing-page')">
            <a style="text-decoration:none;color:black" > About</a>
          </v-btn>
          <v-btn text class="mr-4" @click="$router.push('/landing-page')">
            <a style="text-decoration:none;color:black"  >Features</a>
          </v-btn>
          <v-btn text class="mr-4" @click="$router.push('/landing-page')">
            <a style="text-decoration:none;color:black"  >Our Team</a>
          </v-btn>
          <v-btn text class="mr-4" @click="$router.push('/landing-page')">
            <a style="text-decoration:none;color:black"  >Contact Us</a>
          </v-btn >
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                light
                v-bind="attrs"
                v-on="on"
                text
              >
                Account
              </v-btn>
            </template>
            <v-list>
              <v-list-item
              >
                <v-btn text @click="forLogout()">Logout</v-btn>

              </v-list-item>
            </v-list>
          </v-menu>
        </div>
    </v-app-bar>

    <v-navigation-drawer 
      app 
      clipped 
      flat 
      light 
      class="for-side-bar py-10"
    >
      <v-list class="ml-7 mr-7 mt-15" >
        <div class="d-flex flex-row"> 
          <img size="1" style="height:2em !important;width: 2em;margin:auto 0 !important"  :src="'/img/profile.png'"/>
          <div class="d-flex flex-column ml-3">
            <p style="color:#8949F8;font-weight:600"> {{this.userLogin.name}}</p>

            <p style="font-size:0.75em"> {{this.userLogin.email }}</p>
          </div>
        </div>
        <v-divider class="my-4"> </v-divider>
        <v-list-item 
          class=" pl-2 py-0   " 
          style="width:100%;"
          :style="selectedMenu.name==menu.name?'background-color:#F0F0F0;border-left: 3px solid #8949F8;':''"
          link
          @click="clickMenu(menu)"
          v-for="(menu,i) in menus" :key="i"
        >
          <v-icon  size="20" class="mr-4" :color="selectedMenu.name==menu.name?'#8949F8':'#4D4D4D'">{{menu.icon}}</v-icon>
          <p class="ml-1" :class="selectedMenu.name==menu.name?'for-subt-acctive':'for-subt'" > {{menu.name}} </p>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <div class="content-area pa-0" >
      <nuxt-child keep-alive />
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  middleware:'auth',
   data(){
    return{
      menus:[
        {name:'Dashboard',routing:'/dashboard',icon:'mdi-home'},
        {name:'Detection',routing:'/detection',icon:'mdi-camera'},
        {name:'History',routing:'/history',icon:'mdi-list-box'}
      ],
      selectedMenu:{name:'Dashboard',routing:'/dashboard',icon:'mdi-home'},
      isDataSuccess:false,
      userLogin:JSON.parse(localStorage['auth.userData']),
    }
   },
   methods:{
    clickMenu(val){
      this.$router.push(val.routing)
      this.selectedMenu=val
    },
    forLogout(){
      this.$auth.logout()
    },
    
   },
   beforeMount(){
   }
}
</script>

<style scoped lang="scss">
.for-side-bar{
  background-color:white !important;
  margin :auto
}
p{
  margin-bottom:0;
}
.for-subt{
  color:rgba(0, 0, 0, 0.7);
  font-weight: 500;
}
.content-area {
  background-color:#f5f5f5;
  margin-left:250px;
  margin-top:60px;
  transition:0.2s;
  min-height: calc(100vh - 60px);
}
.for-subt-acctive{
  color:#8949F8 !important;
  font-weight: 700;
}

</style>