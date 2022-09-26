<template>
  <div>
    <!-- <h1>Book Details page </h1> -->
    <div class="card-bdy  " v-if="book">
      <!-- {{book}} -->
      <h3 v-if="successmsg">{{successmsg}}</h3>
      <h3 v-if="errors" class="error">{{errors}}</h3>

      <div class="card-imag">
        <img :src="book.image" class="imageResize" :alt="book.title" srcset="">
      </div>
      <div class="card-title">
        <h3>{{book.title}}</h3>
      </div>
      <div class="card-author">
        <h4>Author: {{book.author}}</h4>
      </div>

      <div class="card-author">
        <h4>Page: {{book.pages}}</h4>
      </div>

       <div class="card-button">
                  <span v-if="book.isFavourite">
                <button type="button" class="add-favourite" @click="BookFavourite(book)">Add to Favourite</button>
                  </span>
                  <span v-else>
                      <button type="button" class="remove-favourite" @click="BookFavourite(book)" >
                  Remove from Favourite
                      </button>
                  </span>
              
              </div>

      <div class="card-desc">
        <p>Desc: {{book.description}}</p>
      </div>
    </div>
    <div v-else>
      <h2>Loaing book ...</h2>
    </div>
    <!-- {{book}} -->

  </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    name: 'BookLayout',
    data(){
        return {
          
          url: process.env.VUE_APP_BASEURL,
          book : null,
          errors: '',
          successmsg: ''

        }
    }, 
    methods: {
       async BookFavourite(item){
        console.log(item.id);
        try {
           await axios.post(this.url+"/favouritebook",{
            'book_id': this.book_id = item.id
           }).then(res => res.data.status === 'success' ? this.successmsg = res.data.message : console.log(this.errors = res.data.message))
            .catch(err => console.log(err))
        } catch (error) {
          throw error.message
        }
        item.isFavourite =  !item.isFavourite
    },
    
    },
    mounted(){
      // console.log(this.url+this.id);

      //Using Axios
      try {
          axios.get(this.url+'/book/'+this.id)
          .then(res => this.book = res.data.data)
          .catch(err => err.message)
      } catch (error) {
        throw error.message
      }
      // fetch(this.url+this.id)
      // .then(res => res.json()
      // .then(result => this.book = result.data))
      // .catch(err => console.log(err))
    },
    
}
</script>

<style>
.imageResize{
  height: 400px;
  widows: 160pz;
}
</style>