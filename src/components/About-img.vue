<template>
    <div class="content-wrapper">
        <img src="@/assets/profile-photo.png" alt="my photo">
        <div class="border-img"></div>
    </div>
</template>

<script>
    export default {
        name: 'MyImage',
    }
</script>

<style lang="scss" scoped>
    img{
        z-index: 2;
    }
    img:hover + .border-img{
        border: 5px solid #ed1a4d;
    }
    .border-img{
        position: absolute;
        width: 200px;
        height: 200px;
        border: 5px solid #333333;
        margin-right: 90px;
        margin-bottom: 90px;
        z-index: 1;
    }
    .content-wrapper{
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20%;
    }
</style>