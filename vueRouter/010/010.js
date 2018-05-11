/**
 * Created by SZ on 2018/5/11.
 */
const User = {
    props:["id"],
    template:'<transition name="slide"><h1>user {{id}}</h1></transition>'
};
const Sidebar = {
    template:'<aside>世上最酷的人。</aside>'
};
const router = new VueRouter({
    routes:[
        //{
        //    path:'/user/:id',
        //    component:User,
        //    props:true  //如果 props 被设置为 true，route.params 将会被设置为组件属性。
        //}
        //,
        {
            path: '/user/:id',
            components: { default: User, sidebar: Sidebar },
            props: { default: true, sidebar: false }
        }
    ]
});
const vm = new Vue({
    mode: 'history',//默认为hash模式【当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！】
    //后台配置支持【单页客户端应用】
    // 【在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。】
    router:router
}).$mount("#demo");
