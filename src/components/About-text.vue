<template>
    <div class="about-text">
        <h2>About <span>ME</span></h2>
        <p>My name is Krystian Motyl. Currently I am studying Computer Science at WSTI in Katowice. I am interested in web development mainly frontend. 
            In free time i am learnig how to code and discover websites trends. My hobbies are sport, graphics design and computer games.</p>
    </div>
</template>

<script>
    export default {
        name: 'AboutText',
    }
</script>

<style lang="scss" scoped>
    *{
        color: #333333;
    }
    .about-text{
        margin-right: 20%;
        margin-bottom: 8%;
    }
    h2{
        font-size: 55px;
        margin-bottom: 55px;
    }
    h2 span{
        color: #ed1a4d;
    }
    p{
        font-size: 25px;
    }
    @media only screen and (max-width: 1250px){
        h2{
            font-size: 45px;
            margin-bottom: 30px;
        }
        p{
            font-size: 17px;
        }
        .about-text{
            margin-right: 5%;
        }
    }
    @media only screen and (max-width: 705px){
        .about-text{
            margin: 0 10%;
        }
    }
</style>