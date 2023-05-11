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
        ></v-text-field>
        <div class="sub-title">
            <p> Password </p>
        </div>
        <v-text-field
            hide-details
            outlined
        ></v-text-field>
        <v-btn x-large color="#FCD269" class="font-weight-bold mb-3 text-capitalize" @click="$router.push('/dashboard')"> Login</v-btn>
        <div class="detail d-flex" style="margin:auto">
            <p> Don’t have an account?</p>
            <a style="color:#6D55A3" @click="$router.push('/sign-up')"> Sign Up here</a>
        </div>

    </div>

    <div style="width:50%" class="background">
    </div>

  </div>
</template>

<script>
export default {

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