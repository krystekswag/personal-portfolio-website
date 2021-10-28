<template>
  <div>
    <Preload v-if="ready"/>
    <MainPage v-if="!ready"/>
    <About v-if="!ready"/>
    <Portfolio v-if="!ready"/>
    <Contact v-if="!ready"/>
  </div>
</template>

<script>
import Preload from './views/Preload.vue';
import MainPage from './views/Main-page.vue';
import About from './views/About.vue';
import Portfolio from './views/Portfolio.vue';
import Contact from './views/Contact.vue';
import debounce from 'lodash.debounce';

export default {
  name: 'App',
  data(){
    return{
      ready: true,
    }
  },
  components: {
    MainPage,
    Preload,
    About,
    Portfolio,
    Contact,
  },
  mounted(){
    this.hidePreload();
  },
  methods:{
    hidePreload: debounce(function(){
      this.ready = !(this.ready);
    },3000)
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  *{
    margin: 0;
    font-family: 'Kanit', sans-serif;
    scroll-behavior: smooth;
  }
  body{
    background-color: #f1f1f1;
  }
</style>
