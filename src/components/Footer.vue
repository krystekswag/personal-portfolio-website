<template>
    <div class="footer">
        <p>Copyright © 2021 Krystian Motyl / krystekswag. All Rights Reserved.</p>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style lang="scss" scoped>
    .footer{
        height: 70px;
        background-color: #f1f1f1;
        border-top: 1px solid #ebeaea;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    p{
        font-size: 11px;
        font-weight: 400;
    }
</style>