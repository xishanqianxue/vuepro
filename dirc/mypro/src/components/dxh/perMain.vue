<template>
    <div class="body">
        <div class="box">
                <a href="#" class="right">
                <img src="@/assets/04.png" class="personimg">
                </a>
                <div class="main">
                    <p>用户名：{{arr[0].username}}</p>
                    <p>邮箱：{{arr[0].email}}</p>
                    <p>电话：{{arr[0].tel}}</p>
                    <div class="info">个人描述：
                        <div class="text">{{arr[0].text}}</div>
                    </div>
                </div>
                <div class="btns">
                    <button class="btn" @click="change()">修改</button>
                </div>
            </div>
            <div class="changemain"  v-if="!flag">
                    <div class="change">
                        <span>用户名：</span><input class="inp" type="text" v-model="arr[0].username"><br>
                        <span>  邮箱：</span><input class="inp" type="text" v-model="arr[0].email"><br>
                        <span>  电话：</span><input class="inp" type="text" v-model="arr[0].tel"><br>
                        <span>个人描述：</span><input class="inp" type="text" v-model="arr[0].text"><br>
                        <input class="inp" type="file" ref="myimg"><br>
                        <button class="btn" @click="fn()">提交</button>
                    </div>
                </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                arr:[{username:"",email:"",tel:"",text:"",img:"",sex:""}],
                flag:true,
            }
        },
        methods: {
            async fn(){
                var reg1 = /^([a-z,A-Z]|[0-9])+\w+@[a-z,A-Z,0-9]+\.([a-z,A-Z]{2,4})$/;
                var reg2 = /^1[3|4|5|7|8]\d{9}$/;
                if(!reg1.test(this.arr[0].email)){
                    alert("请输入正确的邮箱地址！")
                    return ;
                }else if(!reg2.test(this.arr[0].tel)){
                    alert("请输入正确的电话号码")
                    return ;
                }
                console.log(this.$refs.myimg.files[0]);
                var img = this.$refs.myimg.files[0]
                var formdata = new FormData();
                formdata.append("username",this.arr[0].username);
                formdata.append("email",this.arr[0].email);
                formdata.append("tel",this.arr[0].tel);
                formdata.append("text",this.arr[0].text);
                formdata.append("img",img)

                await this.$axios.post("/UserChange",formdata)
                .then((res)=>{
                    if(res.data.code===2001){
                        alert("修改成功!")
                    }
                })
                this.flag = true;
            },
            change(){
                this.flag=false;
            }
        },
        mounted() {
            this.$axios("/userinfo")
            .then((res)=>{
                this.arr[0].username = res.data.userinfo.username;
                this.arr[0].email = res.data.userinfo.email;
                this.arr[0].tel = res.data.userinfo.tel;
                this.arr[0].text = res.data.userinfo.text;
            })
        },
    }
</script>

<style lang="scss" scoped>
    .box{
        position: relative;
        left: 50%;
        transform: translate(-50%,0);
        width: 70%;
        height: 65vh;
        border: 1px solid black;
        border-top: none;
        // background-color: rgb(230, 219, 205);
    }
    .right{
        position: absolute;
        right: 100px;
        top: 40px;
        height: 70px;
        width: 70px;
        border: 1px solid black;
        border-radius: 50%;
        overflow: hidden;
    }
    .personimg{
        width: 70px;
    }
    .main{
        position: relative;
        left: 20%;
        padding-top: 50px;
    }
    .main p{
        margin-bottom: 20px;
    }
    .text{
        background-color: #eee;
        border: 1px solid black;
        border-radius: 10px;
        width: 70%;
        height: 100px;
        margin: 15px 0;
        padding: 10px 15px;
    }
    .btns{
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
        bottom: 30px;
    }
    .btn{
        width: 80px;
        height: 50px;
        margin: 0 10px;
        cursor: pointer;
    }
    .changemain{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,.5);
    }
    .change{
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
        top: 100px;
        width: 300px;
        height: 330px;
        padding: 10px 0 0 30px;
        box-sizing: border-box;
        border: 1px solid black;
        border-radius: 5px;
        background-color: white;
        background-image: url("http://192.168.2.125:7001/public/img/02.jpg");
        .btn{
            position: absolute;
            bottom: 15px;
            width: 70px;
            height: 30px;
            left: 50%;
            transform: translate(-50%,0);
        }
    }
    .inp{
        margin: 15px 0;
    }
</style>