"use strict";

var _Home = require("Home");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//������������ԭ����
// 2. ����·��
// ÿ��·��Ӧ��ӳ��һ��������
// ����"component" ������ͨ�� Vue.extend() ������������������
// ���ߣ�ֻ��һ���������ö��󡾷�ʽһ����
// ��������������Ƕ��·�ɡ�
//��ʽ��
var MainExtend = Vue.extend(_Home2.default);
//const routes = [
//    {path:"/main",component:Home}//��ʽһ
//    //{path:"/main",component:MainExtend}//��ʽ��
//];

// 3. ���� router ʵ����Ȼ���� `routes` ����
// �㻹���Դ��������ò���, ��������ô�����Űɡ�
/**
 * Created by SZ on 2018/5/8.
 */
// 1. ���壨·�ɣ�������
// ���Դ������ļ� import ����
var router = new VueRouter({
    routes: [{ path: "/main", component: _Home2.default //��ʽһ
        //{path:"/main",component:MainExtend}//��ʽ��
    }]
    // ����д���൱�� routes: routes
});

// 4. �����͹��ظ�ʵ����
// �ǵ�Ҫͨ�� router ���ò���ע��·�ɣ�
// �Ӷ�������Ӧ�ö���·�ɹ���
var app = new Vue({
    router: router //��дrouter
}).$mount('#app');

//# sourceMappingURL=003-compiled.js.map