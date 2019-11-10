<template>
  <MainApp>
      <div class="project-header">
        <div class="project-header--kanan">
          <h1>Under Construction:(</h1>
        </div>
        <div class="project-header--kiri">
          
        </div>
      </div>
  </MainApp>
</template>

<style lang="scss">
.menu-atas {
  //margin-top: -100px;
  &:hover{
    //margin-top:0px;
  }
}

.content{
  padding: 0px !important;
}
</style>

<script>
import MainApp from "@/components/MainApp";
export default {
  mounted() {
    if (this.$store.state.isSidebarShowed) {
      this.$store.commit("togglesidebar");
    }
  },
  components: {
    MainApp
  },
  destroyed() {
    //this.$store.commit("togglesidebar");
  }
};
</script>