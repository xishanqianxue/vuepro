<template>
  <div class="box">
    <el-table :data="tableData" stripe style="width: 100%" height="250" border>
      <el-table-column prop="subject" label="科目" width="180"> </el-table-column>
      <el-table-column prop="fraction" label="分数"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          subject: "应用文",
          fraction: "100",
        },
        {
          subject: "广告创意",
          fraction: "100",
        },
        {
          subject: "室内设计",
          fraction: "100",
        },
        {
          subject: "现代设计史",
          fraction: "100",
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