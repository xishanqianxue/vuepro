<template>
    <div class="main">
        <div class="logbox">
            <div class="top">
                <router-link to="/Login" class="topbtn">注册</router-link>
                <router-link to="/Login/login" class="topbtn">登录</router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .main{
        position: relative;
        width: 100%;
        height: 400px;
        background-image: url("http://192.168.2.125:7001/public/img/01.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y:100%;
    }
    .logbox{
        position: absolute;
        right: 18%;
        top: 10%;
        background-color: azure;
        border: 1px solid black;
        border-radius: 10px;
        width: 350px;
        height: 300px;
        overflow: hidden;
    }
    .top{
        width: 100%;
        height: 40px;
        background-color: beige;
        border: 1px solid #ccc;
    }
    .topbtn{
        display: inline-block;
        width: 50%;
        height: 100%;
        text-align: center;
        line-height: 40px;
        color: black;
        cursor: pointer;
    }
    
</style>