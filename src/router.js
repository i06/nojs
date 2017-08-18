/**
 * Created by aresn on 16/8/22.
 */
const routers = [
    {
        path: '/',
        meta: {
            title: 'Index'
        },
        component: (resolve) => require(['./views/guide/install.vue'], resolve)
    },
    {
        path: '/docs/guide/introduce',
        meta: {
            title: 'iView介绍'
        },
        component: (resolve) => require(['./views/guide/introduce.vue'], resolve)
    },
    {
        path: '/docs/guide/introduce-en',
        meta: {
            title: 'Introduction'
        },
        component: (resolve) => require(['./views/guide/introduce-en.vue'], resolve)
    },
    {
        path: '/docs/guide/design',
        meta: {
            title: '设计原则'
        },
        component: (resolve) => require(['./views/guide/design.vue'], resolve)
    },
    {
        path: '/docs/guide/design-en',
        meta: {
            title: 'Design Principle'
        },
        component: (resolve) => require(['./views/guide/design-en.vue'], resolve)
    },
    {
        path: '/docs/guide/layout',
        meta: {
            title: '布局'
        },
        component: (resolve) => require(['./views/guide/layout.vue'], resolve)
    },
    {
        path: '/docs/guide/layout-en',
        meta: {
            title: 'Layout'
        },
        component: (resolve) => require(['./views/guide/layout-en.vue'], resolve)
    },
    {
        path: '/docs/guide/standard',
        meta: {
            title: '参与贡献'
        },
        component: (resolve) => require(['./views/guide/standard.vue'], resolve)
    },
    {
        path: '/docs/guide/standard-en',
        meta: {
            title: 'Contributing Guide'
        },
        component: (resolve) => require(['./views/guide/standard-en.vue'], resolve)
    }
];

export default routers;
