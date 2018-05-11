/**
 * Created by SZ on 2018/5/10.
 */
//1、定义【路由】组件和 定义 路由routers 配置
    const Index = {
        template:"<div>welcome to my world!</div>"
    };
//重定向时，避免定向路由形成回路。
const routes = [
    {
        path:"",
        //redirect:{name:"c"}, //①、通过路由重命名【name】来重定向
        redirect: '/choose',//①、通过path来重定向
        component:{
            template:"<h1>请认真选择。空空空</h1>"
        }
    },
    {
        path:"/index",
        component:Index
    },
    {
        path:"/choose",
        //name:"c",
        component:{
            template:"<h1>请认真选择。choose</h1>"
        }
    },
    {
        path:"/help",
        components:{
            default:{
                template:"<h1>请认真阅读下列文档，相信对您有所帮助</h1>"
            },
            note:{
                template:"<h1>我的备注信息：198****9868</h1>"
            }
        }
    }
];
//2、创建 路由 示例
const router = new VueRouter({
    routes
});
//3、创建 和 挂载 根示例
const app = new Vue({
    router:router
}).$mount("#app");
