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
          <div class="menu-atas standart-div">
            <ul class="links text-center">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </v-container>
  </Layout>
</template>

<style lang="scss">

</style>
<page-query>
query Posts ($page: Int) {
  posts: allPost (perPage: 2, page: $page) @paginate {
    edges {
      node {
        title
        content
        path
        author
        date
        tags{
            title
        }
      }
    }
  }
}
</page-query>
<script>
import Profile from "@/components/Profile";
import PostCard from "@/components/PostCard";
export default {
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
    PostCard
  }
};
</script>