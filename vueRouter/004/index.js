/**
 * Created by SZ on 2018/5/8.
 */
// 1. 定义（路由）组件。【import】
const Main = {
    template:`<div>
    <button @click="goBack">返回</button>
    <h2>首页{{this.$route.params.id}}</h2>
    <p>{{msg}}</p>
    <p>this.$route.params:【得到路由的参数】{{params}}</p>
    </div>`,
    data(){
        return {
            msg:"我生于长空，长于烈日，翱翔于风，从未远去"
        }
    },
    computed: {
        params () {
            // 我们很快就会看到 `params` 是什么
            return this.$route.params
        }
    },
    methods: {
        goBack () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        }
    }
};

// 2. 定义路由
const routes = [
    // 动态路径参数 以冒号开头
    {path:"/main",component:{
        template:"<p>首页,this.$route.params:{{params}}【结果无参】</p>",
        computed: {
            params () {
                // 我们很快就会看到 `params` 是什么
                return this.$route.params
            }
        }
    }},
    {path:"/main/:id",component:Main}//【/main/foo 和 /main/bar 都将映射到相同的路由。】
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
const app = new Vue({
    router:router//缩写router
}).$mount('#app');



