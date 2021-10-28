<template>
    <div class="tech-wrapper">
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
    }
    .wrapper-content{
        text-align: center;
        padding: 1.2rem 4rem;
    }
    .wrapper-content p{
        font-size: .9rem;
        padding: 0.2rem 0;
        white-space: pre-line;
    }
    h2{
        text-align: center;
        font-size: 3rem;
        color: #333333;
        padding-bottom: 2rem;
        margin: 1rem 0;
    }
    .icons{
        margin: 0 auto;
        height: 100px;
        width: 100px;
        fill: #333333;
    }
    .icons-vue{
        height: 100px;
        width: 117px;
        fill: #333333;
    }
    @media only screen and (min-width: 706px){
        .icons:hover, .icons-vue:hover{
            fill: #ed1a4d;
        }
    }
    @media only screen and (max-width: 1250px){
        .wrapper-content{
            padding: 1.2rem 3rem;
        }
        .wrapper-content p{
            font-size: .7rem;
        }
        h2{
            font-size: 2.5rem;
            padding-bottom: 1rem;
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
            font-size: 1.8rem;
            padding-bottom: .8rem;
            margin: 0 1rem;
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
            padding: 1.2rem 1.5rem;
        }
        .wrapper-content p{
            font-size: .5rem;
        }
    }
    @media only screen and (max-width: 480px){
        h2{
            font-size: 1.3rem;
            padding-bottom: .5rem;
        }
        .icons{
            height: 30px;
            width: 30px;
        }
        .icons-vue{
            height: 30px;
            width: 35px;
        }
        .wrapper-content{
            padding: 1rem 1rem;
        }
        .wrapper-content p{
            font-size: .4rem;
        }
    }
</style>