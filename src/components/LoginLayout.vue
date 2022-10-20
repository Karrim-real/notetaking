<template>
  <!-- <main> -->
    <div class="myform">
        <div class="login-text">
            <h4 v-if="errors" class="myerrors"> {{errors}} </h4>
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
        <router-link :to="{name: 'signup'}">Dont have account, Register</router-link>
        <br>
        <br>
        <br>

    </div>
  
  
  <!-- </main> -->
</template>

<script>

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
            
            if(this.formdatas.email === '' || this.formdatas.password === ''){
               this.errors = 'Please enter Username and Password';
            }else{

            
                    this.$store.dispatch('login', this.formdatas).then(()=> {
                        
                        this.$router.push({'name': 'favourites'})
                    }).catch(err => {
                        this.errors = err.response.data.message
                        })
            
                
            }
           
        }
    },
    mounted(){
       localStorage.clear()
    }
}
</script>

<style>
@import url('../assets/css/login.css');
.myerrors{
    color: red;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 15px;
}
</style>