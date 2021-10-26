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
        padding: 50px;
        width: 150px;
        height: 150px;
    }
    @media only screen and (max-width: 1250px){
        img{
            padding: 20px;
            width: 100px;
            height: 100px;
        }
    }
    @media only screen and (max-width: 705px){
        img{
            padding: 10px;
            width: 70px;
            height: 70px;
        }
    }
</style>