<template>
    <div id="loading">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1920 1080" width="1000px" height="600px">
           <g>
               <polyline class="prawy" points="1030.644,429.807 1077.873,414.544 1138.795,528.791 1024.677,681.242 1015.286,623.79
          1090.795,530.355 	" />
               <polygon class="lewy" points="969.221,429.376 900.346,676.844 945.175,661.055 1011.055,418.941 	" />
               <polyline class="lewy" points="889.594,650.193 842.365,665.456 781.443,551.209 895.561,398.758 904.951,456.21
          829.442,549.644 	" />
               <polyline class="lewy_srodek" points="889.594,650.193 842.365,665.456 781.443,551.209 895.561,398.758 904.951,456.21
          829.442,549.644 	" />
           </g>
       </svg>
    </div>
</template>

<script>
    export default {
        name: 'Preload',
    }
</script>

<style lang="scss" scoped>
    .lewy {
        animation-name: przesun;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-origin: 50% 50%;
        animation-direction: alternate-reverse;
        animation-iteration-count: none;
        animation-fill-mode: forwards;
    }
    @keyframes przesun {
        0%   { transform: translate(-45px, 0); }
        20% { transform: translate(-45px, 0); }
        90% { transform: translate(0, 0); }
        100% { transform: translate(0, 0); }
    }
    .prawy {
        animation-name: przesun_srodek;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-origin: 50% 50%;
        animation-direction: alternate-reverse;
        animation-iteration-count: none;
        animation-fill-mode: forwards;
    }
    @keyframes przesun_srodek {
        0%   { transform: translate(45px, 0); }
        20% { transform: translate(45px, 0); }
        90% { transform: translate(0, 0); }
        100% { transform: translate(0, 0); }
    }
    .lewy_srodek {
        animation-name: przesun_prawy;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-origin: 50% 50%;
        animation-direction: alternate-reverse;
        animation-iteration-count: none;
        animation-fill-mode: forwards;
    }
    @keyframes przesun_prawy {
        0%   { transform: translate(142px, 0); }
        20% { transform: translate(142px, 0); }
        90% { transform: translate(0, 0); }
        100% { transform: translate(0, 0); }
    }
    #loading {
        background-color: #f1f1f1;
        height: 100%;
        width: 100%;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }
    .lewy, .prawy, .lewy_srodek{
        fill: #333333;
        position: absolute;
    }
    .lewy {
        animation-name: przesun;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-origin: 50% 50%;
        animation-direction: alternate-reverse;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    @keyframes przesun {
        0%   { transform: translate(-45px, 0); }
        20% { transform: translate(-45px, 0); }
        90% { transform: translate(0, 0); }
        100% { transform: translate(0, 0); }
    }
    .prawy {
        animation-name: przesun_srodek;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-origin: 50% 50%;
        animation-direction: alternate-reverse;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    @keyframes przesun_srodek {
        0%   { transform: translate(45px, 0); }
        20% { transform: translate(45px, 0); }
        90% { transform: translate(0, 0); }
        100% { transform: translate(0, 0); }
    }
    .lewy_srodek {
        animation-name: przesun_prawy;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        transform-origin: 50% 50%;
        animation-direction: alternate-reverse;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    @keyframes przesun_prawy {
        0%   { transform: translate(142px, 0); }
        20% { transform: translate(142px, 0); }
        90% { transform: translate(0, 0); }
        100% { transform: translate(0, 0); }
    }
</style>