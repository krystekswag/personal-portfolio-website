<template>
    <div class="container">
        <div class="content-wrapper transitionContent" id="about">
            <MyImg />
            <AboutText />
        </div>
        <div class="content-wrapper" id="tech">
            <Technologies />
        </div>
    </div>
</template>

<script>
import MyImg from '@/components/About-img.vue';
import AboutText from '@/components/About-text.vue';
import Technologies from '@/components/Technologies-text.vue';
    export default {
        name: 'About',
        components: {
            MyImg,
            AboutText,
            Technologies,
        },
    }
</script>

<style lang="scss" scoped>
    .container{
        background-color: #f1f1f1;
    }
    .content-wrapper{
        height: 50vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
    }
    .show{
        display: none;
    }
    .content-tech{
        width: 100%;
    }
    .transitionContent{
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
    @media only screen and (max-width: 1250px){
        .content-wrapper{
            height: auto;
            padding: 1rem 0;
        }
    }
    @media only screen and (max-width: 705px){
        .content-wrapper{
            flex-direction: column;
            text-align: center;
        }
    }
</style>