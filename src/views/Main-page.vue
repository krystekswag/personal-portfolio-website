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
        height: 100vh;
    }
    .content-wrapper{
        height: 90vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>