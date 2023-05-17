<template>
  <div class="d-flex flex-row" style="width:100%">
    <div style="width:50%" class="d-flex flex-column px-15 py-10">
        
        <div class="d-flex flex-row for-icon mb-3">
            <v-icon color="#6D55A3" size="20" class="back-icon" @click="$router.push('/landing-page')">mdi-keyboard-backspace</v-icon>
            <img class="ml-5" src="/img/DCD.png">
        </div>

        <div class="title-content">
            <p> Log In to your Account </p>
        </div>
        <div class="detail mb-3">
            <p> Let us help you! Our registration process is quick and easy, please enter your details.</p>
        </div>
        <div class="sub-title">
            <p> Name </p>
        </div>
        <v-text-field
            hide-details
            outlined
            dense
            v-model="form.name"
        ></v-text-field>
        <div class="sub-title">
            <p> Email </p>
        </div>
        <v-text-field
            hide-details
            outlined
            dense
            v-model="form.email"
        ></v-text-field>
         <div class="sub-title">
            <p> Password </p>
        </div>
        <v-text-field
            hide-details
            outlined
            dense
            v-model="form.password"
            type="password"
        ></v-text-field>
         <div class="sub-title">
            <p> Password Confirmation</p>
        </div>
        <v-text-field
            hide-details
            outlined
            dense
            v-model="form.password_confirmation"
            type="password"
        ></v-text-field>
        <v-btn x-large color="#FCD269" class="font-weight-bold my-3 text-capitalize" @click="forRegister()"> Register</v-btn>
        <div class="detail d-flex" style="margin:auto">
            <p> Don’t have an account?</p>
            <a style="color:#6D55A3" @click="$router.push('/sign-in')"> Sign In here</a>
        </div>

    </div>

    <div style="width:50%" class="background">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            form :{name:'',password:'',email:'',password_confirmation:''}
        }
    },
    methods:{
        forRegister(){
            console.log('register')
            axios({
                url: this.$axios.defaults.baseURL + 'api/register',
                method: "post",
                headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                },
                data: this.form
            })
            .then((res) => {
                // console.log(res)
                this.$toast.success('Data berhasil ditambahkan!',{timeout:1500})
                this.$router.push('/sign-in')
            })
            .catch((error) => {
                console.log(error.response.data.message   )
                this.$toast.error('Data tidak berhasil ditambahkan! Periksa kembali masukan',{timeout:1500})
      
            })
            .finally((res) => {
               
            });
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