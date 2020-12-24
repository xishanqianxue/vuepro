<template>
  <div id="app">
    <Nav1></Nav1>
 <router-view></router-view>
  </div>
</template>

<script>
import Nav1 from '@/Nav1.vue'
  export default {
      components:{
        Nav1
      }
  }
</script>
<style lang="scss" scoped="scoped">

</style>