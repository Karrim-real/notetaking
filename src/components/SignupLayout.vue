<template>
  <!-- <main> -->
    <div class="myform">
        <div class="login-text">
            Creat an Account
        </div>
        <div class="login-form">
            <form  method="post" @submit.prevent="Register">
                <div class="username">
                    <label for="username">Name</label>
                    <input type="text" class="name" placeholder="Enter your name" v-model="signupData.name">
                </div>

                <div class="username">
                    <label for="username">Email</label>
                    <input type="text" class="email" placeholder="Enter your Email" v-model="signupData.email">
                </div>

                <div class="username">
                    <label for="username">Username</label>
                    <input type="text" class="username" placeholder="Enter your username" v-model="signupData.username">
                </div>
                 <div class="password">
                    <label for="password">Password</label>
                    <input type="password" class="password"  v-model="signupData.password">
                </div>

                 <div class="password">
                    <label for="password"> Confrim Password</label>
                    <input type="password" class="password"  v-model="signupData.passwordConfirmation">
                </div>
                <div class="submitbtn">
                    <button class="login-button">Register</button>
                </div>
            </form>
        </div>
    </div>
  
 
 
  <!-- </main> -->
</template>

<script>
export default {
    data(){
        return {
            signupData : {
            
            name: '',
            email: '',
            username: '',
            password: '',
            passwordConfirmation : ''

            }
            
        }
    },
    methods: {
        Register(){
            console.log(this.signupData);
            console.log('Register Button Click');
        }
    }
}
</script>

<style>
@import url('../assets/css/signup.css');
</style>