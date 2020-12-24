<template>
    <div>
      <span class="tousu6">投诉建议</span>
    <p class="name11">姓名:</p>
    <p class="name12">联系方式:</p>
     <input type="text"  placeholder="请输入" class="advice2">
     <input type="text" class="advice3">
    <button class="tousu">投诉</button>
     <div class="tousubox">请输入</div>
     <button class="jianyi">建议</button>
     <div class="jianyibox"></div>
    
    
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
    }
</script>

<style  scoped>
  .tousu6 {

       display: flex;
       justify-content: center;
       font-size: 30px;
       color: red;
       margin-left: -18px;
  }
  .advice2 {
      position: absolute;
    top: 150px;
    left: 426px;}


.advice3 {
      position: absolute;
     top: 150px;
    left: 952px;


}
.name11 {

       position: absolute;
  top: 150px;
    right: 1118px;
    font-size: 16px;
}

.name12 {

       position: absolute;
  top: 150px;
    right: 593px;
    font-size: 16px;
}
.tousu {
    position: absolute;
   top: 235px;
    right: 1020px;
    font-size: 16px;

}
.jianyi {
position: absolute;
   top: 235px;
    right: 490px;
    font-size: 16px;

}

.tousubox {
  width: 380px;
    height: 300px;
    border: red 1px solid;
    margin-top: 246px;
    margin-left: 296px;
}
.jianyibox {
      width: 380px;
    height: 300px;
    border: red 1px solid;
   margin-top: -299px;
    margin-left: 825px;
} 


    










</style>