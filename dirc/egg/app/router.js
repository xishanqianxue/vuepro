'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 网站的接口
  router.post("/UserChange",controller.home.UserChange);
  router.post("/Login",controller.home.Login);
  router.post("/Register",controller.home.Register);
  
  router.get("/verif",controller.home.verif);
  //产品内部的接口
  //管理员页面
  router.get("/MessagerAdd",controller.home.MessagerAdd);
  router.get("/MessagerDelS",controller.home.MessagerDelS);
  router.get("/MessagerSearchS",controller.home.MessagerSearchS);
  router.get("/MessagerSearchT",controller.home.MessagerSearchT);
  router.get("/MessagerDelT",controller.home.MessagerDelT);

  router.post("/MessagerChangeS",controller.home.MessagerChangeS);
  router.post("/MessagerAddS",controller.home.MessagerAddS);
  router.post("/MessagerAddT",controller.home.MessagerAddT);
  router.post("/MessagerChangeT",controller.home.MessagerChangeT);
  //登录、注册页面
  router.post("/StudentLog",controller.home.StudentLog);
  router.post("/TeacherLog",controller.home.TeacherLog);
  router.post("/MessagerLog",controller.home.MessagerLog);
  //教师页面
  router.get("/TeacherSearchS",controller.home.TeacherSearchS);
  router.get("/TeacherSearchK",controller.home.TeacherSearchK);

  router.post("/TeacherAddK",controller.home.TeacherAddK);
  router.post("/TeacherChangeK",controller.home.TeacherChangeK);
};
