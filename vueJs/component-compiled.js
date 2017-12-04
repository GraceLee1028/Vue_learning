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
Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function data() {
        return {
            counter: 0
        };
    },
    methods: {
        incrementCounter: function incrementCounter() {
            this.counter += 1;
            this.$emit('increment'); //子组件的点击事件触发父组件的事件
        }
    }
});
Vue.component('example', {
    props: {
        // 基础类型检测 (`null` 指允许任何类型)
        propA: Number,
        // 可能是多种类型
        propB: [String, Number],
        // 必传且是字符串
        propC: {
            type: String,
            required: true
        },
        // 数值且有默认值
        propD: {
            type: Number,
            default: 100
        },
        // 数组/对象的默认值应当由一个工厂函数返回
        propE: {
            type: Object,
            default: function _default() {
                return { message: 'hello' };
            }
        },
        // 自定义验证函数
        propF: {
            validator: function validator(value) {
                return value > 10;
            }
        }
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
        },
        total: 0
    },
    methods: {
        incrementTotal: function incrementTotal() {
            //父组件事件
            this.total += 1;
        }
    },
    components: { //局部组件
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
        },
        "text-tip": { //属性合并
            props: ["txt"],
            template: '<span class="gray" style="color:#333;">{{txt}}</span>'
        }
    }
});

//# sourceMappingURL=component-compiled.js.map