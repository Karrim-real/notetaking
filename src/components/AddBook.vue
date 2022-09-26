<template>
 <div class="BookAdd">
      <button type="button" class="bookForm"  @click="BookForm" enctype="multipart/form-data">
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
            <input type="text" v-model="formDatas.book_name">
            </label>
        </div>
        <div class="book-desc">
            <label for="book-desc">Book Desc <br>
            <input type="text" v-model="formDatas.book_desc">
            </label>
        </div>

        <div class="book-author">
            <label for="book-author">Author Name <br>
            <input type="text" v-model="formDatas.book_author">
            </label>
        </div>
        <div class="book-page">
            <label for="book-page">Book Page <br>
            <input type="text" v-model="formDatas.book_page">
            </label>
        </div>

         <div class="book-page">
            <label for="book-cover">Book Cover <br>
            <input type="file" @change="uploadImage" accept="image/*">
            </label>
        </div>

        <div class="book-favourite">
            <label for="book-favourite">Book Favourite <br>
            <input type="checkbox" v-model="formDatas.book_status">
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
        <li>Book Name: {{formDatas.book_name}}</li>
        <li>Book Author: {{formDatas.book_desc}}</li>
        <li>Book Desc: {{formDatas.book_author}}</li>
        <li>Book Page: {{formDatas.book_page}}</li>
        <!-- <li><img :src="formDatas.book_image" :alt="formDatas.book_name" ></li> -->
        <li>Book Status: {{formDatas.book_status === true ? 'Active': ''}}</li>
        <!-- {{books}} -->
        {{formDatas}}
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
// import axios from 'axios'
export default {
    name: 'AddBook',
    data(){
        return {
            
            books: [],
            formStatus: false,
            image: '',
            formDatas: {
                book_name: '',
                book_desc: '',
                book_author: '',
                book_page: '',
                // book_image : '',
                book_status: '',
            },
            url: process.env.VUE_APP_BASEURL,
            
        }
    },
    methods: {
        
        uploadImage(e){
            // console.log('I get my file', e.target.files[0]);
            this.image = e.target.files[0]
            // console.log(this.image);
            
        },
        async addBook(){
           
            const formData = new FormData()
            formData.append('image', this.image)
            console.log(formData.get('image'));
             const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

            try {
                await axios.post(this.url+'/book', {
                    title: this.formDatas.book_name,
                    author: this.formDatas.book_author,
                    pages: this.formDatas.book_page,
                    description: this.formDatas.book_desc,
                    isFavourite: this.formDatas.book_status == true ? 1 :0,
                    image: formData.get('image'),

                },
                config
                ).then(response =>{
                    if(response.status === 200){
                            this.$router.push({name: 'home'});
                        }
                })
                .catch(err => console.log(err.response.data.errors))
            } catch (error) {
                throw error.message
            }
            // this.books.push(this.formDatas.book_name, this.formDatas.book_desc, this.formDatas.book_author, this.formDatas.book_page, thisformDatas..book_image, thisformDatas..book_status)  
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