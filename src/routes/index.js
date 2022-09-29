import {createRouter, createWebHistory} from 'vue-router'
import ModalLayout from '../components/ModalLayout.vue'
import AddBook from '../components/AddBook.vue'
import BookLayout from '../components/BookLayout'
import AboutLayout from '../components/AboutLayout'
import FavouriteLayout from '../components/FavouriteBooks'
import NotFound from '../components/NotFound'
import LoginLayout from '../components/LoginLayout'
import SignupLayout from '../components/SignupLayout'
import ProfileLayout from '../components/ProfileLayout'


const routes = [
    {
        path: '/', 
        name: 'home', 
        component: ModalLayout
    },
    {
        path: '/addbook',
         name:'addbook',
          component: AddBook
    },
    {
        path: '/about',
         name:'about',
        component: AboutLayout
    },
    {
        path: '/favourites', 
        name:'favourites', 
        component: FavouriteLayout,
        
    },
    {
        path: '/book/:id', 
        name: 'BookLayout', 
        component: BookLayout, 
        props: true
    },
    {
        path: '/signup',
         name:'signup',
          component: SignupLayout
    },
    {
        path: '/login', 
        name:'login',
         component: LoginLayout
        },
    {
        path: '/profile',
         name:'profile', 
         component: ProfileLayout
    },
    {
        path: '/*',
         name: 'NotFound', 
         component: NotFound
    },
]
const router = createRouter({
    history:createWebHistory(),
    routes

})

// router.beforeEach((to, from, next)=>{
//     if(to.matched.some(record => record,meta.requiresAuth)){
//         if(Auth.check()){
//             next()
//             return;
//         }
//         else{
//             router.push({name: 'login'})
//         }
//     }
// })

export default router
