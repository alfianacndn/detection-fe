<template>
  <div class="d-flex flex-row" style="width:100%">

    <div style="width:50%" class="d-flex flex-column pa-15">
        
        <div class="d-flex flex-row for-icon mb-15">
            <v-icon color="#6D55A3" size="20" class="back-icon" @click="$router.push('/landing-page')">mdi-keyboard-backspace</v-icon>
            <img class="ml-5" src="/img/DCD.png">
        </div>

        <div class="title-content">
            <p> Log In to your Account </p>
        </div>
        <div class="detail mb-8">
            <p> Welcome back! Please enter your details.</p>
        </div>
        <div class="sub-title">
            <p> Email </p>
        </div>
        <v-text-field
            hide-details
            outlined
            v-model="form.email"
        ></v-text-field>
        <div class="sub-title">
            <p> Password </p>
        </div>
        <v-text-field
            hide-details
            outlined
            v-model="form.password"
            type="password"
        ></v-text-field>
        <v-btn x-large color="#FCD269" class="font-weight-bold mb-3 text-capitalize" @click="forLogin()"> Login</v-btn>
        <div class="detail d-flex" style="margin:auto">
            <p> Don’t have an account?</p>
            <a style="color:#6D55A3" @click="$router.push('/sign-up')"> Sign Up here</a>
            <v-btn @click="$router.push('/landing-page')" > Contoh Button Untuk next </v-btn>
        </div>

    </div>

    <div style="width:50%" class="background">
    </div>

  </div>
</template>

<script>
import axios from '@nuxtjs/axios'
export default {
    data(){
        return{
            form:{email:'',password:''},
            isLoggedIn: false,
        }
    },
    methods:{
        forLogin(){
            this.isLoggedIn = false
            console.log('cek function', localStorage['auth.userData'])

            this.$auth.loginWith('local', {
                data: this.form
            }).then(res => {
                console.log(res.data.user)
                // this.$toast.success('Berhasil masuk!',{timeout:1500})
                //set token
                this.$auth.setToken('local',res.data.token)
                localStorage['auth.userData'] = JSON.stringify(res.data.user)
                //get detail user
                this.$store.commit('login',this.login)
                this.$store.commit('setUser',res.data.user)
                this.isLoggedIn = true
                console.log('cek token',localStorage['auth._token.local'])
            }).catch((error) => {
                console.log(error.response.data.message)
                this.isLoggedIn=false
                this.$toast.error('Tidak berhasil masuk. Periksa kembali masukan.',{timeout:1500})
      
            }).finally(() => {
                if(this.isLoggedIn == true){
                    console.log('cek sebelum ush',this.isLoggedIn)
                    
                    this.linkToDashboard()

                    console.log('cek sesudah ush',this.isLoggedIn)
                } 
            })
        },
        linkToDashboard(){
            console.log('cek function2', this.$auth.loggedIn)
            
            this.$router.push(this.$route.query.redirect || '/dashboard')
        }
    }
}
</script>

<style scoped>
    .background{
        min-height: 100vh;
        background:url('/img/bg-1.png');
        background-size:cover;
        background-position: bottom;
    }
    .title-content{
        font-weight:600;
        font-size:2em;
    }

    .detail{
        font-weight: 400;
        font-size:1em;
        color:#8A8A8A;
    }

    p{
        margin:0
    }
</style>