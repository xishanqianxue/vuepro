<template>
  <div class="box">

    <el-table :data="tableData" stripe style="width: 100%" height="100"  >
      
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="sex" label="性别"> </el-table-column>
    </el-table>
     <el-table :data="tableData" stripe style="width: 100%" height="250"  >
     
      <el-table-column prop="class" label="班级"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name:"zth",
          sex: "男",
          class:"h200801",
          age:"20"
        
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped="scoped">
.box {
  position: relative;
  margin: -300px auto;
  left: 50px;
  top: -100px;
  width: 900px;
}
</style>