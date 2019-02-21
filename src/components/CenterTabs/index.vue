<template>
    <ul class="center-tab">
        <!-- 因为有router-link，在 router.js 文件中配置了 /user/:id ，只要符合，就会进入到 User 组件中进行渲染 -->
        <router-link tag="li" to="/user/order">
            <i class="iconfont icon-shouye1"></i>
            <p>电影订单</p>
        </router-link>
        <router-link tag="li" to="/film">
            <i class="iconfont icon-pintuandingdan"></i>
            <p>拼团订单</p>
        </router-link>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.center-tab{
    width: 100%;
    margin: 0 auto;
    display: flex;
    display: flex;
    text-align: center;
    font-size: 13px;
    padding: 0;
    height: 79px;
    background: #fff;
    margin-bottom: 10px;
    align-items: center;
    li{
        flex: 1;
        p{
            color: #797d82;
        }
        i{
            font-size: 26px;
            &.icon-shouye1{
                color: orange;
            }
            &.icon-pintuandingdan{
                color: rgb(112, 165, 33);
            }
        }
    }
    
}
</style>
