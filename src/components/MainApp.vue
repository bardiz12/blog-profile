<template>
  <Layout>
    <v-container fluid class="pa-0 animated slideInDown">
      <div class="main-app">
        <Menuatas />
        <div v-bind:class="`kiri ${!$store.state.isSidebarShowed ? 'kiri-mini' : ''}`">
          <div
            @click="toggleSB"
            v-bind:class="`hide-menu-wrap ${!$store.state.isSidebarShowed ? '' : ''}`"
          >
            <div class="hide-menu-content">
              <i v-if="$store.state.isSidebarShowed" class="fa fa-angle-double-up"></i>
              <i v-else class="fa fa-angle-double-down"></i>
            </div>
          </div>

          <Profile :socmed="true" :class="`${!$store.state.isSidebarShowed ? 'pt-5' : ''}`"/>
        </div>
        <div v-bind:class="`kanan ${!$store.state.isSidebarShowed ? 'kanan-mini' : ''}`">
          <div class="content" v-bind:style="`${fullContent ? 'padding:0px' : ''}`">
            <slot></slot>
          </div>
        </div>
      </div>
    </v-container>
  </Layout>
</template>

<style lang="scss">
#app {
  
}
</style>
<script>
import Profile from "@/components/Profile";
import Menuatas from "@/components/Menuatas";
export default {
  props:['fullContent'],
  methods: {
    toggleSB: function() {
      console.log(this.$store.state.isSidebarShowed);
      this.$store.commit("togglesidebar");
      console.log(this.$store.state.isSidebarShowed);
    }
  },
  components: {
    Profile,
    Menuatas
  }
};
</script>