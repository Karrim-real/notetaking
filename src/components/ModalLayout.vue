<template>
  <div class="main">
    <div v-if="books">
    <!-- {{books}} -->
    <h3 v-if="successmsg">{{successmsg}}</h3>
      <h3 v-if="errors" class="error">{{errors}}</h3>

      <div class="card" v-for="item in books" :key="item.id">
            <div class="card-body">

              <div class="card-images">
                <img :src="item.image" class="card-image" :alt="item.title" >
              </div>
              <div class="card-title">
                <h3>{{item.title}}</h3>
              </div>
              <div class="card-desc">
                <p>
                  {{item.description}}
                </p>
              </div>
              <div class="cardauthor">
                <h5>Author:{{item.author}}</h5>
                <span class="pages">
                  <h6>Page: {{item.pages}}</h6>
                </span>
              </div>
            <router-link :to="{name: 'BookLayout', params: {id: item.id}}"> View More
              </router-link>

              <div class="card-button">
                  <span v-if="item.isFavourite">
                <button type="button" class="add-favourite" @click="BookFavourite(item)">Add to Favourite</button>
                  </span>
                  <span v-else>
                      <button type="button" class="remove-favourite" @click="RemoveFavourite(item)" >
                  Remove from Favourite
                      </button>
                  </span>
                  
              
              </div>
            </div>
      </div>
    </div>
    <div v-else>
      <h2>Loading Books</h2>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
// import getAuth from '../services/Auth'
export default {
  name: 'ModalLayout',
  data() {
    return {
      books: null,
      book_id : '',
      user_id : '',
      errors: '',
      successmsg : '',
      userJson: null,

      url: process.env.VUE_APP_BASEURL,
      // favurl: process.env.VUE_APP_AUTHURL,
      // getauth: getAuth(),
    }
  },
  mounted(){
    
    axios.get(this.url+'/book').then((response) => {
        this.books = response.data.data
      })
      let user = localStorage.getItem('user')
        this.userJson = JSON.parse(user)
      // console.log('User details',this.userJson)
  },
  methods: {
   async BookFavourite(item){
        // console.log(this.favurl+"/favouritebook");

        try {
           await axios.post(this.url+"/favouritebook",{
            'book_id': this.book_id = item.id,
            'user_id': this.user_id = this.userJson.user.id,
           }).then(res => res.data.status === 'success' ? this.successmsg = res.data.message : this.errors = res.data.message)
            .catch(err => console.log(err))
        } catch (error) {
          throw error.message
        }
        
        item.isFavourite =  !item.isFavourite
    },

    async RemoveFavourite(item){
        // this.removeBkid = 29;
        try {
            await axios.delete(this.url+'/favourite/'+item.id)
            .then(res => item.id =  !res.id)
            .catch(err => console.log(err))
        } catch (error) {
          throw error.message
        }
        
        item.isFavourite = true
    },
    
  
   
  }
};
</script>

<style  scoped>

@import url('../assets/css/style.css');

</style>
