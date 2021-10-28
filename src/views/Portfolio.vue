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
        font-size: 3rem;
        padding-bottom: 2rem;
        color: #333333;
    }
    .wrapper{
        background-color: #f1f1f1;
        height: auto;
        width: 100%;
        padding: 2rem 0;
    }
    @media only screen and (max-width: 1250px){
        h2{
            font-size: 2.5rem;
            padding-bottom: 1rem;
        }
        .wrapper{
            padding: 1rem 0;
        }
    }
    @media only screen and (max-width: 705px){
        h2{
            font-size: 1.8rem;
            padding-bottom: 0.5rem;
        }
    }
    @media only screen and (max-width: 480px){
        h2{
            font-size: 1.3rem;
        }
    }
</style>