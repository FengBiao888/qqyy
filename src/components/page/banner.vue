<template>
  <div >
    <swiper :options="swiperOption" ref="mySwiper" id="bannerUl">
        <!-- slides -->
        <swiper-slide><img src="./../../assets/banner1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="./../../assets/banner2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="./../../assets/banner3.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="./../../assets/banner4.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" id="swiper-but"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
var but=document.getElementsByClassName('swiper-pagination-bullet')
  
    for(let i=0;i<but.length;i++){
      but[i].style.width='6px'
      but[i].style.height='6px'
    }
    console.log(but)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'banner',
  data () {
    return {
        // imgUrl:{
        //     url1:'./banner1.jpg'
        // },
        swiperOption: {
          loop : true,
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay:true
        }
      }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width:100px) and (max-width:1024px){
  #bannerUl{
    width: 100%;
  }
  #bannerUl img{
    display: block;
    width: 100%;
  }
}



</style>
