<template>
  <div>
    <Preload v-if="ready"/>
    <Header v-if="!ready"/>
    <Err404 v-if="!ready"/>
    <Contact v-if="!ready"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Contact from './views/Contact.vue';
import Err404 from './components/Err404.vue';
import debounce from 'lodash.debounce';

export default {
  name: 'App',
  data(){
    return{
      ready: true,
    }
  },
  components: {
    Header,
    Err404,
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
