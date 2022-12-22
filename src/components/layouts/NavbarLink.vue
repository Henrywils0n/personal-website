<template>
   <router-link  
    class="flex justify-between items-center  mb-1 sm:inline-block md:text-xl sm:ml-6  cursor-pointer sm:font-bold text-special-gray hover:text-white "
    :to="to">
        <span>{{label}}</span>
        <span>
             <slot></slot>
        </span>
   </router-link>
</template>

<script>
export default {
    props : {
        to : {
            type : String , 
            required :  true
        },
        label : {
            type : String , 
            required :  true
        }
    },
    setup(){}
}
</script>

<style>

</style>