<template>
  <div class="box">
    <el-table :data="tableData" stripe style="width: 100%" height="250" border>
      <el-table-column prop="data" label="考试时间" width="180"> </el-table-column>
      <el-table-column prop="fraction" label="考场号"> </el-table-column>
      <el-table-column prop="subject" label="科目"> </el-table-column>

    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          data: "2020-9-20",
          fraction: "四教101左",
          subject:"现代设计史"
        },
        {
          data: "2020-9-20",
          fraction: "四教101左",
          subject:"现代设计史"
        },
        {
          data: "2020-9-20",
          fraction: "四教101左",
          subject:"现代设计史"
        },
        {
          data : "2020-9-20",
          fraction: "四教101左",
          subject:"现代设计史"
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