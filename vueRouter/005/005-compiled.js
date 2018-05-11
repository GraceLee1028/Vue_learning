"use strict";

/**
 * Created by SZ on 2018/5/8.
 */
// 1. ���壨·�ɣ���������import��
var Main = {
    template: "<div>\n    <h3 @click=\"goBack\">back</h3>\n    <h2>\uFFFD\xFB\uFFFD\uFFFD\uFFFD{{id}}</h2>\n    <p>{{msg}}</p>\n    <router-view>\u0377\uFFFD\uFFFD</router-view>\n    </div>",
    data: function data() {
        return {
            msg: "�����ڳ��գ��������գ������ڷ磬��δԶȥ"
        };
    },

    computed: {
        id: function id() {
            // ���Ǻܿ��ͻῴ�� `params` ��ʲô
            return this.$route.params.id;
        }
    },
    methods: {
        goBack: function goBack() {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
        }
    }
};

// 2. ����·��
var routes = [
// ��̬·������ ��ð�ſ�ͷ
{ path: "/main", component: {
        template: "<p>����Ա��this.$route.params:{{params}}�������޲Ρ�</p>",
        computed: {
            params: function params() {
                // ���Ǻܿ��ͻῴ�� `params` ��ʲô
                return this.$route.params;
            }
        }
    } }, {
    path: "/main/:id",
    component: Main,
    children: [{
        path: "",
        component: {
            template: "<p>Forget Anything!Include you!</p>"
        }
    }, {
        // �� /main/:id/now ƥ���ɹ���
        // �����������ᱻ��Ⱦ�� Main �� <router-view> ��
        path: 'now',
        component: {
            template: "<div>��ϧ����</div>"
        }
    }, {
        // �� /main/:id/now ƥ���ɹ���
        // �����������ᱻ��Ⱦ�� Main �� <router-view> ��
        path: 'past',
        component: {
            template: "<div>�����������磬��������</div>"
        }
    }] //��/main/foo �� /main/bar ����ӳ�䵽��ͬ��·�ɡ���
}];

// 3. ���� router ʵ����Ȼ���� `routes` ����
var router = new VueRouter({
    routes: routes // ����д���൱�� routes: routes
});

// 4. �����͹��ظ�ʵ����
var app = new Vue({
    router: router //��дrouter
}).$mount('#app');

//# sourceMappingURL=005-compiled.js.map