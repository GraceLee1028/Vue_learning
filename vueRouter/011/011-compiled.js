'use strict';

/**
 * Created by SZ on 2018/5/11.
 */
var User = {
    props: ["id"],
    template: '<transition name="slide"><h1>user {{id}}</h1></transition>'
};
var Sidebar = {
    template: '<aside>世上最酷的人。</aside>'
};
var router = new VueRouter({
    mode: "history", //使用 URL 的 hash 来模拟一个完整的 URL；【需要后台配置支持】
    routes: [{
        path: '/user/:id',
        components: { default: User, sidebar: Sidebar },
        props: { default: true, sidebar: false }
    }]
});
var vm = new Vue({
    router: router
}).$mount("#demo");

//# sourceMappingURL=011-compiled.js.map