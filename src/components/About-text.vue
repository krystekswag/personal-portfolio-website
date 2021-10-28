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
        margin-left: 1rem;
        margin-right: 12rem;
        margin-bottom: 5rem;
    }
    h2{
        font-size: 3rem;
        margin-bottom: 2rem;
    }
    h2 span{
        color: #ed1a4d;
    }
    p{
        font-size: 1.5rem;
    }
    @media only screen and (max-width: 1250px){
        .about-text{
            margin-right: 6rem;
            margin-bottom: 5rem;
        }
        h2{
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        p{
            font-size: 1rem;
        }
    }
    @media only screen and (max-width: 705px){
        .about-text{
            margin: 1rem 3rem;
        }
        h2{
            font-size: 1.8rem;
        }
    }
    @media only screen and (max-width: 480px){
        h2{
            font-size: 1.3rem;
        }
        p{
            font-size: 0.8rem;
        }
    }
</style>