<template>
    <div>
        <h1>Hi! I'm <span>Krystian</span></h1>
        <h2>Junior front-end developer</h2>
    </div>
</template>

<script>
    export default {
        name: 'TextMain',
    }
</script>

<style lang="scss" scoped>
    h1, h2{
        color: #333333;
        padding: 10px;
    }
    h1{
        font-size: 55px;
        letter-spacing: 8px;
    }
    h2{
        font-size: 40px;
        font-weight: 500;
    }
    span{
        color: #ed1a4d;
    }
</style>