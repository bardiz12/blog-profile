<template>
  <Layout>
    <Profile large class="animated bounceIn" :socmed="true" :linkbawah="true" :showdesc="true" :mini="true"/>
  </Layout>
</template>

<script>
import Profile from "../components/Profile";
export default {
  metaInfo: {
    title: "Home"
  },
  components: {
    Profile
  }
};
</script>

<style>
</style>
