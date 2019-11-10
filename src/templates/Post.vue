<template>
  <MainApp>
    <div class="blog animated">
      <h1 v-if="$page.post">{{ $page.post.title }}</h1>
      <div v-if="$page.post" class="h4 pb-3">
        <ul class="post-meta">
          <li>
            <v-icon size="15">calendar_today</v-icon>
            {{$page.post.date}}
          </li>
          <li>
            <v-icon size="15">person</v-icon>Bardizba Z
          </li>
          <li>
            <v-icon size="15">folder</v-icon>
            <div class="tags">
              <span v-for="(tag,index) in $page.post.tags" v-bind:key="tag.id">
                <g-link :to="tag.path">{{tag.id}}</g-link>
                <span v-if="index != $page.post.tags.length - 1">,</span>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="$page.post" v-html="$page.post.content"></div>
    </div>
    <SocialShare style="margin-top:100px" :title="$page.post.title"/>
    <vue-disqus shortname="bardizpen" :identifier="$page.post.slug" :key="$vuetify.theme.dark"></vue-disqus>
  </MainApp>
</template>

<style lang="scss">

</style>
<page-query>
query  Post ($path: String!) {
  post (path: $path) {
    title
    slug
    content
    author
    date (format: "MMM DD, YYYY")
    description
    tags{
        id
        path
    }
    
  }
}
</page-query>
<script>
/*edges (sort: [{ by: "group", order: ASC }, { by: "weight", order: ASC }]) {
      previous {
        title
      }
      next {
        title
      }
    }*/
import MainApp from "@/components/MainApp";
import { Pager } from "gridsome";
import PostCard from "@/components/PostCard";
import SocialShare from "@/components/SocialShare";
export default {
  components: {
    PostCard,
    Pager,
    MainApp,
    SocialShare
  },
  metaInfo(){
    return {
    title: this.$page.post.title,
    }
  },
  mounted(){
    console.log(this.$page.post.slug);
  }
};
</script>