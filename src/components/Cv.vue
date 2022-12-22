<template>
    <div :class="`cv-card w-full min-h-full flex flex-col justify-end overflow-hidden relative rounded-xl duration-300 `" >
        <img :src="`http://localhost:8000${image}`" class="absolute inset-0 w-full h-full">
        <div class="card-content">
        <h3 class="title font-extrabold text-xl relative w-max-content">{{title}}</h3>
        <p class="body my-4 min-h-[72px] max-h-[72px] overflow-hidden">{{small_description}}</p>
        <a :href="url" class="py-1 px-2 text-sm  text-gray-800 font-bold rounded-md  bg-green-500 hover:bg-green-900 hover:text-white duration-100">برو به سایت</a>
        </div>
    </div>
</template>

<script>
export default {
    props : ['image' , 'title' , 'small_description' , 'url'] ,
    setup(){

    }
}
</script>
