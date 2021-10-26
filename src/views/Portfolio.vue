<template>
    <div class="wrapper" id="portfolio">
        <h2>My projects</h2>
        <div class="projects-wrapper">
            <Projects />
        </div>
    </div>
</template>

<script>
import Projects from '@/components/Portfolio-projects.vue';
    export default {
        name: 'Portfolio',
        components: {
            Projects,
        },
    }
</script>

<style lang="scss" scoped>
    h2{
        text-align: center;
        font-size: 55px;
        padding: 10px;
        margin-bottom: 20px;
        color: #333333;
    }
    .wrapper{
        background-color: #f1f1f1;
        height: auto;
        width: 100%;
        padding: 50px 0;
        scroll-margin-top: 70px;
    }
    @media only screen and (max-width: 1250px){
        h2{
            font-size: 45px;
            margin-bottom: 10px;
            padding: 5px;
        }
        .wrapper{
            padding: 40px 0;
        }
    }
</style>