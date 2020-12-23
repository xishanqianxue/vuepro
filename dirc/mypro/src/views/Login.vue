<template>
    <div>
        <div class="nav">
            <span class="left1">MessIf</span>
            <span class="left2">学生管理</span>
        </div>
        <LogMain></LogMain>
    </div>
</template>

<script>
    import LogMain from '@/components/dxh/LogMain.vue'
    export default {
        components:{
            LogMain
        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        width: 100%;
        height: 90px;
        line-height: 110px;
        padding: 0 300px;
        box-sizing: border-box;
    }
    .left1{
        font-size: 30px;
        font-weight: 900;
        color: aqua;
    }
    .left2{
        font-size: 12px;
        font-weight: 300;
    }
</style>