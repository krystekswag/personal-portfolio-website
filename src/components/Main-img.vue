<template>
    <div>
        <img src="@/assets/code.png" alt="code-graphic">
    </div>
</template>

<script>
    export default {
        name: 'MainImg',
    }
</script>

<style lang="scss" scoped>
    img{
        padding: 4rem;
        width: 130px;
        height: 130px;
    }
    @media only screen and (max-width: 1250px){
        img{
            padding: 1.5rem;
            width: 80px;
            height: 80px;
        }
    }
    @media only screen and (max-width: 705px){
        img{
            padding: 0.6rem;
            width: 60px;
            height: 60px;
        }
    }
    @media only screen and (max-width: 480px){
        img{
            width: 50px;
            height: 50px;
        }
    }
</style>