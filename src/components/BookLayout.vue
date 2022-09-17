<template>
  <div>
    <!-- <h1>Book Details page </h1> -->
    <div class="card-bdy  " v-if="book">
      <div class="card-imag">
        <img :src="require('../assets/images/'+book.image)" class="" :alt="book.title" srcset="">
      </div>
      <div class="card-title">
        <h3>{{book.title}}</h3>
      </div>
      <div class="card-author">
        <h4>Author: {{book.author}}</h4>
      </div>
      <div class="card-desc">
        <p>Desc: {{book.description}}</p>
      </div>
    </div>
    <div v-else>
      <h2>No Book Found with this ID</h2>
    </div>
    <!-- {{book}} -->

  </div>
</template>

<script>
export default {
    props:['id'],
    name: 'BookLayout',
    data(){
        return {
          
          url: "http://localhost:3000/books/",
          book : null
        }
    }, 
    methods: {
      
    },
    mounted(){
      fetch(this.url+this.id)
      .then(res => res.json()
      .then(result => this.book= result))
      .catch(err => console.log(err))
    },
    computed:{
      
    }
}
</script>

<style>

</style>