<template>
    <div class="wrapper" id="portfolio">
        <h1>My projects</h1>
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
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        text-align: center;
        font-size: 55px;
        padding: 10px;
        margin-bottom: 20px;
        color: #333333;
    }
    .wrapper{
        background-color: #f1f1f1;
        min-height: 100vh;
        height: auto;
        width: 100%;
        padding: 100px 0;
    }
</style>