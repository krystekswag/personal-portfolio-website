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
@import url("http://db.onlinewebfonts.com/c/0a6ee448d1bd65c56f6cf256a7c6f20a?family=Bahnschrift");
  *{
    margin: 0;
    font-family: 'Bahnschrift', sans-serif;
    scroll-behavior: smooth;
  }
  body{
    background-color: #f1f1f1;
  }
</style>
