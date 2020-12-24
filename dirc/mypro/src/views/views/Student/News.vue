<template>
  <div class="box">
    <el-table :data="tableData" stripe style="width: 100%" height="250" border>
      <el-table-column prop="title" label="标题" width="400"> </el-table-column>
      <el-table-column prop="admin" label="发布者"> </el-table-column>
      <el-table-column prop="newstime" label="发布时间"> </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          title: "考试时间",
          admin: "管理员",
          newstime:"2020-8-30"
          
        },
        {
          title: "考试时间",
          admin: "管理员",
          newstime:"2020-8-30"
        },
        {
          title: "考试时间",
          admin: "管理员",
          newstime:"2020-8-30"
        },
        {
          title: "考试时间",
          admin: "管理员",
          newstime:"2020-8-30"
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