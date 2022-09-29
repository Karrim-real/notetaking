<template>
  <!-- <main> -->
    <div class="myform">
        <div class="login-text">
            <h4 v-if="errors"> {{errors}} </h4>
            <h4 v-else>Plese enter email and password </h4>
        </div>
        
        <div class="login-form">
           
            <form  method="post" @submit.prevent="Login">
                <div class="username">
                    <label for="username">Username</label>
                    <input type="email" class="username" name="email" placeholder="Enter your username" v-model="formdatas.email">
                </div>
                 <div class="password">
                    <label for="password">Password</label>
                    <input type="password" class="password" name="password"  v-model="formdatas.password">
                </div>
                <div class="submitbtn">
                    <button class="login-button">Login</button>
                </div>
            </form>
        </div>
    </div>
  
  
  <!-- </main> -->
</template>

<script>
import axios from 'axios';
import Auth from '../services/Auth'
export default {
    data(){
        return {
            
            formdatas :{
                email: '',
                password: '',
            },
            errors : '',
            url: process.env.VUE_APP_BASEURL,

        }
    },
    methods: {
       async Login(){
            console.log('Welcome to password');
            // this.formdatas.push(this.username, this.password)
            console.log(this.formdatas);
            if(this.formdatas.email === '' || this.formdatas.password === ''){
               this.errors = 'Please Enter Username or Password';
            }else{
                try {
                   await axios.post(this.url+'/auth/login', this.formdatas)
                .then(response =>{ 
                        if(response.status === 200){
                        // console.log(response.data.authorization.token);
                        // console.log(response.data.data);
                        Auth.login(response.data.authorization.token, response.data.data)
                            // sessionStorage.setItem('authorization_key', response.data.authorization.token)
                            this.$router.push({name: 'home'});
                            // console.log(sessionStorage.getItem('authorization_key'));
                        }
                    })
                .catch(err => this.errors = err.response.data.message)
                } catch (error) {
                    console.log(error);
                }
                
            }
           
        }
    },
    mounted(){
        sessionStorage.clear()
    }
}
</script>

<style>
@import url('../assets/css/login.css');
</style>