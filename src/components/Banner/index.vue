<template>
    <!-- <div class="swiper">
        <div class="city-fixed">
          <span>深圳</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
        <img src="https://static.maizuo.com/v5/upload/1fc5abb0e45ae533e3848f58d9124dfd.jpg?x-oss-process=image/quality,Q_70" alt="">
    </div> -->
  <div class="swiper-container mz-banner">
      <div class="swiper-wrapper">
        <!-- Slide 1 -->
          <div class="swiper-slide" v-for="item in bannerList" :key="item._id">
                <!-- <div class="swiper"> -->
                    
                    <img :src="item.imgUrl" alt="">
                <!-- </div> -->
          </div>
      </div>
      <div class="city-fixed" @click="chooseCity">
          <span>深圳</span>
          <i class="iconfont icon-jiantou"></i>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      bannerList: [],
      // mySwiper:null
    }
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          bulletClass:'mini-swiper', // 给分页按钮重新命名 class
          bulletActiveClass: 'mini-swiper-active'
        },
        autoplay:{
          disableOnInteraction: false // 用户操作 swiper 后，是否禁用 autoplay
        }
      });
    },
    chooseCity(){
      this.$router.push('/city')
    }
  },
  created(){
    axios.get('http://localhost:3000/banner/search',{
      // get 方式向后台传参数
      params:{
        pageSize:6
      }
    })
    .then((res)=>{
      let reData = res.data;
      if(reData.code === 0){
        this.bannerList = reData.data;
        // 数据更新之后，再做 new Swiper (PS: 数据的更新到页面真实DOM的更新还需要一点点时间)  $nextTick() 这个函数能确保真实dom的更新
        this.$nextTick(()=>{
          this.initSwiper();
        })
      }else{
        alert('网络异常')
      }
      
    })
  }
};
</script>

<style lang="scss">
$full: 100%;
.mz-banner {
  width: $full;
  height: 180px;
  position: relative;
  .city-fixed {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
  }
  img {
    width: $full;
    height: 100%;
  }
  .swiper-pagination{
    position: absolute;
    width: 66px;
    bottom: 10;
    left:auto !important;
    right: 12px !important;
    line-height: 5px !important;
    .mini-swiper{
      display: inline-block;
      border-radius: 50%;
      width: 3px !important;
      height: 3px !important;
      margin:0 3px;
      background: none;
      border: #fff 1px solid;
    }
    .mini-swiper-active{
      background: #fff
    }
  }
}
</style>
