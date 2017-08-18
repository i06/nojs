<template>
    <i-article>
        <article>
            <h1>No JS</h1>
            <Anchor title="为什么 No" h2></Anchor>
            <p>JS 有许许多多的坑，比如 回调噩梦</p>
            <i-code lang="html" bg>{{ code.install.cdn }}</i-code>
            <Anchor title="怎么办" h3></Anchor>
            <p>相应的解决办法有<a href="http://output.jsbin.com/libihed" target="_blank">在线预览</a>。</p>
            <i-code lang="auto" bg>{{ code.install.demo }}</i-code>
            <Anchor title="NPM 安装" h2></Anchor>
            <p>如今的 JS 社区活跃，没有理由再不用 JS 了</p>
            <i-code lang="auto" bg>{{ code.install.install }}</i-code>
            <p>能用 JS 写的，都将用 JS 写，也可能是 TypeScript</p>
        </article>
    </i-article>
</template>
<script>
    import iArticle from '../../components/article.vue';
    import iCode from 'iCode';
    import Code from '../../code/guide';
    import Anchor from '../../components/anchor.vue';

    export default {
        components: {
            iArticle,
            iCode,
            Anchor
        },
        data () {
            return {
                code: Code
            }
        },
        methods: {

        }
    }
</script>