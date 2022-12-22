<template>
   <div class="container mx-auto">
      <div class="grid grid-rows-[1fr] w-full min-h-screen pb-10 pt-24">
      
         <div class=" gradient__bg backgournd_shadow rounded-xl px-4 sm:px-12 py-6 grid grid-rows-[auto,1fr,auto]">
            <div class="flex flex-row text-white items-center px-4">
               <h3 class="text-3xl ml-2 font-extrabold">نمونه کار</h3>
               <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" class="w-7  h-7">
                     <g transform="matrix(1.0714285714285714,0,0,1.0714285714285714,0,0)"><g>
                        <path d="M7.47,6.9a1.18,1.18,0,0,1-.94,0L.83,4.26a.56.56,0,0,1,0-1L6.53.6a1.18,1.18,0,0,1,.94,0l5.7,2.64a.56.56,0,0,1,0,1Z" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round"></path>
                        <path d="M13.5,7.35,7.4,10.16a1,1,0,0,1-.83,0L.5,7.35" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round"></path>
                        <path d="M13.5,10.6,7.4,13.41a1,1,0,0,1-.83,0L.5,10.6" style="fill: none;stroke: #fff;stroke-linecap: round;stroke-linejoin: round"></path>
                     </g></g>
                  </svg>     
               </span>
            </div>
            <div>
               <div id="loading" v-if="loading" class="grid grid-cols-1 w-full h-full justify-center items-center text-white">
                  <div class="w-full h-full flex items-center justify-center">
                     <svg width="180" height="180" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                        <g fill="none" fill-rule="evenodd" stroke-width="2">
                           <circle cx="22" cy="22" r="1">
                                 <animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                                 <animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                           </circle>
                           <circle cx="22" cy="22" r="1">
                                 <animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/>
                                 <animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/>
                           </circle>
                        </g>
                     </svg>
                  </div>
               </div>
               <div v-else class="p-3 w-full h-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-3 items-center">
                  <Cv  
                        v-for="cv in cvs.data" 
                        :key="cv.id"  
                        :title="cv.title"
                        :image="cv.image"
                        :small_description="cv.small_description"
                        :url="cv.url"
                  />
               </div>
            </div>

            <div class="paginate">
                  <Paginate  :currentPage="currentPage" :totalPage="5" @changepaged="changePage"/>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Cv from '../../components/Cv.vue'
import Paginate from '../../components/Paginate.vue'
import personalApi from '../../api' 
export default {
      components: { Cv , Paginate},
      data(){
         return {
            cvs : [] ,
            currentPage : 1 , 
            loading : false , 
         }
      },
      methods : {
         getCv(page = 1){
            this.loading = true ;
            setTimeout(()=>{
               personalApi.get(`cvs`)
               .then(res =>{
                  this.cvs = res.data ; 
               })
               .catch(err => console.log(err))
               .finally(()=>this.loading = false );
            } , 1000);
         },
         changePage(page){
            this.getCv(page);
            this.currentPage = page ;
         }
      },
      created(){
         this.getCv();
      }
}
</script>

