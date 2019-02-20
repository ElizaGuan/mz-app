<template>
    <div class="center-view">
        <div class="avatar">
            <img class="avator-icon" src="../assets/avatar.png" alt="">
            <div>立即登录</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.center-view{
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    font-size: 15px;
    background: #f4f4f4;
    margin-bottom: 59px;
    .avatar{
        text-align: center;
        margin-top: -44px;
        height: 136px;
        padding-left: 22px;
        padding-top: 64px;
        background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
        background-size: cover;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        color: #fff;
        .avator-icon{
            width: 63px;
            height: 63px;
            border-radius: 35px;
            margin-right: 20px;
            border: 2px solid #fff;
        }
    }
}
</style>
