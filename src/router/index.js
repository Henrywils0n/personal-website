import { createRouter  , createWebHistory } from 'vue-router' 

// route pages 
import Home from '../views/Home/index.vue'
import Articles from '../views/Articles/index.vue'
import ShowArticle from '../views/Articles/show.vue'
import Contact from '../views/ContactUs/index.vue'
import Cv from '../views/Cv/index.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
    {path: '/' , component :  Home},
    {path: '/articles' , component : Articles },
    {path: '/articles/:slug' , component : ShowArticle },
    {path: '/cvs' , component : Cv },
    {path: '/contact-us' , component : Contact },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
    history : createWebHistory() , 
    routes , 
})

export default router ;