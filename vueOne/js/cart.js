/**
 * Created by SZ on 2018/4/8.
 */
let vm = new Vue({
    el:"#cartBox",
    data:{
        shopData:[],
        itemNum:1,
        isCheckAll:false
    },
    mounted(){//组件加载完毕【数据请求，业务处理】
        this.getShopData();
    },
    methods:{
        getShopData(){//获取数据
            this.$http.get('json/data.json').then(response => {
                // get body data
                this.shopData = response.body["sections"];//这里的this指向vm
                console.log(this.shopData);
            }, response => {
                // error callback
                console.error(response);
            });
        },
        numDeal(shop,type){//加减
            if(type=="add"){
                shop.num++;
            }else if(type=="reduce"){
                if(shop.num >1){
                    shop.num--;
                }else{
                    shop.num = 1;
                }
            }
        },
        deleteItem(shop){
            let index = this.shopData.indexOf(shop);
            this.shopData.splice(index,1);
        },
        checkAll(checkVal){//全选
            //全选取反
            this.isCheckAll = !checkVal;
            //所有商品处理
            this.shopData.map((item)=>{
                if(typeof item.isChecked == "undefined"){
                    this.$set(item,"isChecked",!checkVal);//给对象动态新增属性【动态更新】
                }else{
                    item.isChecked = !checkVal;//给对象动态添加属性
                }
            });
        },
        check(shop){//单选
            if(typeof shop.isChecked == "undefined"){
                this.$set(shop,"isChecked",true);//给对象动态新增属性
            }else{
                shop.isChecked = !shop.isChecked;
            }
            //所有商品处理
            let isAll = true;
            this.shopData.map((item)=>{
                if(!item.isChecked){
                    isAll = false;
                }
            });
            this.isCheckAll = isAll;
        },
        getAllMoney:function(){//总价
            let all= 0;
            this.shopData.map((item)=>{
                if(item.isChecked){
                    all += item.num*item.price;
                }
            });
            return all;
        }
    },
    computed:{
        test:function(){

        }
    },
    filters:{//过滤器
        money(value,...args){
            return "￥"+parseFloat(value).toFixed(2);
        }
    }
});
