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
    h1{
        color: #333333;
        padding: 1rem;
        font-size: 3.2rem;
        letter-spacing: 3px;
    }
    .title{
        padding: 0;
        font-size: 2.2rem;
        font-weight: 500;
        letter-spacing: 4px;
        display: block;
    }
    .signed{
        color: #ed1a4d;
    }
    @media only screen and (max-width: 1250px){
        h1{
            font-size: 2.2rem;
            padding: 2rem;
        }
        .title{
            font-size: 1.6rem;
            letter-spacing: 2px;
        }
    }
    @media only screen and (max-width: 705px){
        h1{
            font-size: 1.8rem;
            padding: 1rem;
        }
        .title{
            font-size: 1.2rem;
        }
    }
    @media only screen and (max-width: 480px){
        h1{
            font-size: 1.6rem;
        }
        .title{
            font-size: 1rem;
        }
    }
</style>