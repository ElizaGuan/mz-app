<template>
    <ul class="center-lists">
        <router-link tag="li" to="/user/card">
            <i class="iconfont icon-biaoti" style="color:red"></i>            
            <span>卖座卡</span>
            <b>
                <i class="iconfont icon-icon"></i>
            </b>
        </router-link>
        <router-link tag="li" to="/user/money">
            <i class="iconfont icon-yue1-copy" style="color:orange"></i>
            <span>余额</span>
            <b>
                <small>￥</small>
                <span>0</span>
                <i class="iconfont icon-icon"></i>
            </b>
        </router-link>
        <router-link tag="li" to="/user/setting">
            <i class="iconfont icon-shezhi1" style="color:green"></i>
            <span>设置</span>
            <b>
                <i class="iconfont icon-icon"></i>
            </b>
        </router-link>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.center-lists{
    padding: 0 15px;
    li{
        line-height: 49px;
        border-bottom: 1px #f4f4f4 solid;
        i{
            font-size: 20px;
        }
        span{
            margin-left: 15px;
        }
        b{
            float: right;
            color: #797d82;
            span{
                margin-left: 0;
            }
        }
    }
}
</style>
