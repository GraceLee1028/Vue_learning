/**
 * Created by SZ on 2018/5/8.
 */
// 1. 定义（路由）组件。【import】
const Main = {
    template:`<div>
    <h3 @click="goBack">back</h3>
    <a href="javascript:void(0);" @click="goLea" >去lea</a>
    <a href="javascript:void(0);" @click="goAnna" >去anna</a>
    <a href="javascript:void(0);" @click="goAnnaNow" >去anna的现在</a>
    <h2>用户：{{id}}</h2>
    <p>{{msg}}</p>
    <router-view></router-view>
    </div>`,
    data(){
        return {
            msg:"我生于长空，长于烈日，翱翔于风，从未远去"
        }
    },
    computed: {
        id(){
            // 我们很快就会看到 `params` 是什么
            return this.$route.params.id
        }
    },
    methods: {
        goBack () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        },
        goLea(){
            router.push('lea');//lea和anna的切换
        },
        goAnna(){
            router.push('anna');//字符串的方式
            router.push({ path: 'anna' });//对象的方式
        },
        goAnnaNow(){
            router.push({
                path: 'anna',
                query: { plan: 'now' }//参数【可以通过this.$router.query获取到】
            });
        }
    }
};

// 2. 定义路由
const routes = [
    // 动态路径参数 以冒号开头
    {path:"/main",component:{
        template:"<p>管理员，this.$route.params:{{params}}【结果无参】</p>",
        computed: {
            params () {
                // 我们很快就会看到 `params` 是什么
                return this.$route.params
            }
        }
    }},
    {
        path:"/main/:id",
        component:Main,
        children:[
            {
                path:"",
                component:{
                    template:"<p>Forget Anything!Include you!</p>"
                }
            },
            {
                // 当 /main/:id/now 匹配成功，
                // 这里的组件会被渲染在 Main 的 <router-view> 中
                path: 'now',
                component: {
                    template:"<div>珍惜现在</div>"
                }
            },
            {
                // 当 /main/:id/now 匹配成功，
                // 这里的组件会被渲染在 Main 的 <router-view> 中
                path: 'past',
                component: {
                    template:"<div>就让往事随风，往事如风</div>"
                }
            }

        ]
    }//【/main/foo 和 /main/bar 都将映射到相同的路由。】
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
const app = new Vue({
    router:router//缩写router
}).$mount('#app');




