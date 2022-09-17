<template>
  <div class="main">
    
    <div v-if="books">
      <div class="card" v-for="item in books" :key="item.id">
            <div class="card-body">

              <div class="card-images">
                <img :src="require('../assets/images/'+item.image)" class="card-image" :alt="item.title" >
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
export default {
  name: 'ModalLayout',
  data() {
    return {
      books: [],
      url: process.env.VUE_APP_BASEURL
    }
  },
  mounted(){
    console.log(process.env.VUE_APP_BASEURL);
    fetch(this.url).then(res =>{
    res.json().then(data => this.books = data)
    }).catch(err => console.log(err))
  },
  methods: {
    addFavourite(item){
        
        item.isFavourite = false

    },
    removeFavourite(item){
        
        item.isFavourite = true

    }, 
   
  }
};
</script>

<style  scoped>

@import url('../assets/css/style.css');
</style>
