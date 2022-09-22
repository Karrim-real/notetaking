<template>
  <!-- <main> -->
    <div class="myform">
        <div class="login-text">
            Please Enter your Login
        </div>
        <div class="login-form">
            <form  method="post" @submit.prevent="Login">
                <div class="username">
                    <label for="username">Username</label>
                    <input type="email" class="username" placeholder="Enter your username" v-model="formdatas.username">
                </div>
                 <div class="password">
                    <label for="password">Password</label>
                    <input type="password" class="password"  v-model="formdatas.password">
                </div>
                <div class="submitbtn">
                    <button class="login-button">Login</button>
                </div>
            </form>
        </div>
    </div>
  
  {{formdatas.username}}
  {{formdatas.password}}
  <!-- </main> -->
</template>

<script>
export default {
    data(){
        return {
            
            formdatas :{
                username: '',
                password: '',
            }

        }
    },
    methods: {
        Login(){
            console.log('Welcome to password');
            // this.formdatas.push(this.username, this.password)
            console.log(this.formdatas);
        }
    }
}
</script>

<style>
@import url('../assets/css/login.css');
</style>