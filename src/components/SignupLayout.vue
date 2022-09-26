<template>
  <!-- <main> -->
    <div class="myform">
        <div class="login-text">
            <h2 v-if="errors">
                <ul v-for="error in errors" :key="error.name">
                    <li>{{error}}</li>
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
                    <input type="password" class="password" name="password" v-model="signupData.password">
                </div>

                 <div class="password">
                    <label for="password"> Confrim Password</label>
                    <input type="password" class="password" name="password_confirmation" v-model="signupData.password_confirmation">
                </div>
                <div class="submitbtn">
                    <button class="login-button" type="submit">Register</button>
                </div>
            </form>
        </div>
    </div>
  
 
 
  <!-- </main> -->
</template>

<script>
import axios from 'axios';
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
            errors: '',
            
        }
    },
    methods: {
        async Register(){
            console.log(this.signupData);
            // console.log(this.authurl);
            // console.log('Register Button Click');
            try {
                await axios.post(this.url+'/auth/signup', this.signupData)
                .then(response =>{
                    if(response.status === 200){
                            sessionStorage.setItem('authorization_key', response.data.authorization.token)
                        this.$router.push({name : 'home'})
                    }
                })
                .catch(err => this.errors = err.response.data.errors)
                
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted(){
        sessionStorage.clear()
    }
}
</script>

<style>
@import url('../assets/css/signup.css');
</style>