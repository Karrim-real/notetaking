<template>
  <div class="main">
    <div class="heading-text">
        <h3>Favourite Books</h3>
        <!-- {{favourite}} -->
    </div>
    <div v-if="favouriteBook">
      <div class="card" v-for="item in favourite" :key="item.id">
            <div class="card-body">
              <!-- {{item}} -->
              <div class="card-images">
                <img :src="item.books.image" class="card-image" :alt="item.books.title" >
              </div>
              <div class="card-title">
                <h3>{{item.books.title}}</h3>
              </div>
              <div class="card-desc">
                <p>
                  {{item.books.description}}
                </p>
              </div>
              <div class="cardauthor">
                <h5>Author:{{item.books.author}}</h5>
                <span class="pages">
                  <h6>Page: {{item.books.pages}}</h6>
                </span>
              </div>
            <router-link :to="{name: 'BookLayout', params: {id: item.books.id}}"> View More
              </router-link>

              <div class="card-button">
                      <button type="button" class="remove-favourite" @click="RemoveFavourite(item)"> Remove from favourite </button>
              </div>
            </div>
      </div>
    </div>
    <div v-else>
      <h4>Loading Favourite Books ...</h4>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'FavouriteLayout',
    data(){
        return{
            favouriteBook : null,
            removeBkid: '',
            url: process.env.VUE_APP_BASEURL,
            isLoading : true
            
        }
    },
    components:{

    },
    mounted(){
        try {
          axios.get(this.url+"/favourite")
          .then(res => console.log(this.favouriteBook = res.data.books))
          .catch(err => console.log(err))
        } catch (error) {
          throw error.message
        }
        // fetch(this.url)
        // .then(res => res.json().then(data => this.favouriteBook = data.data))
        // .catch(err => console.log(err.message))
    },

    methods:{
         async RemoveFavourite(item){
        // this.removeBkid = 29;
        try {
            await axios.delete(this.url+'/favourite/'+item.id)
            .then(res => item.id =  !res.id )
            .catch(err => console.log(err))
        } catch (error) {
          throw error.message
        }

        item.id =  !item.id
    },

    },

    computed: {
        favourite(){
            return this.favouriteBook.filter(item => item.id)
        },
        

    }
}
</script>

<style>

</style>