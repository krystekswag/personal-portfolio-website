<template>
    <div>
        <h2>Known technologies and skills</h2>
        <div class="wrapper">
            <div class="wrapper-content">
                <VscIcon class="icons" />
                <p>Visual Studio<br>Code</p>
            </div>
            <div class="wrapper-content">
                <PhotoshopIcon class="icons" />
                <p>Photoshop</p>
            </div>
            <div class="wrapper-content">
                <IllustratorIcon class="icons" />
                <p>Illustrator</p>
            </div>
        </div>
        <div class="wrapper">
            <div class="wrapper-content">
                <HtmlIcon class="icons" />
                <p>HTML</p>
            </div>
            <div class="wrapper-content">
                <CssIcon class="icons" />
                <p>CSS</p>
            </div>
            <div class="wrapper-content">
                <JsIcon class="icons" />
                <p>JavaScript</p>
            </div>
            <div class="wrapper-content">
                <VueIcon class="icons-vue" />
                <p>Vue.js</p>
            </div>
        </div>
    </div>
</template>

<script>
import VscIcon from '@/components/Vsc-icon.vue';
import PhotoshopIcon from '@/components/Photoshop-icon.vue';
import IllustratorIcon from '@/components/Illustrator-icon.vue';
import HtmlIcon from '@/components/Html-icon.vue';
import CssIcon from '@/components/Css-icon.vue';
import JsIcon from '@/components/Js-icon.vue';
import VueIcon from '@/components/Vue-icon.vue';
    export default {
        name: 'Technologies',
        components: {
            VscIcon,
            PhotoshopIcon,
            IllustratorIcon,
            HtmlIcon,
            CssIcon,
            JsIcon,
            VueIcon,
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 20px;
    }
    .wrapper-content{
        text-align: center;
        padding: 55px 70px;
    }
    .wrapper-content p{
        font-size: 16px;
        padding: 20px 0;
        white-space: pre-line;
    }
    h2{
        text-align: center;
        font-size: 55px;
        color: #333333;
    }
    .icons{
        height: 100px;
        width: 100px;
        fill: #333333;
    }
    @media only screen and (min-width: 706px){
        .icons:hover, .icons-vue:hover{
            fill: #ed1a4d;
        }
    }
    .icons-vue{
        height: 100px;
        width: 117px;
        fill: #333333;
    }
    @media only screen and (max-width: 1250px){
        .wrapper{
            margin: 10px;
        }
        .wrapper-content{
            padding: 35px 45px;
        }
        .wrapper-content p{
            font-size: 13px;
            padding: 10px 0;
        }
        h2{
            font-size: 45px;
        }
        .icons{
            height: 70px;
            width: 70px;
        }
        .icons-vue{
            height: 70px;
            width: 82px;
        }
    }
    @media only screen and (max-width: 705px){
        h2{
            padding-top: 50px;
            margin: 0 5%;
        }
        .icons{
            height: 50px;
            width: 50px;
        }
        .icons-vue{
            height: 50px;
            width: 57.5px;
        }
        .wrapper-content{
            text-align: center;
            padding: 15px 20px;
        }
        .wrapper-content p{
            font-size: 9px;
            padding: 5px 0;
        }
    }
</style>