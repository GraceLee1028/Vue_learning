/**
 * Created by SZ on 2018/4/8.
 */
let vm = new Vue({
    el:"#cartBox",
    data:{
        shopData:[],
        itemNum:1,
        isCheckAll:true
    },
    mounted(){//组件加载完毕【数据请求，业务处理】
        console.log("test");
        this.getShopData();
    },
    methods:{
        getShopData(){
            this.$http.get('json/data.json').then(response => {
                // get body data
                this.shopData = response.body["sections"];
                console.log(this.shopData);
            }, response => {
                // error callback
                console.error(response);
            });
        },
        numDeal(shop,type){
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
        deleteItem(){

        },
        checkAll(checkVal){
            //全选取反
            this.isCheckAll = !checkVal;
            //所有商品处理
            this.shopData.map((item)=>{
                if(typeof item.isChecked == "undifined"){
                    this.$set(item,"isChecked",!checkVal);//给对象动态新增属性
                }else{
                    item.isChecked = !checkVal;//给对象动态添加属性
                }
            });
        },
        getAllMoney:function(){
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
        allMoney:function(){

        }
    },
    filters:{//过滤器
        money(value,...args){
            return "￥"+parseFloat(value).toFixed(2);
        }
    }
});
