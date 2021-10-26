<template>
    <div id="contact">
        <h4>Contact me</h4>
        <p>Phone number: +48 663 547 744</p>
        <p>E-mail: <a href="mailto:krystekswag@gmail.com">krystekswag@gmail.com</a></p>
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
    h4{
        font-size: 55px;
        color: #333333;
        margin-bottom: 20px;
    }
    p{
        font-size: 30px;
        margin-bottom: 25px;
    }
    p a{
        text-decoration: none;
        color: #ed1a4d;
        cursor: pointer;
    }
    #contact{
        text-align: center;
        background-color: #f1f1f1;
        height: auto;
    }
    @media only screen and (max-width: 1250px){
        h4{
            font-size: 45px;
            margin-bottom: 10px;
        }
        p{
            font-size: 20px;
            margin-bottom: 15px;
        }
    }
</style>