<template>
    <div class="a">
     <el-container style="height: 500px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1', '3']">
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>首页</template>
        <el-menu-item-group>
            <el-submenu index="3-3">
          <template slot="title">信息查询</template>
          <el-menu-item index='/grades'>成绩查询</el-menu-item>
      
          <el-menu-item index="/test">考试信息查询</el-menu-item>
          <el-menu-item index="/timetable">个人信息</el-menu-item>
           </el-submenu>
        </el-menu-item-group>
        <el-menu-item index="/news" >
          信息列表
        </el-menu-item>
      </el-submenu>
    </el-menu>
    
  </el-aside>
     <el-dropdown class="name1">
       欢迎你
        <span>{{name}}</span>
         </el-dropdown>
  </el-container>
  
</div>
   
</template>

<script>
export default {
  data() {
    return {
     
        name:"zth"
      }
    }
  
};
</script>

<style lang="scss" scoped="scoped">
.name1{
position: absolute;
right: 20px;
}
</style>



