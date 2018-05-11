/**
 * Created by SZ on 2018/5/8.
 */
// 1. ���壨·�ɣ��������import��
const Main = {
    template:`<div>
    <h3 @click="goBack">back</h3>
    <a href="javascript:void(0);" @click="goLea" >ȥlea</a>
    <a href="javascript:void(0);" @click="goAnna" >ȥanna</a>
    <a href="javascript:void(0);" @click="goAnnaNow" >ȥanna������</a>
    <h2>�û���{{id}}</h2>
    <p>{{msg}}</p>
    <router-view></router-view>
    </div>`,
    data(){
        return {
            msg:"�����ڳ��գ��������գ������ڷ磬��δԶȥ"
        }
    },
    computed: {
        id(){
            // ���Ǻܿ�ͻῴ�� `params` ��ʲô
            return this.$route.params.id
        }
    },
    methods: {
        goBack () {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push('/')
        },
        goLea(){
            router.push('lea');//lea��anna���л�
        },
        goAnna(){
            router.push('anna');//�ַ����ķ�ʽ
            router.push({ path: 'anna' });//����ķ�ʽ
        },
        goAnnaNow(){
            router.push({
                path: 'anna',
                query: { plan: 'now' }//����������ͨ��this.$router.query��ȡ����
            });
        }
    }
};

// 2. ����·��
const routes = [
    // ��̬·������ ��ð�ſ�ͷ
    {path:"/main",component:{
        template:"<p>����Ա��this.$route.params:{{params}}������޲Ρ�</p>",
        computed: {
            params () {
                // ���Ǻܿ�ͻῴ�� `params` ��ʲô
                return this.$route.params
            }
        }
    }},
    {
        path:"/main/:id",
        component:Main,
        children:[
            {
                path:"",
                component:{
                    template:"<p>Forget Anything!Include you!</p>"
                }
            },
            {
                // �� /main/:id/now ƥ��ɹ���
                // ���������ᱻ��Ⱦ�� Main �� <router-view> ��
                path: 'now',
                component: {
                    template:"<div>��ϧ����</div>"
                }
            },
            {
                // �� /main/:id/now ƥ��ɹ���
                // ���������ᱻ��Ⱦ�� Main �� <router-view> ��
                path: 'past',
                component: {
                    template:"<div>����������磬�������</div>"
                }
            }

        ]
    }//��/main/foo �� /main/bar ����ӳ�䵽��ͬ��·�ɡ���
];

// 3. ���� router ʵ����Ȼ�� `routes` ����
const router = new VueRouter({
    routes // ����д���൱�� routes: routes
});

// 4. �����͹��ظ�ʵ����
const app = new Vue({
    router:router//��дrouter
}).$mount('#app');




