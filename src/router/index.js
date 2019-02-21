import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '@/views/Home.vue';
import Film from '@/views/Film.vue';
// import Cinema from '@/views/Cinema.vue';
// import Center from '@/views/Center.vue';
// import City from '@/views/City.vue';
import NowPlaying from '@/components/NowPlaying';
// import SoonComing from '@/components/SoonComing';
// import Detail from '@/views/Detail.vue'
// import User from '@/views/User.vue'
// import Login from '@/views/Login.vue'
// import Card from '@/views/User/Card.vue'
// import Order from '@/views/User/Order.vue'
// import Setting from '@/views/User/Setting.vue'
// import Money from '@/views/User/Money.vue'


Vue.use(VueRouter)

const router =  new VueRouter({
    scrollBehavior (to, from, savedPosition) {
        return {
          x: 0,
          y: 0
        }
      },
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
            component: ()=> import (/* webpackChunkName: "asf" */ '@/views/Home.vue'),
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
                                component: ()=>import('@/components/SoonComing')
                            },
                            {
                                path: '',
                                // component: Film  
                                redirect: '/film/nowPlaying'  // 这里要 '/' 
                            }
                        ]
                    },
                    {
                        path: 'cinema',
                        component: ()=>import('@/views/Cinema.vue')
                    },
                    {
                        path: 'center',
                        component: ()=>import('@/views/Center.vue')
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
            component: ()=>import('@/views/City.vue')
        },
        {
            path:'/detail/:id',
            component:()=>import('@/views/Detail.vue')
        },
        {
            path: '/user',
            component: ()=>import('@/views/User.vue'),
            children:[{
                path: 'card',
                component: ()=>import('@/views/User/Card.vue')
            },
            {
                path: 'order',
                component: ()=>import('@/views/User/Order.vue')
            },
            {
                path: 'setting',
                component: ()=>import('@/views/User/Setting.vue')
            },
            {
                path:'Money',
                component:()=>import('@/views/User/Money.vue')
            }
            ]
        },
        {
            path: '/login',
            component: ()=>import('@/views/Login.vue')
        },
        // 设置一个 通配符的 一级路由，当url地址无法与上面的规则匹配的时候，就会跟我匹配。
        {
            path: '*',
            redirect: '/film'
        }
    ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 调用 NProgress.start();
//   NProgress.start();
    var str = to.path;
  if (str.startsWith('/user') && !sessionStorage.getItem('nickName')) {
    // 阻止
    // next(false);
    // next('/login'); 字符串的模式
    console.log('拦截')
    next({
      path: '/login',
      query:{
          redirectTo:to.fullPath
      }
    })
  } else {
    console.log('不拦截')
    next();
  }
})

export default router;