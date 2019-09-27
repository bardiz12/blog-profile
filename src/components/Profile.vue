<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs8 sm8 md9 justify-center>
        <div class="profile">
          <img src="@/assets/profile.jpg" alt="Photo" class="profile-img">
          <h1 class="font-weight-thin">Bardiz</h1>
          <template v-if="showdesc">
            <div class="mt-3"></div>
          <p>
            <strong>Hello</strong>, I'm Moch Bardizba Zuhallalwansyach. I  am a <strong>Web Developer</strong>.most of the projects i build is using Laravel for the backend and Vue or Jquery for the Frontend. and I also a Students at Semarang State University.
          </p>
          <div class="mt-10"></div>
          </template>
          
          <template v-if="socmed">
            <a href="#"><i class="fab fa-github"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
          </template>
          <!--<hr>-->
          <template v-if="linkbawah">
<div class="mt-10"></div>
          <ul class="links">
            <li>
                <g-link class="link-second" to="/blog">Blog</g-link>
            </li>
            <li><a class="link-second" href="#">My Projects</a></li>
            <li><a class="link-second"  href="#">About</a></li>
          </ul>
            </template>
          <div class="mt-2">
            <div id="tooglerTheme" @click="goDark()">
              <template v-if="this.$vuetify.theme.dark">
                <v-icon>wb_sunny</v-icon> Light Mode
              </template>
              <template v-else>
                <v-icon>nights_stay</v-icon> Dark Mode
              </template>
              </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods:{
    goDark() {
      this.$store.commit('toggleDark');
      this.$vuetify.theme.dark = this.$store.state.isDark;
    }
  },
  props:
  [
    'linkbawah','socmed','showdesc'
  ]
}
</script>

<style lang="scss">
#tooglerTheme{
  cursor: pointer;
}
</style>