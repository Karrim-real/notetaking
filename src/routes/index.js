import {createRouter, createWebHistory} from 'vue-router'
import ModalLayout from '../components/ModalLayout.vue'
import AddBook from '../components/AddBook.vue'
import BookLayout from '../components/BookLayout'
import AboutLayout from '../components/AboutLayout'
import FavouriteLayout from '../components/FavouriteBooks'
import NotFound from '../components/NotFound'

const routes = [
    {path: '/', name: 'home', component: ModalLayout},
    {path: '/addbook', name:'addbook', component: AddBook},
    {path: '/about', name:'about', component: AboutLayout},
    {path: '/favourites', name:'favourites', component: FavouriteLayout},
    {path: '/book/:id', name: 'BookLayout', component: BookLayout, props: true},
    {path: '/:catchAll(.*)', name: 'NotFound', component: NotFound},
]
const router = createRouter({
    history:createWebHistory(),
    routes

})

export default router
