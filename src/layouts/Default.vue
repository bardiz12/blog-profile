<template>
  <!--<header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/baru/">About</g-link>
      </nav>
      
  </header>-->
  <v-app class="pa-0 my-app">
    <slot />
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  methods: {},
  mounted() {
    //this.$vuetify.theme.dark = this.isDarkEnabled;
    //this.$vuetify.theme.dark = false;
  }
};
</script>

<style lang="scss">
@import "../styles/variables";
.my-app {
  transition: $trans-25;
}
/*body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}*/
</style>
