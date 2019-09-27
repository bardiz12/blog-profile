<template>
  <Layout>
    <v-container fluid class="pa-0">
      <!--<v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent width="40%">
          <v-list-item>

            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
            

            <v-list-item-title>John Leider</v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
              <v-icon>arrow_back_ios</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>
          <v-list>
              <Profile />
          </v-list>

          <v-list dense>
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
      </v-navigation-drawer>-->
      <div class="main-app">
        <div class="kiri">
          <Profile />
        </div>
        <div class="kanan">
          <Menuatas />
          <div class="content">
            <div class="blog animated fadeInUp">
              <h1 v-if="$page.post">{{ $page.post.title }}</h1>
              <div v-if="$page.post" class="h4 pb-3">
                Written by:
                <g-link to="/about">{{ $page.post.author }}</g-link>
                - {{ $page.post.date }}
              </div>
              <div v-if="$page.post" v-html="$page.post.content"></div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </Layout>
</template>

<style lang="scss">
</style>
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
import Profile from "@/components/Profile";
import Menuatas from "@/components/Menuatas";
import { Pager } from "gridsome";
import PostCard from "@/components/PostCard";
export default {
    name:"BlogPostV",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ],
      mini: false
    };
  },
  components: {
    Profile,
    PostCard,
    Pager,
    Menuatas
  }
};
</script>