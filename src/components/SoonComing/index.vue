<template>
    <div>
        <content-view>
            <router-link slot="nowPlaying" class="playing-item" tag="li" v-for="item in movieList" :key="item._id" :to="/detail/+item._id">
                <div class="item-img">
                    <img :src="item.imgUrl"/>
                </div>
                <div class="item-content">
                    <div class="center">
                        <div class="title hide">
                            <h3 class="info-title">{{item.name}}</h3>
                            <!-- <span class="version" v-if="item.version"></span> -->
                            <div class="show-info hide">
                                <!-- <div class="want-watch hide" v-if="item.sc==0"> <span>{{item.wish}}</span> 想看</div> -->
                                <div class="want-watch hide">观众评分 <span>7.2</span> </div>                    
                                <!-- <div class="hide">{{item.star}}</div>
                                <div class="hide">{{item.showInfo}}</div>                                                     -->
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="buy btn">购票</div>
                        <!-- <div class="want btn">预售</div> -->
                    </div>
                </div>
            </router-link>
        </content-view>
    </div>
</template>

<script>
import axios from 'axios'
import ContentView from '../Content'
// import httpAxios from '../../assets/http-axios/http.js';
export default {
    components:{
        ContentView
    },
    data(){
        return {
            movieList:[]
        }
    },
mounted() {
    axios.get('http://localhost:3000/banner/search',{
        params:{
            pageSize:7
        }
    })
    .then((res)=>{
        console.log(res.data)
        let reData = res.data;
        if(reData.code === 0){
            this.movieList = reData.data
        }
    })
    .catch((err)=>{
        console.log(err.message)
    })
},
}
</script>

<style lang="scss">
.playing-item{
    display: flex;
    padding: 12px;  
    padding-bottom: 0px;      
    .item-img{
        width: 64px;
        height: 90px;
        img{
            width: 64px;
            height: 90px;
        }
    }
    .item-content{
        flex: 1;
        height: 90px;
        margin-left: 5px;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 12px;
        display: flex;
        .center{
            // flex: 1; 
            width: 100%;
            padding-right: 5px;
            display: flex;
            .hide{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .title{
                flex: 1;
                width: 0px;
                
                .info-title{
                    font-size: 17px;
                    color: #333;
                    display: inline;
                    margin-right: 5px;
                }
                .version{
                    display: inline-block;
                    width: 43px;
                    height: 14px;
                    // background: url(../../assets/3Dimax.png) no-repeat;
                    background-size: 43px 14px;
                }
                .show-info{
                    color: #666;
                    font-size: 13px;
                    line-height: 22px;
                    span{
                        color: #faaf00;
                        font-size: 15px;
                        font-weight: 600;
                    }
                }
            }
        }
        .right{
            width: 48px;
            line-height: 90px;
            margin-right: 14px;
            .btn{
                display: inline-block;
                width: 100%;
                height: 27px;
                line-height: 28px;
                text-align: center;
                box-sizing: border-box;
                color: #fff;
                border-radius: 4px;
                white-space: nowrap;
                font-size: 12px;
                cursor: pointer;
            }
            .buy{
                background-color: #f03d37;
            }
            .want{
                background-color: #3c9fe6
            }
        }
    }
}
</style>
