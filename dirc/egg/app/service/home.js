const Service = require('egg').Service;
let fs = require("fs");
class MyService extends Service {
  async UserChange(reg1,reg2){
    var data = `update user set tel="${reg1.tel}",email="${reg1.email}",text="${reg1.text}" where username="${reg1.username}"`
    await this.app.mysql.query(data);
  }
  async has(reg){
    var data = `select * from user where email = "${reg.email}"`
    var re = await this.app.mysql.query(data);
    return re;
  }
  async register(reg1,reg2){
    // console.log(reg2[0].filepath);
    reg2[0].filepath = "http://192.168.2.125:7001/public/img"+reg2[0].filename;
    var data = `insert into user (userimg,username,tel,email,grade,birth) values("${reg2[0].filepath}","${reg1.username}","${reg1.tel}","${reg1.email}","${reg1.grade}","${reg1.birth}")`
    var re =  await this.app.mysql.query(data);
    return re
  }
}
module.exports = MyService;