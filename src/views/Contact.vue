<template>
    <div class="contact">
        <h1>Contact me</h1>
        <h2>Phone number: +48 666 354 7744</h2>
        <h2>E-mail: krystekswag@gmail.com</h2>
        <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
    export default {
        name: 'Contact',
        components: {
            Footer,
        }
    }
</script>

<style lang="scss" scoped>
    h1{
        font-size: 55px;
        color: #333333;
        margin-bottom: 20px;
    }
    h2{
        font-size: 30px;
        color: #333333;
        margin-bottom: 25px;
    }
    .contact{
        text-align: center;
        background-color: #f1f1f1;
        height: auto;
    }
</style>