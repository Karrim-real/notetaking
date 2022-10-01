<template>
  <div class="main-page">
    <h2>{{ title}}</h2>
    <div>
      <nav class="nav">
        <ul class="orderlist">
          <li><router-link :to="{name: 'home'}">Home</router-link></li>
          
          <li> <router-link :to="{name: 'about'}">About Us</router-link></li>
          
          <span v-if="loggedIn">
            <li><router-link :to="{name: 'addbook'}">Add Book</router-link> </li>
          <li><router-link :to="{name: 'favourites'}">Favourite Books</router-link> </li>
          <li> <router-link :to="{name: 'profile'}">Profile</router-link></li>
          <li><button class="logout"  @click="logout">Logout</button></li>
          </span>
          <span v-else>
            <li> <router-link :to="{name: 'login'}">Login</router-link></li>
          <li> <router-link :to="{name: 'signup'}">Sign Up</router-link></li>
          </span>
          
<!-- {{loggedIn}} -->

        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import axios from 'axios';
import {authComputed} from '../store/helpers'
export default {
  name:'BoardLayout',
    data(){
        return {
            title : 'Amachi Book Store',
            url: process.env.VUE_APP_AUTHURL,
            // loggedUser: ''
            
            // checkAuth: getAuth(),
        }
    },
  methods:{
     logout(){
      this.$store.dispatch('logout')
        // console.log(data);
      this.$router.push({name : 'login'})
      
      
    }
  },
  mounted(){
    let user = localStorage.getItem('user')
    let userJson = JSON.parse(user)
    console.log('Logged In User',userJson);

  },
  computed:{
    ...authComputed

  }

}
</script>

<style>
.orderlist{
  /* display: block; */
  /* padding: 10px; */
  padding: 0;
  /* background-color: aqua; */
  
}
.logout{
  background-color: aqua;
  font-size: 15px;
}

</style>