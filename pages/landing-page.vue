<template>
  <div d-flex flex-column>
    <v-app-bar
      color="white"
      fixed 
      class=""
    >
        <img src="/img/DCD.png" />
        <v-spacer></v-spacer>
        <div class="d-flex justify-space-around ">
            <v-btn text class="mr-4">
                <a style="text-decoration:none;color:black"  href="#home">Home</a>
            </v-btn>
            <v-btn text class="mr-4">
                <a style="text-decoration:none;color:black"  href="#about">About</a>
            </v-btn>
            <v-btn text class="mr-4">
                <a style="text-decoration:none;color:black"  href="#features">Features</a>
            </v-btn>
            <v-btn text class="mr-4">
                <a style="text-decoration:none;color:black"  href="#team">Our Team</a>
            </v-btn>
            <v-btn text class="mr-4">
                <a style="text-decoration:none;color:black"  >Contact Us</a>
            </v-btn >
            <v-btn class="text-capitalize mr-4"
                color="white"
                width="150"
                @click="$router.push('/sign-up')"
            >
                SIGN UP
            </v-btn>
            <v-btn class="text-capitalize "
                color="#FCD269"
                width="150"
                @click="$router.push('/sign-in')"
            >
                SIGN IN
            </v-btn>
        </div>
    </v-app-bar>
    
    <v-main style="margin-top:60px">
        <div style="padding:7vh">

            <div id="home" class="home-section d-flex flex-row" style="width:100%">
                <div style="width:60%" class="mx-15">
                    <div class="title" style="margin-top:15vh">
                        <p class="mb-4"> Detection</p>
                        <p class="mb-4"> Classification <span style="color:#FCD269"> Dragee</span> </p>
                    </div>
                    <div class="content">
                        <p>Detect your dragees with deep learning which is automatically classified by their category.</p>
                    </div>
                    <div class="mt-15">
                        <v-btn width="345" rounded x-large outlined color="#FCD269" class="font-weight-bold" @click="$router.push('/sign-in')"> L O G I N </v-btn>
                    </div>
                </div>
                <div style="width:40%">
                </div>
            </div>

            <div id="about" class="about d-flex flex-column mt-15 pt-15 " style="width:100%">
                <div class="title-section d-flex flex-row-reverse " style="width:100%">
                    <div style="background-color:#D9D9D9;border:solid 1px #D9D9D9;width:3rem;height:3rem" class="ml-5"> </div>
                    <p> About </p>
                </div>
                <div class="d-flex flex-row" style="width:100%;">
                    <div class="image" style="width:40%;text-align:center">
                        <img src="/img/about-content.png" width="400">
                    </div>
                    <div class="about-content px-7 align-center d-flex " style="width:60%"> 
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore amere. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore amere. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore amere. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore amere. </p>
                    </div>
                </div>
            </div>

            <div id="features" class="features d-flex flex-column mt-15 pt-15" style="width:100%">
                <div class="title-section d-flex flex-row" style="width:100%">
                    <div style="background-color:#D9D9D9;border:solid 1px #D9D9D9;width:3rem;height:3rem" class="mr-5"> </div>
                    <p> Features </p>
                </div>
                <div class="d-flex flex-row mt-10" style="width:100%;">
                    <div style="width:35%" class="d-flex flex-column pa-5"> 
                        <div class="box-features pa-5 mb-8" v-for="(item,i) in features" :key="i" @click="selectFeature(item)" :style="item.title==featureSelected.title?'color:#A26BF9':'color: rgba(162, 107, 249, 0.5);'">
                            <p> {{item.title}}</p>
                        </div>
                    </div>
                    <div style="width:5%">
                    </div>
                    <div style="width:60%" class="pa-5">
                        <div class="d-flex flex-row" style="border:solid 5px #F9F1FE;background-color:#FCF8FF;width:100%">
                            <!-- <img > -->
                            <div class="pa-10" style="color:#6D55A3">
                                <p> {{featureSelected.content}} </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="team" class="team d-flex flex-column mt-15 pt-15" style="width:100%">
                <div class="title-section d-flex flex-row-reverse" style="width:100%">
                    <div style="background-color:#D9D9D9;border:solid 1px #D9D9D9;width:3rem;height:3rem" class="ml-5"> </div>
                    <p> Meet Our Teams </p>
                </div>
                <div class="d-flex flex-row mt-10" style="width:100%;">
                    <div style="width:40%;text-align:center">
                        <img src="/img/profile.png" width="350">
                    </div>
                    <div style="width:60%;margin:auto" class="d-flex flex-column pa-5 pr-10">
                        <p style="font-size:1.875em;color:#6D55A3"><strong> {{teams[0].name}}</strong> </p>
                        <p style="color:#BFBFBF;font-size:1.5em" class="mb-3"> <strong>{{teams[0].sub}}</strong></p>
                        <p> XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX XXXXX </p>
                    </div>
                </div>
            </div>

            
        </div>
    </v-main>

    <div id="contact" class="contact d-flex flex-row pa-10 justify-space-around">
        <div>
            <p class="title-footer"> Visit Us </p>
            <p class="content-footer"> Jalan Kanayakan no 21, Dago Bandung </p>
        </div>
        <div>
            <p class="title-footer"> Chat Us </p>
            <p class="content-footer"> sekretariat@polman-bandung.ac.id. </p>
        </div>
        <div>
            <p class="title-footer"> Call Us </p>
            <p class="content-footer"> Jalan Kanayakan no 21, Dago Bandung </p>
        </div>
    </div>
    <div class=" pa-2 " style="background-color:#D6D6D6;width:100%">
        <div class="d-flex justify-space-between">
            <p class="content-footer"> © Copyright 2023 by Diana Novita Sari All Rights Reserved. </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            features:[
                {title:'Detection and Classification',img:'', content: 'Detect your dragees with the deep learning method. Our algorithm will classify dragees automatically based on their category.'},
                {title:'View History',img:'', content: 'All data recorded and successfully detected will be stored in our database to be displayed in the history feature. The data can be downloaded in xlx files.'},
                {title:'Percentage',img:'', content: 'Content for percentage'}
            ],
            featureSelected:
                {
                    title:'Detection and Classification',
                    img:'', 
                    content: 'Detect your dragees with the deep learning method. Our algorithm will classify dragees automatically based on their category.'
                },
            teams:[
                {name:'Diana Novita Sari',sub:'4AEB',content:''},
                {name:'Dr. Susetyo Bagas Bhaskoro. S.ST., M.T',sub:'NIP 198706222015041002',content:''},
                {name:'Abyanuddin Salam, S.ST., M.Eng',sub:'NIP 198910042010121007',content:''}
            ]
        }
    },
    methods:{
        selectFeature(val){
            this.featureSelected = val
        }
    }
}
</script>

<style lang="scss" scoped>

    .home-section{
        min-height: calc(86vh - 60px);
        background:url('/img/bg-4.png');
        background-size:cover;
        background-position: bottom;
    }
//1em = 16px
    .title{
        font-size:3em !important;
        color:white;
        font-weight:900;
        line-height:auto;
    }

    .content{
        color: white;
        font-size: 1.5em;
        font-weight: 200;
    }

    .title-section{
        font-size:2.25em;
        color:#6D55A3;
        font-weight: bold;
    }

    .about-contet{
        font-size:24px;
    }

    .box-features{
        background: #F9F1FE;
        border: 5px solid #FFFFFF;
        box-shadow: 0px 4px 41px rgba(0, 0, 0, 0.05);
        border-radius: 10px;
        font-weight: 700;
        color: rgba(162, 107, 249, 0.5);
    }
    .box-features-acctive{
        color:#A26BF9 !important;
    }
    .box-features:hover{
        cursor: pointer;
    }
    .title-footer{
        color:#6D55A3;
        font-size:1em;
        font-weight: 700;
    }
    .content-footer{
        color:#676767;
        font-size:0.75em;
    }
    .contact{
        background-color:#F1F1F1
    }
    p{
        margin:0
    }
</style>