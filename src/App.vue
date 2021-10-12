<template>
  <div>
    <Preload v-if="ready"/>
    <MainPage />
    <About />
  </div>
</template>

<script>
import Preload from './views/Preload.vue';
import MainPage from './views/Main-page.vue';
import About from './views/About.vue';
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
  }
</style>
