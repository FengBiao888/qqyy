<template>
  <div >
    <div >
      <div class="radio">电台</div>
      <el-row class="box">
        <el-col :span="11" class="radio-li" v-for="radios in radio">
          <div  class="img-but">
            <img class="radio-img" src="./../../assets/radio1.jpg" alt="">
            <i></i>
          </div>  
          <div class="content con-radio">
            <span>{{radios.title}}</span>
          </div>
        </el-col>
      </el-row>
    </div>  
    <div class="hot">
      <div class="radio ">热门歌单</div>
      <el-row class="box">
        <el-col :span="11" class="radio-li " v-for="hots in hot">
          <div  class="img-but">
            <img class="radio-img" src="./../../assets/radio1.jpg" alt="">
            <i></i>
          </div>
          <div class="content con-hot">
            <h3>{{hots.content}}</h3>
            <span>{{hots.title}} </span>
          </div>
        </el-col>
      </el-row>
      <a class="find" href="">去客户端发现更多好音乐 ></a>
    </div>
    <footer>
      <b>查看电脑版网页</b>
      <i></i>
      <h6>Copyright © 1998 -  Tencent. All Rights Reserved.</h6>
      <p>联系电话：0755-86013388 QQ群：55209235</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'qqyy',
  data () {
    return{
      radio:[
        {
          // imgUrl:'./../../assets/radio1.jpg',
          title:'热歌'
        },
        {
          imgUrl:'./../../assets/radio2.jpg',
          title:'一人一首招牌歌'
        }
      ],
      hot:[
        {
          imgUrl:'./../../assets/radio2.jpg',
          title:'Harry',
          content:'催泪大杀器！盘点演唱会经典万人大合唱'
        },{
          imgUrl:'./../../assets/radio2.jpg',
          title:'风吹草地',
          content:'纳尼？这些华语歌手竟然会唱日语歌！'
        },{
          imgUrl:'./../../assets/radio2.jpg',
          title:'1‘s   ヽ',
          content:'精选内地十大民谣歌手代表作'
        },{
          imgUrl:'./../../assets/radio2.jpg',
          title:'SdoopeBoi_7',
          content:'$doopeBoi关注我网易yun歌手页'
        },{
          imgUrl:'./../../assets/radio2.jpg',
          title:'肥喵',
          content:'浮光掠影：ACG纯音乐赏析合辑'
        },{
          imgUrl:'./../../assets/radio2.jpg',
          title:'哑忍',
          content:'trip-hop单曲大推荐'
        }
        
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
.box{
  overflow: hidden;
}
.radio{
  widows: 100%;
  height: 50px;
  padding-left: 10px;
  font-size:1.1rem;
  line-height: 50px;
}

.radio-li{
  /* position: relative; */
  margin: 0 0 0 3%;
  background: #fff;
}
.radio-img{
  width: 100%;
  height: 100%;
  background: #000;
}
.img-but{
  width: 100%;
  position: relative;
}
.radio-li i{
  position: absolute;
  bottom:5px;
  right: 5px;
  width: 25px;
  height: 25px;
  background: url(~@/assets/list_sprite.png);
  background-size: 25px;
}
.content{
  /* display: block; */
  padding:0 10px 10px 10px;
  font-size:0.9rem;
}
.con-radio{
  height: 36px;
}
.radio-li h3{
  font-weight: 500;
  font-size:0.9rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.con-hot>span{
  line-height: 10px;
}
.find{
  display: block;
  padding:15px;
  text-align: center;
  color: rgba(0,0,0,.6)
}
footer{
  padding: 10px 0 10px;
  text-align: center;
}
footer>b{
  display: block;
  font-weight: 500;
  margin-bottom: 16px;
}
footer>i{
  display: block;
  margin: 0 auto 10px;
  width: 82px;
  height: 24px;
  background: url(~@/assets/logo_footer.png);
  background-size: 82px 24px;
}
footer>h6{
    font-size: 10px;
    color: rgba(0,0,0,.5);
}
footer>p{
    font-size: 10px;
    text-align: center;
    color: rgba(0,0,0,.5);
}
</style>
