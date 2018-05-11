/**
 * Created by lea on 2018/3/29.
 */
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Index = {template:`<div>
<h1>当前为主页内容</h1>
<router-link to="/index/free">免费</router-link>
<router-link to="/index/vip">vip</router-link>
<router-view></router-view>
</div>`};
const About = {template:`<div>
<h1>关于我们，联系我们</h1>
<p>当前地址：{{$route.params}}</p>
</div>`};
//2、定义路由【每个路由应该映射一个组件。】 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。
const routers = [
    {path:"/index",component:Index,
    children:[
        {
            path:"free",
            component:{
                template:"<p>您是普通会员，请进入免费频道进行学习</p>"
            }
        },
        {
            path:"vip",
            component:{
                template:"<p>您已是vip课程，欢迎进入vip课程学习。</p>"
            }
        },
        ////根路由[默认显示]
        {
            path:"/",
            redirect:"free"
        }
    ]
    },
    {path:"/about",component:About},
    {path:"/about/:id",component:{
        template:"#aboutCon"
    }}
];
//创建router实例
const router = new VueRouter({
    routes:routers
});
//创建和挂载根实例
const app = new Vue({
    router
}).$mount('#app');