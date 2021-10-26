<template>
    <div class="content-wrapper" id="avatar-img">
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
    //HOVER ONLY ON BIGGER DEVICES
    @media only screen and (min-width: 706px){
        img:hover + .border-img{
            border: 3px solid #ed1a4d;
        }
    }
    @media only screen and (min-width: 1251px){
        img:hover + .border-img{
            border: 5px solid #ed1a4d;
        }
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
        margin-right: 5%;
    }
    @media only screen and (max-width: 1250px){
        img{
            width: 100px;
            height: 100px;
        }
        .border-img{
            width: 100px;
            height: 100px;
            margin-right: 40px;
            margin-bottom: 40px;
            border: 3px solid #333333;
        }
        .content-wrapper{
            margin-left: 5%;
            margin-right: 2%;
        }
    }
    @media only screen and (max-width: 705px){
        .content-wrapper{
            margin: 0;
        }
    }
</style>