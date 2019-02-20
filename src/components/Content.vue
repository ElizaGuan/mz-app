<template>
    <div class="content">
        <div class="in">
            <slot name="nowPlaying"/>
            <slot name="soonComing"></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content{
    padding-bottom:49px;
}
</style>
