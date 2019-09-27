<template>
  <Layout>
    <Profile large class="animated bounceIn" :linkbawah="true" :showdesc="true"/>
  </Layout>
</template>

<script>
import Profile from "../components/Profile";
export default {
  metaInfo: {
    title: "Portfolio"
  },
  components: {
    Profile
  }
};
</script>

<style>
</style>
