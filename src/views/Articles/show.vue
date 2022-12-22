<template>
   <div class="container mx-auto">
    <div class="grid grid-rows-[1fr] w-full min-h-screen pb-10 pt-24">
        
        <div class=" bg-white backgournd_shadow rounded-xl h-full overflow-hidden ">
            <div class="flex flex-col-reverse md:flex-row  h-full">
                <div class="flex items-center justify-start w-full px-6 py-8 max-h-full ">
                    <div class="w-full">
                        <img 
                        :src="`http://localhost:8000${article.data.image}`" alt="article-image"
                        class="w-100 float-left aspect-[1/1] rounded-lg shadow-lg
                            object-cover object-center mb-0 mr-6
                            md:[clip-path:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]
                            md:[shape-outside:polygon(0%_0%,100%_0%,75%_100%,0%_100%)]
                            "
                        >
                            <h2 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl  mt-2">{{article.data.title}}</h2>
                        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base" v-html="article.data.description" ></p>

                        <!-- <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                            <a href="#" class="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                            <a href="#" class="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import Article from '../../components/Article.vue'
import Paginate from '../../components/Paginate.vue'
import personalApi from '../../api' 
export default {
      components: { Article , Paginate},
      data(){
         return {
            article : [] ,
            currentPage : 1 , 
            loading : false , 
         }
      },
      methods : {
         getArticles(){
            this.loading = true ;
            personalApi.get(`show-article/${this.$route.params.slug}`)
            .then(res =>{
               this.article = res.data ;
            })
            .catch(err => console.log(err))
            .finally(()=>this.loading = false );
         },
      },
      created(){
         this.getArticles();
      }
}
</script>

