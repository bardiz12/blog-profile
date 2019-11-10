<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs8 sm8 md9 justify-center>
        <div class="profile">
          <g-image src="@/assets/profile2.jpg" alt="Photo" class="profile-img"></g-image>
          <h1 class="font-weight-thin">Bardiz</h1>
          <template v-if="showdesc">
            <div class="mt-3"></div>
            <p>
              <strong>Hello</strong>, I am Moch <u style="font-weight:400">Bard</u>izba Zuhallalwansyach. a Freelance
              <strong>Web Developer</strong> from Indonesia. Most of the projects i build are using Laravel for the backend and Vue or Jquery for the Frontend. I also a Student of Semarang State University.
            </p>
            <div class="mt-10"></div>
          </template>

          <template v-if="socmed">
            <div class="socmed-links mb-3">
              <a href="https://github.com/bardiz12" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://instagram.com/bardiz12" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://instagram.com/bardiz12" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/bardiz12" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </template>
          
          <v-btn :x-large="large" outlined>Hire me!</v-btn>
          <!--<hr>-->
          <template v-if="linkbawah">
            <div class="mt-10"></div>
            <div class="links">
                <g-link class="link-second" to="/">Home</g-link>
                <g-link class="link-second" to="/blog">Blog</g-link>
                <g-link class="link-second" to="/projects">Projects</g-link>
                <g-link class="link-second" to="/about#about">About</g-link>
            </div>
          </template>
          <div class="mt-2">
            <div id="tooglerTheme" @click="goDark()">
              <template v-if="this.$vuetify.theme.dark">
                <v-icon>wb_sunny</v-icon>Light Mode
              </template>
              <template v-else>
                <v-icon>nights_stay</v-icon>Dark Mode
              </template>
            </div>
          </div>
        </div>
        <slot></slot>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    goDark() {
      this.isDarkEnabled = ! this.isDarkEnabled;
      this.$vuetify.theme.dark = this.isDarkEnabled;
    }
  },
  mounted(){
    //console.log(this.$isDarkEnabled);
  },
  props: ["linkbawah", "socmed", "showdesc","large"]
};
</script>

<style lang="scss">

</style>