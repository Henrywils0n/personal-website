<template>
  <div>
    <nav class="navbar">
      <router-link class="nav-link" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      <a href="https://www.linkedin.com/in/henry-gw-wilson/" target="_blank" class="nav-link social-icon"><button type="button" class="btn btn-li"><i class="fab fa-linkedin-in"></i></button></a>
      <a href="https://github.com/henrywils0n" target="_blank" class="nav-link social-icon"><button type="button" class="btn btn-git"><i class="fab fa-github"></i></button></a>
    </nav>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Projects',
          page:'/projects'
        },
        {
          id: 2,
          text: 'Resume',
          page:'/resume'
        },
        {
          id: 3,
          text: 'Algorithms',
          page:'/algorithms'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar { 
  background-color: lightblue;
  display: flex;

  .nav-link {
    color: rgb(10, 10, 10);
    font-weight: 500;
    font-size: 20px;
    display: block;
    border-right:1px solid #bbb;
    justify-self: flex-start;
    transition: all 0.3s;

    &:hover {
      color: rgb(0, 49, 147);
    }
  }
  

  .social-icon {
    align-self: flex-end !important;
  }
}
</style>