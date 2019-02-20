<template>
    <ul class="center-tab">
        <!-- 因为有router-link，在 router.js 文件中配置了 /user/:id ，只要符合，就会进入到 User 组件中进行渲染 -->
        <router-link tag="li" to="/user/order">
            <i class="iconfont iconshouye1"></i>
            <p>电影订单</p>
        </router-link>
        <router-link tag="li" to="/film">拼团订单</router-link>
    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>
