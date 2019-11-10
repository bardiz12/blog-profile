<template>
  <div class="blog-post">
    <h3 class="post-title">
      <g-link :to="post.node.path">{{ post.node.title }}</g-link>
    </h3>

    <p class="post-summary mt-2" style="text-align:justify" v-html="post.node.excerpt"></p>
    <ul class="post-meta mt-n2">
      <li>
        <v-icon size="15">calendar_today</v-icon>
        {{post.node.date}}
      </li>
      <li>
        <v-icon size="15">person</v-icon>Bardizba Z
      </li>
      <li>
        <v-icon size="15">folder</v-icon>
        <div class="tags">
          <span v-for="(tag,index) in post.node.tags" v-bind:key="tag.id">
            <g-link :to="tag.path">{{tag.id}}</g-link>
            <span v-if="index != post.node.tags.length - 1">, </span>
          </span>
        </div>
      </li>
    </ul>
    <div class="mt-5"></div>
    <hr />
  </div>
</template>

<style lang="scss">

</style>

<script>
export default {
  props: ["post"]
};
</script>