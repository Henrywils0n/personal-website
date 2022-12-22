<template>
<div class="shadow-sm p-4 flex flex-col bg-white rounded h-full">
    <router-link :to="{path : `/articles/${slug}` , params : { slug }}" class="rounded flex w-full md:h-40 sm:h-60 h-44 overflow-hidden" href="/articles/relationships-in-database">
        <img :src="'http://localhost:8000' + img" class="w-full h-full">
    </router-link>

   <div class="flex flex-col flex-1">
        <div class="flex flex-col flex-grow">
            <h4 class="mt-3 mb-4 ">
                <router-link :to="`/articles/${slug}`" class="font-bold text-sm  text-justify transition duration-200 hover:text-gray-900 text-gray-800 h-16 overflow-hidden" >
                  {{title}}
                </router-link>
            </h4>
            <p v-html="small_description"></p>
        </div>

        <div>
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center justify-between">
                    <img class="rounded-full w-6 h-6 object-cover ml-1" :src="'http://localhost:8000' + user_avatar" >
                    <h6>
                        <span class="text-gray-400 font-semibold  text-xs transition duration-200 hover:text-gray-800"> {{userName}} </span>
                    </h6>
                </div>

               <div class="flex items-center space-x-reverse space-x-2">
                  <span class="group flex text-blue-700 items-center px-2 font-semibold text-xs  py-1 rounded bg-blue-40 transition duration-200 hover:bg-blue-700 hover:text-white">
                  <svg class="ml-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path class="fill-current transition duration-200 text-blue-700 group-hover:text-white" fill-rule="evenodd" clip-rule="evenodd" d="M5.00525 4.99988C4.77513 4.99988 4.58858 5.18643 4.58858 5.41654C4.58858 5.64666 4.77513 5.83321 5.00525 5.83321L6.67725 5.83321C6.90737 5.83321 7.09392 5.64666 7.09392 5.41654C7.09392 5.18643 6.90737 4.99988 6.67725 4.99988H5.00525ZM3.3335 6.67224C3.10338 6.67224 2.91683 6.85879 2.91683 7.08891C2.91683 7.31903 3.10338 7.50557 3.3335 7.50557L6.6775 7.50557C6.90762 7.50557 7.09416 7.31903 7.09416 7.08891C7.09416 6.85879 6.90762 6.67224 6.6775 6.67224L3.3335 6.67224Z"></path>
                     <path class="stroke-current transition duration-200 text-blue-700 group-hover:text-white" d="M7.08323 2.17834C6.6357 2.13634 6.1178 2.11907 5.52165 2.11907C1.83979 2.11907 0.958571 2.77779 0.528906 5.85116C0.46337 6.31993 0.424047 6.73253 0.41753 7.09518M7.08323 2.17834C9.3997 2.39569 9.83099 3.27541 9.47089 5.85116C9.04123 8.92452 8.16001 9.58323 4.47814 9.58323C1.35787 9.58323 0.381319 9.11014 0.41753 7.09518M7.08323 2.17834C7.08323 2.17834 7.14666 1.79476 7.08323 1.28972C6.92699 0.0456842 1.79278 0.208173 1.24992 1.28972C0.417377 2.9484 0.41753 7.09518 0.41753 7.09518" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                     {{rank}}
                  </span>
               </div>
                
            </div>

            <div class="flex items-center justify-between">
                <div class="flex items-center">
                     <!-- <button   class="flex group items-center px-1 h-5 ml-2 text-xs text-red-450 bg-red-700 bg-opacity-10 rounded transition duration-200 hover:bg-opacity-100 hover:text-white">
                        <svg class="ml-1 -mt-0.5" fill="none" height="11" viewBox="0 0 13 11" xmlns="http://www.w3.org/2000/svg">
                           <path class="stroke-current transition duration-200 text-red-450 group-hover:text-white" d="M3.95035 1.229C4.81955 1.229 5.61243 1.66166 6.21284 2.15457C6.81326 1.66166 7.60614 1.229 8.47534 1.229C10.3497 1.229 11.8691 2.62275 11.8691 4.34192C11.8691 7.80824 7.92382 9.82702 6.62321 10.3984C6.36123 10.5134 6.06445 10.5134 5.80248 10.3984C4.50187 9.827 0.556602 7.80816 0.556602 4.34184C0.556602 2.62267 2.07603 1.229 3.95035 1.229Z" stroke="#E81C4D" stroke-width="0.761705"></path>
                        </svg>
                        1
                     </button> -->
                    
               </div>

                <div class="flex items-center font-medium text-xs  text-gray-400">
                    <svg class="ml-1" width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.60509 1.45136C2.44111 1.61533 2.36357 1.8075 2.33008 2.00642C2.93427 1.89004 3.6854 1.84615 4.61527 1.84615C5.54514 1.84615 6.29627 1.89004 6.90046 2.00642C6.86697 1.8075 6.78942 1.61533 6.62545 1.45136C6.37407 1.19998 5.82701 0.923077 4.61527 0.923077C3.40353 0.923077 2.85647 1.19998 2.60509 1.45136ZM1.95237 0.798643C1.44953 1.30148 1.38477 1.91343 1.3845 2.30521C0.299759 2.83849 -0.000112534 3.92458 -0.000112534 6C-0.000112534 8.07542 0.299759 9.16151 1.3845 9.69479C1.38477 10.0866 1.44953 10.6985 1.95237 11.2014C2.45099 11.7 3.28854 12 4.61527 12C5.942 12 6.77955 11.7 7.27817 11.2014C7.78101 10.6985 7.84577 10.0866 7.84604 9.69479C8.93079 9.16151 9.23066 8.07542 9.23066 6C9.23066 3.92458 8.93079 2.83849 7.84604 2.30521C7.84577 1.91344 7.78101 1.30149 7.27817 0.798644C6.77955 0.300024 5.942 0 4.61527 0C3.28854 0 2.45099 0.300024 1.95237 0.798643ZM6.90046 9.99358C6.29626 10.11 5.54514 10.1538 4.61527 10.1538C3.68541 10.1538 2.93428 10.11 2.33008 9.99358C2.36357 10.1925 2.44111 10.3847 2.60509 10.5486C2.85647 10.8 3.40353 11.0769 4.61527 11.0769C5.82701 11.0769 6.37407 10.8 6.62545 10.5486C6.78943 10.3847 6.86696 10.1925 6.90046 9.99358ZM1.4998 8.67356C1.15669 8.36477 0.922964 7.73297 0.922964 6C0.922964 4.26703 1.15669 3.63523 1.4998 3.32643C1.67362 3.16999 1.9565 3.02236 2.47171 2.91931C2.99245 2.81515 3.68384 2.76923 4.61527 2.76923C5.54671 2.76923 6.2381 2.81515 6.75883 2.91931C7.27405 3.02236 7.55692 3.16999 7.73075 3.32643C8.07385 3.63523 8.30758 4.26703 8.30758 6C8.30758 7.73297 8.07385 8.36477 7.73075 8.67356C7.55692 8.83001 7.27405 8.97764 6.75883 9.08069C6.2381 9.18485 5.54671 9.23077 4.61527 9.23077C3.68384 9.23077 2.99245 9.18485 2.47171 9.08069C1.9565 8.97764 1.67362 8.83001 1.4998 8.67356Z" fill="#8092B0"></path>
                        <path d="M4.61548 4.15381C4.61548 4.15381 4.61548 5.07689 4.61548 5.53842C4.61548 5.99996 4.61547 5.99996 5.07702 5.99996C5.53856 5.99996 6.92317 5.99996 6.92317 5.99996" stroke="#8092B0" stroke-width="0.923077" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    زمان مطالعه: {{time}} دقیقه
                </div>
            </div>
        </div>
   </div>
</div>
</template>

<script>
export default {
    props : ['time' ,'rank' ,'slug' , 'user_avatar' , 'userName' , 'description' , 'title' , 'img' , 'small_description'],
    setup(){

    }
}
</script>
