<template>
   <div class="container mx-auto">
      <div class="grid grid-rows-[1fr] w-full min-h-screen pb-10 pt-24">
      
         <div class=" gradient__bg backgournd_shadow rounded-xl px-4 sm:px-12 py-4 grid grid-rows-[auto,1fr]">
            <div class="grid sm:grid-cols-3 mb-3">
               <div class="text-gray-100 font-bold"><span class=" text-gray-500 ml-2">آدرس : </span>{{settings.address}}</div>
               <div class="text-gray-100 font-bold"><span class=" text-gray-500 ml-2">تلفن : </span>{{settings.phone}}</div>
               <div class="text-gray-100 font-bold"><span class=" text-gray-500 ml-2">ایمیل : </span>{{settings.email}}</div>
            </div>
            <div  class="bg-white rounded-md shadow-lg grid grid-cols-1 xl:grid-cols-2  justify-between overflow-hidden">
               <div class="flex-1 p-8">
                  <h3 class="text-gray-900 text-xl font-bold flex ">
                     <svg class="ml-2 sm:w-8 sm:h-7 w-5 h-6" viewBox="0 0 32 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M7.17756 2.63068C5.29428 4.24542 4.23977 6.52208 4.00501 9.31384C0.759826 9.66531 0 11.1943 0 15.8181C0 20.4194 0.752432 21.956 3.9577 22.3172C3.95562 22.3476 3.95456 22.3782 3.95456 22.4091C3.95456 26.0492 6.90559 29 10.5456 29H11.8637C12.5917 29 13.1818 28.4098 13.1818 27.6818C13.1818 26.9538 12.5917 26.3636 11.8637 26.3636H10.5456C8.36153 26.3636 6.59092 24.5931 6.59092 22.4091L6.5909 22.4012C10.9121 22.2912 11.8637 20.9925 11.8637 15.8181C11.8637 10.6718 10.9224 9.35923 6.66063 9.23703C6.89267 7.15658 7.69283 5.66164 8.89359 4.63209C10.3665 3.36921 12.6395 2.6364 15.7745 2.63637C18.9125 2.63634 21.2108 3.36213 22.7064 4.62554C23.9243 5.6543 24.7391 7.1493 24.9749 9.23705C20.7139 9.35941 19.7728 10.6721 19.7728 15.8181C19.7728 21.2458 20.8197 22.4091 25.7046 22.4091C30.5895 22.4091 31.6364 21.2458 31.6364 15.8181C31.6364 11.1941 30.8765 9.66515 27.6309 9.31379C27.392 6.50179 26.3141 4.22196 24.4077 2.61158C22.2674 0.803509 19.2711 -3.70837e-05 15.7744 1.2837e-09C12.2747 3.70863e-05 9.29683 0.813592 7.17756 2.63068Z" fill="#3B82F6"></path>
                     </svg>
                     <span>
                        فرم تماس باما 
                     </span>
                  </h3>
                  <form @submit.prevent="sendMessage">
                     <div class="flex flex-col sm:flex-row ">
                        <div class="flex flex-col flex-1 sm:space-x-3">
                           <label for="name" class="text-gray-400 mr-4 mt-2">نام</label>
                           <input v-model="form.username" type="text" id="name" placeholder="نام خود را وارد کنید"  class="bg-gray-300  h-10 text-sm text-dark-550 focus:font-bold focus:outline-none  placeholder-gray-300 bg-opacity-10 rounded-md border border-gray-200 px-4 " required >
                        </div>
                        <div class="flex flex-col flex-1 ">
                           <label for="email" class="text-gray-400 mr-4 mt-2">ایمیل</label>
                           <input v-model="form.email" type="email" id="email" placeholder="ایمیل خود را وارد کنید"  class="bg-gray-300 h-10 text-sm text-dark-550 focus:font-bold focus:outline-none  placeholder-gray-300 bg-opacity-10 rounded-md border border-gray-200 px-4 " required>
                        </div>
                     </div>
                     <div class="flex flex-col ">
                        <label for="phone" class="text-gray-400 mr-4 mt-2">تلفن همراه</label>
                        <input v-model="form.phone" type="text" id="phone" placeholder="شماره تلفن خود را وارد کنید"  class="bg-gray-300 h-10 text-sm text-dark-550 focus:font-bold focus:outline-none  placeholder-gray-300 bg-opacity-10 rounded-md border border-gray-200 px-4 " required>
                     </div>
                     <div class="flex flex-col ">
                        <label for="message" class="text-gray-400 mr-4 mt-2">متن پیام</label>
                        <textarea v-model="form.message" id="message"  rows="10" class="bg-gray-300  h-24 max-h-24 text-sm text-dark-550 focus:font-bold focus:outline-none  placeholder-gray-300 bg-opacity-10 rounded-md border border-gray-200 px-4 py-2" placeholder="متن پیام خود را وارد کنید" required></textarea>
                     </div>
                     <div class="flex flex-col justify-between items">
                        <button v-if=" !loading " class="mt-6 bg-green-500 h-10  w-full sm:w-1/2 px-12 flex justify-center items-center text-white  rounded font-medium transition duration-200 hover:bg-green-600">
                              ارسال پیام                 
                        </button>
                        <button v-else  class="mt-6 bg-green-500 h-10  w-full sm:w-1/2 px-12 flex justify-center items-center text-white  rounded font-medium transition duration-200">
                           <svg class="w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50">
                              <circle class="stroke-current text-white text-opacity-30" cx="50" cy="50" r="20" fill="none" stroke-width="8" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="200, 300">
                              </circle>
                              <circle class="stroke-current text-white" cx="50" cy="50" r="20" fill="none" stroke-width="8" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="100, 200">
                                 <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"></animateTransform>
                                 <animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"></animate>
                                 <animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"></animate>
                              </circle>
                           </svg>                        
                        </button>
                        <small v-if="error" class="text-red-600 mt-2 " >○ &ThinSpace; پیام شما ارسال نشد</small>
                     </div>
                  </form>
               </div>
               <div class="flex-1 border-r">
                  <iframe 
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8857.751402868762!2d48.54708401745639!3d38.286725233957974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4018a07e2e721611%3A0xfb962303ec660028!2sAbibeiglou%2C%20Ardabil%20Province%2C%20Iran!5e0!3m2!1sen!2snl!4v1642664169732!5m2!1sen!2snl" 
                     class="h-[300px] w-full sm:h-full border-none outline-none"
                     allowfullscreen="" 
                     loading="lazy"
                  >
                  </iframe>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>


<script>
import personalApi from '../../api' 
export default {
    data(){
      return {
        settings : [],
        form : {
           username : '' , 
           email : '' , 
           phone : '' , 
           message : '' 
        }, 
        loading : false ,
        error : false 
      }
    }, 
    methods: {
      getSettings(){
        personalApi.get(`settings` )
        .then(res =>{

            this.settings = res.data.data[0] ;

        })
        .catch(err => console.log(err))
      },
      sendMessage(){
         this.loading = true ;
            this.error = false ;
           personalApi.post('contact-us' , this.form)
            .then(res => {
               console.log(res)

                 this.loading = false ;
            })
            .catch(err => {
               this.loading = false ;
               this.error = true ;
               console.log(err)
            })
      }
    },
    created(){
      this.getSettings();
    }
}
</script>
