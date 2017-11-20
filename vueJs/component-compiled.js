'use strict';

/**
 * Created by lea on 2017/11/15.
 */
//全局注册
// 注册【注意确保在初始化根实例之前注册组件】
Vue.component('my-global', {
    template: '<div>!{{msg}}</div>',
    data: function data() {
        //data 必须是函数
        return { msg: "A global component" };
    }
});
var child = {
    template: '<div>A local component!</div>'
};
var vm = new Vue({
    el: "#component",
    data: {
        title: "组件详解",
        pwd: "",
        userInfo: {
            name: 'lea',
            pwd: '123'
        }
    },
    components: {
        "my-local": child,
        "child-title": {
            props: ["title"],
            template: '<h5>{{title}}</h5>'
        },
        "child-value": {
            props: ["dataValue"],
            template: '<strong>{{dataValue}}</strong>'
        },
        "password": {
            props: ["pwd"],
            template: '<strong>{{pwd}}</strong>'
        },
        "info": {
            props: ["name", "pwd"],
            template: '<strong>姓名：{{name}}<br>密码：{{pwd}}</strong>'
        }
    }
});

//# sourceMappingURL=component-compiled.js.map