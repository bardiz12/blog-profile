<template>
  <v-container fluid fill-height class="profile-container">
    <v-layout :align-center="!mini ? $store.state.isSidebarShowed : true" justify-center>
      <v-flex xs8 sm8 md9 justify-center>
        <div class="profile">
          <g-image src="@/assets/profile2.jpg" alt="Photo" class="profile-img"></g-image>
          <h1 class="font-weight-thin d-none">Bardiz</h1>
           <h3 v-if="!mini ? $store.state.isSidebarShowed : true" class="text-uppercase">Bardizba</h3>
          <template v-if="showdesc">
            <div class="mt-3"></div>
           
            <p>
              <strong>Hello</strong>, I am Moch
              <u style="font-weight:400">Bard</u>izba Zuhallalwansyach. a Freelance
              <strong>Fullstack Web Developer</strong> from Indonesia. Most of the projects i build are using Laravel for the backend and Vue or Jquery for the Frontend. I also have interest in Cyber Security.
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

          <v-btn :x-large="large" outlined class="d-none">Hire me!</v-btn>
          <!--<hr>-->
          <template v-if="linkbawah">
            <div class="mt-10"></div>
            <div class="links">
              <g-link class="link-second" to="/">Home</g-link>
              <g-link class="link-second" to="/blog">Blog</g-link>
              <g-link class="link-second" to="/projects">Projects</g-link>
              <g-link class="link-second" to="/about#about">About</g-link>
              <g-link class="link-second" to="/contact">Contact</g-link>
              <a class="link-second" target="_blank" href="https://docs.google.com/document/d/1U2hiahqI3V-yBjoid0Xd41Mhi3JK3YYldfJ3ZWODy14/edit?usp=sharing">Resume</a>
            </div>
          </template>
          <h2></h2>
          <div class="mt-2">
            <div id="tooglerTheme" @click="goDark()">
              <template v-if="this.$vuetify.theme.dark">
                <v-icon>wb_sunny</v-icon>
                <span v-if="!mini ? $store.state.isSidebarShowed : true"> Light Mode</span> 
              </template>
              <template v-else>
                <v-icon>nights_stay</v-icon>
                 <span v-if="!mini ? $store.state.isSidebarShowed : true"> Dark Mode</span> 
              </template>
            </div>
          </div>

          <!--<div class="mt-10" v-if="!mini ? !$store.state.isSidebarShowed : false ">
            <v-btn outlined>
              <i class="fa fa-angle-double-down"></i>
            </v-btn>
          </div>
          -->
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
      this.isDarkEnabled = !this.isDarkEnabled;
      this.$vuetify.theme.dark = this.isDarkEnabled;
    },
    toggleSB(){
      this.isSidebarShowed = ! this.isSidebarShowed;
    }
  },
  mounted() {
    console.log(this.isSidebarShowed);
    //console.log(this.$isDarkEnabled);
  },
  props: ["linkbawah", "socmed", "showdesc", "large",'mini']
};
</script>

<style lang="scss">
</style>