import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Film from '../views/Film.vue';
import Cinema from '../views/Cinema.vue';
import Center from '../views/Center.vue';
import City from '../views/City.vue';
import NowPlaying from '../components/NowPlaying';
import SoonComing from '../components/SoonComing';

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        // 配置路由对照表  url -> 视图组件
        // localhost:8080/#/films  -> Film.vue
        // localhost:8080/#/cinemas-> Cinema.vue
        // localhost:8080/#/center -> Center.vue
        // localhost:8080/#/city ->   City.vue
        // 一级路由
        {
            // 这里为了 URL 不出现 home ，使用 / ，访问时两个 / 可以省略
            path: '/',
            component: Home,
            // 二级路由  前面不要 /
            children: [
                    {
                        path: 'film',
                        component: Film,
                        children: [
                            {
                                path: 'nowPlaying',
                                component: NowPlaying
                            },
                            {
                                path: 'soonComing',
                                component: SoonComing
                            }
                        ]
                    },
                    {
                        path: 'cinema',
                        component: Cinema
                    },
                    {
                        path: 'center',
                        component: Center
                    },
                    // 空的儿子
                    // localhost:8080/#/  ->  localhost:8080/#/films
                    {
                        path: '',
                        // component: Film  
                        redirect: '/film'  // 这里要 '/' 
                    }
            ]
        },
        {
            path: '/city',
            component: City
        },
        // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会跟我匹配。
        {
            path: '*',
            redirect: '/film'
        }
    ]
})