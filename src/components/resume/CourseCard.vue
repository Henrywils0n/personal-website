<template>
<div class="card">
    <div @click="openModal">
        <img :src="this.item.logo" />
        <p class="title"> {{ this.item.jobTitle }} </p>
        <p class="company">{{ this.item.company }}</p>
        <p class="duration">{{ this.item.duration }}</p>
    </div>
    <CoursePopup v-if="showPopup" :item="item" @close="closeModal"></CoursePopup>
</div>
</template>

<script>
import CoursePopup from './CoursePopup.vue'

export default {
  name: 'CourseCard',
  props:
  {
    item: Object,
  },
  data() {
      return {
          showPopup: false,
      }
  },
  components: {
    'CoursePopup': CoursePopup,
  },
  methods: {
      closeModal() {
          this.showPopup = false;
      },
      openModal() {
          this.showPopup = true;
      }
  },
}
</script>
<style lang="scss" scoped>
.card {
    display: flex;
    width: 300px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    transition: all 0.5s ease;

    .title {
        font-size: 2rem;
        line-height: 2.2rem;
        font-weight: 600;
        margin-bottom: 0px;
    }

    .company {
        font-size: 1.7;
        line-height: 1.85rem;
        font-weight: 500;
        margin-bottom: 8px;
    }

    img {
        height: 150px;
        width: 150px;
        padding: 8px;
    }
}

.card:hover {
    background-color: rgb(237, 237, 237); 
}
</style>