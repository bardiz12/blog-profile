<template>
  <Layout>
    <Profile class="animated bounceIn" :linkbawah="true" :showdesc="true"/>
  </Layout>
</template>

<script>
import Profile from "../components/Profile";
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    Profile
  }
};
</script>

<style>
</style>
