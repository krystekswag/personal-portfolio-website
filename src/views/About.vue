<template>
    <div class="content-wrapper" id="about">
        <MyImg />
        <AboutText />
    </div>
    <div class="content-wrapper">
        <Technologies />
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
        }
    }
</script>

<style lang="scss" scoped>
    .content-wrapper{
        background-color: #f1f1f1;
        height: 50vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 100px 0;
    }
    .content-tech{
        width: 100%;
    }
</style>