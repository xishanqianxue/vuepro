<template>
  <div class="block">
        <el-carousel class="el-carousel" trigger="click" height="400px">
            <el-carousel-item v-for="el in arr" :key="el.id">
                <!-- <h3 class="small">{{ el.imgurl }}</h3> -->
                <img :src="el.imgurl">
            </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                arr:[{imgurl:"http://192.168.2.125:7001/public/img/lunbo1.jpg",id:1},{imgurl:"http://192.168.2.125:7001/public/img/lunbo2.jpg",id:2},{imgurl:"http://192.168.2.125:7001/public/img/lunbo3.jpg",id:3}]
            }
        },
    }
</script>
<style scope>
.el-carousel{
    width: 100%;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>