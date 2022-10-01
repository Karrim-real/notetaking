<template>
  <!-- <main> -->
    <div class="myform">
        <div class="login-text">
            <h2 v-if="errors">
                <ul v-for="(error, index ) in errors" :key="index">
                    <li class="error">{{error}}</li>
                </ul>
            </h2>
            <h2 v-else>Creat an Account</h2>
        </div>
        <div class="login-form">
            <form  method="post" @submit.prevent="Register">
                <div class="username">
                    <label for="name">Name</label>
                    <input type="text" class="name" name="user" placeholder="Enter your name" v-model="signupData.name">
                </div>

                <div class="username">
                    <label for="username">Email</label>
                    <input type="email" class="email" name="" placeholder="Enter your Email" v-model="signupData.email">
                </div>

                
                 <div class="password">
                    <label for="password">Password</label>
                    <input type="password" class="password" placeholder="Enter your password" name="password" v-model="signupData.password">
                </div>

                 <div class="password">
                    <label for="password"> Confrim Password</label>
                    <input type="password" class="password" placeholder="confirm your password" name="password_confirmation" v-model="signupData.password_confirmation">
                </div>
                <div class="submitbtn">
                    <button class="login-button" type="submit">Register</button>
                </div>
            </form>
        </div>
         <router-link :to="{name: 'login'}">Already have an account, Login</router-link>
        <br>
        <br>
        <br>
    </div>
  
 
 
  <!-- </main> -->
</template>

<script>
// import axios from 'axios';
export default {
    data(){
        return {
            signupData : {
            name: '',
            email: '',
            password: '',
            password_confirmation : ''

            },
            url: process.env.VUE_APP_BASEURL,
            errors: null,
            
        }
    },
    methods: {
       async  Register(){
            
           await this.$store.dispatch('register', this.signupData).then(()=>{
            this.$router.push({name:'home'})
           }).catch(err => this.errors = err.response.data.errors)
        }
    },
    mounted(){
        // sessionStorage.clear()
    }
}
</script>

<style>
@import url('../assets/css/signup.css');
.error{
    color: tomato;
    font-size: 14px;
}
</style>