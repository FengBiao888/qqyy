<template>
  <div id="app">
    <headNav></headNav>
    <bannerGo></bannerGo>
    <router-view/>
  </div>
</template>

<script>
import headNav from '@/components/com/head.vue'
import bannerGo from '@/components/page/banner.vue'

export default {
  name: 'App',
  components:{
    headNav,
    bannerGo
  }
}
</script>

<style>
/* 引入公共样式 */
@import './../src/css/commonstyle.css'; 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f3f3f3;
 
}
.swiper-pagination-bullet{
  width: 6px !important; 
  height: 6px !important;
}
.swiper-pagination-bullet-active{
  background: #fff !important;
}

</style>
