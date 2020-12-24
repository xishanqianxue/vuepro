const Service = require('egg').Service;
let fs = require("fs");
class MyService extends Service {
  async UserChange(reg1,reg2,reg3){
    var data = `update user set tel="${reg1.tel}",email="${reg1.email}",text="${reg1.text}",username="${reg1.username}" where id="${reg3}"`
    await this.app.mysql.query(data);
  }
  async has(reg){
    var data = `select * from user where email = "${reg.email}"`
    var re = await this.app.mysql.query(data);
    return re;
  }
  async Login(reg){
    var data = `select * from user where username="${reg.username}" and pwd="${reg.pwd}"`
    var re = await this.app.mysql.query(data);
    return re;
  }
  async userinfo(reg){
    var data = `select * from user where id="${reg}"`
    var re = await this.app.mysql.query(data);
    return re;
  }
  async register(reg){
    var data = `insert into user (email,pwd) values("${reg.email}","${reg.pwd}")`
    var re =  await this.app.mysql.query(data);
    return re
  }
  async hasStudent(reg){
    var data = `select * from cp1student where uid="${reg.uid}" and pwd="${reg.pwd}"`
    var re =  await this.app.mysql.query(data);
    return re
  }
  async hasTeacher(reg){
    var data = `select * from cp1teacher where uid="${reg.uid}" and pwd="${reg.pwd}"`
    var re =  await this.app.mysql.query(data);
    return re
  }
  async hasMessager(reg){
    var data = `select * from cp1messager where uid="${reg.uid}" and pwd="${reg.pwd}"`
    var re =  await this.app.mysql.query(data);
    return re
  }
}
module.exports = MyService;