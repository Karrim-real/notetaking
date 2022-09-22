<template>
  <div class="main-page">
    <h2>{{ title}}</h2>
    <div>
      <nav class="nav">
        <ul class="orderlist">
          <li><router-link :to="{name: 'home'}">Home</router-link></li>
          <li><router-link :to="{name: 'addbook'}">Add Book</router-link> </li>
          <li><router-link :to="{name: 'favourites'}">Favourite Books</router-link> </li>
          <li> <router-link :to="{name: 'about'}">About Us</router-link></li>
          <li> <router-link :to="{name: 'login'}">Login</router-link></li>
          <li> <router-link :to="{name: 'signup'}">Sign Up</router-link></li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'BoardLayout',
    data(){
        return {
            title : 'Amachi Book Store'
        }
    },


}
</script>

<style>
.orderlist{
  /* display: block; */
  /* padding: 10px; */
  padding: 0;
  /* background-color: aqua; */
  
}

</style>