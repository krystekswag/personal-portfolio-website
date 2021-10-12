<template>
    <div class="about-text">
        <h1>About <span>ME</span></h1>
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
    h1{
        font-size: 55px;
        margin-bottom: 55px;
    }
    h1 span{
        color: #ed1a4d;
    }
    p{
        font-size: 25px;
    }
</style>