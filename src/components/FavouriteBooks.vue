<template>
  <div class="main">
    <div class="heading-text">
        <h3>Favourite Books</h3>
        <!-- {{favourite}} -->
    </div>
    <div v-if="favouriteBook">
      <div class="card" v-for="item in favourite" :key="item.id">
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
                <button type="button" class="add-favourite" @click="addFavourite(item)">Add to Favourite</button>
                  </span>
                  <span v-else>
                      <button type="button" class="remove-favourite" @click="removeFavourite(item)" >
                  Remove from Favourite
                      </button>
                  </span>
              
              </div>
            </div>
      </div>
    </div>
    <div v-else>
      <h2>No Book Avaialble</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'FavouriteLayout',
    data(){
        return{
            favouriteBook : [],
            url: process.env.VUE_APP_BASEURL,
        }
    },
    components:{

    },
    mounted(){
        
        try {
          axios.get(this.url).then(res => this.favouriteBook = res.data.data).catch(err => console.log(err))
        } catch (error) {
          throw error.message
        }
        // fetch(this.url)
        // .then(res => res.json().then(data => this.favouriteBook = data.data))
        // .catch(err => console.log(err.message))
    },

    methods:{
        removeFavourite(item){
          try {
              axios.put(this.url+item.id, {
                isFavourite : this.isFavourite = true
              })
          } catch (error) {
            throw error.message
          }
            item.isFavourite = true 
        }
    },

    computed: {
        favourite(){
            return this.favouriteBook.filter(item => !item.isFavourite)
        },
        

    }
}
</script>

<style>

</style>