
<template>
  <Layout>
    <h1 v-if="$page.post">{{ $page.post.title }}</h1>
    <div v-if="$page.post" class="h4 pb-3">
      Written by:
      <g-link to="/about">{{ $page.post.author }}</g-link>
      - {{ $page.post.date }}
    </div>
    <div v-if="$page.post" v-html="$page.post.content"></div>
  </Layout>
</template>

<page-query>
query  Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    author
    date (format: "D. MMMM YYYY")
    description
    tags{
        title
    }
  }
}
</page-query>

<script>
export default {};
</script>

<style scoped></style>