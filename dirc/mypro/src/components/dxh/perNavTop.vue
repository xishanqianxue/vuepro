<template>
    <div class="nav">
        <div class="center">
            <router-link to="/" class="left">
                <img src="@/assets/02.png" class="lefti">
                <div class="leftt">智能互联</div>
            </router-link>
            <div class="right" @click="logindown()">退出登录</div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            logindown(){
                this.$store.commit('logindown',{username:"",email:"",tel:"",text:"",img:"",sex:""})
                this.$axios('/clearCookie')
                .then((res)=>{
                    if(res.data.code===2001){
                        window.localStorage.setItem("code",0)
                        this.$router.push("/")
                    }else{
                        alert("网络连接失败")
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .nav{
        height: 40px;
        width: 100%;
        background-color: #1F4359;
        color: azure;
    }
    .center{
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
        width: 70%;
        height: 100%;
    }
    .left{
        float:left;
        width: 100px;
        margin: 5px;
        line-height: 30px;
    }
    .lefti{
        height: 30px;
    }
    .leftt{
        float: right;
        color: burlywood;
        font-weight: 900;
    }
    .right{
        float: right;
        padding: 0 20px;
        height: 100%;
        line-height: 40px;
        font-size: 12px;
        cursor: pointer;
    }
    .right:hover{
        color: red;
    }
</style>