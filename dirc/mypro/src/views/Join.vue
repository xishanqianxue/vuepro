<template>
  <div>
    <p class="join1">人才招聘</p>
    <p class="join2">招聘职位:驻点工程师</p>
    <p class="join3">招聘部门:客服中心</p>
    <p class="join4">{{ join4 }}</p>
    <p class="join5">{{ join5 }}</p>
    <p class="join6">{{ join6 }}</p>
    <p class="join7">{{ join7 }}</p>
    <p class="join8">{{ join8 }}</p>
    <p class="join9">{{ join9 }}</p>
    <p class="join10">{{ join10 }}</p>
    <p class="join11">{{ join11 }}</p>
    <p class="join12">{{ join12 }}</p>
    <p class="join13">{{ join13 }}</p>
    <img src="https://17507935.s21i.faiusr.com/4/ABUIABAEGAAgrZz5-AUo2OTRnAUwgB44wgg.png" class="imageko">
  </div>
</template>

<script>
export default {
  data() {
    return {
      join4: "工作职责:",
      join5: "1、驻点省外客户负责公司OA产品售后技术服务，进行本地化的服务；",
      join6: "2、相关技术文档书写。客户服务的回防、记录和专项服务工作。",
      join7: "岗位要求:",
      join8: "1、计算机或相关专业",
      join9: "2、具备较好的IT理论基础，掌握网络基础知识，熟悉WINDOWS或Linux操作系统，熟悉常见的互联网应用软件，熟练掌握MS OFFICE、IE浏览器软件的应用和设置；",
      join10: "3、具备一年以上IT、互联网行业从业经验；具备一年以上IT售后技术服务经验者优先；",
      join11: "4、具有良好的沟通和理解能力，文字和语言表达能力强；",
      join12: "5、工作积极主动、细致严谨、讲究实效，思维敏捷、富有创新，有精诚协作的团队意识和协调能力；",
      join13: "工作地点：海南、广西、湖南分公司。",
    };
  },
};
</script>

<style  scoped>
 .join1 {
   font-size: 30px;
   color:red;
   display: flex;
   justify-content: center;
 }
.join2,.join3 {
    font-size: 20px;
    color: red;
    margin-top: 30px;
    text-indent: 2em;

}
 .join4 {
      color: grey;
      font-size: 18px;
      text-indent: 2em;
      margin-top: 30px;
 }
 .join5,.join6,.join7,.join8,.join9,.join10,.join11,.join12,.join13{
     font-size: 14px;
     text-indent: 2em;
     margin-top: 10px;
 }
.imageko {
    height: 500px;
    width: 100%;



}






























</style>