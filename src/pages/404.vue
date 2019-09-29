<template>
  <Layout>
    <v-container fill-height style="height: calc(100vh - 58px);">
      <v-layout align-center>
        <v-flex text-center>
          <h1 class="display-2 primary--text">Whoops, 404</h1>
          <p>The page you were looking for does not exist</p>
          <v-btn
            to="/"
            outlined
            color="primary"
          >Get me out of here!</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </Layout>
</template>

<script>
import Profile from "../components/Profile";
export default {
  metaInfo: {
    title: "Page Not Found"
  },
  components: {
    Profile
  }
};
</script>

<style>
</style>
