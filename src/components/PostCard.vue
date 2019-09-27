<template>
  <div class="blog-post">
    <h1 class="post-title">
      <g-link :to="post.node.path">{{ post.node.title }}</g-link>
    </h1>

    <p class="post-summary" v-html="post.node.excerpt"></p>
    <ul class="post-meta mt-n2">
      <li>
        <v-icon size="15">calendar_today</v-icon>
        {{post.node.date}}
      </li>
      <li>
        <v-icon size="15">person</v-icon>Bardizba Z
      </li>
      <li>
        <v-icon size="15">folder</v-icon>Tag1,tag2
      </li>
    </ul>
    <div class="mt-5"></div>
    <hr />
  </div>
</template>

<style lang="scss">
.blog-post {
  & hr {
    color: #ddd;
    background-color: #ddd;
    border: none;
    height: 1px;
  }
  & h1.post-title {
    & a {
      color: black;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  & ul.post-meta {
    list-style: none;
    padding: 0;
    font-size: 10pt;
    color: rgb(143, 143, 143);
    & li {
      padding-right: 15px;
      display: inline-block;
    }
  }
}

.theme--dark {
  .blog-post h1.post-title a {
    color: #fff !important;
  }
  .blog-post ul.post-meta {
    color: rgb(221, 221, 221) !important;
  }
  .blog-post hr {
      color: rgb(122, 122, 122) !important;
    background-color: rgb(95, 95, 95) !important;
  }
}
</style>

<script>
export default {
  props: ["post"]
};
</script>