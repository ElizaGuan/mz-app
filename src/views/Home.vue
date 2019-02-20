<template>
    <div>
        <keep-alive>
            <router-view class="home"></router-view>
        </keep-alive>
        <foot-tabs></foot-tabs>
    </div>
</template>

<script>
import FootTabs from '../components/FootTabs'
export default {
    components:{
        FootTabs
    }
}
</script>

<style>
</style>
