<template>
 <div class="BookAdd">
      <button type="button" class="bookForm" @click="BookForm">
        <span v-if="formStatus"> Hide Book</span>
        <span v-else> Add Book</span>
      </button>
    </div>
<div v-if="formStatus">
  <h4>Add Book</h4>
  <div class="form">
    <form  method="post" @submit.prevent="addBook">
        <div class="book-name">
            <label for="book-name">Book Name <br>
            <input type="text" v-model="book_name" @keydown="bookName">
            </label>
        </div>
        <div class="book-desc">
            <label for="book-desc">Book Desc <br>
            <input type="text" v-model="book_desc">
            </label>
        </div>

        <div class="book-author">
            <label for="book-author">Author Name <br>
            <input type="text" v-model="book_author">
            </label>
        </div>
        <div class="book-page">
            <label for="book-page">Book Page <br>
            <input type="text" v-model="book_page">
            </label>
        </div>

        <div class="book-favourite">
            <label for="book-favourite">Book Favourite <br>
            <input type="checkbox" v-model="book_status">
            </label>
        </div>

        <div class="addBook">
            <button class="addBook" >Add Book</button>
        </div>
    </form>
  </div>

</div>

  <div>
    <ul>
        <li>Book Name: {{book_name}}</li>
        <li>Book Author: {{book_desc}}</li>
        <li>Book Desc: {{book_author}}</li>
        <li>Book Page: {{book_page}}</li>
        <li>Book Status: {{book_status === true ? 'Active': ''}}</li>
        {{books}}
    </ul>
  </div>
</template>

<script>
export default {
    name: 'AddBook',
    data(){
        return {
            book_name: '',
            book_desc: '',
            book_author: '',
            book_page: '',
            book_status: false,
            books: [],
            formStatus: false
        }
    },
    methods: {
        addBook(){

            console.log('Add book clicked');
            this.books.push(this.book_name, this.book_desc, this.book_author, this.book_page, this.book_status)
            
        },
        bookName(e){
            console.log(e);
        },
        BookForm(){
            this.formStatus = !this.formStatus
        }
    }
}
</script>

<style>
@import url('../assets/css/addbook.css');
</style>