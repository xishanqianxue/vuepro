<template>
  <div>
    <div class="Nav11">
      <img
        src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1672297674,4091651090&fm=26&gp=0.jpg"
        class="imagek"
      />
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" @click="fm">服务大厅</el-menu-item>
        <el-submenu index="2">
          <template slot="title">服务列表</template>
          <el-menu-item index="2-1">学生信息</el-menu-item>
          <el-menu-item index="2-2">课程安排</el-menu-item>
          <el-menu-item index="2-3">成绩查询</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">学校风采</template>
            <el-menu-item index="2-4-1">学校简介</el-menu-item>
            <el-menu-item index="2-4-2">学校师资</el-menu-item>
            <el-menu-item index="2-4-3">学校活动</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-menu-item index="4" @click="fm2">个人中心</el-menu-item>
        <el-menu-item index="5"
          ><el-button type="text" @click="dialogVisible = true"
            >支持与服务</el-button
          >

          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="400px"
            height="100px"
            :before-close="handleClose"
          >
            <span>请确认是否为登录状态</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog></el-menu-item
        >
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="6"
          ><el-dropdown>
            <span class="el-dropdown-link">
              个人状态<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看状态</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown></el-menu-item
        >
      </el-menu>
    </div> -->
     <img
      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.myuall.com%2Funiv%2Fimgs%2Fi%2Fi16007355.jpeg&refer=http%3A%2F%2Fimg.myuall.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611399180&t=541f15a8f0a5071cb14039777903c69a"
      class="image77"
    />
    <p class="yewu">业务系统 Operation System</p>

    <div class="icon77">
      <i class="el-icon-s-cooperation" id="k"></i>

      <i class="el-icon-s-comment" id="k1"></i>

      <i class="el-icon-s-grid" id="k2"></i>

      <i class="el-icon-s-claim" id="k3"></i>

      <i class="el-icon-s-custom" id="k4"></i>
    </div>

  <div class="icon88">
      <p class="yewu2">教务系统学生端</p>
      <p class="yewu2">学工系统</p>
      <p class="yewu2">财务系统</p>
      <p class="yewu2">校园一卡通</p>
      <p class="yewu2">管理员</p>
    </div> 
    <img
      src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3685673026,3945053150&fm=26&gp=0.jpg"
      class="kkk"
    >
   <p class="hasaki33">copyright 2018清华大学教育信息化推进办公室</p>
    <p class="hasaki33">技术支持0816-6089289</p>
    <vue-qr
      class="erweima"
      :logoSrc="imageSrc"
      text="http://www.baidu.com"
      :size="300"
    ></vue-qr>
 <span class="saoyisao">扫一扫添加微信</span> 
 <!-- <span class="dizhi">地址:清华大学位于北京市海淀区双清路30号。</span>
<span class="dizhi">意见反馈</span>
<span class="dizhi">联系我们:+87 453892 0254</span>  -->




















  </div>
</template>

<script>
import VueQr from "vue-qr";
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      dialogVisible: false,
      imageSrc:
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3098602264,1250854698&fm=26&gp=0.jpg",
    };
  },
  components: {
    VueQr,
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    fm() {
      this.$router.push("/CpHomepage");
    },
    fm2() {
      this.$router.push("/Person3");
    },
    //      handleClose(done) {
    //     this.$confirm('确认关闭？')
    //       .then(_=> {
    //         done();
    //       })
    //       .catch(_=> {});
    //   }
  },
};
</script>

<style  scoped>
.imagek {
  width: 100px;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  left: 260px;
  margin-top: 5px;
}
.Nav11 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 41px;
}

.el-menu {
  border-right: solid 1px #e6e6e6;
  list-style: none;
  /* position: relative; */
  /* margin: 0; */
  /* padding-left: 0; */
  background-color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-left: 367px;
  align-items: center;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.image77 {
  width: 100%;
  height: 500px;
  z-index: 999;
  position: relative;
  top: 9px;
}

.yewu {
  color: blueviolet;
  display: flex;
  font-size: 24px;
  margin-top: 60px;
  margin-left: 109px;
  cursor: pointer;
}
.yewu:hover {
  color: red;
}

.icon77 {
  display: flex;
  justify-content: space-between;
  padding-left: 112px;
  margin-top: 50px;
  padding-right: 90px;
}

.el-icon-s-cooperation {
  display: flex;
}
.icon88 {
  display: flex;
  justify-content: space-between;
  /* padding-left: 0px; */
  margin-top: 30px;
  font-size: 18px;
  margin-left: 38px;
  padding-right: 70px;
}
#k:hover {
  background: blueviolet;
  cursor: pointer;
}
#k1:hover {
  background: blueviolet;
  cursor: pointer;
}
#k2:hover {
  background: blueviolet;
  cursor: pointer;
}
#k3:hover {
  background: blueviolet;
  cursor: pointer;
}
#k4:hover {
  background: blueviolet;
  cursor: pointer;
}
.yewu2:hover {
  cursor: pointer;
  color: red;
  background: grey;
}

.hasaki33 {
  color: grey;
  font-size: 20px;
  margin-top: 50px;
  margin-left: 213px;
}
.hasaki33:hover {
  cursor: pointer;
  color: red;
}

.erweima {
  position: absolute;
 left: 974px;
    top: 802px;
  width: 250px;
  height: 250px;
}

.kkk {
 height: 200px;
  margin-top: 50px;
  margin-left: 213px;
}

.saoyisao {
   position: absolute;
left: 1029px;
    top: 1081px;
  font-size: 20px;
  color: red;
}






























</style>