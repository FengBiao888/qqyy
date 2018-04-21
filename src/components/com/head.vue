<template> 
  <div>
    <header class="head">
      <span class="logo"></span>
      <a class="app" href="#">下载APP</a>
    </header>
    <nav>
      <ul>
        <li class="on">推荐</li>
        <li>排行榜</li>
        <li>搜索</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'hea',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  width: 100%;
  height: 45px;
  background: #38bD78;
}
.logo{
  display: inline-block;
  width: 90px;
  height: 100%;
  margin-left:10px;
  background:url(~@/assets/logo.png) no-repeat 0 10px;
  background-size: 90px;
}
.app{
  float: right;
  width: 80px;
  height: 30px;
  margin:8px 10px 0 0;
  text-align: center;
  line-height:30px;
  border-radius:15px 15px 15px 15px;
  background: #229556;
  color:#fff;
}
nav{
  width: 100%;
  height: 38px;
 
}
nav li{
  float: left;
  width: 33.33%;
  height: 38px;
  text-align:center;
  line-height: 38px;
  font-size:1rem;
}
.on{
  border-bottom:#38bD78 solid 2px;
  color:#38bD78;
}
</style>