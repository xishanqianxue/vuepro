<template>
    <div class="main">
        <div class="nav">
            <img src="http://192.168.2.125:7001/public/img/07.png" class="logo"><span class="logotext">一站式大厅</span>
            <div class="topRight">
                <router-link to="/Chanpin" class="topright1">登录</router-link><span class="topr1t">|</span>
                <router-link to="/Chanpin/teacher" class="topright1">教师登录</router-link><span class="topr1t">|</span>
                <router-link to="/Chanpin/messager" class="topright1">管理员入口</router-link>
            </div>
        </div>
        <LunBo></LunBo>
        <router-view></router-view>
    </div>
    
</template>

<script>
import LunBo from '@/components/dxh/LunBo.vue'
    export default {
        components:{
            LunBo
        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        position: relative;
        top: 0;
        width: 100%;
        height: 100px;
        line-height: 140px;
    }
    .logo{
        height: 100px;
        margin: 10px 10px 10px 20%;
    }
    .logotext{
        position: relative;
        bottom: 48px;
        font-size: 27px;
        font-weight: 800;
    }
    .topRight{
        float: right;
        margin-right: 20%;
        height: 100px;
    }
    .topr1t{
        margin: 0 15px;
    }
    .topright1{
        color: black;
        cursor: pointer;
    }
    .topright1:hover{
        color: #2D68FF;
    }
</style>