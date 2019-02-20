<template>
    <footer class="footer-tabs">
        <!-- <a href="/#/film">
            <i></i>
        </a> -->
        <router-link to="/film" class="film">
          <i class="iconfont icon-dianying"></i>
            <span>电影</span>
        </router-link>
        <router-link to="/cinema" class="cinema">
          <i class="iconfont icon-yingyuan"></i>            
            <span>影院</span>
        </router-link>
        <router-link to="/center" class="center">
          <i class="iconfont icon-gerentouxiang"></i>
            <span>我的</span>
        </router-link>
        
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer-tabs {
    height: 49px;
    position: fixed;
    bottom: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    border:1px solid #ededed;
    // 这个 a 标签实际就是 router-link
    a{
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        color: #797d82;
        span{
            font-size: 10px;
        }
        i{
            font-size: 24px;
        }
        &.router-link-active{
            color: #ff5f16;
        }
    }
  }
</style>

