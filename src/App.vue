<template>
 <BoardLayout/>
  <!-- <AddBook /> -->
 <!-- <ModalLayout  /> -->

 <!-- <h4>{{ title }}</h4> -->
</template>

<script>
// import ModalLayout from './components/ModalLayout'
import BoardLayout from './components/BoardLayout.vue'
// import AddBook from './components/AddBook.vue'

export default {
  name: 'App',
  components : {
     BoardLayout,
    //  ModalLayout ,
    //  AddBook,
     },

  methods: {

  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
