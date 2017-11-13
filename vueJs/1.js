/**
 * Created by lea on 2017/11/10.
 */
const vm = new Vue({
    el:"#content",
    data:{
        title:"模板语法",
        clothes:"../imgs/cloth.png",
        disable:true,
        hide:false,
        show:true,
        sex:"0",
        baidu:"www.baidu.com",
        userName:"春天",
        age:22
    },
    methods:{
        toggleSex:function(){
            "use strict";
            this.sex = !this.sex;
        }
    },
    computed:{
        //使用处：有一个性能开销比较大的的计算属性 依赖于某个值时，
        //不同的是计算属性是基于它们的依赖进行缓存的
        //只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数【与函数的区别】
        // 计算属性的 getter
        reverseName(){
            "use strict";
            return this.userName.split('').reverse().join('');
        },
        now: function () {//将不断更新【因为 Date.now()不是响应式依赖】
            return Date.now()
        },
        //侦听属性
        info: function () {
            return this.userName + ' ' + this.age
        }
    }
});
console.log(vm.title); //print:  "模板语法"
console.log(vm.$data);
console.log(vm.$el);
let isTrue = vm.$el == document.querySelector("#content");
console.log(isTrue); //print:  true
