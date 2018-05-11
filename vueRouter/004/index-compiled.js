"use strict";

/**
 * Created by SZ on 2018/5/8.
 */
// 1. 定义（路由）组件。【import】
var Main = {
    template: "<div>\n    <button @click=\"goBack\">\u8FD4\u56DE</button>\n    <h2>\u9996\u9875{{this.$route.params.id}}</h2>\n    <p>{{msg}}</p>\n    <p>this.$route.params:\u3010\u5F97\u5230\u8DEF\u7531\u7684\u53C2\u6570\u3011{{params}}</p>\n    </div>",
    data: function data() {
        return {
            msg: "我生于长空，长于烈日，翱翔于风，从未远去"
        };
    },

    computed: {
        params: function params() {
            // 我们很快就会看到 `params` 是什么
            return this.$route.params;
        }
    },
    methods: {
        goBack: function goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    }
};

// 2. 定义路由
var routes = [
// 动态路径参数 以冒号开头
{ path: "/main", component: {
        template: "<p>首页,this.$route.params:{{params}}【结果无参】</p>",
        computed: {
            params: function params() {
                // 我们很快就会看到 `params` 是什么
                return this.$route.params;
            }
        }
    } }, { path: "/main/:id", component: Main //【/main/foo 和 /main/bar 都将映射到相同的路由。】
}];

// 3. 创建 router 实例，然后传 `routes` 配置
var router = new VueRouter({
    routes: routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
var app = new Vue({
    router: router //缩写router
}).$mount('#app');

//# sourceMappingURL=index-compiled.js.map