/**
 * Created by SZ on 2018/5/8.
 */
// 1. ���壨·�ɣ������
// ���Դ������ļ� import ����
import Home from "Home";//���������ԭ��
// 2. ����·��
// ÿ��·��Ӧ��ӳ��һ�������
// ����"component" ������ͨ�� Vue.extend() �����������������
// ���ߣ�ֻ��һ��������ö��󡾷�ʽһ����
// �������������Ƕ��·�ɡ�
//��ʽ��
const MainExtend = Vue.extend(Home);
//const routes = [
//    {path:"/main",component:Home}//��ʽһ
//    //{path:"/main",component:MainExtend}//��ʽ��
//];

// 3. ���� router ʵ����Ȼ�� `routes` ����
// �㻹���Դ�������ò���, ��������ô���Űɡ�
const router = new VueRouter({
    routes:[
        {path:"/main",component:Home}//��ʽһ
        //{path:"/main",component:MainExtend}//��ʽ��
    ]
    // ����д���൱�� routes: routes
});

// 4. �����͹��ظ�ʵ����
// �ǵ�Ҫͨ�� router ���ò���ע��·�ɣ�
// �Ӷ�������Ӧ�ö���·�ɹ���
const app = new Vue({
    router:router//��дrouter
}).$mount('#app');