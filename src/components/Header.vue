<template>
    <div id="header">
        <div class="container">
            <div class="logo-wrapper">
                <a href="#">
                    <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 400 252.04" style="enable-background:new 0 0 400 252.04;" xml:space="preserve">
                    <g>
                        <polyline class="st0" points="266.6,223.32 224.89,236.79 171.09,135.92 271.87,1.31 280.16,52.04 213.48,134.54 	"/>
                        <polyline class="st0" points="299.81,28.72 341.52,15.25 395.32,116.12 294.54,250.73 286.25,200 352.93,117.5 	"/>
                        <polygon class="st0" points="170.51,28.34 109.68,246.85 149.27,232.91 207.45,19.13 	"/>
                        <polyline class="st0" points="100.19,223.32 58.48,236.79 4.68,135.92 105.46,1.31 113.75,52.04 47.07,134.54 	"/>
                    </g>
                    </svg>
                </a>
            </div>
            <div class="nav-wrapper" id="navigation">
                <ul>
                    <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                    <li><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
            </div>
            <div class="social-wrapper">
                <ul>
                    <li><a href="https://github.com/krystekswag" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/krystekswag/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a></li>
                    <li><a href="https://www.behance.net/krystekswag" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M18.003 12.333h-3.018c.289-1.977 2.902-1.715 3.018 0zm-9.742.667h-2.261v2.01h2.228c2.036 0 1.911-2.01.033-2.01zm-.08-4h-2.181v2h2.389c1.673 0 1.938-2-.208-2zm15.819-9v24h-24v-24h24zm-10 8h5v-1h-5v1zm-3.552 3.618c1.907-.974 1.837-4.55-1.813-4.604h-4.635v9.978h4.311c4.522 0 4.445-4.534 2.137-5.374zm9.487.602c-.274-1.763-1.529-2.95-3.583-2.95-2.095 0-3.352 1.34-3.352 3.947 0 2.631 1.368 3.783 3.417 3.783 2.048 0 3.106-1.135 3.4-2h-2.112c-.737.855-2.893.521-2.767-1.353h5.059c.01-.634-.011-1.089-.062-1.427z"/></svg>
                    </a></li>
                </ul>             
            </div>
            <div id="hamburger">
                <ul>
                    <li><a id="mobile-hamburger">
                        <svg xmlns="http://www.w3.org/2000/svg" class="social-icon hamburger" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
                    </a></li>
                </ul> 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        mounted() {
            this.showMobileMenu();
            this.hideMenu();
        },
        methods: {
            showMobileMenu(){
                const buttonMobile = document.getElementById("mobile-hamburger");
                const menu = document.getElementById("navigation");
                buttonMobile.addEventListener('click', function(){
                    if(menu.style.display == "block"){
                        menu.style.display = "none";
                    }
                    else{
                        menu.style.display = "block";
                    }
                })
            },
            hideMenu(){
                const menu = document.getElementById("navigation");
                const links = document.querySelectorAll(".nav-link");
                    links.forEach((e)=>{
                        e.addEventListener('click', function(){
                            menu.style.display = "none";
                        })
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #header{
        background-color: #f1f1f1;
        height: 70px;
        border-bottom: 1px solid #ebeaea;
        width: 100%;
        position: fixed;
        z-index: 5;
    }
    .container{
        height: 100%;
        display: flex;
        align-items: center;
    }
    #logo{
        fill: #333333;
        width: 45px;
        height: 28px;
    }
    @media only screen and (min-width: 706px){
        #logo:hover{
            fill: #ed1a4d;
        }
        .nav-wrapper ul li a:hover{
            border-bottom: 3px solid #ed1a4d;
        }
        .social-icon:hover{
            fill: #ed1a4d;
        }
    }
    .logo-wrapper{
        position: relative;
        display: inline-block;
        width: calc(100% / 3);
    }
    .logo-wrapper a{
        margin-left: 35%;
    }
    .nav-wrapper{
        display: inline-block;
        width: calc(100% / 3);
        text-align: center;
    }
    .nav-wrapper ul, .social-wrapper ul, #hamburger ul{
        display: inline-block;
        list-style-type: none;
    }
    .social-wrapper ul{
        float: right;
        margin-right: 35%;
    }
    .nav-wrapper ul li, .social-wrapper ul li{
        display: inline;
        padding: 5px 20px;
    }
    .nav-wrapper ul li a, .social-wrapper ul li a{
        text-decoration: none;
        color: #333333;
        font-size: 18px;
    }
    .social-wrapper{
        display: inline-block;
        width: calc(100% / 3);
    }
    .social-icon{
        fill: #333333;
        height: 30px;
        width: 30px;
    }
    .hamburger{
        display: none;
    }
    @media only screen and (max-width: 1250px){
        .nav-wrapper ul li, .social-wrapper ul li{
            padding: 5px 7px;
        }
        .logo-wrapper a{
            margin-left: 20%;
        }
        .social-wrapper ul{
            float: right;
            margin-right: 20%;
        }
    }
    @media only screen and (max-width: 705px){
        .logo-wrapper{
            width: 50%;
        }
        .logo-wrapper a{
            margin-left: 20%;
        }
        #hamburger{
            width: 50%;
        }
        #hamburger ul{
            float: right;
            margin-right: 20%;
        }
        .hamburger{
            display: block;
        }
        #mobile-hamburger{
            cursor: pointer;
        }
        .nav-wrapper{
            display: none;
            position: absolute;
            background-color: #333333;
            text-align: center;
            width: 100%;
            top: 70px;
            margin-bottom: 70px;
            animation: displayContent .5s;
        }
        .nav-wrapper ul li a{
            color: #f1f1f1;
            font-size: 22px;
        }
        .nav-wrapper ul{
            padding: 0;
        }
        .social-wrapper{
            display: none;
        }
        .nav-wrapper ul li, .social-wrapper ul li{
            display: block;
        }
        @keyframes displayContent{
            0%{
                transform: translate(0, -100px);
                z-index: 4;
                opacity: 0;
            }
            100%{
                transform: translate(0, 0);
            }
        }
    }
</style>