'use strict';

/**
 * Created by SZ on 2018/5/8.
 */
// 1. 定义（路由）组件。【import】
var Main = {
    template: '<div>\n    <h3 @click="goBack">back</h3>\n    <a href="javascript:void(0);" @click="goLea" >\u53BBlea</a>\n    <h2>\u7528\u6237\uFF1A{{id}}</h2>\n    <p>{{msg}}</p>\n    </div>',
    data: function data() {
        return {
            msg: "我生于长空，长于烈日，翱翔于风，从未远去"
        };
    },

    computed: {
        id: function id() {
            // 我们很快就会看到 `params` 是什么
            return this.$route.params.id;
        }
    },
    methods: {
        goBack: function goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        },
        goLea: function goLea() {
            router.push({ name: 'user', params: { id: "lea" } }); //通过重命名的路由，跳转
        }
    }
};

// 2. 定义路由
var routes = [
// 动态路径参数 以冒号开头
{
    path: "/main",
    component: {
        template: "<p>管理员，this.$route.params:{{params}}【结果无参】</p>",
        computed: {
            params: function params() {
                // 我们很快就会看到 `params` 是什么
                return this.$route.params;
            }
        }
    } }, {
    path: "/main/:id",
    name: "user", //给当前路由重命名
    component: Main //【/main/foo 和 /main/bar 都将映射到相同的路由。】
}];

// 3. 创建 router 实例，然后传 `routes` 配置
var router = new VueRouter({
    routes: routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
var app = new Vue({
    router: router //缩写router
}).$mount('#app');

//# sourceMappingURL=007-compiled.js.map