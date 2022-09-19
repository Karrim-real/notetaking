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
            <input type="text" v-model="book_name">
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

         <div class="book-page">
            <label for="book-cover">Book Cover <br>
            <input type="file" :="book_image" accept="image/*" @change="uploadImage">
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
        <li><img :src="book_image" :alt="book_name" ></li>
        <li>Book Status: {{book_status === true ? 'Active': ''}}</li>
        <!-- {{books}} -->
        {{formData}}
    </ul>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'AddBook',
    data(){
        return {
            book_name: '',
            book_desc: '',
            book_author: '',
            book_page: '',
            book_image : '',
            book_status: false,
            books: [],
            formStatus: false,
            formData: {
                book_name: '',
                book_desc: '',
                book_author: '',
                book_page: '',
                book_image : '',
                book_status: false,
            }
        }
    },
    methods: {
        async addBook(){

            console.log('Add book clicked');
            this.formData.book_name = this.book_name,
            this.formData.book_desc = this.book_desc,
            this.formData.book_author = this.book_author,
            this.formData.book_page = this.book_page,
            this.formData.book_status = this.book_status
            // try {
            //     await axios.post('http://localhost:8000/api/book', {
            //         title: this.book_name,
            //         author: this.book_author,
            //         pages: this.book_page,
            //         description: this.book_desc,
            //         isFavourite: this.book_status,
            //         image: this.formData.book_image,

            //     }).then(res => console.log(res)).catch(err => console.log(err.response.data.errors))
            // } catch (error) {
            //     throw error.message
            // }
            this.books.push(this.book_name, this.book_desc, this.book_author, this.book_page, this.book_image, this.book_status)  
        },
        bookName(e){
            console.log(e);
        },
        BookForm(){
            this.formStatus = !this.formStatus
        },
        uploadImage(e){
            // console.log('I get my file', e.target.files[0]);
            this.formData.book_image = e.target.files[0]
            console.log(e.target.files[0]);
            
        }
    }
}
</script>

<style>
@import url('../assets/css/addbook.css');
</style>