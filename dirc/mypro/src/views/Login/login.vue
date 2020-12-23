<template>
    <div class="login">
        <input class="inp" v-model="arr[0].username" placeholder="请输入用户名" type="text"><br>
        <input class="inp" v-model="arr[0].pwd" placeholder="请输入密码" type="text">
        <input class="inpver" v-model="arr[0].verif" type="text"><span @click="toverif()" class="verif" v-html="verif"></span><br>
        <button @click="login()" class="btn">登录</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                verif:"",
                arr:[{username:'',pwd:'',verif:''}]
            }
        },
        methods: {
            toverif(){
                this.$axios("/verif")
                .then((res)=>{
                    this.verif=res.data.data
                })
            },
            login(){
                this.$axios.post('/Login',{username:this.arr[0].username,pwd:this.arr[0].pwd,verif:this.arr[0].verif})
                .then((res)=>{
                    console.log(res);
                    if(res.data.code===4001){
                        alert("验证码错误!")
                    }else if(res.data.code===4003){
                        alert("用户名或密码错误!")
                    }else if(res.data.code===2001){
                        alert("登陆成功")
                        window.localStorage.setItem("code",1)
                        this.$router.push("/Person")
                    }
                })
            }
        },
        mounted() {
            this.$axios('/verif')
            .then((res)=>{
                this.verif=res.data.data
            })
        },
    }
</script>

<style lang="scss" scoped>
    .login{
        position: relative;
        top: 20px;
        padding: 10px 60px;
        box-sizing: border-box;
    }
    .inp{
        width: 220px;
        height: 30px;
        padding-left: 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
    }
    .inpver{
        width: 120px;
        height: 30px;
        margin-bottom: 20px;
        position: relative;
        top: -10px;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .verif{
        display: inline-block;
        cursor: pointer;
    }
    .btn{
        position: absolute;
        bottom: -18px;
        left: 50%;
        width: 80px;
        height: 40px;
        transform: translate(-50%,0);
        cursor: pointer;
    }
</style>