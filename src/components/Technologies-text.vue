<template>
    <div>
        <h1>Known technologies and skills</h1>
        <div class="wrapper">
            <div class="wrapper-content">
                <VscIcon class="icons" />
                <p>Visual Studio Code</p>
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
    }
    h1{
        text-align: center;
        font-size: 55px;
        color: #333333;
    }
    .icons{
        height: 100px;
        width: 100px;
        fill: #333333;
    }
    .icons:hover, .icons-vue:hover{
        fill: #ed1a4d;
    }
    .icons-vue{
        height: 100px;
        width: 117px;
        fill: #333333;
    }
</style>