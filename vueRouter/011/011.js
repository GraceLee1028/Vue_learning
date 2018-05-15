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
    mode:"history",//使用 URL 的 hash 来模拟一个完整的 URL；【需要后台配置支持】
    routes:[
        {
            path: '/user/:id',
            components: { default: User, sidebar: Sidebar },
            props: { default: true, sidebar: false }
        }
    ]
});
const vm = new Vue({
    router:router
}).$mount("#demo");
