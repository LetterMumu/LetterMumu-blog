<template>
  <Layout>
    <p style="text-align:right;cursor: pointer;">
      <a @click="$router.go(-1)">返回</a>
    </p>
    <h1 style="text-align:center">{{ $page.blog.title }}</h1>
    <p style="text-align:right">作者：{{ $page.blog.created_by.firstname }} {{ $page.blog.created_by.lastname }}</h1>
    <p style="text-align:right">写作时间：{{ $page.blog.created_at }}</h1>
    <div
      style="
        font-size: 1.1rem;
        line-height: 1.5;
        color: rgb(48, 49, 51);
        padding: 10px 0px 0px;
      "
      v-html="mdToHtml($page.blog.content)"
    ></div>
  </Layout>
</template>
<page-query>
query($id: ID!) {
  blog:strapiBlog(id: $id){
    title
    content
    created_by{
      firstname
      lastname
    }
    created_at
  }
}
</page-query>
<script>
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();
export default {
  methods: {
    mdToHtml(markdown) {
      return md.render(markdown);
    },
  },
}
</script>