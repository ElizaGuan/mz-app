<template>
    <div class="tabs">
        <ul class="sub-tabs">
            <!-- <li class="palying">
            
            </li>
            <li class="coming">
            <span>即将上映</span>
            </li> -->
            <router-link tag="li" to="/film/nowPlaying">正在热映</router-link>            
            <router-link tag="li" to="/film/soonComing">即将上映</router-link>
            <!-- <div class="swiper-tabs">
                <span class="tab-ink-bar"></span>
            </div> -->
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
$full:100%;
.tabs{
    .sub-tabs {
        width: $full;
        height: 49px;
        display: flex;
        border-bottom: 1px solid #ededed;
        li {
            flex: 1;
            flex-direction: column;
            line-height: 49px;
            text-align: center;
            color: #191a1b;
            font-size: 14px;
            cursor: pointer;
            &.router-link-active{
                color:#ff5f16;
            }
        }
    }








    // &:after{
    //     content: " ";
    //     position: absolute;
    //     left: 0;
    //     bottom: 0;
    //     right: 0;
    //     height: 1px;
    //     border-bottom: 1px solid #ededed;
    //     color: #ededed;
    //     transform-origin: 0 100%;
    //     transform: scaleY(.5);
    // }
    // .swiper-tabs{
    //     position: absolute;
    //     margin: auto;
    //     top: 30px;
    //     left: 0;
    //     -webkit-transform: translateZ(0);
    //     transform: translateZ(0);
    //     transition: transform .2s cubic-bezier(.35,0,.25,1);
    //     .tab-link-bar{
    //         border-bottom: 2px solid #ff5f16;
    //         border-radius: 20px;
    //         display: block;
    //         margin: auto;
    //     }
    // }
}
</style>

