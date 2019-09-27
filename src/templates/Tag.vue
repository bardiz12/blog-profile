
<template>
  <MainApp>
    <div class="blog">
      <center>
        Every Post under :
        <strong>#{{$route.params.slug}}</strong>
      </center>
      <div class="mt-2"></div>
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
query Posts ($id: String,$page: Int) {
  posts: allPost (perPage: 5, page: $page,filter: {tags: {contains: [$id]}}) @paginate {
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
        path
        date (format: "D. MMMM YYYY")
        excerpt
        tags {
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
  components: {
    PostCard,
    Pager,
    MainApp
  }
};
</script>