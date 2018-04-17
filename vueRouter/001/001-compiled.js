"use strict";

/**
 * Created by lea on 2018/3/29.
 */
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
var Index = { template: "<div>\n<h1>\u5F53\u524D\u4E3A\u4E3B\u9875\u5185\u5BB9</h1>\n<router-link to=\"/index/free\">\u514D\u8D39</router-link>\n<router-link to=\"/index/vip\">vip</router-link>\n<router-view></router-view>\n</div>" };
var About = { template: "<div>\n<h1>\u5173\u4E8E\u6211\u4EEC\uFF0C\u8054\u7CFB\u6211\u4EEC</h1>\n<p>\u5F53\u524D\u5730\u5740\uFF1A{{$route.params}}</p>\n</div>" };
//2、定义路由【每个路由应该映射一个组件。】 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，或者，只是一个组件配置对象。
var routers = [{ path: "/index", component: Index,
    children: [{
        path: "free",
        component: {
            template: "<p>您是普通会员，请进入免费频道进行学习</p>"
        }
    }, {
        path: "vip",
        component: {
            template: "<p>您已是vip课程，欢迎进入vip课程学习。</p>"
        }
    },
    ////根路由[默认显示]
    {
        path: "/",
        redirect: "free"
    }]
}, { path: "/about", component: About }, { path: "/about/:id", component: {
        template: "#aboutCon"
    } }];
//创建router实例
var router = new VueRouter({
    routes: routers
});
//创建和挂载根实例
var app = new Vue({
    router: router
}).$mount('#app');

//# sourceMappingURL=001-compiled.js.map