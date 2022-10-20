<template>
  <div class="main">
    <h2>Profile Details</h2>
    <div class="profile">
        <ul>
            <li>User No {{id}}</li>
            <li>Email {{email}}</li>
            <li>Name {{name}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    data(){
        return {
            name: '',
           email: '',
           id: '',
            url: process.env.VUE_APP_BASEURL,


            
        }
    },
   async mounted(){
    this.$store.dispatch('profile').then(()=>{
        let user = localStorage.getItem('user')
        let userJson = JSON.parse(user)
        this.id = userJson.user.id;
        this.email = userJson.user.email;
        this.name = userJson.user.name;
        // console.log(localStorage.getItem('user'));
    }).catch(err => console.log(err))
        //   try {
        //         await axios.get(this.url+'/users/profile')
        //         .then(response =>{
        //             console.log('Profile deatial',response);
        //             // if(response.status === 200){
        //             //     this.$router.push({name : 'home'})
        //             // }
        //         })
        //         .catch(err => console.log(err))
                
        //     } catch (error) {
        //         console.log(error);
        //     }
    }
}
</script>

<style>

</style>