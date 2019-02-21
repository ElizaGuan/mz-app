<template>
    <div class="center-view">
        <center-header></center-header>
        <center-tabs></center-tabs>
       <CenterLists></CenterLists>
    </div>
</template>

<script>
import CenterHeader from '../components/CenterHeader'
import CenterTabs from '../components/CenterTabs'
import CenterLists from '@/components/CenterLists'
export default {
components:{
    CenterHeader,
    CenterTabs,
    CenterLists
}
}
</script>

<style lang="scss">
.center-view{
    height: 100%;
    width: 100%;
    ul{
        background: #fff;
    }
}
</style>
