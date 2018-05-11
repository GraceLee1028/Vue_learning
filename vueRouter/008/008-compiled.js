'use strict';

/**
 * Created by SZ on 2018/5/8.
 */
// 1. 定义（路由）组件。【import】
var Main = {
    template: '<div>\n    <h3 @click="goBack">back</h3>\n    <a href="javascript:void(0);" @click="goLea" >\u53BBlea</a>\n    <h2>\u7528\u6237\uFF1A{{id}}</h2>\n    <p>{{msg}}</p>\n    <router-view></router-view>\n    <router-view name="helper"></router-view>\n    </div>',
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
    }
}, {
    path: "/main/:id",
    name: "user", //给当前路由重命名
    component: Main,
    children: [{
        path: "/past",
        name: "past",
        component: {
            template: '<p style="color:red;">\u672A\u6765\u5462\uFF0C\u8D54\u7F6A\u3002</p>'
        }
    }, {
        path: "/now",
        name: "now",
        component: {
            template: '<p style="color:red;">\u8FC7\u53BB\u5440\uFF0C\u72AF\u7F6A\u3002</p>'
        }
    }, {
        path: "",
        components: {
            default: {
                template: '<p>\u672A\u77E5\u6D88\u606F</p>'
            },
            helper: {
                template: '<div><p style="color:red;">\u5E2E\u52A9\u4FE1\u606F</p><router-link :to="{ name: \'now\'}">\u53BBlea\u7684\u73B0\u5728</router-link><router-link :to="{ name: \'past\'}">\u53BBlea\u7684\u8FC7\u53BB</router-link></div>'
            }
        }
    }] //【/main/foo 和 /main/bar 都将映射到相同的路由。】
}];

// 3. 创建 router 实例，然后传 `routes` 配置
var router = new VueRouter({
    routes: routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
var app = new Vue({
    router: router //缩写router
}).$mount('#app');

//# sourceMappingURL=008-compiled.js.map