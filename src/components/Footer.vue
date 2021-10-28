<template>
    <div class="footer">
        <p>Copyright © 2021 Krystian Motyl / krystekswag. All Rights Reserved.</p>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style lang="scss" scoped>
    .footer{
        height: 70px;
        background-color: #f1f1f1;
        border-top: 1px solid #ebeaea;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
    }
    p{
        font-size: 0.7rem;
        font-weight: 300;
    }
    @media only screen and (max-width: 350px){
        p{
            font-size: 0.5rem;
        }
    }
</style>