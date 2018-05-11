"use strict";

/**
 * Created by SZ on 2018/5/10.
 */
//1、定义【路由】组件和 定义 路由routers 配置
var Index = {
    template: "<div>welcome to my world!</div>"
};
//重定向时，避免定向路由形成回路。
var routes = [{
    path: "",
    //redirect:{name:"c"}, //①、通过路由重命名【name】来重定向
    //redirect: '/choose',//①、通过path来重定向
    component: {
        template: "<h1>请认真选择。空空空</h1>"
    }
}, {
    path: "/index",
    component: Index,
    // /index 的别名是 /choose，意味着，当用户访问 /choose 时，URL 会保持为 /choose，但是路由匹配则为 /index【内容是/index的内容】，就像用户访问 /index 一样。
    alias: "/choose" //别名alias：【『别名』的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。】
}, {
    path: "/choose",
    //name:"c",
    component: {
        template: "<h1>请认真选择。choose</h1>"
    }
}, {
    path: "/help",
    components: {
        default: {
            template: "<h1>请认真阅读下列文档，相信对您有所帮助</h1>"
        },
        note: {
            template: "<h1>我的备注信息：198****9868</h1>"
        }
    }
}];
//2、创建 路由 示例
var router = new VueRouter({
    routes: routes
});
//3、创建 和 挂载 根示例
var app = new Vue({
    router: router
}).$mount("#app");

//# sourceMappingURL=009-compiled.js.map