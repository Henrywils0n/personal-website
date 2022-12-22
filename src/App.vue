<template>
    <div class="w-full min-h-screen" >
      <Navbar  />
      <div class="min-h-screen">
        <div class="backgournd_image w-full absolute inset-0 z-10"> </div>
        <div class=" min-h-screen relative z-20 overflow-hidden">
          <router-view></router-view>
        </div>
      </div>
    </div>
</template>

<script>
import Navbar from "./components/layouts/Navbar.vue"
import {reactive , ref} from 'vue'
export default {
    components: { Navbar } ,

    setup(){

      return {
     
      }
    }
}
</script>