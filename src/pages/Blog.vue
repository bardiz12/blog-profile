<template>
  <MainApp>
    <div class="blog">
      <p v-for="post in $page.posts.edges" v-bind:key="post.slug">
        <PostCard :post="post" />
      </p>
      <Pager class="navigation-page" :info="$page.posts.pageInfo" />
    </div>
  </MainApp>
</template>

<style lang="scss">
</style>
<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 5, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
      isFirst
      isLast
    }
    edges {
      node {
        title
        excerpt
        path
        author
        date(format: "D MMMM YYYY")
        tags{
            id
            path
        }
      }
    }
  }
  }
</page-query>
<script>
import MainApp from "@/components/MainApp";
import { Pager } from "gridsome";
import PostCard from "@/components/PostCard";
export default {
  metaInfo: {
    title: "Blog"
  },
  components: {
    PostCard,
    Pager,
    MainApp
  }
};
</script>