<template>
<div class="card">
    <div @click="openModal">
        <img :src="this.item.logo" />
        <p class="title"> {{ this.item.jobTitle }} </p>
        <p class="company">{{ this.item.company }}</p>
        <p class="duration">{{ this.item.duration }}</p>
    </div>
    <ExperiencePopup v-if="showPopup" :item="item" @close="closeModal"></ExperiencePopup>
</div>
</template>

<script>
import ExperiencePopup from './ExperiencePopup.vue'

export default {
  name: 'ExperienceCard',
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
    'ExperiencePopup': ExperiencePopup,
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