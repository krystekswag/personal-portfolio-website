<template>
    <div>
        <h1><span class="signed">Krystian</span> Motyl
        <span class="title">Junior front-end developer</span></h1>
    </div>
</template>

<script>
    export default {
        name: 'TextMain',
    }
</script>

<style lang="scss" scoped>
    h1, .title{
        color: #333333;
        padding: 10px;
    }
    h1{
        font-size: 55px;
        letter-spacing: 6px;
    }
    .title{
        font-size: 40px;
        font-weight: 500;
        display: block;
    }
    .signed{
        color: #ed1a4d;
    }
    @media only screen and (max-width: 1250px){
        h1, .title{
            padding: 4px;
        }
        h1{
            font-size: 45px;
        }
        .title{
            font-size: 28px;
        }
    }
    @media only screen and (max-width: 705px){
        h1, .title{
            padding: 2px;
        }
        h1{
            font-size: 35px;
            letter-spacing: 2px;
        }
        .title{
            font-size: 22px;
        }
    }
</style>