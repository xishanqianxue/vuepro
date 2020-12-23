<template>
    <div class="register">
        <input v-model="arr[0].email" class="inp" placeholder="请输入邮箱" type="text"><br>
        <input v-model="arr[0].pwd" class="inp" placeholder="请输入密码" type="text">
        <input v-model="arr[0].verif" class="inpver" type="text"><span @click="toverif()" class="verif" v-html="verif"></span><br>
        <button class="btn" @click="register()">注册</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                verif:"",
                arr:[{email:"",pwd:"",verif:""}]
            }
        },
        methods: {
            toverif(){
                this.$axios("/verif")
                .then((res)=>{
                    this.verif=res.data.data
                })
            },
            register(){
                var reg1 = /^([a-z,A-Z]|[0-9])+\w+@[a-z,A-Z,0-9]+\.([a-z,A-Z]{2,4})$/;
                if(!reg1.test(this.arr[0].email)){
                    alert("请输入正确的邮箱地址！")
                    return ;
                }else{
                    this.$axios.post('/Register',{email:this.arr[0].email,pwd:this.arr[0].pwd,verif:this.arr[0].verif})
                    .then((res)=>{
                        console.log(res);
                        if(res.data.code===4001){
                            alert("验证码错误!")
                        }
                        else if(res.data.code===2001){
                            alert("注册成功")
                            this.$router.push("/Login/login")
                        }else if(res.data.code===4003){
                            alert("该邮箱已经注册过!")
                        }
                    })
                }
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
.register{
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