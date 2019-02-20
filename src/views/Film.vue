<template>
    <div>
        <Banner></Banner>
        <sub-tabs></sub-tabs>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <!-- <router-link></router-link> -->
    </div>
</template>

<script>
import Banner from '../components/Banner'
import SubTabs from '../components/SubTabs'
export default {
    components:{
        Banner,
        SubTabs
    }
}
</script>

<style>

</style>
