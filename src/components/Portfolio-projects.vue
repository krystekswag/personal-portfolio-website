<template>
    <div class="projects">
        <div class="project">
            <img src="@/assets/p1.png" alt="screen of portfolio website">
            <h2>Portfolio website</h2>
            <p>App using as my personal portfolio website</p>
            <div class="buttons">
                <button><a href="https://github.com/krystekswag/personal-portfolio-website" target="_blank">CODE</a></button>
            </div>
        </div>
        <div class="project">
            <img src="@/assets/p2.png" alt="screen of premier league table project">
            <h2>Premier League table</h2>
            <p>With use of API this project display table of premier league</p>
            <div class="buttons">
                <button><a href="https://brave-khorana-b16e37.netlify.app/" target="_blank">LIVE</a></button>
                <button><a href="https://github.com/krystekswag/premier-league" target="_blank">CODE</a></button>
            </div>
        </div>
        <div class="project">
            <img src="@/assets/p3.jpg" alt="screen of days calculator app">
            <h2>Calculator days app</h2>
            <p>App calculate days beetween two dates</p>
            <div class="buttons">
                <button><a href="https://github.com/krystekswag/How-many-days-calculator" target="_blank">CODE</a></button>
            </div>
        </div>
        <div class="project">
            <img src="@/assets/p4.png" alt="screen of piggybank app">
            <h2>Piggybank app</h2>
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
        padding: 0 300px;
    }
    .project{
        max-width: 450px;
        box-shadow: 0px 0px 10px -3px rgba(66, 68, 90, 1);
        margin: 40px auto;
        border-radius: 20px;
        padding: 0;
    }
    .project img{
        border-radius: 20px 20px 0px 0px;
        width: 450px;
        height: 250px;
    }
    h2{
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
        text-decoration: none;
        color: #f1f1f1;
        padding: 10px 25px;
    }
    .buttons button:hover{
        background-color: #ed1a4d;
    }
</style>