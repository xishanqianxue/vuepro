<template>
    <div class="logbox">
        <p class="boxTitle">账号密码登录</p>
        <input placeholder="请输入账号" class="inp" type="text" v-model="arr[0].uid"><br>
        <input placeholder="请输入密码" class="inp" type="text" v-model="arr[0].pwd"><br>
        <input placeholder="请输入验证码" class="inpver" type="text" v-model="arr[0].verif"><span @click="toverif()" v-html="verif"></span><br>
        <div class="btn" @click="stulog()">登录</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                verif:"",
                arr:[{uid:"",pwd:"",verif:""}]
            }
        },
        methods: {
            toverif(){
                this.$axios("/verif")
                .then((res)=>{
                    this.verif=res.data.data
                })
            },
            stulog(){
                this.$axios.post('/StudentLog',{uid:this.arr[0].uid,pwd:this.arr[0].pwd,verif:this.arr[0].verif.toUpperCase()})
                .then((res)=>{
                    if(res.data.code===4001){
                        alert("验证码错误")
                    }
                    else if(res.data.code===4003){
                        alert("用户名或密码错误")
                    }
                    else if(res.data.code===2001){
                        alert("登录成功")
                        this.$router.push("/Student")
                    }
                })
            }
        },
        mounted() {
            this.$axios('/verif')
            .then((res)=>{
                this.verif = res.data.data;
            })
        },
    }
</script>

<style lang="scss" scoped>
    .logbox{
        position: fixed;
        top: 18%;
        right: 20%;
        width: 320px;
        height: 340px;
        background-color:rgba(255,255,255,.9);
        border-radius: 5px;
        z-index: 99;
        padding:0 40px;
        box-sizing: border-box;
    }
    .boxTitle{
        font-size: 20px;
        margin: 25px 0;
    }
    .inp{
        width: 230px;
        height: 35px;
        margin-top: 20px;
        outline: none;
        border: 1px solid #ccc;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .inpver{
        position: relative;
        bottom: 10px;
        width: 130px;
        height: 25px;
        outline: none;
        border: 1px solid #ccc;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .btn{
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translate(-50%,0);
        width: 70%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: white;
        cursor: pointer;
        background-color: #5392FC;
    }
</style>