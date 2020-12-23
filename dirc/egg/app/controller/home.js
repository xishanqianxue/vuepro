'use strict';

const Controller = require('egg').Controller;
const svgCaptcha = require("svg-captcha");
class HomeController extends Controller {
  async UserChange() {
    const ctx = this.ctx
    console.log(ctx.request.files[0],111);
    console.log(ctx.request.body,222);
    await this.service.home.UserChange(ctx.request.body,ctx.request.files)
    this.ctx.session.UserInfo = {username:ctx.request.body.username,tel:ctx.request.body.tel,email:ctx.request.body.email,text:ctx.request.body.text};
    ctx.body = {code:2001}
  }
  async userinfo(){
    var userinfo = this.ctx.session.UserInfo
    this.ctx.body={userinfo: userinfo}
  }
  async verif() {
    const ctx = this.ctx
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      width: 100,
      height: 40,
      bacground: '#cc9966'
  });
    this.ctx.session.code = captcha.text;//缓存验证码中的文字
    ctx.body =captcha;//返回验证码
  }
  async Login() {
    const ctx = this.ctx
    if(ctx.request.body.verif!==ctx.session.code){
      ctx.body={code:4001}
    }else{
      var re = await this.service.home.Login(ctx.request.body)
      if(re[0]){
        this.session.userinfo = ctx.request.body;
        ctx.body = {code:2001}
      }else if(!re[0]){
        ctx.body={code:4003}
      }
    }
  }
  async Register() {
    const ctx = this.ctx
    var re = await this.service.home.has(ctx.request.body);
    if(re[0]){
      ctx.body = {code:4001}
    }else{
      var re = await this.service.home.register(ctx.request.body,ctx.request.files);
      ctx.body = {code:2001}
    }
  }
  async MessagerAdd() {
    const ctx = this.ctx;
    var re = await this.service.home.MessagerAdd(ctx.request.query);
    ctx.body = {code:re.code};
  }
  async MessagerDelS(){
    const ctx = this.ctx;
    var re = await this.service.home.MessagerDelS(ctx.request.query);
    ctx.body = {code:re.code};
  }
  async MessagerSearchS() {
    const ctx = this.ctx
    var re = await this.service.home.MessagerSearchS(ctx.request.query);
    if(re[0]){
    ctx.body = {code:2001,info:re};
    }else{
    ctx.body = {code:4001};
    }
  }
  async MessagerSearchT() {
    const ctx = this.ctx
    var re = await this.service.home.MessagerSearchT(ctx.request.query);
    if(re[0]){
    ctx.body = {code:2001,info:re};
    }else{
    ctx.body = {code:4001};
    }
  }
  async MessagerDelT() {
    const ctx = this.ctx
    var re = await this.service.home.MessagerDelT(ctx.request.query);
    ctx.body = {code:re.code}
  }
  async MessagerChangeS() {
    const ctx = this.ctx
    var re = await this.service.home.MessagerChangeS(ctx.request.body,ctx.request.files);
    ctx.body = {code:re.code}
  }
  async MessagerAddS() {
    const ctx = this.ctx
    var re = await this.service.home.MessagerAddS(ctx.request.body,ctx.request.files);
    ctx.body = {code:re.code}
  }
  async MessagerAddT() {
    const ctx = this.ctx
    var re = await this.service.home.MessagerAddT(ctx.request.body,ctx.request.files);
    ctx.body = {code:re.code}
  }
  async MessagerChangeT() {
    const ctx = this.ctx
    var re = await this.service.home.MessagerChangeT(ctx.request.body,ctx.request.files);
    ctx.body = {code:re.code}
  }
  async StudentLog() {
    const ctx = this.ctx
    if(ctx.request.body.verif!==ctx.session.code){
      ctx.body={code:4001}
    }else{
      var re = await this.service.home.hasStudent(ctx.request.body);
      if(re[0]){
        var re = await this.service.home.StudentLog(ctx.request.body)
        ctx.body = {code:2001,userinfo:re}
      }else if(!re[0]){
        ctx.body={code:4003}
      }
    }
  }
  async TeacherLog() {
    const ctx = this.ctx
    if(ctx.request.body.verif!==ctx.session.code){
      ctx.body={code:4001}
    }else{
      var re = await this.service.home.hasTeacher(ctx.request.body);
      if(re[0]){
        var re = await this.service.home.TeacherLog(ctx.request.body)
        ctx.body = {code:2001,userinfo:re}
      }else if(!re[0]){
        ctx.body={code:4003}
      }
    }
  }
  async MessagerLog() {
    const ctx = this.ctx
    if(ctx.request.body.verif!==ctx.session.code){
      ctx.body={code:4001}
    }else{
      var re = await this.service.home.hasMessager(ctx.request.body);
      if(re[0]){
        var re = await this.service.home.MessagerLog(ctx.request.body)
        ctx.body = {code:2001,userinfo:re}
      }else if(!re[0]){
        ctx.body={code:4003}
      }
    }
  }
  async TeacherSearchS() {
    const ctx = this.ctx
    var re = await this.service.home.TeacherSearchS(ctx.request.query);
    if(re[0]){
    ctx.body = {code:2001,info:re};
    }else{
    ctx.body = {code:4001};
    }
  }
  async TeacherSearchK() {
    const ctx = this.ctx
    var re = await this.service.home.TeacherSearchK(ctx.request.query);
    if(re[0]){
    ctx.body = {code:2001,info:re};
    }else{
    ctx.body = {code:4001};
    }
  }
  async TeacherAddK() {
    const ctx = this.ctx
    var re = await this.service.home.TeacherAddK(ctx.request.body,ctx.request.files);
    ctx.body = {code:re.code}
  }
  async TeacherChangeK() {
    const ctx = this.ctx
    var re = await this.service.home.TeacherChangeK(ctx.request.body,ctx.request.files);
    ctx.body = {code:re.code}
  }
}

module.exports = HomeController;
