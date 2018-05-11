/**
 * Created by SZ on 2018/5/8.
 */
// 1. 定义（路由）组件。【import】
const Main = {
    template:`<div>
    <h3 @click="goBack">back</h3>
    <a href="javascript:void(0);" @click="goLea" >去lea</a>
    <h2>用户：{{id}}</h2>
    <p>{{msg}}</p>
    <router-view></router-view>
    <router-view name="helper"></router-view>
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
            router.push({ name: 'user', params: { id: "lea" }});//通过重命名的路由，跳转
        }
    }
};

// 2. 定义路由
const routes = [
    // 动态路径参数 以冒号开头
    {
        path:"/main",
        component:{
            template:"<p>管理员，this.$route.params:{{params}}【结果无参】</p>",
            computed: {
                params () {
                    // 我们很快就会看到 `params` 是什么
                    return this.$route.params
                }
            }
        }
    },
    {
        path:"/main/:id",
        name:"user",//给当前路由重命名
        component:Main,
        children:[
            {
                path:"/past",
                name:"past",
                component:{
                    template:`<p style="color:red;">未来呢，赔罪。</p>`
                }
            },
            {
                path:"/now",
                name:"now",
                component:{
                    template:`<p style="color:red;">过去呀，犯罪。</p>`
                }
            },
            {
                path:"",
                components:{
                    default:{
                        template:`<p>未知消息</p>`
                    },
                    helper:{
                        template:`<div><p style="color:red;">帮助信息</p><router-link :to="{ name: 'now'}">去lea的现在</router-link><router-link :to="{ name: 'past'}">去lea的过去</router-link></div>`
                    }
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
