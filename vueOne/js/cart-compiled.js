"use strict";

/**
 * Created by SZ on 2018/4/8.
 */
var vm = new Vue({
    el: "#cartBox",
    data: {
        shopData: [],
        itemNum: 1,
        isCheckAll: false
    },
    mounted: function mounted() {
        //组件加载完毕【数据请求，业务处理】
        this.getShopData();
    },

    methods: {
        getShopData: function getShopData() {
            var _this = this;

            //获取数据
            this.$http.get('json/data.json').then(function (response) {
                // get body data
                _this.shopData = response.body["sections"]; //这里的this指向vm
                console.log(_this.shopData);
            }, function (response) {
                // error callback
                console.error(response);
            });
        },
        numDeal: function numDeal(shop, type) {
            //加减
            if (type == "add") {
                shop.num++;
            } else if (type == "reduce") {
                if (shop.num > 1) {
                    shop.num--;
                } else {
                    shop.num = 1;
                }
            }
        },
        deleteItem: function deleteItem(shop) {
            var index = this.shopData.indexOf(shop);
            this.shopData.splice(index, 1);
        },
        checkAll: function checkAll(checkVal) {
            var _this2 = this;

            //全选
            //全选取反
            this.isCheckAll = !checkVal;
            //所有商品处理
            this.shopData.map(function (item) {
                if (typeof item.isChecked == "undefined") {
                    _this2.$set(item, "isChecked", !checkVal); //给对象动态新增属性【动态更新】
                } else {
                    item.isChecked = !checkVal; //给对象动态添加属性
                }
            });
        },
        check: function check(shop) {
            //单选
            if (typeof shop.isChecked == "undefined") {
                this.$set(shop, "isChecked", true); //给对象动态新增属性
            } else {
                shop.isChecked = !shop.isChecked;
            }
            //所有商品处理
            var isAll = true;
            this.shopData.map(function (item) {
                if (!item.isChecked) {
                    isAll = false;
                }
            });
            this.isCheckAll = isAll;
        },

        getAllMoney: function getAllMoney() {
            //总价
            var all = 0;
            this.shopData.map(function (item) {
                if (item.isChecked) {
                    all += item.num * item.price;
                }
            });
            return all;
        }
    },
    computed: {
        test: function test() {}
    },
    filters: {
        //过滤器
        money: function money(value) {
            return "￥" + parseFloat(value).toFixed(2);
        }
    }
});

//# sourceMappingURL=cart-compiled.js.map