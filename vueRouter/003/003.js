/**
 * Created by SZ on 2018/5/8.
 */
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
import Home from "Home";//报错【不清楚原因】
// 2. 定义路由
// 每个路由应该映射一个组件。
// 其中"component" 可以是通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象【方式一】。
// 我们晚点再讨论嵌套路由。
//方式二
const MainExtend = Vue.extend(Home);
//const routes = [
//    {path:"/main",component:Home}//方式一
//    //{path:"/main",component:MainExtend}//方式二
//];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes:[
        {path:"/main",component:Home}//方式一
        //{path:"/main",component:MainExtend}//方式二
    ]
    // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router:router//缩写router
}).$mount('#app');