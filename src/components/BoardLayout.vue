<template>
  <div class="main-page">
    <h2>{{ title}}</h2>
    <div>
      <nav class="nav">
        <ul class="orderlist">
          <li><router-link :to="{name: 'home'}">Home</router-link></li>
          
          <li> <router-link :to="{name: 'about'}">About Us</router-link></li>
          
          <!-- <span v-if="loggedUser"> -->
            <li><router-link :to="{name: 'addbook'}">Add Book</router-link> </li>
          <li><router-link :to="{name: 'favourites'}">Favourite Books</router-link> </li>
          <li> <router-link :to="{name: 'profile'}">Profile</router-link></li>
          <li><button class="logout" @click="logout">Logout</button></li>
          <!-- </span> -->
          <!-- <span v-else> -->
            <li> <router-link :to="{name: 'login'}">Login</router-link></li>
          <li> <router-link :to="{name: 'signup'}">Sign Up</router-link></li>
          <!-- </span> -->
          


        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
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
    async logout(){
      
      try {
         await axios.get(this.url+'/users/logout').then(res => {
          // console.log(res.status);
          if(res.status === 200){
          this.$router.push({name: "home"})
          }
        
      }).catch(err => console.log(err))
      } catch (error) {
        console.log(error);
      }
     
    }
  },
  mounted(){
    // console.log(this.auth.user);

  },
  computed:{
    
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