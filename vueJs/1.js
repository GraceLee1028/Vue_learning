/**
 * Created by lea on 2017/11/10.
 */
const vm = new Vue({
    el:"#content",
    data:{
        content:"vue基本用法",
        htmlBold:"<b>小心点，明天</b>",
        title:"模板语法",
        clothes:"../imgs/cloth.png",
        disable:true,
        hide:false,
        show:true,
        sex:"0",
        baidu:"www.baidu.com",
        userName:"春天",
        age:22,
        isActive:"disabled",
        rotation:{
            transform:'rotate(360deg)'
        },
        red:{
            color:'red'
        },
        ok:true,
        fav:1,
        favorite:["看书","游泳","打球","登山","徒步"],
        infoName:["索引","编号","用户名","性别","年龄","老家"],
        infoObj:[
            {id:"10002",name:"June",age:25,sex:1,add:"四川"},
            {id:"10001",name:"lea",age:23,sex:0,add:"湖北"},
            {id:"10003",name:"Anna",age:26,sex:1,add:"上海"},
            {id:"10004",name:"John",age:22,sex:0,add:"重庆"},
            {id:"10005",name:"Joe",age:21,sex:1,add:"北京"},
            {id:"10006",name:"Jane",age:23,sex:1,add:"武汉"}
        ],
        colorArr:["红","绿","蓝","黄"],
        comObj: {
            "name":"智能商务有限公司",
            "address":"深大",
            "tel":"400-1345236"
        },
        grade:[88,77,68,86,92,75]
    },
    methods:{
        toggleSex:function(){
            "use strict";
            this.sex = !this.sex;
        },
        toggleResult: function(){
            "use strict";
            console.log('click');
            this.ok = !this.ok;
        },
        showMan:function(){
            "use strict";
            var sex = 1;
            this.infoObj = this.infoObj.filter(item=>{
                return item.sex == sex; //1：男
            });
        },
        even(){//es6的写法
            "use strict";
            return this.grade.filter(num=>{
                return num%2 == 0;
            });
        },
        hello(msg,event){
            "use strict";
            alert(`hello ${msg}`);
            alert(event.target.tagName);
            event.target.innerHTML = "单击了";
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
        },
        infoObjMan:function(){
            "use strict";
            return this.infoObj.filter(item=>{
                return item.sex == 1; //1：男
            });
        }
    }
});
console.log(vm.title); //print:  "模板语法"
console.log(vm.$data);
console.log(vm.$el);
let isTrue = vm.$el == document.querySelector("#content");
console.log(isTrue); //print:  true
//组件
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
});