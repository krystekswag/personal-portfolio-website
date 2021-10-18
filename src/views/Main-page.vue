<template>
    <div id="main-page">
        <Header />
        <div class="content-wrapper">
            <MainText />
            <MainImg />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import MainText from '@/components/Text-main.vue';
import MainImg from '@/components/Main-img.vue';
    export default {
        name: 'MainPage',
        components: {
            Header,
            MainText,
            MainImg,
        }
    }
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    #main-page{
        background-color: #f1f1f1;
        height: auto;
    }
    .content-wrapper{
        height: 50vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: displayContent 1s;
    }
      @keyframes displayContent{
    0%{
      transform: skew(0deg, 5deg) rotate(5deg) translate(0px, 800px);
      opacity: 0;
    }
    100%{
      transform: skew(0deg, 0deg) rotate(0deg) translate(0px, 0px);
    }
  }
</style>