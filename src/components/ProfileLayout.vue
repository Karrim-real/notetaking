<template>
  <div class="main">
    <h2>Profile Details</h2>
    <div class="profile">
        <ul>
            <li>Name {{name}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            name: 'Akinleuoo',
            url: process.env.VUE_APP_AUTHURL,
        }
    },
   async mounted(){
          try {
                await axios.get(this.url+'/users/profile')
                .then(response =>{
                    console.log(response);
                    // if(response.status === 200){
                    //     this.$router.push({name : 'home'})
                    // }
                })
                .catch(err => console.log(err))
                
            } catch (error) {
                console.log(error);
            }
    }
}
</script>

<style>

</style>