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
          <v-btn text class="mr-4" @click="$router.push('/landing-page')">
            <a style="text-decoration:none;color:black"  >Account</a>
          </v-btn >
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
      <nuxt-child keep-alive/>
    </div>
    
  </div>
</template>

<script>
export default {
   data(){
    return{
      menus:[
        {name:'Dashboard',routing:'/dashboard',icon:'mdi-home'},
        {name:'Detection',routing:'/detection',icon:'mdi-camera'},
        {name:'History',routing:'/history',icon:'mdi-list-box'}
      ],
      selectedMenu:{name:'Dashboard',routing:'/dashboard',icon:'mdi-home'}
    }
   },
   methods:{
    clickMenu(val){
      this.$router.push(val.routing)
      this.selectedMenu=val
    }
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