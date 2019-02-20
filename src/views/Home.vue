<template>
    <div>
        <router-view class="home"></router-view>
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
