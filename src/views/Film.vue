<template>
    <div>
        <Banner></Banner>
        <sub-tabs></sub-tabs>
        <router-view></router-view>
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
