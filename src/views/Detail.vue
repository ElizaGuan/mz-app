<template>
    <div class="detail">
        <div class="detail-main">
            <router-link to="/film" tag="div" class="goback">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
            </router-link>
            <div class="img-wrap">
                <img :src="movieData.albumImg" alt="">
            </div>
            <div class="film-detail">
                <div class="col">
                    <div class="film-name">
                        <span class="name">{{movieData.nm}}</span>
                        <span class="item">{{movieData.version}}</span>
                    </div>
                    <div class="film-grade">
                        <span class="grade">{{movieData.sc}}</span>
                        <span class="grade-text">分</span>
                    </div>
                </div>
                <div class="text">{{movieData.dra}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props:{
        _id:Number
    },
    data(){
        return {
            movieData:{},
            id:0
        }
    },
    methods: {
        idFn(movieId){
            var that = this;
            axios.get('/axios/ajax/detailMovie',{
                params:{
                    movieId:movieId
                }
            })
            .then((res)=>{
                that.movieData = res.data.detailMovie
                // console.log(JSON.stringify(res.data))
                // console.log(res.data)      
            })
            .catch((err)=>{
                console.log(err.message)
            })
        }
    },
    mounted() {
        var that = this;
        that.idFn(this.$route.params.id)
        
        this.$center.$on('idChanged',function(id){
            console.log('改变 id',id)
            that.id = id;
            that.idFn(that.id?that.id:this.$route.params.id)
        })
        

    },
}
</script>

<style lang="scss">
$full:100%;
.detail{
    height: 852px;
    width: $full;
    overflow: hidden;
    .detail-main{
        overflow: hidden;
        .goback{
            height: 30px;
            position: absolute;
            top: 5px;
            left: 5px;
            z-index: 10;
            img{
                width: 30px;
            }
        }
        .img-wrap{
            // position: absolute;
            overflow: hidden;
            // top: 0;
            width: $full;
            height: 180px;
            img{
                width: $full;
                position: absolute;
                // top: -20%;
                height: 180px;                
            }
        }
        .film-detail{
            padding: 15px;
            padding-top: 12px;
            background-color: #fff;
            .col{
                display: flex;
                -webkit-box-pack: start;
                -webkit-justify-content: flex-start;
                -ms-flex-pack: start;
                justify-content: flex-start;
                -webkit-box-align: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
                .film-name{
                    width: 256px;
                    .name{
                        color: #191a1b;
                        font-size: 18px;
                        height: 24px;
                        line-height: 24px;
                        margin-right: 7px;
                    }
                    .item{
                        font-size: 9px;
                        color: #fff;
                        background-color: #d2d6dc;
                        height: 14px;
                        line-height: 14px;
                        padding: 0 2px;
                        border-radius: 2px;
                        display: inline-block;
                    }
                }
                .film-grade{
                    width: calc(100% - 250px);
                    text-align: right;
                    color: #ffb232;
                    .grade{
                        font-size: 18px;
                        font-style: italic;     
                    }
                    .grade-text{
                        font-size: 10px;
                        margin-left: 2px;
                    }
                }
            }
            .text{
                font-size: 13px;
                color: #797d82;
                margin-top: 4px;
            }
        }
    }
}
</style>
