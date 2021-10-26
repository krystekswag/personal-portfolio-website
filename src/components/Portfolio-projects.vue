<template>
    <div class="projects">
        <div class="project">
            <img src="@/assets/p1.png" alt="screen of portfolio website">
            <h3>Portfolio website</h3>
            <p>App using as my personal portfolio website</p>
            <div class="buttons">
                <button><a href="https://github.com/krystekswag/personal-portfolio-website" target="_blank">CODE</a></button>
            </div>
        </div>
        <div class="project">
            <img src="@/assets/p2.png" alt="screen of premier league table project">
            <h3>Premier League table</h3>
            <p>With use of API this project display table of premier league</p>
            <div class="buttons">
                <button><a href="https://brave-khorana-b16e37.netlify.app/" target="_blank">LIVE</a></button>
                <button><a href="https://github.com/krystekswag/premier-league" target="_blank">CODE</a></button>
            </div>
        </div>
        <div class="project">
            <img src="@/assets/p3.jpg" alt="screen of days calculator app">
            <h3>Calculator days app</h3>
            <p>App calculate days beetween two dates</p>
            <div class="buttons">
                <button><a href="https://github.com/krystekswag/How-many-days-calculator" target="_blank">CODE</a></button>
            </div>
        </div>
        <div class="project">
            <img src="@/assets/p4.png" alt="screen of piggybank app">
            <h3>Piggybank app</h3>
            <p>App store information about money in our piggybank</p>
            <div class="buttons">
                <button><a href="https://loving-fermi-d3e453.netlify.app/" target="_blank">LIVE</a></button>
                <button><a href="https://github.com/krystekswag/PIGGYBANK" target="_blank">CODE</a></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Projects',
    }
</script>

<style lang="scss" scoped>
    .projects{
        display: flex;
        flex-wrap: wrap;
        padding: 0 100px;
        flex-direction: row;
        justify-content: center;
    }
    .project{
        max-width: 450px;
        box-shadow: 0px 0px 10px -3px rgba(66, 68, 90, 1);
        margin: 40px 80px;
        border-radius: 20px;
        padding: 0;
    }
    .project img{
        border-radius: 20px 20px 0px 0px;
        width: 450px;
        height: 250px;
    }
    h3{
        font-size: 20px;
        padding: 10px;
        margin: 0px 10px;
        color: #333333;
    }
    p{
        font-size: 14px;
        padding: 10px;
        margin: 0px 10px; 
    }
    .buttons{
        padding: 10px;
    }
    .buttons button{
        margin: 10px;
        width: 100px;
        height: 30px;
        background-color: #333333;
        border: none;
        cursor: pointer;
    }
    .buttons button a{
        font-size: 14px;
        text-decoration: none;
        color: #f1f1f1;
        padding: 10px 25px;
    }
    @media only screen and (min-width: 706px){
        .buttons button:hover{
            background-color: #ed1a4d;
        }
    }
    @media only screen and (max-width: 1500px){
        .projects{
            padding: 0 20px;
        }
        .project{
            margin: 40px 40px; 
        }
    }
    @media only screen and (max-width: 1250px){
        .project{
            max-width: 337.5px;
        }
        .project img{
            width: 337.5px;
            height: 187.5px;
        }
        h3{
            font-size: 16px;
        }
        p{
            font-size: 12px;
        }
        .buttons button{
            width: 80px;
            height: 25px;
        }
        .buttons button a{
            font-size: 12px;
            padding: 8px 18px;
        }
    }
    @media only screen and (max-width: 705px){
        .project{
            max-width: 300px;
        }
        .project img{
            width: 300px;
            height: 167px;
        }
    }
</style>